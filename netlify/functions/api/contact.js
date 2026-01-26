const nodemailer = require('nodemailer');

// Create reusable transporter object using SMTP transport
const createTransporter = () => {
  const appPassword = (process.env.EMAIL_APP_PASSWORD && process.env.EMAIL_APP_PASSWORD.replace(/\s/g, '')) || '';
  const emailUser = process.env.EMAIL_USER || '';
  
  console.log("EMAIL_USER:", emailUser ? emailUser : "MISSING");
  console.log("EMAIL_APP_PASSWORD:", appPassword ? "SET" : "MISSING");

  // If email credentials are not configured, return a mock transporter
  if (!emailUser || !appPassword) {
    console.warn('⚠️  Email credentials not configured. Using mock email service.');
    return {
      sendMail: async (mailOptions) => {
        console.log('📧 MOCK EMAIL - Would send:', {
          to: mailOptions.to,
          subject: mailOptions.subject,
          from: mailOptions.from
        });
        return {
          messageId: 'mock-' + Date.now(),
          response: 'Mock email sent successfully'
        };
      }
    };
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: appPassword
    }
  });
};

// Send contact form email
const sendContactEmail = async (formData) => {
  const { name, email, phone, subject, message } = formData;
  const recipientEmail = process.env.EMAIL_TO || 'harham0210@gmail.com';

  const transporter = createTransporter();

  const mailOptions = {
    from: `"Quran Academy Website" <${process.env.EMAIL_USER}>`,
    to: recipientEmail,
    replyTo: email,
    subject: `New Contact Form Submission: ${subject}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #0891b2 0%, #0e7490 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #0891b2; }
          .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; }
          .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>📧 New Contact Form Submission</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value">${phone}</div>
            </div>
            <div class="field">
              <div class="label">Subject:</div>
              <div class="value">${subject}</div>
            </div>
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${message.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent from the Quran Academy website contact form.</p>
            <p>You can reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}

Message:
${message}
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Contact email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending contact email:', error);
    throw error;
  }
};

exports.handler = async (event, context) => {
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
    const { name, email, phone, subject, message } = JSON.parse(event.body);

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: 'Please fill in all required fields',
        }),
      };
    }

    // Send email
    await sendContactEmail({
      name,
      email,
      phone: phone || 'Not provided',
      subject,
      message,
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Your message has been sent successfully!',
        submissionId: Date.now().toString(),
      }),
    };
  } catch (error) {
    console.error('Contact form error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        message: 'Failed to send message. Please try again later.',
      }),
    };
  }
};
