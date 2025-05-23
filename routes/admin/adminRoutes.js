import express from 'express';
import { loginAdmin, getDashboard } from '../../controllers/admin/Admin.js';
import { protect } from '../../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/login', loginAdmin);
router.get('/dashboard', protect, getDashboard);

export default router;
