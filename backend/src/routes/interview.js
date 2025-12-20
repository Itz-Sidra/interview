import express from 'express';
import multer from 'multer';
import authenticateToken from '../middleware/auth.js';
import * as interviewController from '../controllers/interviewController.js';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/transcribe', authenticateToken, upload.single('audio'), interviewController.transcribeAudio);
router.post('/speak', authenticateToken, interviewController.speakText);
router.post('/status', authenticateToken, interviewController.updateInterviewStatus);

export default router;