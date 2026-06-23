import React, { useState } from 'react';
import useCostEstimator from '../hooks/useCostEstimator';

const workTypes = ['New Construction', 'Remodeling', 'Renovation', 'Maintenance', 'Interior Design', 'Landscaping'];
const qualities = ['Budget', 'Standard', 'Premium', 'Luxury'];
const propertyTypes = ['Apartment', 'Villa', 'House', 'Commercial', 'Office'];

const initialForm = {
  location: '',
  propertyType: 'Apartment',
  workType: 'New Construction',
  areaSqft: 1000,
  quality: 'Standard',
  floors: 1,
  notes: '',
};

const CostEstimator = () => {
  const [form, setForm] = useState(initialForm);
  const { result, loading, error, estimateCost, reset } = useCostEstimator();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    estimateCost(form);
  };

  if (result) {
    return (
      <div className="space-y-5">
        {/* Total Cost */}
        <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-6 text-white text-center">
          <p className="text-green-100 text-sm mb-1">Estimated Total Cost</p>
          <p className="text-3xl font-bold mb-1">{result.minCost} – {result.maxCost}</p>
          <p className="text-green-200 text-sm">{result.currency} · {result.workType}</p>
          <div className="flex justify-center gap-3 mt-4 flex-wrap">
            <div className="bg-white/20 rounded-xl px-4 py-2 text-center">
              <p className="text-xs text-green-100">Per Sq Ft</p>
              <p className="text-base font-bold">{result.costPerSqft}</p>
            </div>
            <div className="bg-white/20 rounded-xl px-4 py-2 text-center">
              <p className="text-xs text-green-100">Timeline</p>
              <p className="text-base font-bold">{result.timeline}</p>
            </div>
            <div className="bg-white/20 rounded-xl px-4 py-2 text-center">
              <p className="text-xs text-green-100">Quality</p>
              <p className="text-base font-bold">{result.quality}</p>
            </div>
          </div>
        </div>

        {/* Breakdown */}
        {result.breakdown && (
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-3">Cost Breakdown</p>
            <div className="space-y-2">
              {result.breakdown.map((item, i) => (
                <div key={i} className="flex justify-between items-center bg-gray-50 rounded-lg px-3 py-2">
                  <span className="text-sm text-gray-700">{item.category}</span>
                  <span className="text-sm font-semibold text-gray-900">{item.cost}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tips */}
        {result.tips && (
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
            <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-1">Cost-Saving Tips</p>
            <p className="text-gray-800 text-sm leading-relaxed">{result.tips}</p>
          </div>
        )}

        {/* Summary */}
        {result.summary && (
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Summary</p>
            <p className="text-gray-700 text-sm leading-relaxed">{result.summary}</p>
          </div>
        )}

        <button
          onClick={reset}
          className="w-full py-3 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50 transition-colors"
        >
          Estimate Another Project
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Location */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
        <input
          type="text"
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="e.g. Mumbai, India"
          required
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Property Type & Work Type */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
          <select
            name="propertyType"
            value={form.propertyType}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {propertyTypes.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Work Type</label>
          <select
            name="workType"
            value={form.workType}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {workTypes.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
      </div>

      {/* Area, Floors, Quality */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Area (sq ft)</label>
          <input
            type="number"
            name="areaSqft"
            value={form.areaSqft}
            onChange={handleChange}
            min={100}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Floors</label>
          <input
            type="number"
            name="floors"
            value={form.floors}
            onChange={handleChange}
            min={1} max={50}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Quality</label>
          <select
            name="quality"
            value={form.quality}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {qualities.map((q) => <option key={q}>{q}</option>)}
          </select>
        </div>
      </div>

      {/* Notes */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes (optional)</label>
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          placeholder="e.g. Include solar panels, smart home wiring..."
          rows={3}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
        />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-100 rounded-xl p-3 text-red-600 text-sm">{error}</div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-semibold py-3 rounded-xl transition-colors text-sm"
      >
        {loading ? 'Calculating costs...' : 'Estimate Project Cost'}
      </button>
    </form>
  );
};

export default CostEstimator;