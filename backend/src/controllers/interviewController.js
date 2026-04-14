import { PrismaClient } from "../generated/index.js";
import Groq from "groq-sdk";
import {
  getInterviewSession,
  saveQuestionAndEvaluation,
  updateInterviewScores,
  deserializeIssueDescription,
} from "../models/InterviewSession.js";
import axios from "axios";
import FormData from "form-data";
import { evaluateAndGenerateNextQuestion } from "../service/geminiService.js";
import { evaluateTechnical }  from "../service/evaluators/technical.js";
import { evaluateVocal }      from "../service/evaluators/vocal.js";
import { evaluateLinguistic } from "../service/evaluators/linguistic.js";
import { aggregateScores }    from "../service/aggregator.js";

const prisma = new PrismaClient();
const groq   = new Groq({ apiKey: process.env.GROQ_API_KEY });
const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;

function cleanForEvaluation(text) {
  return text
    .replace(/\b(uh+|um+|umm+|actually|you know|like)\b/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

export async function startInterview(req, res) {
  const { interviewId, role, company } = req.body;
  const userId = req.user?.userId;
  try {
    const user = await prisma.user.findUnique({ where: { id: userId }, select: { credits: true } });
    if (!user || user.credits < 1)
      return res.status(400).json({ error: "Insufficient credits." });

    const interview = await prisma.interview.findUnique({ where: { id: interviewId }, include: { config: true } });
    if (!interview) return res.status(404).json({ error: "Interview not found" });
    if (interview.userId !== userId) return res.status(403).json({ error: "Unauthorized" });

    const resume = await prisma.resume.findUnique({ where: { configId: interview.configId } });

    const session = {
      interviewId, userId: interview.userId, configId: interview.configId,
      role: interview.config.role, company: company || "Unknown",
      difficulty: interview.config.difficulty, type: interview.config.type,
      resumeText: resume?.textExtract || "",
      questionHistory: [], answerHistory: [], questionsAnswered: 0, totalQuestions: 5,
    };

    const firstQuestion = await generateFirstQuestion(session);
    await prisma.question.create({
      data: { interviewId, prompt: firstQuestion,
        evaluation: { answerQuality: 0, relevance: 0, clarity: 0, completeness: 0, technicalDepth: 0 },
        scoreAverage: 0 },
    });

    global.interviewSessions = global.interviewSessions || {};
    global.interviewSessions[interviewId] = session;

    const updatedUser = await prisma.user.update({
      where: { id: userId }, data: { credits: { decrement: 1 } }, select: { credits: true },
    });
    res.json({ interviewId, question: firstQuestion, questionNumber: 1, credits: updatedUser.credits });
  } catch (error) {
    console.error("Start interview error:", error);
    res.status(500).json({ error: error.message });
  }
}

async function generateFirstQuestion(session) {
  const prompt = `You are starting a ${session.difficulty} difficulty ${session.type} interview for a ${session.role} position.
Generate ONE opening interview question.
Return ONLY valid JSON with no markdown, no extra text:
{"question": "Your opening question here"}`;

  async function attempt() {
    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: "You are an expert technical interviewer. Respond with valid JSON only. No markdown." },
        { role: "user", content: prompt },
      ],
      temperature: 0.6, max_tokens: 256,
    });
    const rawText = response.choices[0].message.content.replace(/```json/gi,"").replace(/```/g,"").trim();
    return JSON.parse(rawText);
  }

  try {
    const result = await attempt();
    if (result?.question) return result.question;
    throw new Error("Missing question field");
  } catch (err) {
    console.warn("Retrying first question generation...", err.message);
    try {
      const result = await attempt();
      if (result?.question) return result.question;
    } catch {}
    return `Tell me about your experience with ${session.role} development and what drew you to this role.`;
  }
}

