import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { handleBasics, handleSkills, handleResumeUpload, handleReview } from '../controllers/interviewConfigController.js';
import authenticateToken from '../middleware/auth.js';

const router = express.Router();

// Get current directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define upload directory (backend/uploads)
const uploadDir = path.join(__dirname, '../../uploads');

// Create uploads directory if it doesn't exist
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log('Created uploads directory at:', uploadDir);
}

// Configure multer with disk storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log('Saving file to:', uploadDir);  // Debug log
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    console.log('Generated filename:', uniqueName);  // Debug log
    cb(null, uniqueName);
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB
  },
  fileFilter: (req, file, cb) => {
    console.log('File filter - mimetype:', file.mimetype);  // Debug log
    
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
        console.error('Multer error:', err);  // Debug log
        return res.status(400).json({ error: err.message });
      }
      console.log('Multer upload successful');  // Debug log
      next();
    });
  },
  handleResumeUpload
);
router.post('/review', authenticateToken, handleReview);

export default router;