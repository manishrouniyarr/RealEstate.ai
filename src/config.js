// Single source of truth for the backend URL.
// Production: set VITE_API_URL in Vercel. Local dev: falls back to localhost.
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';