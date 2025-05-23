import express from 'express';
import {
  getAllMenus,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem
} from '../../controllers/user/menuController.js';

const router = express.Router();

router.get('/', getAllMenus);
router.post('/', createMenuItem);
router.put('/:id', updateMenuItem);
router.delete('/:id', deleteMenuItem);

// <-- Add this:
export default router;
