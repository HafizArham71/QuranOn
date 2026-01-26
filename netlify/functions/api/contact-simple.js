exports.handler = async (event, context) => {
  console.log('Contact simple function called');
  
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
  }

  try {
    const body = JSON.parse(event.body);
    console.log('Received data:', body);
    
    // Check environment variables
    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_APP_PASSWORD;
    const emailTo = process.env.EMAIL_TO;
    
    console.log('Environment check:');
    console.log('- EMAIL_USER exists:', !!emailUser);
    console.log('- EMAIL_APP_PASSWORD exists:', !!emailPassword);
    console.log('- EMAIL_TO:', emailTo);
    console.log('- All env vars set:', !!(emailUser && emailPassword && emailTo));

    // If environment variables are set, try to send real email
    if (emailUser && emailPassword && emailTo) {
      try {
        const nodemailer = require('nodemailer');
        
        const transporter = nodemailer.createTransporter({
          service: 'gmail',
          auth: {
            user: emailUser,
            pass: emailPassword.replace(/\s/g, '')
          }
        });

        const mailOptions = {
          from: `"Quran Academy Website" <${emailUser}>`,
          to: emailTo,
          replyTo: body.email,
          subject: `New Contact Form Submission: ${body.subject}`,
          text: `
Name: ${body.name}
Email: ${body.email}
Phone: ${body.phone || 'Not provided'}
Subject: ${body.subject}

Message:
${body.message}
          `
        };

        const result = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', result.messageId);
        
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({
            success: true,
            message: 'Your message has been sent successfully!',
            submissionId: Date.now().toString(),
            emailSent: true
          }),
        };
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({
            success: true,
            message: 'Message received! (Email service temporarily unavailable)',
            submissionId: Date.now().toString(),
            emailSent: false,
            error: emailError.message
          }),
        };
      }
    } else {
      // No environment variables - demo mode
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          message: 'Message Received! (Demo Mode - Environment variables not configured)',
          submissionId: Date.now().toString(),
          emailSent: false,
          demo: true,
          envStatus: {
            emailUser: !!emailUser,
            emailPassword: !!emailPassword,
            emailTo: !!emailTo
          }
        }),
      };
    }
  } catch (error) {
    console.error('Error in contact simple:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        message: 'Error processing request: ' + error.message,
        error: error.toString()
      }),
    };
  }
};
