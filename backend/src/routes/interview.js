import express from 'express';
import multer from 'multer';
import authenticateToken from '../middleware/auth.js';
import * as interviewController from '../controllers/interviewController.js';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/start', authenticateToken , interviewController.startInterview);
router.post('/answer', authenticateToken , interviewController.answerQuestion);
router.post('/transcribe', authenticateToken , upload.single('audio'), interviewController.transcribeAudio);
router.post('/speak', authenticateToken , interviewController.speakText);
router.get('/report/:interviewId', authenticateToken , interviewController.generateReport);
router.get('/reports', authenticateToken , interviewController.getUserReports);

export default router;