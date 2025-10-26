import express from 'express';
import multer from 'multer';
import { handleBasics, handleSkills, handleResumeUpload, handleReview } from '../controllers/interviewConfigController.js';
import authenticateToken from '../middleware/auth.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/basics', authenticateToken, handleBasics);
router.post('/skills', authenticateToken, handleSkills);
router.post('/resume', authenticateToken, upload.single('resume'), handleResumeUpload);
router.post('/review', authenticateToken, handleReview);

export default router;