export async function handleCandidateAnswer(req, res) {
  const { interviewId, answer } = req.body;
  const rawAnswer = answer;
  const cleanedAnswer = cleanForEvaluation(answer);
  let evaluation;

  try {
    if (!global.interviewSessions?.[interviewId])
      return res.status(404).json({ error: "Interview session not found" });

    const session = global.interviewSessions[interviewId];
    session.answerHistory.push({ answerId: `answer-${Date.now()}`, rawAnswer, cleanedAnswer, submittedAt: Date.now() });

    try {
      evaluation = await evaluateAndGenerateNextQuestion(session, cleanedAnswer);
    } catch (groqError) {
      console.error("Groq evaluation error:", groqError.message);
      evaluation = {
        evaluation: { answerQuality: 60, relevance: 65, clarity: 70, completeness: 60, technicalDepth: 60 },
        detectedIssues: [],
        nextQuestion: "Can you provide more details about what you just mentioned?",
        followUpCategory: "TECHNICAL", questionRationale: "Fallback follow-up",
      };
    }

    await saveQuestionAndEvaluation(interviewId, evaluation.nextQuestion, evaluation);
    session.questionHistory.push({ questionId: `q-${Date.now()}`, question: evaluation.nextQuestion, askedAt: Date.now(), category: evaluation.followUpCategory });
    session.questionsAnswered++;

    const isComplete = session.questionsAnswered >= session.totalQuestions;
    res.json({ evaluation, nextQuestion: evaluation.nextQuestion, questionNumber: session.questionsAnswered + 1,
      done: isComplete, message: isComplete ? "Interview complete! Click 'Generate Report' for analysis." : null });
  } catch (err) {
    const isRateLimit = err.message === "GEMINI_RATE_LIMIT";
    evaluation = {
      evaluation: { answerQuality: 70, relevance: 90, clarity: 65, completeness: 60, technicalDepth: 70 },
      detectedIssues: [],
      nextQuestion: generateFallbackQuestion(global.interviewSessions?.[interviewId]),
      followUpCategory: "GENERAL",
      questionRationale: isRateLimit ? "AI quota exhausted" : "Fallback due to evaluation error",
    };
    res.json({ evaluation, nextQuestion: evaluation.nextQuestion,
      questionNumber: (global.interviewSessions?.[interviewId]?.questionsAnswered ?? 0) + 2,
      done: false, message: null });
  }
}

function generateFallbackQuestion(session) {
  const n = session?.questionsAnswered ?? 0;
  if (n === 0) return "Can you walk me through a recent project you worked on?";
  if (n === 1) return "What was the reasoning behind one of the technical decisions you mentioned?";
  if (n === 2) return "What challenges did you face and how did you overcome them?";
  if (n === 3) return "How would you improve the approach if you had more time?";
  return "Can you give a concrete example from your experience to support that point?";
}

