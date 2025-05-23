import express from 'express';
import {
  getApprovedReviews,
  createReview,
  getAllReviews,
  toggleApproval,
  deleteReview
} from '../../controllers/user/reviewController.js';

const router = express.Router();

// Public
router.get('/', getApprovedReviews);
router.post('/', createReview);

// Admin
router.get('/admin/all', getAllReviews);
router.put('/admin/toggle/:id', toggleApproval);
router.delete('/:id', deleteReview);

export default router;  // default export so `import reviewRoutes from ...` works
