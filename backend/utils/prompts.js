export const zoningPrompt = (property) => `
As a real estate zoning expert, analyze this property:
- Address: ${property.address}
- Current Zoning: ${property.location.zoning}

Recommend 3 optimal zoning changes with ROI estimates.
Respond in JSON format:
{
  "recommendations": [{
    "zoningType": "string",
    "projectedROI": number,
    "rationale": "string"
  }]
}
`;