import { predictPropertyPrice } from '../services/ai/priceService.js';

export const getPricePrediction = async (req, res) => {
  try {
    const {
      location,
      propertyType,
      bedrooms,
      bathrooms,
      areaSqft,
      condition,
      amenities,
      nearbyFacilities,
    } = req.body;

    // Basic validation
    if (!location || !propertyType || !bedrooms || !areaSqft) {
      return res.status(400).json({
        error: 'Missing required fields: location, propertyType, bedrooms, areaSqft',
      });
    }

    const prediction = await predictPropertyPrice({
      location,
      propertyType,
      bedrooms,
      bathrooms,
      areaSqft,
      condition,
      amenities,
      nearbyFacilities,
    });

    res.json({ success: true, prediction });
  } catch (error) {
    console.error('Price prediction error:', error.message);

    if (error instanceof SyntaxError) {
      return res.status(500).json({ error: 'AI returned invalid response. Please try again.' });
    }

    res.status(500).json({ error: error.message });
  }
};