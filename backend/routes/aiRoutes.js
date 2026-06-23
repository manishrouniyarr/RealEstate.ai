import express from 'express';
import { analyzeZoning } from '../services/ai/zoningService.js';
import { getPricePrediction } from '../controllers/aiController.js';
import { estimateProjectCost } from '../services/ai/costService.js';
import { getMarketInsights } from '../services/ai/marketService.js';

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

router.post('/predict-price', getPricePrediction);

router.post('/estimate-cost', async (req, res) => {
  try {
    const { location, propertyType, workType, areaSqft } = req.body;
    if (!location || !propertyType || !workType || !areaSqft) {
      return res.status(400).json({ error: 'Missing required fields: location, propertyType, workType, areaSqft' });
    }
    const estimate = await estimateProjectCost(req.body);
    res.json({ success: true, estimate });
  } catch (error) {
    console.error('Cost estimation error:', error.message);
    res.status(500).json({ error: error.message });
  }
});

router.post('/market-insights', async (req, res) => {
  try {
    const { location, propertyType, purpose } = req.body;
    if (!location || !propertyType || !purpose) {
      return res.status(400).json({ error: 'Missing required fields: location, propertyType, purpose' });
    }
    const insights = await getMarketInsights(req.body);
    res.json({ success: true, insights });
  } catch (error) {
    console.error('Market insights error:', error.message);
    res.status(500).json({ error: error.message });
  }
});

export { router as aiRoutes };