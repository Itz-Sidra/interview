import { GoogleGenerativeAI } from "@google/generative-ai";
import prisma from "../lib/prismaClient.js";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY_QUESTIONS);

export async function generateInterviewQuestions({
  resumeJson,
  role,
  interviewType,
  difficulty,
  interviewId
}) {

  const codingDifficultyMap = {
    BEGINNER: ["easy", "easy"],
    INTERMEDIATE: ["easy", "medium"],
    ADVANCED: ["medium", "hard"]
  };

  const codingSlots = codingDifficultyMap[difficulty] ?? [];

  let prompt = "";

  if (interviewType === "TECHNICAL") {
    prompt = `
You are an AI interview generator.

Resume:
${JSON.stringify(resumeJson, null, 2)}

Role: ${role}
Difficulty: ${difficulty}

Generate:
- ${codingSlots.length} DSA coding questions (difficulty based)
- 4 resume & role-based verbal technical questions

Output JSON like this:

{
  "coding": [
    { "difficulty": "easy", "question": "....", "expectedAnswer": "..." }
  ],
  "verbal": [
    { "question": "...", "expectedAnswer": "..." }
  ]
}

Coding difficulty order: ${codingSlots.join(", ")}
Generate real coding problems, input/output based, not trivia.
`;
  } else if (interviewType === "BEHAVIORAL") {
    prompt = `
Generate 6 behavioral interview questions.
Focus on STAR method and corporate situations.
Output:
{
  "verbal": [{ "question": "...", "expectedAnswer": "..." }]
}`;
  } else if (interviewType === "SYSTEM_DESIGN") {
    prompt = `
Generate 3 SQL coding tasks and 3 system design verbal questions.
Output JSON like:
{
  "sql": [
    { "question": "Write SQL to ...", "expectedAnswer": "..." }
  ],
  "verbal": [
    { "question": "...", "expectedAnswer": "..." }
  ]
}`;
  }

  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
  const result = await model.generateContent(prompt);
  const text = await result.response.text();

  const data = JSON.parse(text.replace(/```json/g, "").replace(/```/g, ""));

  // save questions to DB
  const questions = [];

  const push = (qArray, type) => {
    if (!Array.isArray(qArray)) return;
    qArray.forEach(q =>
      questions.push({
        interviewId,
        prompt: q.question,
        expectedAnswer: q.expectedAnswer,
      })
    );
  };

  push(data.coding, "coding");
  push(data.verbal, "verbal");
  push(data.sql, "sql");

  await prisma.question.createMany({ data: questions });

  return questions;
}