// ─────────────────────────────────────────────────────────────────────────────
// generateReport — with full verbose error logging
// ─────────────────────────────────────────────────────────────────────────────
export async function generateReport(req, res) {
  const { id: interviewId } = req.params;
  console.log(`\n[generateReport] Called for interviewId: ${interviewId}`);

  try {
    const interview = await prisma.interview.findUnique({
      where:   { id: interviewId },
      include: { config: true, user: true, issues: true, questions: true },
    });

    if (!interview) {
      console.error("[generateReport] Interview not found:", interviewId);
      return res.status(404).json({ error: "Interview not found" });
    }

    console.log(`[generateReport] Found interview. questions=${interview.questions.length} issues=${interview.issues.length}`);

    // ── 1. Score averages ────────────────────────────────────────────────────
    const scoredQuestions = interview.questions.filter(
      (q) => typeof q.scoreAverage === "number" && q.scoreAverage > 0
    );
    console.log(`[generateReport] Scored questions: ${scoredQuestions.length}`);

    function avgDimension(key) {
      if (!scoredQuestions.length) return 60;
      const vals = scoredQuestions.map((q) => {
        const v = q.evaluation?.[key];
        return typeof v === "number" ? v : 60;
      });
      return Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
    }

    const avgAnswerQuality  = avgDimension("answerQuality");
    const avgRelevance      = avgDimension("relevance");
    const avgClarity        = avgDimension("clarity");
    const avgCompleteness   = avgDimension("completeness");
    const avgTechnicalDepth = avgDimension("technicalDepth");

    const overallScore = scoredQuestions.length > 0
      ? Math.round(scoredQuestions.reduce((s, q) => s + q.scoreAverage, 0) / scoredQuestions.length)
      : 60;

    console.log(`[generateReport] Scores — overall:${overallScore} relevance:${avgRelevance} clarity:${avgClarity} technical:${avgTechnicalDepth}`);

    // ── 2. Flagged issues ────────────────────────────────────────────────────
    const flagged = interview.issues
      .slice(0, 5)
      .map((issue) => {
        const { text, example, suggestion } = deserializeIssueDescription(issue.description);
        const entry = { category: issue.category, severity: issue.severity, explanation: text };
        if (example)    entry.mistake    = example;
        if (suggestion) entry.correction = suggestion;
        return entry;
      })
      .filter((issue) => issue.explanation && issue.explanation.length > 3);

    console.log(`[generateReport] Flagged issues after processing: ${flagged.length}`);

    // ── 3. Dynamic recommendations ───────────────────────────────────────────
    const strengths = [], areasToImprove = [], actionableTips = [];

    if (avgRelevance      >= 75) strengths.push("Answers stayed on-topic and addressed questions directly");
    if (avgClarity        >= 75) strengths.push("Communicated ideas clearly and concisely");
    if (avgTechnicalDepth >= 75) strengths.push("Demonstrated solid technical depth");
    if (avgCompleteness   >= 75) strengths.push("Provided thorough and complete responses");
    if (avgAnswerQuality  >= 75) strengths.push("High overall answer quality");
    if (!strengths.length)       strengths.push("Showed willingness to engage with challenging questions");

    if (avgClarity        < 70) { areasToImprove.push("Improve clarity — structure answers with a clear opening, body, and conclusion"); actionableTips.push("Use the STAR method to keep answers structured"); }
    if (avgRelevance      < 70) { areasToImprove.push("Stay more focused on what the question is actually asking"); actionableTips.push("Before answering, pause and repeat the question internally"); }
    if (avgTechnicalDepth < 70) { areasToImprove.push("Strengthen technical explanations — include specifics, not just high-level concepts"); actionableTips.push("Practice explaining technical topics aloud as if teaching someone unfamiliar"); }
    if (avgCompleteness   < 70) { areasToImprove.push("Answers sometimes lacked completeness — cover edge cases and trade-offs"); actionableTips.push("After each answer, ask yourself: 'Did I explain the why, not just the what?'"); }
    if (avgAnswerQuality  < 70) { areasToImprove.push("Overall answer quality needs improvement — use concrete examples"); actionableTips.push("Prepare 3–5 real scenarios from past experience"); }

    if (interview.issues.some(i => i.category === "FILLER_WORDS")) {
      areasToImprove.push("Reduce filler words (um, uh, like) for a more confident delivery");
      actionableTips.push("Record yourself answering practice questions and count filler words per minute");
    }
    if (interview.issues.some(i => i.category === "GRAMMAR"))
      areasToImprove.push("Watch grammar under pressure — slow down to form complete sentences");
    if (interview.issues.some(i => i.category === "CONFIDENCE")) {
      areasToImprove.push("Project more confidence — avoid hedging language like 'I think maybe'");
      actionableTips.push("Practise with a mock interviewer or record video responses to build comfort");
    }

    if (!areasToImprove.length) areasToImprove.push("Keep practising to maintain your strong performance");
    if (!actionableTips.length) actionableTips.push("Continue doing mock interviews regularly to stay sharp");

    // ── 4. Duration & grammar score ──────────────────────────────────────────
    const durationMinutes = interview.endedAt && interview.startedAt
      ? Math.floor((new Date(interview.endedAt) - new Date(interview.startedAt)) / 60000)
      : 0;

    const grammarIssueCount = interview.issues.filter(i => i.category === "GRAMMAR").length;
    const grammarScore      = grammarIssueCount === 0 ? 90 : grammarIssueCount === 1 ? 70 : 50;

    // ── 5. Build and send report ─────────────────────────────────────────────
    const report = {
      interviewId,
      candidate: { name: interview.user.name, role: interview.config.role },
      interview: { date: interview.createdAt, duration: durationMinutes, type: interview.config.type },
      ratings:   { overall: overallScore, content: avgRelevance, confidence: avgClarity },
      scores:    { answerQuality: avgAnswerQuality, relevance: avgRelevance, clarity: avgClarity, completeness: avgCompleteness, technicalDepth: avgTechnicalDepth },
      grammar:   { score: grammarScore },
      flagged,
      recommendation: { strengths, areasToImprove, actionableTips },
    };

    console.log(`[generateReport] ✅ Sending report — overallScore:${overallScore}`);
    res.json(report);

  } catch (error) {
    console.error("[generateReport] ❌ CRASH:", error.message);
    console.error(error.stack);
    res.status(500).json({ error: error.message });
  }
}

