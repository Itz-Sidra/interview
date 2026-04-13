import fs from "fs";
import path from "path";
import mammoth from "mammoth";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function extractAndParseResume(file) {
  try {
    // ── Step 1: Extract raw text based on file type ──────────────────────────
    let textExtract = "";
    const ext = path.extname(file.originalname).toLowerCase();

    if (ext === ".pdf") {
      const { default: pdfParse } = await import("pdf-parse/lib/pdf-parse.js");
      const buffer = fs.readFileSync(file.path);
      const pdfData = await pdfParse(buffer);
      textExtract = pdfData.text;
    } else if (ext === ".docx" || ext === ".doc") {
      const buffer = fs.readFileSync(file.path);
      const result = await mammoth.extractRawText({ buffer });
      textExtract = result.value;
    } else {
      throw new Error("Unsupported file format");
    }

    // ── Step 2: Send extracted text to Groq for structured parsing ───────────
    // Groq does not support inline file uploads, so we send the extracted text.
    const truncatedText = textExtract.substring(0, 4000); // stay within token limits

    const prompt = `Parse the following resume text into clean JSON matching this exact schema:
{
  "name": "",
  "email": "",
  "phone": "",
  "skills": [],
  "education": [{"degree": "", "institution": "", "year": ""}],
  "experience": [{"title": "", "company": "", "duration": "", "description": ""}],
  "projects": [{"name": "", "description": "", "technologies": []}]
}

Return ONLY valid JSON. No markdown fences, no extra text.

RESUME TEXT:
${truncatedText}`;

    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content:
            "You are a resume parser. Extract structured data from resume text and return only valid JSON. No markdown, no explanation."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.2,
      max_tokens: 1024
    });

    const rawText = response.choices[0].message.content
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    const jsonStart = rawText.indexOf("{");
    const jsonEnd   = rawText.lastIndexOf("}");
    const jsonString = rawText.slice(jsonStart, jsonEnd + 1);
    const parsedJson = JSON.parse(jsonString);

    return { textExtract, parsedJson };
  } catch (err) {
    console.warn("Resume parsing failed:", err.message);
    return {
      textExtract: "",
      parsedJson: {
        parseSkipped: true,
        skills: [],
        education: [],
        experience: [],
        projects: []
      }
    };
  }
}