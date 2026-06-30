import React, { useState } from 'react';
import useMarketInsights from '../hooks/useMarketInsights';

const propertyTypes = ['Apartment', 'Villa', 'House', 'Commercial', 'Plot', 'Office'];
const purposes = ['Investment', 'Self Use', 'Rental Income', 'Resale'];

const trendColors = {
  bullish: { bg: 'bg-green-50', text: 'text-green-700', dot: 'bg-green-500', label: '↑ Bullish' },
  bearish: { bg: 'bg-red-50', text: 'text-red-700', dot: 'bg-red-500', label: '↓ Bearish' },
  neutral: { bg: 'bg-gray-50', text: 'text-gray-700', dot: 'bg-gray-400', label: '→ Neutral' },
  stable: { bg: 'bg-blue-50', text: 'text-blue-700', dot: 'bg-blue-500', label: '= Stable' },
};

const initialForm = {
  location: '',
  propertyType: 'Apartment',
  purpose: 'Investment',
  budget: '',
};

const MarketInsights = () => {
  const [form, setForm] = useState(initialForm);
  const { insights, loading, error, fetchInsights, reset } = useMarketInsights();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchInsights(form);
  };

  if (insights) {
    const trend = trendColors[insights.marketTrend?.toLowerCase()] || trendColors.neutral;
    return (
      <div className="space-y-5">
        {/* Header */}
        <div className="bg-gradient-to-br from-slate-900 to-blue-700 rounded-2xl p-6 text-white text-center">
          <p className="text-blue-100 text-sm mb-1">Market Analysis for</p>
          <p className="text-2xl font-bold mb-1">{insights.location}</p>
          <p className="text-blue-200 text-sm">{insights.propertyType} · {insights.purpose}</p>
          <div className="flex justify-center gap-3 mt-4 flex-wrap">
            <div className="bg-white/20 rounded-xl px-4 py-2 text-center">
              <p className="text-xs text-blue-100">Market Trend</p>
              <p className="text-base font-bold capitalize">{insights.marketTrend}</p>
            </div>
            <div className="bg-white/20 rounded-xl px-4 py-2 text-center">
              <p className="text-xs text-blue-100">Investment Score</p>
              <p className="text-base font-bold">{insights.investmentScore}/10</p>
            </div>
            <div className="bg-white/20 rounded-xl px-4 py-2 text-center">
              <p className="text-xs text-blue-100">Avg Price/sqft</p>
              <p className="text-base font-bold">{insights.avgPricePerSqft}</p>
            </div>
          </div>
        </div>

        {/* Key Insights */}
        {insights.keyInsights && (
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-3">Key Market Insights</p>
            <div className="space-y-2">
              {insights.keyInsights.map((item, i) => {
                const style = trendColors[item.type] || trendColors.neutral;
                return (
                  <div key={i} className={`flex items-start gap-3 rounded-lg px-3 py-2 ${style.bg}`}>
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 mt-1.5 ${style.dot}`} />
                    <p className={`text-sm ${style.text}`}>{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Recommendation */}
        {insights.recommendation && (
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">AI Recommendation</p>
            <p className="text-gray-800 text-sm leading-relaxed">{insights.recommendation}</p>
          </div>
        )}

        {/* Price Forecast */}
        {insights.priceForecast && (
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">12-Month Price Forecast</p>
            <p className="text-gray-700 text-sm leading-relaxed">{insights.priceForecast}</p>
          </div>
        )}

        <button
          onClick={reset}
          className="w-full py-3 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50 transition-colors"
        >
          Analyze Another Market
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Location / City</label>
        <input
          type="text"
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="e.g. Bangalore, India"
          required
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
          <select
            name="propertyType"
            value={form.propertyType}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {propertyTypes.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Purpose</label>
          <select
            name="purpose"
            value={form.purpose}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {purposes.map((p) => <option key={p}>{p}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Budget (optional)</label>
        <input
          type="text"
          name="budget"
          value={form.budget}
          onChange={handleChange}
          placeholder="e.g. ₹50 Lakhs or $200,000"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-100 rounded-xl p-3 text-red-600 text-sm">{error}</div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 rounded-xl transition-colors text-sm"
      >
        {loading ? 'Analyzing market...' : 'Get Market Insights'}
      </button>
    </form>
  );
};

export default MarketInsights;