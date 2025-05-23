// models/admin/Admin.js
import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // add other fields as needed
}, { timestamps: true });

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;    // ✅ default export
