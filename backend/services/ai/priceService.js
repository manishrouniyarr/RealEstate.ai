import Groq from 'groq-sdk';

const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const predictPropertyPrice = async (propertyData) => {
  const {
    location,
    propertyType,
    bedrooms,
    bathrooms,
    areaSqft,
    condition,
    amenities = [],
    nearbyFacilities = [],
    currency = 'INR',
    priceType = 'buy',
  } = propertyData;

  const priceInstruction = priceType === 'buy'
    ? `CRITICAL: The price must represent TOTAL PROPERTY PURCHASE VALUE (not rent). 
       Use realistic market values. For Indian properties use lakhs/crores range (e.g. ₹40,00,000 to ₹2,00,00,000).
       For US properties use hundreds of thousands to millions range.`
    : `CRITICAL: The price must represent MONTHLY RENTAL VALUE only (not purchase price).
       Use realistic monthly rent. For Indian properties use thousands range (e.g. ₹15,000 to ₹80,000/month).
       For US properties use $1,000 to $5,000/month range.`;

  const systemPrompt = `You are an expert real estate valuation AI with deep knowledge of property markets globally.
You analyze property details and provide accurate price predictions based on market data, location factors, and property characteristics.

${priceInstruction}

CRITICAL: You must respond ONLY with a valid JSON object. No explanation, no markdown, no code blocks. Just raw JSON.

The JSON must follow this exact structure:
{
  "minPrice": <number in ${currency}>,
  "maxPrice": <number in ${currency}>,
  "confidence": <number 0-100>,
  "pricePerSqft": <number in ${currency}>,
  "currency": "${currency}",
  "priceType": "${priceType}",
  "factors": [
    { "label": "<factor description>", "impact": "positive" | "negative" | "neutral" }
  ],
  "recommendation": "<one sentence advice for buyer/investor>",
  "marketTrend": "rising" | "stable" | "declining",
  "summary": "<2-3 sentence market summary>"
}`;

  const userPrompt = `Predict the ${priceType === 'buy' ? 'purchase price' : 'monthly rent'} for this property in ${currency}:

Location: ${location}
Property Type: ${propertyType}
Bedrooms: ${bedrooms}
Bathrooms: ${bathrooms}
Area: ${areaSqft} sq ft
Condition: ${condition}
Amenities: ${amenities.length > 0 ? amenities.join(', ') : 'None specified'}
Nearby Facilities: ${nearbyFacilities.length > 0 ? nearbyFacilities.join(', ') : 'None specified'}
Price Type: ${priceType === 'buy' ? 'Total Purchase Value' : 'Monthly Rent'}
Currency: ${currency}

Return realistic ${currency} values for the ${location} market.`;

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
  const prediction = JSON.parse(rawText);
  return prediction;
};