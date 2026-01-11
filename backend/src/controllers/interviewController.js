import { PrismaClient } from "../generated/index.js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { evaluateAndGenerateNextQuestion } from "../service/geminiService.js";
import {
  getInterviewSession,
  saveQuestionAndEvaluation,
  updateInterviewScores
} from "../models/InterviewSession.js";
import axios from 'axios';
import FormData from 'form-data';

const prisma = new PrismaClient();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
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
    // Check user credits first
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { credits: true },
    });

    if (!user || user.credits < 1) {
      return res.status(400).json({
        error: "Insufficient credits. Please purchase more credits to start an interview.",
      });
    }

    const interview = await prisma.interview.findUnique({
      where: { id: interviewId },
      include: { config: true }
    });
    if (!interview) {
      return res.status(404).json({ error: "Interview not found" });
    }

    if (interview.userId !== userId) {
      return res.status(403).json({ error: "Unauthorized access to interview" });
    }

    const resume = await prisma.resume.findUnique({
      where: { configId: interview.configId }
    });

    const session = {
      interviewId,
      userId: interview.userId,
      configId: interview.configId,
      role: interview.config.role,
      company: company || "Unknown",
      difficulty: interview.config.difficulty,
      type: interview.config.type,
      resumeText: resume?.textExtract || "",
      questionHistory: [],
      answerHistory: [],
      questionsAnswered: 0,
      totalQuestions: 5
    };

    const firstQuestion = await generateFirstQuestion(session);

    await prisma.question.create({
      data: {
        interviewId,
        prompt: firstQuestion,
        evaluation: {
          answerQuality: 0,
          relevance: 0,
          clarity: 0,
          completeness: 0,
          technicalDepth: 0
        },
        scoreAverage: 0
      }
    });

    global.interviewSessions = global.interviewSessions || {};
    global.interviewSessions[interviewId] = session;

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { credits: { decrement: 1 } },
      select: { credits: true }
    });

    res.json({
      interviewId,
      question: firstQuestion,
      questionNumber: 1,
      credits: updatedUser.credits
    });
  } catch (error) {
    console.error("Start interview error:", error);
    res.status(500).json({ error: error.message });
  }
}

async function generateFirstQuestion(session) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = `You are starting a ${session.difficulty} difficulty ${session.type} interview for a ${session.role} position.

Generate ONE opening interview question.
Return ONLY valid JSON:
{
  "question": "Your opening question"
}`;

  async function attempt() {
    const response = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.6,
        maxOutputTokens: 256,
        responseMimeType: "application/json"
      }
    });

    const rawText = await response.response.text();
    console.log("DEBUG: Raw Gemini response:", rawText);

    return JSON.parse(rawText);
  }

  try {
    const result = await attempt();
    if (result?.question) return result.question;
    throw new Error("Missing question");
  } catch (err) {
    console.warn("Retrying first question generation...");
    try {
      const result = await attempt();
      if (result?.question) return result.question;
      throw new Error("Retry failed");
    } catch (err2) {
      console.error("Gemini failed twice, using fallback");
      return `Tell me about your experience with ${session.role} development and what drew you to this role.`;
    }
  }
}

