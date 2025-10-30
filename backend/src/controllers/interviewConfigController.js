import { PrismaClient } from "../generated/index.js";
import { uploadToS3 } from '../utils/s3.js';
import { extractAndParseResume } from "../utils/resumeParserGemini.js";

const prisma = new PrismaClient();

// ---------------- PART 1: BASICS ----------------
export const handleBasics = async (req, res) => {
  const { durationMinutes, difficulty, type } = req.body;

  try {
    const difficultyMap = {
      'beginner': 'BEGINNER',
      'intermediate': 'INTERMEDIATE',
      'advanced': 'ADVANCED'
    };

    const typeMap = {
      'technical': 'TECHNICAL',
      'behavioral': 'BEHAVIORAL',
      'system-design': 'SYSTEM_DESIGN'
    };

    const mappedDifficulty = difficultyMap[difficulty.toLowerCase()] || 'INTERMEDIATE';
    const mappedType = typeMap[type.toLowerCase()] || 'TECHNICAL';

    console.log('Creating config with:', {
      userId: req.user.userId,
      durationMinutes: parseInt(durationMinutes),
      difficulty: mappedDifficulty,
      type: mappedType
    });

    const config = await prisma.interviewConfig.create({
      data: {
        userId: req.user.userId,
        durationMinutes: parseInt(durationMinutes),
        difficulty: mappedDifficulty,
        type: mappedType,
        role: '',
        skills: []
      },
    });

    res.json({ message: "Basic information saved", configId: config.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ---------------- PART 2: SKILLS ----------------
export const handleSkills = async (req, res) => {
  const { configId, role, skills } = req.body;

  try {
    if (!configId) {
      return res.status(400).json({ error: 'configId is required' });
    }
    if (!role || !role.trim()) {
      return res.status(400).json({ error: 'role is required' });
    }
    if (!Array.isArray(skills) || skills.length === 0) {
      return res.status(400).json({ error: 'At least one skill is required' });
    }

    const updated = await prisma.interviewConfig.update({
      where: { id: configId },
      data: { 
        role: role.trim(), 
        skills: skills.map(s => s.trim())
      },
    });

    res.json({ message: "Skills saved", updated });
  } catch (err) {
    console.error('Error in handleSkills:', err);
    
    if (err.code === 'P2025') {
      return res.status(404).json({ error: 'Configuration not found' });
    }
    
    res.status(500).json({ error: err.message });
  }
};

// ---------------- PART 3: RESUME ----------------
export const handleResumeUpload = async (req, res) => {
  try {
    const file = req.file;
    const userId = req.user.userId;

    if (!file) return res.status(400).json({ error: "No file uploaded" });

    const s3Result = await uploadToS3(file);

    const { parsedJson } = await extractAndParseResume(file);

    const resume = await prisma.resume.create({
      data: {
        userId,
        s3Key: s3Result.Key,
        textExtract: "", 
        parsedJson,
      },
    });

    res.json({ success: true, resume });
  } catch (err) {
    console.error("Resume upload error:", err);
    res.status(500).json({ error: err.message });
  }
};

// ---------------- PART 4: REVIEW ----------------
export const handleReview = async (req, res) => {
  const { configId, consentRecording } = req.body;

  try {
    const config = await prisma.interviewConfig.findUnique({
      where: { id: configId }
    });

    if (!config) {
      return res.status(404).json({ error: 'Configuration not found' });
    }

    const interview = await prisma.interview.create({
      data: {
        userId: req.user.userId,
        configId,
        status: "PENDING",
        consentRecording: consentRecording || false,
      },
    });

    res.json({ message: "Interview created", interviewId: interview.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
