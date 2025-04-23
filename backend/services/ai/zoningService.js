import Property from '../../models/Property.js';
import openai from '../../config/openai.js';
import { zoningPrompt } from '../../utils/prompts.js';

export const analyzeZoning = async (propertyId) => {
  const property = await Property.findById(propertyId);
  
  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo",
    response_format: { type: "json_object" },
    messages: [{
      role: "user",
      content: zoningPrompt(property) // Predefined prompt
    }]
  });

  const result = JSON.parse(response.choices[0].message.content);
  
  await Property.findByIdAndUpdate(propertyId, {
    'aiAnalysis.zoningRecommendations': result.recommendations
  });

  return result;
};