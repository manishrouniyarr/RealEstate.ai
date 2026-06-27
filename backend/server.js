import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import { propertyRoutes } from './routes/propertyRoutes.js';
import { aiRoutes } from './routes/aiRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 2082;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'https://realestate-ai-rs.vercel.app'],
}));
app.use(express.json());

// Database connection
connectDB();

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'RealEstateAI API is running' });
});

// Routes
app.use('/api/properties', propertyRoutes);
app.use('/api/ai', aiRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});