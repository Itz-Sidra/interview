import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from 'axios';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

/**
 * Single Gemini call: evaluate answer + generate next question
 * @param {InterviewSession} session - Current interview state
 * @param {string} candidateAnswer - The answer to evaluate
 * @returns {GeminiEvaluation}
 */
export async function evaluateAndGenerateNextQuestion(session, candidateAnswer) {
  const prompt = buildGeminiPrompt(session, candidateAnswer);
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  try {
    const response = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }]
        }
      ],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 2048,
        responseMimeType: "application/json",
        responseSchema: { 
          type: "object",
          properties: {
            evaluation: {
              type: "object",
              properties: {
                answerQuality: { type: "number" },
                relevance: { type: "number" },
                clarity: { type: "number" },
                completeness: { type: "number" },
                technicalDepth: { type: "number" }
              },
              required: ["answerQuality", "relevance", "clarity", "completeness", "technicalDepth"]
            },
            detectedIssues: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  type: { type: "string" },
                  severity: { type: "number" },
                  description: { type: "string" },
                  example: { type: "string" },
                  suggestion: { type: "string" }
                }
              }
            },
            nextQuestion: { type: "string" },
            questionRationale: { type: "string" },
            followUpCategory: { type: "string" }
          },
          required: ["evaluation", "detectedIssues", "nextQuestion", "questionRationale", "followUpCategory"]
        }
      }
    });

    const rawText = await response.response.text();
    console.log("DEBUG: Raw Gemini response:", rawText.substring(0, 200));

    const evaluation = safeParseJSON(rawText);
    validateGeminiResponse(evaluation);

    return evaluation;
  } catch (error) {
    console.error("Gemini API error:", error);
    throw new Error(`Failed to evaluate answer: ${error.message}`);
  }
}

/**
 * Safely parse JSON from Gemini response
 */
function safeParseJSON(text) {
  try {
    // First try direct parse
    return JSON.parse(text);
  } catch (e) {
    console.error("Direct JSON parse failed, trying extraction...");
    
    // Remove any text before first {
    const first = text.indexOf("{");
    const last = text.lastIndexOf("}");
    
    if (first === -1 || last === -1) {
      console.error("No JSON brackets found in text:", text);
      throw new Error("No JSON object found in response");
    }
    
    try {
      const extracted = text.slice(first, last + 1);
      console.log("Extracted JSON:", extracted.substring(0, 200));
      return JSON.parse(extracted);
    } catch (parseError) {
      console.error("Failed to parse extracted JSON:", extracted);
      throw new Error("Invalid JSON in Gemini response");
    }
  }
}

/**
 * Build Gemini prompt
 */
function buildGeminiPrompt(session, candidateAnswer) {
  const previousQA = session.questionHistory
    .map((q, i) => {
      const answer = session.answerHistory[i]?.answer || "N/A";
      return `Q${i + 1}: ${q.question}\nA${i + 1}: ${answer}`;
    })
    .join("\n\n");

  const resumeSnippet = (session.resumeText || "").substring(0, 800);

  return `
INTERVIEW CONTEXT:
- Role: ${session.role}
- Company: ${session.company || "Unknown"}
- Difficulty: ${session.difficulty}
- Type: ${session.type}

RESUME SUMMARY:
${resumeSnippet || "No resume provided"}

INTERVIEW HISTORY:
${previousQA || "First question"}

CURRENT ANSWER:
"${candidateAnswer}"

Return ONLY valid JSON:
{
  "evaluation": {
    "answerQuality": 0,
    "relevance": 0,
    "clarity": 0,
    "completeness": 0,
    "technicalDepth": 0
  },
  "detectedIssues": [],
  "nextQuestion": "",
  "questionRationale": "",
  "followUpCategory": "TECHNICAL"
}
`;
}

/**
 * Validate Gemini response structure
 */
function validateGeminiResponse(evaluation) {
  if (!evaluation?.evaluation) throw new Error("Missing evaluation");
  if (!evaluation.nextQuestion) throw new Error("Missing nextQuestion");
  if (!Array.isArray(evaluation.detectedIssues)) {
    throw new Error("detectedIssues must be an array");
  }

  Object.values(evaluation.evaluation).forEach((score) => {
    if (typeof score !== "number" || score < 0 || score > 100) {
      throw new Error(`Invalid score: ${score}`);
    }
  });
}

export default { evaluateAndGenerateNextQuestion };
