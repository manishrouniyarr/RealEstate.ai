import React from 'react';

const impactColors = {
  positive: { bg: 'bg-green-50', text: 'text-green-700', dot: 'bg-green-500' },
  negative: { bg: 'bg-red-50', text: 'text-red-700', dot: 'bg-red-500' },
  neutral: { bg: 'bg-gray-50', text: 'text-gray-700', dot: 'bg-gray-400' },
};

const PredictionResult = ({ prediction, currencySymbol = '₹', onReset }) => {
  const isRent = prediction.priceType === 'rent';

  const formatPrice = (price) =>
    `${currencySymbol}${Number(price).toLocaleString('en-IN')}`;

  return (
    <div className="space-y-6">

      {/* Price Range */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white text-center">
        <p className="text-blue-100 text-sm mb-1">
          {isRent ? 'Estimated Monthly Rent' : 'Estimated Purchase Price'}
        </p>
        <p className="text-3xl font-bold mb-1">
          {formatPrice(prediction.minPrice)} – {formatPrice(prediction.maxPrice)}
        </p>
        <p className="text-blue-200 text-sm">
          {isRent ? 'per month' : `${formatPrice(prediction.pricePerSqft)} per sq ft`}
        </p>

        <div className="flex justify-center gap-3 mt-4 flex-wrap">
          <div className="bg-white/20 rounded-xl px-4 py-2 text-center">
            <p className="text-xs text-blue-100">Type</p>
            <p className="text-base font-bold">{isRent ? 'Rent' : 'Buy'}</p>
          </div>
          <div className="bg-white/20 rounded-xl px-4 py-2 text-center">
            <p className="text-xs text-blue-100">Confidence</p>
            <p className="text-base font-bold">{prediction.confidence}%</p>
          </div>
          <div className="bg-white/20 rounded-xl px-4 py-2 text-center">
            <p className="text-xs text-blue-100">Currency</p>
            <p className="text-base font-bold">{prediction.currency}</p>
          </div>
          <div className="bg-white/20 rounded-xl px-4 py-2 text-center">
            <p className="text-xs text-blue-100">Trend</p>
            <p className="text-base font-bold capitalize">{prediction.marketTrend}</p>
          </div>
        </div>
      </div>

      {/* Recommendation */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
        <p className="text-xs font-semibold text-blue-500 uppercase tracking-wide mb-1">AI Recommendation</p>
        <p className="text-gray-800 text-sm leading-relaxed">{prediction.recommendation}</p>
      </div>

      {/* Factors */}
      <div>
        <p className="text-sm font-semibold text-gray-700 mb-3">Price Factors</p>
        <div className="space-y-2">
          {prediction.factors.map((factor, i) => {
            const style = impactColors[factor.impact] || impactColors.neutral;
            return (
              <div key={i} className={`flex items-center gap-3 rounded-lg px-3 py-2 ${style.bg}`}>
                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${style.dot}`} />
                <p className={`text-sm ${style.text}`}>{factor.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Summary */}
      <div className="bg-gray-50 rounded-xl p-4">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Market Summary</p>
        <p className="text-gray-700 text-sm leading-relaxed">{prediction.summary}</p>
      </div>

      {/* Reset */}
      <button
        onClick={onReset}
        className="w-full py-3 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50 transition-colors"
      >
        Analyze Another Property
      </button>

    </div>
  );
};

export default PredictionResult;