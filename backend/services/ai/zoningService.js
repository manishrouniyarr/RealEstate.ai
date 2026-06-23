import Property from '../../models/Property.js';
import anthropic from '../../config/openai.js';
import { zoningPrompt } from '../../utils/prompts.js';

export const analyzeZoning = async (propertyId) => {
  const property = await Property.findById(propertyId);

  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1024,
    messages: [{
      role: 'user',
      content: zoningPrompt(property)
    }]
  });

  const rawText = response.content[0].text.trim();
  const cleaned = rawText.replace(/^```json\n?/, '').replace(/\n?```$/, '').trim();
  const result = JSON.parse(cleaned);

  return result;
};