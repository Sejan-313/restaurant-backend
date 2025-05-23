// models/Menu.js
const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  image: String, // URL string
}, { timestamps: true });

module.exports = mongoose.model('Menu', menuSchema);
