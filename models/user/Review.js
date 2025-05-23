import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  approved: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);

export default Review; // ✅ This is what fixes your import error
