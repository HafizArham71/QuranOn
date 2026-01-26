// API Configuration utility for different environments
export const getApiUrl = () => {
  // Check for explicit environment variable first
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  
  // Development environment - use local server
  if (import.meta.env.DEV) {
    return 'http://localhost:3001';
  }
  
  // Production environment - use Firebase Functions
  return 'https://us-central1-quranon-website.cloudfunctions.net';
};

export const isDevelopment = () => import.meta.env.DEV;
export const isProduction = () => import.meta.env.PROD;
