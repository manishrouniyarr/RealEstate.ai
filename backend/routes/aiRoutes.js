import express from 'express';
import { analyzeZoning } from '../services/ai/zoningService.js';

const router = express.Router();

router.post('/zoning-analysis', async (req, res) => {
  try {
    const { propertyId } = req.body;
    const result = await analyzeZoning(propertyId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export { router as aiRoutes };