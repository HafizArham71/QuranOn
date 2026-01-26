exports.handler = async (event, context) => {
  console.log('=== DEBUG FUNCTION CALLED ===');
  console.log('HTTP Method:', event.httpMethod);
  console.log('Headers:', JSON.stringify(event.headers, null, 2));
  console.log('Body:', event.body);
  
  // Check all environment variables
  const envVars = {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_APP_PASSWORD: process.env.EMAIL_APP_PASSWORD ? 'SET' : 'MISSING',
    EMAIL_TO: process.env.EMAIL_TO,
    NODE_ENV: process.env.NODE_ENV,
    // Check for any other email-related vars
    allEnvVars: Object.keys(process.env).filter(key => 
      key.toLowerCase().includes('email') || 
      key.toLowerCase().includes('mail')
    )
  };
  
  console.log('Environment Variables:', JSON.stringify(envVars, null, 2));
  
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: 'Debug information',
      environment: envVars,
      timestamp: new Date().toISOString()
    })
  };
};
