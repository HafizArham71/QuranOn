// Fallback API for when backend is not available
export const mockApiCall = async (endpoint, data) => {
  console.log('🔄 Using fallback API for:', endpoint, data);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simulate successful response
  return {
    success: true,
    message: endpoint.includes('contact') 
      ? 'Your message has been received! (Demo Mode)'
      : 'Your trial booking has been received! (Demo Mode)',
    submissionId: Date.now().toString(),
    demo: true
  };
};

export const isLocalServerAvailable = async () => {
  try {
    // In development, test local server
    const response = await fetch('http://localhost:3001/api/health');
    return response.ok;
  } catch (error) {
    console.log('Health check failed:', error.message);
    return false;
  }
};
