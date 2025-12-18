import { PrismaClient } from "../generated/index.js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from "axios";
import FormData from "form-data";
import { generateFirstQuestion, generateFollowUpQuestion } from "../utils/questionGenerator.js";

const prisma = new PrismaClient();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;

// ---------------- START INTERVIEW ----------------
export const startInterview = async (req, res) => {
  try {
    const { interviewId, role, company } = req.body;
    const userId = req.user.userId;

    if (!interviewId) {
      return res.status(400).json({ error: "interviewId is required" });
    }

    const interview = await prisma.interview.findUnique({
      where: { id: interviewId },
      include: {
        config: {
          include: { resume: true }
        }
      }
    });

    if (!interview || interview.userId !== userId) {
      return res.status(404).json({ error: "Interview not found" });
    }

    if (interview.status !== "PENDING" && interview.status !== "IN_PROGRESS") {
      return res.status(403).json({ error: "Interview cannot be started" });
    }

    if (!interview.startedAt) {
      await prisma.interview.update({
        where: { id: interviewId },
        data: { status: "IN_PROGRESS", startedAt: new Date() }
      });
    }

    const resumeContext = interview.config.resume?.parsedJson || null;

    const questionText = await generateFirstQuestion({
      role: role || interview.config.role,
      company,
      skills: interview.config.skills,
      resumeContext
    });

    await prisma.question.create({
      data: {
        interviewId,
        prompt: questionText
      }
    });

    await prisma.transcript.create({
      data: {
        interviewId,
        speaker: "interviewer",
        text: questionText
      }
    });

    res.json({
      interviewId,
      question: questionText
    });

  } catch (err) {
    console.error("startInterview error:", err);
    res.status(500).json({ error: "Failed to start interview" });
  }
};

// ---------------- ANSWER QUESTION ----------------
export const answerQuestion = async (req, res) => {
  try {
    const { interviewId, question, answer } = req.body;
    const userId = req.user.userId;

    const interview = await prisma.interview.findFirst({
      where: { id: interviewId, userId },
      include: {
        config: { include: { resume: true } },
        questions: true
      }
    });

    if (!interview) {
      return res.status(404).json({ error: "Interview not found" });
    }

    const cheapAnalysis = {
      emotion: "neutral",
      confidence: Math.min(100, Math.max(40, answer.split(" ").length * 2)),
      grammarScore: 70,
      relevanceScore: 70
    };

    let turn;
    try {
      turn = await generateFollowUpQuestion({
        role: interview.config.role,
        skills: interview.config.skills,
        resumeContext: interview.config.resume?.parsedJson,
        previousQuestion: question,
        answer
      });
    } catch (err) {
      console.warn("Gemini failed, using fallback");
      turn = {
        done: false,
        analysis: cheapAnalysis,
        nextQuestion:
          "Can you walk me through a challenging problem you solved recently?"
      };
    }

    // Save transcript
    await prisma.transcript.create({
      data: {
        interviewId,
        speaker: "candidate",
        text: answer,
        tokensJson: turn.analysis
      }
    });

    await prisma.transcript.create({
      data: {
        interviewId,
        speaker: "interviewer",
        text: turn.nextQuestion
      }
    });

    if (turn.done) {
      await prisma.interview.update({
        where: { id: interviewId },
        data: { status: "COMPLETED", endedAt: new Date() }
      });

      return res.json({
        done: true,
        message: "Interview completed. Generate your report."
      });
    }

    await prisma.question.create({
      data: {
        interviewId,
        prompt: turn.nextQuestion
      }
    });

    res.json({
      done: false,
      next_question: turn.nextQuestion
    });
  } catch (err) {
    console.error("Answer error:", err);
    res.status(500).json({ error: "Failed to process answer" });
  }
};

// Make sure this helper exists and has proper error handling
async function analyzeVoiceEmotionAndGrammar(text, context = "") {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const prompt = `Analyze this response for emotion and grammar:
Context: ${context}
Response: ${text}

Return only JSON:
{
  "emotion": "confident/nervous/calm/etc",
  "confidence_level": 75,
  "grammar": {"score": 80, "mistakes": [], "corrections": []},
  "relevance": {"score": 85, "feedback": "brief"}
}`;

    const result = await model.generateContent(prompt);
    const cleaned = result.response.text().replace(/```json|```/g, "").trim();
    return JSON.parse(cleaned);
  } catch (err) {
    console.error("Analysis error:", err);
    throw err; // Re-throw to let caller handle it
  }
}

// ---------------- TRANSCRIBE AUDIO ----------------
export const transcribeAudio = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: "No audio file provided" });
    }

    const formData = new FormData();
    formData.append('file', file.buffer, {
      filename: file.originalname,
      contentType: file.mimetype
    });
    formData.append('model_id', 'scribe_v1');

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

    console.log("STATUS:", response.status);
    console.log("RESPONSE:", response.data);

    res.json({ transcript: response.data.text || "" });
  } catch (err) {
    console.error("EXCEPTION:", err);
    res.status(500).json({ error: `STT error: ${err.message}` });
  }
};

