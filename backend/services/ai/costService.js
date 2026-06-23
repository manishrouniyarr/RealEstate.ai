import Groq from 'groq-sdk';

const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const estimateProjectCost = async (data) => {
  const {
    location,
    propertyType,
    workType,
    areaSqft,
    quality,
    floors = 1,
    notes = '',
  } = data;

  const systemPrompt = `You are an expert construction cost estimator with deep knowledge of building costs globally.
You analyze project details and provide accurate cost estimates based on location, materials, labor, and market rates.

CRITICAL: You must respond ONLY with a valid JSON object. No explanation, no markdown, no code blocks. Just raw JSON.

The JSON must follow this exact structure:
{
  "minCost": "<formatted string e.g. ₹12,00,000 or $50,000>",
  "maxCost": "<formatted string>",
  "costPerSqft": "<formatted string e.g. ₹1,200/sqft>",
  "currency": "<INR or USD or relevant>",
  "workType": "<work type>",
  "quality": "<quality tier>",
  "timeline": "<estimated duration e.g. 6-8 months>",
  "breakdown": [
    { "category": "<e.g. Foundation>", "cost": "<formatted string>" },
    { "category": "<e.g. Structure>", "cost": "<formatted string>" },
    { "category": "<e.g. Finishing>", "cost": "<formatted string>" },
    { "category": "<e.g. Electrical>", "cost": "<formatted string>" },
    { "category": "<e.g. Plumbing>", "cost": "<formatted string>" }
  ],
  "tips": "<2-3 practical cost-saving tips for this project>",
  "summary": "<2-3 sentence summary of the estimate and key cost drivers>"
}`;

  const userPrompt = `Estimate the cost for this construction/renovation project:

Location: ${location}
Property Type: ${propertyType}
Work Type: ${workType}
Area: ${areaSqft} sq ft
Floors: ${floors}
Quality: ${quality}
Additional Notes: ${notes || 'None'}

Return realistic cost values for the ${location} market.`;

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