export async function handleCandidateAnswer(req, res) {
  const { interviewId, answer } = req.body;

  const rawAnswer = answer;                // REAL interview
  const cleanedAnswer = cleanForEvaluation(answer); // LLM-safe

  try {
    if (!global.interviewSessions || !global.interviewSessions[interviewId]) {
      return res.status(404).json({ error: "Interview session not found" });
    }
    const session = global.interviewSessions[interviewId];

    session.answerHistory.push({
      answerId: `answer-${Date.now()}`,
      rawAnswer,
      cleanedAnswer,
      submittedAt: Date.now()
    });

    let evaluation;
    try {
      evaluation = await evaluateAndGenerateNextQuestion(session, cleanedAnswer);
    } catch (geminiError) {
      console.error("Gemini evaluation error:", geminiError.message);
      evaluation = {
        evaluation: {
          answerQuality: 60,
          relevance: 65,
          clarity: 70,
          completeness: 60,
          technicalDepth: 60
        },
        detectedIssues: [],
        nextQuestion: "Can you provide more details about what you just mentioned?",
        followUpCategory: "TECHNICAL",
        questionRationale: "Fallback follow-up"
      };
    }

    await saveQuestionAndEvaluation(interviewId, evaluation.nextQuestion, evaluation);

    session.questionHistory.push({
      questionId: `q-${Date.now()}`,
      question: evaluation.nextQuestion,
      askedAt: Date.now(),
      category: evaluation.followUpCategory
    });
    session.questionsAnswered++;

    const isComplete = session.questionsAnswered >= session.totalQuestions;

    res.json({
      evaluation,
      nextQuestion: evaluation.nextQuestion,
      questionNumber: session.questionsAnswered + 1,
      done: isComplete,
      message: isComplete
        ? "Interview complete! Click 'Generate Report' for analysis."
        : null
    });
    } catch (geminiError) {
    const isRateLimit = geminiError.message === "GEMINI_RATE_LIMIT";

    console.error(
      isRateLimit
        ? "Gemini quota exhausted — falling back"
        : "Gemini evaluation error:",
      geminiError.message
    );

    evaluation = {
      evaluation: {
        answerQuality: 70,
        relevance: 90,
        clarity: 65,
        completeness: 60,
        technicalDepth: 70
      },
      detectedIssues: [],
      nextQuestion: generateFallbackQuestion(session),
      followUpCategory: "GENERAL",
      questionRationale: isRateLimit
        ? "AI quota exhausted — fallback interview flow"
        : "Fallback due to evaluation error"
    };
  }
}
export async function generateReport(req, res) {
  const { id: interviewId } = req.params;

  try {
    const interview = await prisma.interview.findUnique({
      where: { id: interviewId },
      include: {
        config: true,
        user: true,
        issues: true,
        questions: true
      }
    });

    if (!interview) {
      return res.status(404).json({ error: "Interview not found" });
    }

    const issues = interview.issues || [];

    function average(arr) {
    return arr.length ? Math.round(arr.reduce((a, b) => a + b, 0) / arr.length) : 60;
  }

  const questionScores = interview.questions
    .filter(q => typeof q.scoreAverage === "number" && q.scoreAverage > 0);

  const technicalScores = questionScores.map(q => q.evaluation?.technicalDepth || 60);
  const clarityScores = questionScores.map(q => q.evaluation?.clarity || 60);
  const relevanceScores = questionScores.map(q => q.evaluation?.relevance || 60);

    const scoredQuestions = interview.questions.filter(
      q => typeof q.scoreAverage === "number" && q.scoreAverage > 0
    );

    const overallScore =
      scoredQuestions.length > 0
        ? Math.round(
            scoredQuestions.reduce((sum, q) => sum + q.scoreAverage, 0) /
            scoredQuestions.length
          )
        : 60;


    const report = {
      interviewId,
      candidate: {
        name: interview.user.name,
        role: interview.config.role
      },
      interview: {
        date: interview.createdAt,
        duration: interview.endedAt && interview.startedAt
          ? Math.floor((new Date(interview.endedAt) - new Date(interview.startedAt)) / 60000)
          : 0,
        type: interview.config.type
      },
      ratings: {
        overall: overallScore,
        content: average(relevanceScores),
        confidence: average(clarityScores)
      },
      grammar: {
        score: average(
          interview.issues
            .filter(i => i.category === "GRAMMAR")
            .map(() => 70)
        )
      },
      emotions: [
        { emotion: "Confident", percentage: 60 },
        { emotion: "Thoughtful", percentage: 40 }
      ],
      flagged: issues.map((i) => ({
        category: i.category,
        description: i.description,
        severity: i.severity
      })),
      recommendation: {
        strengths: ["Clear communication", "Technical knowledge"],
        areasToImprove: issues.length > 0 
          ? issues.map(i => i.description).slice(0, 3)
          : ["Continue practicing", "Maintain consistency"],
        actionableTips: ["Practice speaking clearly", "Prepare examples", "Review technical concepts"]
      }
    };

    res.json(report);
  } catch (error) {
    console.error("Report generation error:", error);
    res.status(500).json({ error: error.message });
  }
}

