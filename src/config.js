// Production build -> AWS API (unless VITE_API_URL overrides it); local dev -> localhost.
export const API_URL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.PROD ? 'https://13-204-88-163.sslip.io' : 'http://localhost:5000');