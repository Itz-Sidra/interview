import { PrismaClient } from "../generated/index.js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from "axios";
import FormData from "form-data";
import { generateFirstQuestion, generateFollowUpQuestion } from "../utils/questionGenerator.js";

const prisma = new PrismaClient();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;


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
