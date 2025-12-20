import fs from "fs";
import path from "path";
import mammoth from "mammoth";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_RESUME_API_KEY);

export async function extractAndParseResume(file) {
  try {
    // Extract text based on file type
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

    // Send extracted text to Gemini for structured parsing
    const fileBuffer = fs.readFileSync(file.path);
    const base64Data = fileBuffer.toString("base64");
    const mimeType = file.mimetype;

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `
      Parse this resume into clean JSON:
      {
        "name": "",
        "email": "",
        "phone": "",
        "skills": [],
        "education": [{"degree": "", "institution": "", "year": ""}],
        "experience": [{"title": "", "company": "", "duration": "", "description": ""}],
        "projects": [{"name": "", "description": "", "technologies": []}]
      }

      Return ONLY JSON. No extra text.
      `;

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [
            { text: prompt },
            {
              inlineData: {
                mimeType: mimeType,
                data: base64Data
              }
            }
          ]
        }
      ]
    });

    const text = await result.response.text();
    const jsonStart = text.indexOf("{");
    const jsonEnd = text.lastIndexOf("}");
    const jsonString = text.slice(jsonStart, jsonEnd + 1);
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