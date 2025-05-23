// models/Review.js
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  name: String,
  comment: String,
  rating: Number,
  approved: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);
