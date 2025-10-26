import { PrismaClient } from "../generated/index.js";
import { uploadToS3 } from '../utils/s3.js';
import { extractTextFromResume } from '../utils/textExtract.js';

const prisma = new PrismaClient();

// ---------------- PART 1: BASICS ----------------
export const handleBasics = async (req, res) => {
  const { durationMinutes, difficulty, type } = req.body;

  try {
    const config = await prisma.interviewConfig.create({
      data: {
        userId: req.user.userId,
        durationMinutes,
        difficulty,
        type,
        role: '',
        skills: []
      },
    });
    res.json({ message: "Basics saved", configId: config.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ---------------- PART 2: SKILLS ----------------
export const handleSkills = async (req, res) => {
  const { configId, role, skills } = req.body;

  try {
    const updated = await prisma.interviewConfig.update({
      where: { id: configId },
      data: { role, skills },
    });
    res.json({ message: "Skills saved", updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ---------------- PART 3: RESUME ----------------
export const handleResumeUpload = async (req, res) => {
  try {
    const { configId } = req.body;
    const file = req.file; 

    if (!file) return res.status(400).json({ message: "No file uploaded" });

    console.log("File received:", file);

    const s3Key = await uploadToS3(file);
    const textExtract = await extractTextFromResume(file);

    const resume = await prisma.resume.create({
      data: {
        userId: req.user.userId,
        s3Key,
        textExtract,
      },
    });

    await prisma.interviewConfig.update({
      where: { id: configId },
      data: { resumeId: resume.id },
    });

    res.json({ message: "Resume uploaded", resumeId: resume.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};


// ---------------- PART 4: REVIEW ----------------
export const handleReview = async (req, res) => {
  const { configId, consentRecording } = req.body;

  try {
    const interview = await prisma.interview.create({
      data: {
        userId: req.user.userId,
        configId,
        status: "PENDING",
        consentRecording,
      },
    });

    res.json({ message: "Interview created", interviewId: interview.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
