import express from 'express';
import multer from 'multer';
import { handleBasics, handleSkills, handleResumeUpload, handleReview } from '../controllers/interviewConfigController.js';
import authenticateToken from '../middleware/auth.js';

const router = express.Router();
const upload = multer({
  dest: 'uploads/',
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];

    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error('Invalid file type'), false);
    }

    cb(null, true);
  }
});

router.post('/basics', authenticateToken, handleBasics);
router.post('/skills', authenticateToken, handleSkills);
router.post(
  '/resume',
  authenticateToken,
  (req, res, next) => {
    upload.single('resume')(req, res, (err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      next();
    });
  },
  handleResumeUpload
);
router.post('/review', authenticateToken, handleReview);

export default router;
