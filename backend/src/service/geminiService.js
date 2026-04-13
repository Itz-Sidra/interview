import Groq from "groq-sdk";
import { jsonrepair } from "jsonrepair";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

/**
 * Single Groq call: evaluate answer + generate next question
 * @param {InterviewSession} session - Current interview state
 * @param {string} candidateAnswer - The answer to evaluate
 * @returns {GeminiEvaluation}
 */
export async function evaluateAndGenerateNextQuestion(session, candidateAnswer) {
  const prompt = buildPrompt(session, candidateAnswer);

  try {
    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content:
            "You are an expert technical interviewer. You MUST respond with valid JSON only. No markdown, no explanation — raw JSON only."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 1024
    });

    const rawText = response.choices[0].message.content;
    console.log("DEBUG: Raw Groq response (first 300 chars):", rawText.substring(0, 300));

    const evaluation = safeParseJSON(rawText);
    validateResponse(evaluation, session);

    return evaluation;
  } catch (error) {
    const isRateLimit =
      error?.status === 429 ||
      error?.message?.includes("429") ||
      error?.message?.includes("Quota") ||
      error?.message?.includes("rate_limit");

    if (isRateLimit) {
      console.warn("Groq rate limit hit — using fallback logic");
      throw new Error("GEMINI_RATE_LIMIT"); // keep same error string so controller fallback still works
    }

    console.error("Groq API error:", error);
    throw new Error(`Failed to evaluate answer: ${error.message}`);
  }
}

/**
 * Safely parse JSON from Groq response
 */
function safeParseJSON(text) {
  // Strip any accidental markdown fences
  const stripped = text
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();

  try {
    return JSON.parse(stripped);
  } catch {
    try {
      const repaired = jsonrepair(stripped);
      return JSON.parse(repaired);
    } catch {
      console.error("Groq JSON unrecoverable:", stripped);
      throw new Error("Invalid JSON from Groq");
    }
  }
}

/**
 * Build prompt — identical content to the original Gemini prompt
 */
function buildPrompt(session, candidateAnswer) {
  const previousQA = session.questionHistory
    .map((q, i) => {
      const answer = session.answerHistory[i]?.rawAnswer || "N/A";
      return `Q${i + 1}: ${q.question}\nA${i + 1}: ${answer}`;
    })
    .join("\n\n");

  const resumeSnippet = (session.resumeText || "").substring(0, 800).trim();

  return `
INTERVIEW CONTEXT:
- Role: ${session.role}
- Company: ${session.company || "Unknown"}
- Difficulty Level: ${session.difficulty}
- Interview Type: ${session.type}
- Questions Answered: ${session.questionsAnswered}/${session.totalQuestions}

CANDIDATE RESUME (Summary):
${resumeSnippet || "No resume provided"}

INTERVIEW HISTORY:
${previousQA || "This is the first question"}

CURRENT ANSWER TO EVALUATE:
"${candidateAnswer}"

EVALUATION INSTRUCTIONS (FOLLOW EXACTLY):
1. FIRST: Generate ONE specific follow-up interview question based on the candidate's answer.
2. THEN: Score the answer on relevance(0-100), clarity(0-100), completeness(0-100), and technical depth(0-100).
3. Identify at most ONE important issue (optional).
4. Briefly explain why you chose the follow-up question (1 sentence max).

CRITICAL RULES:
- The follow-up question MUST always be present.
- If unsure, ask a question that probes reasoning, decisions, or examples.
- If no issues exist, return an empty detectedIssues array.
- Do NOT write long issue description.
- Return ONLY valid JSON. No markdown. No extra text.

{
  "evaluation": {
    "answerQuality": 75,
    "relevance": 80,
    "clarity": 70,
    "completeness": 75,
    "technicalDepth": 80
  },
  "detectedIssues": [
    {
      "type": "GRAMMAR",
      "severity": 1,
      "description": "Minor grammar issue",
      "example": "quote from answer",
      "suggestion": "how to improve"
    }
  ],
  "nextQuestion": "Your follow-up question here",
  "questionRationale": "Why you chose this question",
  "followUpCategory": "TECHNICAL"
}
  `.trim();
}

function normalizeSeverity(severity) {
  if (typeof severity !== "number") return 1;
  if (severity <= 1) return 1;
  if (severity === 2) return 2;
  return 3;
}

function generateFallbackQuestion(session) {
  const n = session.questionsAnswered;
  if (n === 0) return "Can you walk me through a recent project you worked on and your role in it?";
  if (n === 1) return "What was the reasoning behind one of the technical decisions you mentioned?";
  if (n === 2) return "What challenges did you face in that situation, and how did you overcome them?";
  if (n === 3) return "How would you improve the approach if you had more time?";
  return "Can you give a concrete example from your experience to support that point?";
}

function validateResponse(evaluation, session) {
  if (!evaluation.evaluation) {
    evaluation.evaluation = {
      answerQuality: 60,
      relevance: 60,
      clarity: 60,
      completeness: 60,
      technicalDepth: 60
    };
  }

  function normalizeScore(score) {
    if (typeof score !== "number") return 60;
    return Math.min(100, Math.max(0, score));
  }

  Object.keys(evaluation.evaluation).forEach((key) => {
    evaluation.evaluation[key] = normalizeScore(evaluation.evaluation[key]);
  });

  if (!Array.isArray(evaluation.detectedIssues)) {
    evaluation.detectedIssues = [];
  }

  evaluation.detectedIssues = evaluation.detectedIssues.map((issue) => ({
    ...issue,
    severity: normalizeSeverity(issue.severity)
  }));

  if (!evaluation.nextQuestion || typeof evaluation.nextQuestion !== "string") {
    evaluation.nextQuestion = generateFallbackQuestion(session);
  }

  if (!evaluation.followUpCategory) {
    evaluation.followUpCategory = "GENERAL";
  }

  if (!evaluation.questionRationale) {
    evaluation.questionRationale = "Fallback follow-up due to incomplete model output";
  }
}

export default { evaluateAndGenerateNextQuestion };