export async function getAllReports(req, res) {
  try {
    const userId    = req.user.userId;
    const interviews = await prisma.interview.findMany({
      where: { userId }, include: { config: true, user: true, questions: true }, orderBy: { createdAt: "desc" },
    });

    const reports = interviews.map((interview) => {
      const durationMs = interview.endedAt && interview.startedAt
        ? new Date(interview.endedAt) - new Date(interview.startedAt) : 0;
      const questionScores = interview.questions.filter(q => typeof q.scoreAverage === "number" && q.scoreAverage > 0);
      const overall = questionScores.length > 0
        ? Math.round(questionScores.reduce((sum, q) => sum + q.scoreAverage, 0) / questionScores.length) : 60;
      return {
        id: interview.id,
        candidate: { name: interview.user.name, role: interview.config.role },
        interview:  { date: interview.createdAt, duration: Math.floor(durationMs / 60000), type: interview.config.type },
        ratings:    { overall }, issuesCount: 0,
      };
    });
    res.json({ reports });
  } catch (error) {
    console.error("Get reports error:", error);
    res.status(500).json({ error: error.message });
  }
}

export const transcribeAudio = async (req, res) => {
  try {
    if (!ELEVENLABS_API_KEY) return res.status(500).json({ error: "ElevenLabs API key not configured" });
    const file = req.file;
    if (!file) return res.status(400).json({ error: "No audio file provided" });

    const formData = new FormData();
    formData.append("file", file.buffer, { filename: file.originalname, contentType: file.mimetype });
    formData.append("model_id", "scribe_v2");

    const response = await axios.post("https://api.elevenlabs.io/v1/speech-to-text", formData,
      { headers: { ...formData.getHeaders(), "xi-api-key": ELEVENLABS_API_KEY } });

    res.json({ transcript: response.data.text || "" });
  } catch (err) {
    console.error("STT ERROR:", err.response?.data || err.message);
    res.status(500).json({ error: `Speech-to-text failed: ${err.response?.data?.detail?.message || err.message}` });
  }
};

export const speakText = async (req, res) => {
  try {
    if (!ELEVENLABS_API_KEY) return res.status(500).json({ error: "ElevenLabs API key not configured" });
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: "No text provided" });

    const VOICE_ID = process.env.ELEVENLABS_VOICE_ID || process.env.ELEVENLABS_VOICE_ID_II;
    if (!VOICE_ID) return res.status(500).json({ error: "ElevenLabs voice ID not configured" });

    const response = await axios.post(
      `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
      { text, model_id: "eleven_multilingual_v2", voice_settings: { stability: 0.75, similarity_boost: 0.75 } },
      { headers: { "xi-api-key": ELEVENLABS_API_KEY, "Content-Type": "application/json" }, responseType: "arraybuffer" }
    );
    res.setHeader("Content-Type", "audio/mpeg");
    res.send(Buffer.from(response.data));
  } catch (err) {
    console.error("TTS ERROR:", err.response?.data?.toString() || err.message);
    res.status(500).json({ error: "Text-to-speech failed" });
  }
};

export async function updateInterviewStatus(req, res) {
  try {
    const { interviewId, status } = req.body;
    const validStatuses = ["PENDING", "IN_PROGRESS", "COMPLETED", "CANCELLED"];
    if (!validStatuses.includes(status)) return res.status(400).json({ error: "Invalid status" });

    const interview = await prisma.interview.update({
      where: { id: interviewId },
      data:  { status,
        ...(status === "IN_PROGRESS" && { startedAt: new Date() }),
        ...(status === "COMPLETED"   && { endedAt:   new Date() }) },
    });
    res.json({ success: true, interview });
  } catch (err) {
    console.error("Status update error:", err);
    res.status(500).json({ error: "Failed to update status" });
  }
}