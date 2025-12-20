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

function cleanGeminiJSON(rawText) {
  let cleaned = rawText.trim();
  cleaned = cleaned
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```\s*$/, "");
  return cleaned.trim();
}

export async function startInterview(req, res) {
  const { interviewId, role, company } = req.body;
  try {
    const interview = await prisma.interview.findUnique({
      where: { id: interviewId },
      include: { config: true }
    });
    if (!interview) {
      return res.status(404).json({ error: "Interview not found" });
    }

    const resume = await prisma.resume.findUnique({
      where: { configId: interview.configId }
    });

    const session = {
      interviewId,
      userId: interview.userId,
      configId: interview.configId,
      role: role || interview.config.role,
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
        prompt: firstQuestion
      }
    });

    global.interviewSessions = global.interviewSessions || {};
    global.interviewSessions[interviewId] = session;

    res.json({
      interviewId,
      question: firstQuestion,
      questionNumber: 1
    });
  } catch (error) {
    console.error("Start interview error:", error);
    res.status(500).json({ error: error.message });
  }
}

async function generateFirstQuestion(session) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
  
  const prompt = `You are starting a ${session.difficulty} difficulty ${session.type} interview for a ${session.role} position.
${session.resumeText ? `Resume Summary:\n${session.resumeText.substring(0, 500)}` : "No resume provided"}

Generate ONE opening interview question that:
1. Sets the tone for the interview
2. Allows the candidate to introduce themselves and their relevant experience
3. Is appropriate for the ${session.difficulty} difficulty level
4. Is specific to the ${session.role} role

CRITICAL: Return ONLY valid JSON with no preamble, no markdown, no explanation. Just the JSON object.

Format:
{
  "question": "Your opening question here"
}`;

  try {
    const response = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 512,
        responseMimeType: "application/json",
        responseSchema: {
          type: "object",
          properties: {
            question: { type: "string" }
          },
          required: ["question"]
        }
      }
    });
    
    const rawText = await response.response.text();
    console.log("DEBUG: Raw Gemini response:", rawText.substring(0, 200));
    
    const cleanedJSON = cleanGeminiJSON(rawText);
    const result = JSON.parse(cleanedJSON);
    return result.question;
  } catch (error) {
    console.error("Gemini first question error:", error.message);
    return `Tell me about your experience with ${session.role} development and what drew you to this role.`;
  }
}

export async function handleCandidateAnswer(req, res) {
  const { interviewId, answer } = req.body;
  try {
    if (!global.interviewSessions || !global.interviewSessions[interviewId]) {
      return res.status(404).json({ error: "Interview session not found" });
    }
    const session = global.interviewSessions[interviewId];
    
    session.answerHistory.push({
      answerId: `answer-${Date.now()}`,
      answer,
      submittedAt: Date.now()
    });
    
    let evaluation;
    try {
      evaluation = await evaluateAndGenerateNextQuestion(session, answer);
    } catch (geminiError) {
      console.error("Gemini evaluation error:", geminiError.message);
      evaluation = {
        evaluation: {
          answerQuality: 60,
          relevance: 60,
          clarity: 60,
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
    await updateInterviewScores(interviewId, evaluation);
    
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
  } catch (error) {
    console.error("Answer handling error:", error);
    res.status(500).json({ error: error.message });
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
        overall: Math.round(interview.overallScore || 60),
        content: Math.round(interview.overallScore || 60),
        confidence: Math.round(interview.overallScore || 60)
      },
      grammar: {
        score: Math.round(interview.overallScore || 60),
        mistakes: issues
          .filter((i) => i.category === "GRAMMAR")
          .map((i) => i.description),
        corrections: []
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
        user: true
      },
      orderBy: { createdAt: 'desc' }
    });

    const reports = interviews.map(interview => {
      const durationMs = interview.endedAt && interview.startedAt
        ? new Date(interview.endedAt) - new Date(interview.startedAt)
        : 0;
      
      const durationMinutes = Math.floor(durationMs / 60000);

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
          overall: Math.round(interview.overallScore || 0)
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

    const response = await axios.post(
      `https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM/stream`,
      {
        text,
        model_id: "eleven_turbo_v2_5",
        voice_settings: { 
          stability: 0.5, 
          similarity_boost: 0.75 
        }
      },
      {
        headers: {
          'xi-api-key': ELEVENLABS_API_KEY,
          'Content-Type': 'application/json'
        },
        responseType: 'stream'
      }
    );

    if (!response?.data) {
      throw new Error("No audio stream returned from ElevenLabs");
    }

    res.setHeader('Content-Type', 'audio/mpeg');
    response.data.pipe(res);

  } catch (err) {
    console.error("TTS ERROR:", err.response?.data || err.message);
    res.status(500).json({ 
      error: `Text-to-speech failed: ${err.response?.data?.detail || err.message}` 
    });
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