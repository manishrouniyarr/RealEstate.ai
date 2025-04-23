// routes/propertyRoutes.js
import express from 'express';
import {
  getProperties,
  createProperty,
  getProperty,
  updateProperty,
  deleteProperty
} from '../controllers/propertyController.js';

const router = express.Router();

// Base route: /api/properties
router.route('/')
  .get(getProperties)
  .post(createProperty);

// ID-specified routes
router.route('/:id')
  .get(getProperty)
  .put(updateProperty)
  .delete(deleteProperty);

export { router as propertyRoutes };