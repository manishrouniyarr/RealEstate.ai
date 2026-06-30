import React, { useState } from 'react';
import usePricePredictor from '../hooks/usePricePredictor';
import PredictionResult from './PredictionResult';

const amenityOptions = ['Parking', 'Gym', 'Swimming Pool', 'Security', 'Power Backup', 'Lift', 'Garden', 'Club House'];
const facilityOptions = ['Metro', 'School', 'Hospital', 'Mall', 'Park', 'Airport', 'Bus Stop', 'Market'];

const currencies = [
  { code: 'INR', label: '₹ INR — Indian Rupee', symbol: '₹' },
  { code: 'USD', label: '$ USD — US Dollar', symbol: '$' },
  { code: 'EUR', label: '€ EUR — Euro', symbol: '€' },
  { code: 'GBP', label: '£ GBP — British Pound', symbol: '£' },
  { code: 'AED', label: 'AED — UAE Dirham', symbol: 'AED' },
  { code: 'SGD', label: 'SGD — Singapore Dollar', symbol: 'SGD' },
  { code: 'AUD', label: 'A$ AUD — Australian Dollar', symbol: 'A$' },
];

const initialForm = {
  location: '',
  propertyType: 'Apartment',
  bedrooms: 2,
  bathrooms: 1,
  areaSqft: 1000,
  condition: 'Good',
  amenities: [],
  nearbyFacilities: [],
  currency: 'INR',
  priceType: 'buy',
};

const PricePredictor = () => {
  const [form, setForm] = useState(initialForm);
  const { prediction, loading, error, predictPrice, reset } = usePricePredictor();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const toggleItem = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((i) => i !== value)
        : [...prev[key], value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    predictPrice(form);
  };

  const selectedCurrency = currencies.find((c) => c.code === form.currency);

  if (prediction) {
    return (
      <PredictionResult
        prediction={{ ...prediction, currency: form.currency, priceType: form.priceType }}
        currencySymbol={selectedCurrency?.symbol || '₹'}
        onReset={reset}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Buy / Rent Toggle */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">I want to</label>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setForm((prev) => ({ ...prev, priceType: 'buy' }))}
            className={`py-2.5 rounded-xl text-sm font-semibold border transition-colors ${
              form.priceType === 'buy'
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'
            }`}
          >
            Buy Property
          </button>
          <button
            type="button"
            onClick={() => setForm((prev) => ({ ...prev, priceType: 'rent' }))}
            className={`py-2.5 rounded-xl text-sm font-semibold border transition-colors ${
              form.priceType === 'rent'
                ? 'bg-slate-800 text-white border-slate-800'
                : 'bg-white text-gray-600 border-gray-200 hover:border-slate-400'
            }`}
          >
            Rent Property
          </button>
        </div>
      </div>

      {/* Currency Selector */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Currency</label>
        <select
          name="currency"
          value={form.currency}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {currencies.map((c) => (
            <option key={c.code} value={c.code}>{c.label}</option>
          ))}
        </select>
      </div>

      {/* Location */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
        <input
          type="text"
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="e.g. New Delhi, India"
          required
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Property Type & Condition */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
          <select
            name="propertyType"
            value={form.propertyType}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {['Apartment', 'Villa', 'House', 'Commercial', 'Plot', 'Townhouse'].map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Condition</label>
          <select
            name="condition"
            value={form.condition}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {['Excellent', 'Good', 'Average', 'Needs Renovation'].map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Bedrooms, Bathrooms, Area */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
          <input
            type="number"
            name="bedrooms"
            value={form.bedrooms}
            onChange={handleChange}
            min={1} max={20}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Bathrooms</label>
          <input
            type="number"
            name="bathrooms"
            value={form.bathrooms}
            onChange={handleChange}
            min={1} max={20}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Area (sq ft)</label>
          <input
            type="number"
            name="areaSqft"
            value={form.areaSqft}
            onChange={handleChange}
            min={100}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Amenities */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
        <div className="flex flex-wrap gap-2">
          {amenityOptions.map((a) => (
            <button
              type="button"
              key={a}
              onClick={() => toggleItem('amenities', a)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                form.amenities.includes(a)
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'
              }`}
            >
              {a}
            </button>
          ))}
        </div>
      </div>

      {/* Nearby Facilities */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Nearby Facilities</label>
        <div className="flex flex-wrap gap-2">
          {facilityOptions.map((f) => (
            <button
              type="button"
              key={f}
              onClick={() => toggleItem('nearbyFacilities', f)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                form.nearbyFacilities.includes(f)
                  ? 'bg-slate-800 text-white border-slate-800'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-slate-400'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-50 border border-red-100 rounded-xl p-3 text-red-600 text-sm">
          {error}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 rounded-xl transition-colors text-sm"
      >
        {loading
          ? 'Analyzing property...'
          : form.priceType === 'buy'
          ? 'Predict Purchase Price'
          : 'Predict Monthly Rent'}
      </button>

    </form>
  );
};

export default PricePredictor;