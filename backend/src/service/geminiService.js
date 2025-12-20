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
    console.log("DEBUG: Raw Gemini response (first 300 chars):", rawText.substring(0, 300));
    
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
    
    // Try to extract JSON object
    const first = text.indexOf("{");
    const last = text.lastIndexOf("}");
    
    if (first === -1 || last === -1) {
      console.error("No JSON brackets found in text:", text);
      throw new Error("No JSON object found in response");
    }
    
    const extractedText = text.slice(first, last + 1); // FIX: renamed from 'extracted' to 'extractedText'
    console.log("Extracted JSON:", extractedText.substring(0, 200));
    
    try {
      return JSON.parse(extractedText); // FIX: use extractedText here
    } catch (parseError) {
      console.error("Failed to parse extracted JSON:", extractedText);
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

  const resumeSnippet = (session.resumeText || "")
    .substring(0, 800)
    .trim();

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

EVALUATION INSTRUCTIONS:
1. Score the answer (0-100) on: relevance, clarity, completeness, technical depth
2. Identify any issues: filler words, low confidence, grammar, missing concepts
3. Generate ONE follow-up question that builds on this answer
4. Explain why you chose this question

Return ONLY valid JSON. Keep descriptions under 200 characters each.

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
  `;
}

function validateGeminiResponse(evaluation) {
  if (!evaluation.evaluation) throw new Error("Missing 'evaluation' field");
  if (!evaluation.nextQuestion) throw new Error("Missing 'nextQuestion' field");
  if (!Array.isArray(evaluation.detectedIssues)) {
    throw new Error("'detectedIssues' must be an array");
  }

  Object.values(evaluation.evaluation).forEach((score) => {
    if (typeof score !== "number" || score < 0 || score > 100) {
      throw new Error(`Invalid score: ${score}`);
    }
  });

  evaluation.detectedIssues.forEach((issue) => {
    if (![1, 2, 3].includes(issue.severity)) {
      throw new Error(`Invalid severity: ${issue.severity}`);
    }
  });
}

export default { evaluateAndGenerateNextQuestion };