// ---------------- TEXT TO SPEECH ----------------
export const speakText = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: "No text provided" });
    }

    const response = await axios.post(
      'https://api.elevenlabs.io/v1/text-to-speech/Aa6nEBJJMKJwJkCx8VU2/stream',
      {
        text,
        model_id: "eleven_turbo_v2",
        voice_settings: {
          stability: 0.7,
          similarity_boost: 0.7
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

    res.setHeader('Content-Type', 'audio/mpeg');
    response.data.pipe(res);
  } catch (err) {
    console.error("TTS error:", err);
    res.status(500).json({ error: `TTS error: ${err.message}` });
  }
};

// ---------------- GENERATE REPORT ----------------
export const generateReport = async (req, res) => {
  try {
    const { interviewId } = req.params;
    const userId = req.user.userId;

    // Check if report already exists
    const existingReport = await prisma.analysisReport.findUnique({
      where: { interviewId },
      include: {
        perCategory: true,
        interview: {
          include: {
            user: true,
            config: true
          }
        }
      }
    });

    if (existingReport && existingReport.interview.userId === userId) {
      return res.json(formatReportResponse(existingReport));
    }

    // Get interview with all related data
    const interview = await prisma.interview.findFirst({
      where: {
        id: interviewId,
        userId
      },
      include: {
        user: true,
        config: true,
        transcripts: {
          orderBy: { createdAt: 'asc' }
        },
        issues: true,
        questions: true
      }
    });

    if (!interview) {
      return res.status(404).json({ error: "Interview not found." });
    }

    if (interview.status !== "COMPLETED") {
      return res.status(400).json({ error: "Interview is not yet completed." });
    }

    // Separate candidate and interviewer transcripts
    const candidateResponses = interview.transcripts.filter(t => t.speaker === "candidate");
    const interviewerQuestions = interview.transcripts.filter(t => t.speaker === "interviewer");

    // Calculate scores from transcript tokens
    const grammarScores = candidateResponses
      .map(r => r.tokensJson?.grammarScore)
      .filter(s => s != null);
    const relevanceScores = candidateResponses
      .map(r => r.tokensJson?.relevanceScore)
      .filter(s => s != null);
    const confidenceScores = candidateResponses
      .map(r => r.tokensJson?.confidence)
      .filter(s => s != null);

    const avgGrammar = grammarScores.length > 0
      ? grammarScores.reduce((a, b) => a + b, 0) / grammarScores.length
      : 70;
    const avgRelevance = relevanceScores.length > 0
      ? relevanceScores.reduce((a, b) => a + b, 0) / relevanceScores.length
      : 70;
    const avgConfidence = confidenceScores.length > 0
      ? confidenceScores.reduce((a, b) => a + b, 0) / confidenceScores.length
      : 70;

    // Count emotions
    const emotionCounts = {};
    candidateResponses.forEach(response => {
      const emotion = response.tokensJson?.emotion || "neutral";
      emotionCounts[emotion] = (emotionCounts[emotion] || 0) + 1;
    });

    const dominantEmotion = Object.keys(emotionCounts).length > 0
      ? Object.entries(emotionCounts).sort((a, b) => b[1] - a[1])[0][0]
      : "neutral";

    // Collect grammar issues
    const grammarIssues = interview.issues.filter(i => i.category === "GRAMMAR");
    const communicationIssues = interview.issues.filter(i => i.category === "COMMUNICATION");

    // Calculate overall score
    const technicalScore = avgRelevance;
    const communicationScore = avgGrammar;
    const confidenceScore = avgConfidence;
    const overallScore = (technicalScore + communicationScore + confidenceScore) / 3;

    // Calculate total emotion count for percentages
    const totalEmotionCount = Object.values(emotionCounts).reduce((a, b) => a + b, 0) || 1;

    // Build recommendations
    const strengths = [];
    const areasToImprove = [];

    if (avgGrammar > 80) strengths.push("Clear communication");
    if (grammarIssues.length < 5) strengths.push("Good vocabulary usage");
    if (avgRelevance > 70) strengths.push("Relevant responses");
    if (avgConfidence > 75) strengths.push("Confident delivery");

    if (avgGrammar < 70) areasToImprove.push("Grammar accuracy");
    if (avgRelevance < 70) areasToImprove.push("Answer relevance");
    if (["nervous", "uncertain"].includes(dominantEmotion)) areasToImprove.push("Response confidence");
    if (grammarIssues.length > 10) areasToImprove.push("Language proficiency");

    const recommendations = {
      strengths: strengths.length > 0 ? strengths : ["Completed the interview"],
      areasToImprove: areasToImprove.length > 0 ? areasToImprove : ["Continue practicing"],
      actionableTips: [
        "Practice speaking slowly and clearly",
        "Review basic grammar rules",
        "Prepare specific examples using STAR method",
        "Record yourself practicing answers"
      ]
    };

    // Create analysis report
    const report = await prisma.analysisReport.create({
      data: {
        interviewId,
        overallScore,
        metrics: {
          totalQuestions: interview.questions.length,
          totalResponses: candidateResponses.length,
          avgResponseTime: null, // Could calculate if timestamps available
          emotionBreakdown: emotionCounts,
          dominantEmotion,
          issuesCount: interview.issues.length
        },
        recommendations,
        perCategory: {
          create: [
            {
              category: "COMMUNICATION",
              score: communicationScore,
              details: {
                grammarScore: avgGrammar,
                mistakes: grammarIssues.map(i => i.description).slice(0, 10)
              }
            },
            {
              category: "TECHNICAL",
              score: technicalScore,
              details: {
                relevanceScore: avgRelevance,
                flaggedResponses: communicationIssues.length
              }
            },
            {
              category: "CONFIDENCE",
              score: confidenceScore,
              details: {
                avgConfidence,
                emotionBreakdown: emotionCounts
              }
            },
            {
              category: "EMOTIONAL",
              score: avgConfidence,
              details: {
                emotions: Object.entries(emotionCounts).map(([emotion, count]) => ({
                  emotion,
                  count,
                  percentage: parseFloat(((count / totalEmotionCount) * 100).toFixed(1))
                })),
                dominantEmotion
              }
            }
          ]
        }
      },
      include: {
        perCategory: true,
        interview: {
          include: {
            user: true,
            config: true
          }
        }
      }
    });

    // Update interview with overall score
    await prisma.interview.update({
      where: { id: interviewId },
      data: { overallScore }
    });

    res.json(formatReportResponse(report));
  } catch (err) {
    console.error("Generate report error:", err);
    res.status(500).json({ error: err.message });
  }
};

// Helper function to format report response
function formatReportResponse(report) {
  const interview = report.interview;
  const metrics = report.metrics;
  
  const commCategory = report.perCategory.find(c => c.category === "COMMUNICATION");
  const techCategory = report.perCategory.find(c => c.category === "TECHNICAL");
  const confCategory = report.perCategory.find(c => c.category === "CONFIDENCE");
  const emotCategory = report.perCategory.find(c => c.category === "EMOTIONAL");

  return {
    id: report.interviewId,
    candidate: {
      name: interview.user.name,
      email: interview.user.email,
      role: interview.config.role,
      photo: `https://ui-avatars.com/api/?name=${encodeURIComponent(interview.user.name)}&background=6366f1&color=fff&size=96`
    },
    interview: {
      company: "Practice Interview",
      date: interview.startedAt.toISOString(),
      duration: `${metrics.totalQuestions * 3} minutes`,
      interviewer: "AI Assistant",
      type: interview.config.type,
      difficulty: interview.config.difficulty
    },
    ratings: {
      overall: Math.round(report.overallScore),
      content: Math.round(techCategory?.score || 70),
      confidence: Math.round(confCategory?.score || 70),
      communication: Math.round(commCategory?.score || 70)
    },
    grammar: {
      score: Math.round(commCategory?.score || 70),
      mistakes: commCategory?.details?.mistakes || [],
      total_errors: commCategory?.details?.mistakes?.length || 0,
      improvement_areas: report.recommendations.areasToImprove || []
    },
    skills: [
      { skill: "Communication", score: Math.round(commCategory?.score || 70) },
      { skill: "Technical Knowledge", score: Math.round(techCategory?.score || 70) },
      { skill: "Problem Solving", score: Math.round((report.overallScore + (techCategory?.score || 70)) / 2) },
      { skill: "Confidence", score: Math.round(confCategory?.score || 70) }
    ],
    emotions: emotCategory?.details?.emotions || [{ emotion: "neutral", count: 1, percentage: 100 }],
    dominant_emotion: metrics.dominantEmotion?.charAt(0).toUpperCase() + metrics.dominantEmotion?.slice(1) || "Neutral",
    recommendation: report.recommendations,
    generatedAt: report.generatedAt.toISOString()
  };
}

// ---------------- GET USER REPORTS ----------------
export const getUserReports = async (req, res) => {
  try {
    const userId = req.user.userId;

    const reports = await prisma.analysisReport.findMany({
      where: {
        interview: {
          userId,
          status: "COMPLETED"
        }
      },
      include: {
        perCategory: true,
        interview: {
          include: {
            user: true,
            config: true
          }
        }
      },
      orderBy: {
        generatedAt: 'desc'
      }
    });

    const formattedReports = reports.map(report => ({
      id: report.interviewId,
      candidate: {
        name: report.interview.user.name,
        email: report.interview.user.email,
        role: report.interview.config.role
      },
      interview: {
        company: "Practice Interview",
        date: report.interview.startedAt.toISOString(),
        duration: `${report.metrics.totalQuestions * 3} minutes`,
        type: report.interview.config.type,
        difficulty: report.interview.config.difficulty
      },
      ratings: {
        overall: Math.round(report.overallScore),
        content: Math.round(report.perCategory.find(c => c.category === "TECHNICAL")?.score || 70),
        confidence: Math.round(report.perCategory.find(c => c.category === "CONFIDENCE")?.score || 70)
      }
    }));

    res.json({ reports: formattedReports });
  } catch (err) {
    console.error("Get user reports error:", err);
    res.status(500).json({ error: err.message });
  }
};