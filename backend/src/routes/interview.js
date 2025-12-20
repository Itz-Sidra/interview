import express from 'express';
import multer from 'multer';
import authenticateToken from '../middleware/auth.js';
import * as interviewController from '../controllers/interviewController.js';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/transcribe', authenticateToken, upload.single('audio'), interviewController.transcribeAudio);
router.post('/speak', authenticateToken, interviewController.speakText);
router.post('/status', authenticateToken, interviewController.updateInterviewStatus);

router.post("/start", authenticateToken, interviewController.startInterview);
router.post("/answer", authenticateToken, interviewController.handleCandidateAnswer);
router.get("/report/:id", authenticateToken, interviewController.generateReport);

export default router;