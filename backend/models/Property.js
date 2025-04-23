// models/Property.js
import mongoose from 'mongoose';

const PropertySchema = new mongoose.Schema({
  address: { type: String, required: true },
  price: { type: Number, required: true },
  bedrooms: { type: Number },
  bathrooms: { type: Number },
  sqft: { type: Number },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
}, { timestamps: true });

PropertySchema.index({ location: '2dsphere' });

export default mongoose.model('Property', PropertySchema);