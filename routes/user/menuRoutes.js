const express = require('express');
const router = express.Router();

const {
  getAllMenus,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem
} = require('../../controllers/user/menuController.js');

// Routes
router.get('/', getAllMenus);
router.post('/', createMenuItem);
router.put('/:id', updateMenuItem);
router.delete('/:id', deleteMenuItem);

module.exports = router;
