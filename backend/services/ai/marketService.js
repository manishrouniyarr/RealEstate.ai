import Groq from 'groq-sdk';

const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const getMarketInsights = async (data) => {
  const {
    location,
    propertyType,
    purpose,
    budget = '',
  } = data;

  const systemPrompt = `You are an expert real estate market analyst with deep knowledge of property markets globally.
You analyze market conditions and provide actionable insights for buyers, sellers, and investors.

CRITICAL: You must respond ONLY with a valid JSON object. No explanation, no markdown, no code blocks. Just raw JSON.

The JSON must follow this exact structure:
{
  "location": "<city/area name>",
  "propertyType": "<property type>",
  "purpose": "<investment purpose>",
  "marketTrend": "bullish" | "bearish" | "neutral" | "stable",
  "investmentScore": <number 1-10>,
  "avgPricePerSqft": "<formatted string e.g. ₹8,500/sqft>",
  "keyInsights": [
    { "label": "<insight text>", "type": "bullish" | "bearish" | "neutral" },
    { "label": "<insight text>", "type": "bullish" | "bearish" | "neutral" },
    { "label": "<insight text>", "type": "bullish" | "bearish" | "neutral" },
    { "label": "<insight text>", "type": "bullish" | "bearish" | "neutral" }
  ],
  "recommendation": "<2 sentence personalized advice based on purpose and budget>",
  "priceForecast": "<2-3 sentence forecast of price movement over next 12 months>"
}`;

  const userPrompt = `Provide market insights for:

Location: ${location}
Property Type: ${propertyType}
Purpose: ${purpose}
Budget: ${budget || 'Not specified'}

Give realistic, current market analysis for ${location}.`;

  const response = await client.chat.completions.create({
    model: 'llama-3.3-70b-versatile',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ],
    response_format: { type: 'json_object' },
    max_tokens: 1024,
  });

  const rawText = response.choices[0].message.content.trim();
  return JSON.parse(rawText);
};