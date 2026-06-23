import express from 'express';
import {
  getAllProperties,
  getPropertyById,
  getFeaturedProperties,
} from '../controllers/propertyController.js';

const router = express.Router();

router.get('/', getAllProperties);
router.get('/featured', getFeaturedProperties);
router.get('/:id', getPropertyById);

export { router as propertyRoutes };