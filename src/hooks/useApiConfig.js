import { useState, useEffect } from 'react';
import { getApiUrl, isDevelopment } from '../utils/apiConfig';

export const useApiConfig = () => {
  const [apiUrl, setApiUrl] = useState(getApiUrl());
  const [isLocalServer, setIsLocalServer] = useState(isDevelopment());

  useEffect(() => {
    // Check if local server is available in development
    if (isDevelopment()) {
      const checkServer = async () => {
        try {
          const response = await fetch('http://localhost:3000/api/health');
          if (response.ok) {
            setApiUrl('http://localhost:3000');
            setIsLocalServer(true);
          } else {
            // Fallback to mock API or show error
            setApiUrl('/api');
            setIsLocalServer(false);
          }
        } catch (error) {
          console.log('Local server not available, using fallback');
          setApiUrl('/api');
          setIsLocalServer(false);
        }
      };

      checkServer();
    }
  }, []);

  return { apiUrl, isLocalServer };
};
