import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import authRoutes from './src/routes/auth.js';
import authenticateToken from './src/middleware/auth.js';
import interviewRoutes from './src/routes/interview.js';
import interviewConfigRoutes from './src/routes/interviewConfig.js';

const app = express();

app.use(cors({
  origin: [
    "https://evalvate.dev/"
  ], 
  credentials: true
}));

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.get('/profile', authenticateToken, (req, res) => {
  res.json({ message: 'Welcome to your profile!', userId: req.user.userId });
});
app.use('/interview', interviewRoutes);
app.use('/interview-config', interviewConfigRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
