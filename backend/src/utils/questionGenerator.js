import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

function cleanGeminiResponse(text) {
  return text
    .replace(/```/g, "")
    .replace(/^json/i, "")
    .trim();
}

/**
 * Generate the FIRST interview question
 */
export async function generateFirstQuestion({
  role,
  company,
  skills = [],
  resumeContext = null
}) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = `
You are a professional AI interviewer.

Interview setup:
- Role: ${role}
- Company: ${company || "General"}
- Skills: ${skills.join(", ") || "Not specified"}

Candidate Resume (JSON, may be null):
${resumeContext ? JSON.stringify(resumeContext) : "No resume provided"}

Instructions:
- Ask ONLY ONE first interview question
- Keep it concise and professional
- Prefer resume-based questions if resume is available
- Otherwise start with a strong general opening question
- Do NOT include explanations or commentary

Return ONLY the question text.
`;

  const result = await model.generateContent(prompt);
  return cleanGeminiResponse(result.response.text());
}

/**
 * Generate FOLLOW-UP interview question
 */
export async function generateFollowUpQuestion({
  role,
  skills = [],
  resumeContext,
  previousQuestion,
  answer
}) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = `
You are an AI interviewer.

Return ONLY valid JSON.

{
  "analysis": {
    "emotion": "confident|nervous|neutral",
    "confidence": 0-100,
    "grammarScore": 0-100,
    "relevanceScore": 0-100
  },
  "nextQuestion": "string OR END_INTERVIEW"
}

Role: ${role}
Skills: ${skills.join(", ")}

Resume:
${resumeContext ? JSON.stringify(resumeContext) : "None"}

Previous Question:
${previousQuestion}

Candidate Answer:
${answer}
`;

  try {
    const result = await model.generateContent(prompt);
    const cleaned = cleanGeminiResponse(result.response.text());
    const parsed = JSON.parse(cleaned);

    if (
      !parsed.nextQuestion ||
      parsed.nextQuestion.toUpperCase().includes("END_INTERVIEW")
    ) {
      return { done: true, analysis: parsed.analysis };
    }

    return {
      done: false,
      analysis: parsed.analysis,
      nextQuestion: parsed.nextQuestion
    };

  } catch (err) {
    console.warn("Follow-up generation failed:", err.message);

    return {
      done: false,
      analysis: null,
      nextQuestion:
        "Can you describe a challenging project you've worked on recently?"
    };
  }
}