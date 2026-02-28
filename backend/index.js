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
    "http://localhost:5500",
    "http://127.0.0.1:5500",
    "http://localhost:5502",
    "http://127.0.0.1:5502",
    "http://localhost:3000",
    "https://evalvate.dev",
    "https://www.evalvate.dev",
    "https://interview-git-master-sidra-jahangirs-projects.vercel.app",
    "https://evalvate-backend-862980960928.asia-south1.run.app"
  ],
  credentials: true
}));

app.use(express.json());
// app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.get('/profile', authenticateToken, (req, res) => {
  res.json({ message: 'Welcome to your profile!', userId: req.user.userId });
});
app.use('/interview', interviewRoutes);
app.use('/interview-config', interviewConfigRoutes);

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});


const PORT = process.env.PORT || 3000;

if (!PORT) {
  throw new Error("PORT not defined. Cloud Run requires process.env.PORT");
}

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
