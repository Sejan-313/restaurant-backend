import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  image: String,
}, { timestamps: true });

const Menu = mongoose.model('Menu', menuSchema);

export default Menu; // ✅ Default export so you can import it as `Menu`
