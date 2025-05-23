import express from 'express';
import {
  getAllReviews,
  toggleApproval,   // ✅ this already exists
  deleteReview,
  getApprovedReviews,
  createReview,
  // REMOVE toggleReviewApproval
} from '/Freeliencing_work/Restaurent/Backend/controllers/user/reviewController.js';


const router = express.Router(); // ✅ Declare first

// Public routes
router.get('/', getApprovedReviews);      // GET /api/reviews
router.post('/', createReview);           // POST /api/reviews

// Admin routes
router.get('/admin/all', getAllReviews);                 // GET all (admin)
router.put('/admin/toggle/:id', toggleApproval);
router.delete('/:id', deleteReview);                     // Delete review

export default router; // ✅ Use this instead of module.exports in ES Modules
