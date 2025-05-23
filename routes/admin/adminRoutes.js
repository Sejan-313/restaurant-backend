import express from 'express';
import { loginAdmin, getDashboard } from '/Freeliencing_work/Restaurent/Backend/controllers/admin/Admin.js';
import { protect } from '/Freeliencing_work/Restaurent/Backend/middlewares/authMiddleware.js';

const router = express.Router();

router.post('/login', loginAdmin);
router.get('/dashboard', protect, getDashboard);

export default router;
