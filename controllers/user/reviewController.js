import Review from '../../models/user/Review.js';  // default import

// Create review (public)
export const createReview = async (req, res) => {
  try {
    const { name, comment, rating } = req.body;   // use `comment`
    const review = new Review({ name, comment, rating, approved: false });
    await review.save();
    res.status(201).json(review);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get only approved reviews (public)
export const getApprovedReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ approved: true });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all reviews (admin)
export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Toggle approval (admin)
export const toggleApproval = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ message: 'Review not found' });
    review.approved = !review.approved;
    await review.save();
    res.json(review);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete review (admin)
export const deleteReview = async (req, res) => {
  try {
    const deleted = await Review.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Review not found' });
    res.json({ message: 'Review deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
