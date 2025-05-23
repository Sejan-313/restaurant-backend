import Admin from '../../models/admin/Admin.js';
import jwt from 'jsonwebtoken';

// POST /api/admin/login
export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email });
    if (!admin || admin.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: admin._id }, 'your_jwt_secret', { expiresIn: '1d' });

    res.json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// GET /api/admin/dashboard (protected)
export const getDashboard = (req, res) => {
  res.send('Admin dashboard access granted');
};
