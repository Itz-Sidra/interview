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
  previousQuestion,
  answer,
  role,
  skills = [],
  resumeContext = null
}) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = `
You are continuing a mock interview.

Role: ${role}
Skills: ${skills.join(", ") || "Not specified"}

Previous Question:
${previousQuestion}

Candidate Answer:
${answer || "No answer given"}

Candidate Resume (JSON, may be null):
${resumeContext ? JSON.stringify(resumeContext) : "No resume provided"}

Instructions:
- Ask ONE logical follow-up question
- Increase difficulty gradually
- If the answer is weak, probe deeper
- If strong, move to next relevant area
- If interview should end, return exactly: END_INTERVIEW

Return ONLY the question text or END_INTERVIEW.
`;

  const result = await model.generateContent(prompt);
  const text = cleanGeminiResponse(result.response.text());

  if (text.toUpperCase().includes("END_INTERVIEW")) {
    return null;
  }

  return text;
}