import { useState } from 'react';

const useMarketInsights = () => {
  const [insights, setInsights] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchInsights = async (formData) => {
    setLoading(true);
    setError(null);
    setInsights(null);

    try {
      const response = await fetch('https://realestate-ai-wrw0.onrender.com/api/ai/market-insights', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to fetch insights');
      setInsights(data.insights);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => { setInsights(null); setError(null); };

  return { insights, loading, error, fetchInsights, reset };
};

export default useMarketInsights;