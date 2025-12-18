import fs from "fs";
import mime from "mime-types";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function extractAndParseResume(file) {
  try {
    const fileBuffer = fs.readFileSync(file.path);
    const base64Data = fileBuffer.toString("base64");
    const mimeType =
      file.mimetype || mime.lookup(file.path) || "application/pdf";

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `
      Parse this resume into clean JSON:
      {
        "name": "",
        "email": "",
        "phone": "",
        "skills": [],
        "education": [],
        "experience": [],
        "projects": []
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
                data: base64Data,
              },
            },
          ],
        },
      ],
    });

    const text = await result.response.text();

    const jsonStart = text.indexOf("{");
    const jsonEnd = text.lastIndexOf("}");
    const jsonString = text.slice(jsonStart, jsonEnd + 1);

    const parsedJson = JSON.parse(jsonString);

    return { parsedJson };
  } catch (err) {
    console.error("Error parsing resume with Gemini:", err);
    
    // Check if it's a quota error
    if (err.status === 429) {
      throw new Error("API quota exceeded. Please try again later or upgrade your Gemini API plan.");
    }
    return {
      parsedJson: {
        name: "Unknown",
        email: "",
        phone: "",
        location: "",
        links: {},
        skills: [],
        education: [],
        experience: [],
        projects: [],
        certifications: [],
        achievements: [],
        parseError: err.message || "Failed to parse resume"
      }
    };
  }
}
