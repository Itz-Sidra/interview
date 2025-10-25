import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const ACCESS_SECRET = process.env.ACCESS_SECRET
const REFRESH_SECRET = process.env.REFRESH_SECRET

export function generateAccessToken(user) {
  return jwt.sign({ userId: user.id }, ACCESS_SECRET, { expiresIn: '15m' });
}

export function generateRefreshToken(user) {
  return jwt.sign({ userId: user.id }, REFRESH_SECRET, { expiresIn: '7d' });
}

export function verifyAccessToken(token) {
  return jwt.verify(token, ACCESS_SECRET);
}

export function verifyRefreshToken(token) {
  return jwt.verify(token, REFRESH_SECRET);
}