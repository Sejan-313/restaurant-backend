import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  name:    { type: String, required: true },
  comment: { type: String, required: true },   // note: “comment” not “message”
  rating:  { type: Number, required: true },
  approved:{ type: Boolean, default: false },
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);
export default Review;   // default export so you can import it as `import Review from ...`
