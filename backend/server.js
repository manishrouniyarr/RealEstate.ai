// import express from 'express';
// import connectDB from './config/db.js';
// import dotenv from 'dotenv';

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 2081;

// // Connect to database
// connectDB();

// // Basic route
// app.get('/', (req, res) => {
//   res.send('RealEstate AI Backend Running');
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// import express from 'express';
// import dotenv from 'dotenv';
// import connectDB from './config/db.js';
// import { propertyRoutes } from './routes/propertyRoutes.js'; // Now using named import
// import { aiRoutes } from './routes/aiRoutes.js'; // Same for AI routes

// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 2081;

// // Middleware
// app.use(express.json());

// // Database connection
// connectDB();

// // Routes
// app.use('/api/properties', propertyRoutes);
// app.use('/api/ai', aiRoutes);

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


// server.js
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { propertyRoutes } from './routes/propertyRoutes.js';
import { aiRoutes } from './routes/aiRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 2081;

// Middleware
app.use(express.json());

// Database connection
connectDB();

// Routes
app.use('/api/properties', propertyRoutes);
app.use('/api/ai', aiRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});