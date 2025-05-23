import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import menuRoutes from './routes/user/menuRoutes.js';
import reviewRoutes from './routes/user/reviewRoutes.js';
import adminRoutes from './routes/admin/adminRoutes.js';


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/menu', menuRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/admin', adminRoutes);


app.listen(5000, () => console.log('Server running on port 5000'));
