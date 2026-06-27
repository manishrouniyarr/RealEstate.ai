import { useState } from 'react';

const useCostEstimator = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const estimateCost = async (formData) => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('https://realestate-ai-wrw0.onrender.com/api/ai/estimate-cost', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Estimation failed');
      setResult(data.estimate);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => { setResult(null); setError(null); };

  return { result, loading, error, estimateCost, reset };
};

export default useCostEstimator;