export async function getAllReports(req, res) {
  try {
    const userId = req.user.userId;
    const interviews = await prisma.interview.findMany({
      where: { userId },
      include: {
        config: true,
        user: true,
        questions: true
      },
      orderBy: { createdAt: 'desc' }
    });

    const reports = interviews.map(interview => {
      const durationMs = interview.endedAt && interview.startedAt
        ? new Date(interview.endedAt) - new Date(interview.startedAt)
        : 0;

      const durationMinutes = Math.floor(durationMs / 60000);
      const questionScores = interview.questions
  .filter(q => typeof q.scoreAverage === "number" && q.scoreAverage > 0);

const overall =
  questionScores.length > 0
    ? Math.round(
        questionScores.reduce((sum, q) => sum + q.scoreAverage, 0) /
        questionScores.length
      )
    : 60;

      return {
        id: interview.id,
        candidate: {
          name: interview.user.name,
          role: interview.config.role
        },
        interview: {
          date: interview.createdAt,
          duration: durationMinutes,
          type: interview.config.type
        },
        ratings: {
          overall
        },
        issuesCount: 0
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
    if (!ELEVENLABS_API_KEY) {
      return res.status(500).json({ error: "ElevenLabs API key not configured" });
    }

    const file = req.file;
    if (!file) {
      return res.status(400).json({ error: "No audio file provided" });
    }

    const formData = new FormData();
    formData.append('file', file.buffer, {
      filename: file.originalname,
      contentType: file.mimetype
    });
    formData.append('model_id', 'scribe_v2');

    const response = await axios.post(
      'https://api.elevenlabs.io/v1/speech-to-text',
      formData,
      {
        headers: {
          ...formData.getHeaders(),
          'xi-api-key': ELEVENLABS_API_KEY,
        }
      }
    );

    console.log("STT STATUS:", response.status);
    console.log("STT RESPONSE:", response.data);

    const transcript = response.data.text || "";
    res.json({ transcript });
  } catch (err) {
    console.error("STT ERROR:", err.response?.data || err.message);
    res.status(500).json({ 
      error: `Speech-to-text failed: ${err.response?.data?.detail?.message || err.message}` 
    });
  }
};

export const speakText = async (req, res) => {
  try {
    if (!ELEVENLABS_API_KEY) {
      return res.status(500).json({ error: "ElevenLabs API key not configured" });
    }

    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: "No text provided" });
    }

    const VOICE_ID = process.env.ELEVENLABS_VOICE_ID;
    if (!VOICE_ID) {
      return res.status(500).json({ error: "ElevenLabs voice ID not configured" });
    }

    const response = await axios.post(
      `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
      {
        text,
        model_id: "eleven_multilingual_v2",
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75
        }
      },
      {
        headers: {
          "xi-api-key": ELEVENLABS_API_KEY,
          "Content-Type": "application/json"
        },
        responseType: "arraybuffer"
      }
    );

    res.setHeader("Content-Type", "audio/mpeg");
    res.send(Buffer.from(response.data));

  } catch (err) {
    console.error(
      "TTS ERROR:",
      err.response?.data?.toString() || err.message
    );
    res.status(500).json({ error: "Text-to-speech failed" });
  }
};

export async function updateInterviewStatus(req, res) {
  try {
    const { interviewId, status } = req.body;
    const validStatuses = ['PENDING', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED'];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    const interview = await prisma.interview.update({
      where: { id: interviewId },
      data: {
        status,
        ...(status === 'IN_PROGRESS' && { startedAt: new Date() }),
        ...(status === 'COMPLETED' && { endedAt: new Date() })
      }
    });

    res.json({ success: true, interview });
  } catch (err) {
    console.error('Status update error:', err);
    res.status(500).json({ error: 'Failed to update status' });
  }
}