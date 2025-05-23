



import multer from 'multer';
import streamifier from 'streamifier';
import Menu from '/Freeliencing_work/Restaurent/Backend/models/user/Menu.js';
import { v2 as cloudinary } from 'cloudinary';

// 🔐 Cloudinary Config
cloudinary.config({
  cloud_name: 'dq7zxrp2t',
  api_key: '891762678259122',
  api_secret: 'SnI8jv9LfHCTYBEohTQowA2tMOU',
});

// 📦 Multer Setup (buffer)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// 📤 Upload buffer to Cloudinary
const uploadToCloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream((error, result) => {
      if (error) return reject(error);
      resolve(result.secure_url);
    });
    streamifier.createReadStream(buffer).pipe(stream);
  });
};

// ✅ Get all menu items
export const getAllMenus = async (req, res) => {
  try {
    const items = await Menu.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching menus' });
  }
};

// ✅ Create new menu item (with image upload)
export const createMenuItem = [
  upload.single('image'),
  async (req, res) => {
    try {
      const { name, description, price } = req.body;
      let imageUrl = '';

      if (req.file) {
        imageUrl = await uploadToCloudinary(req.file.buffer);
      }

      const newItem = new Menu({ name, description, price, image: imageUrl });
      await newItem.save();
      res.status(201).json(newItem);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Failed to create menu item' });
    }
  }
];

// ✅ Update menu item (with optional image)
export const updateMenuItem = [
  upload.single('image'),
  async (req, res) => {
    try {
      const { id } = req.params;
      const { name, description, price } = req.body;
      const updateData = { name, description, price };

      if (req.file) {
        updateData.image = await uploadToCloudinary(req.file.buffer);
      }

      const updatedItem = await Menu.findByIdAndUpdate(id, updateData, { new: true });
      if (!updatedItem) return res.status(404).json({ message: 'Item not found' });

      res.json(updatedItem);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Failed to update menu item' });
    }
  }
];

// ✅ Delete menu item
export const deleteMenuItem = async (req, res) => {
  try {
    const deleted = await Menu.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Item not found' });
    res.json({ message: 'Menu item deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete menu item' });
  }
};
