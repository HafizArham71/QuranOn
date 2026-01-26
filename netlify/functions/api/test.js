exports.handler = async (event, context) => {
  console.log('Test function called');
  console.log('Event:', JSON.stringify(event, null, 2));
  
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
    },
    body: JSON.stringify({
      success: true,
      message: 'Test function working!',
      timestamp: new Date().toISOString()
    })
  };
};
