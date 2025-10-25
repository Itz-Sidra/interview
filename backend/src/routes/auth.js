import express from 'express';
import bcrypt from 'bcryptjs';
import { PrismaClient } from "../generated/index.js";
import authMiddleware from '../middleware/auth.js';
import { generateAccessToken, generateRefreshToken } from '../utils/token.js';

const router = express.Router();
const prisma = new PrismaClient();

// ---------------- SIGNUP ----------------
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) return res.status(400).json({ message: "Email already exists" });

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { name, email, passwordHash },
    });

    res.status(201).json({ message: "User created", userId: user.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------------- LOGIN ----------------
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7); 
    
    await prisma.refreshToken.create({
      data: { 
        token: refreshToken, 
        userId: user.id,
        expiresAt,
      },
    });

    res.json({ accessToken, refreshToken });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ---------------- PROTECTED ROUTE SAMPLE TESTING ----------------
router.get("/me", authMiddleware, async (req, res) => {
  const user = await prisma.user.findUnique({ where: { id: req.user.userId } });
  res.json({ user });
});

export default router;