import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from parent directory (project root)
dotenv.config({ path: path.join(__dirname, '..', '.env') });

// Create reusable transporter object using SMTP transport
const createTransporter = () => {
  // Remove spaces from app password (Gmail app passwords sometimes have spaces)
  const appPassword = process.env.EMAIL_APP_PASSWORD?.replace(/\s/g, '') || '';
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
export const sendContactEmail = async (formData) => {
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

// Send trial booking email
export const sendTrialBookingEmail = async (formData) => {
  const {
    parentName,
    email,
    phone,
    country,
    studentName,
    studentAge,
    course,
    preferredTime,
    additionalInfo
  } = formData;
  const recipientEmail = process.env.EMAIL_TO || 'harham0210@gmail.com';

  const transporter = createTransporter();

  // Map course values to readable names
  const courseNames = {
    'quran-nazira': 'Quran Nazira (Reading)',
    'hifz': 'Hifz-ul-Quran (Memorization)',
    'tajweed': 'Tajweed Mastery',
    'duas': 'Duas & Islamic Education',
    'kids': 'Kids Quran Course',
    'adult': 'Adult Quran Learning',
    'translation': 'Quran with Translation',
    'not-sure': 'Not Sure / Need Guidance'
  };

  const timeNames = {
    'morning': 'Morning (6 AM - 12 PM)',
    'afternoon': 'Afternoon (12 PM - 5 PM)',
    'evening': 'Evening (5 PM - 9 PM)',
    'flexible': 'Flexible'
  };

  const mailOptions = {
    from: `"Quran Academy Website" <${process.env.EMAIL_USER}>`,
    to: recipientEmail,
    replyTo: email,
    subject: `New Trial Class Booking Request - ${studentName}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #0891b2 0%, #0e7490 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
          .section { margin-bottom: 20px; }
          .section-title { font-size: 18px; font-weight: bold; color: #0891b2; margin-bottom: 10px; border-bottom: 2px solid #0891b2; padding-bottom: 5px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #0891b2; }
          .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; }
          .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; }
          .highlight { background: #fef3c7; padding: 15px; border-radius: 4px; margin: 15px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>🎓 New Trial Class Booking Request</h2>
          </div>
          <div class="content">
            <div class="highlight">
              <strong>Student:</strong> ${studentName} (Age: ${studentAge})<br>
              <strong>Course:</strong> ${courseNames[course] || course}<br>
              <strong>Preferred Time:</strong> ${timeNames[preferredTime] || preferredTime}
            </div>

            <div class="section">
              <div class="section-title">Parent/Guardian Information</div>
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${parentName}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              <div class="field">
                <div class="label">Country:</div>
                <div class="value">${country}</div>
              </div>
            </div>

            <div class="section">
              <div class="section-title">Student Information</div>
              <div class="field">
                <div class="label">Student Name:</div>
                <div class="value">${studentName}</div>
              </div>
              <div class="field">
                <div class="label">Student Age:</div>
                <div class="value">${studentAge} years old</div>
              </div>
            </div>

            <div class="section">
              <div class="section-title">Course Preferences</div>
              <div class="field">
                <div class="label">Interested Course:</div>
                <div class="value">${courseNames[course] || course}</div>
              </div>
              <div class="field">
                <div class="label">Preferred Time:</div>
                <div class="value">${timeNames[preferredTime] || preferredTime}</div>
              </div>
            </div>

            ${additionalInfo && additionalInfo !== 'None' ? `
            <div class="section">
              <div class="section-title">Additional Information</div>
              <div class="value">${additionalInfo.replace(/\n/g, '<br>')}</div>
            </div>
            ` : ''}
          </div>
          <div class="footer">
            <p>This email was sent from the Quran Academy website trial booking form.</p>
            <p>You can reply directly to this email to contact ${parentName}.</p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
New Trial Class Booking Request

Student: ${studentName} (Age: ${studentAge})
Course: ${courseNames[course] || course}
Preferred Time: ${timeNames[preferredTime] || preferredTime}

Parent/Guardian Information:
Name: ${parentName}
Email: ${email}
Phone: ${phone}
Country: ${country}

Additional Information:
${additionalInfo && additionalInfo !== 'None' ? additionalInfo : 'None'}
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Trial booking email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending trial booking email:', error);
    throw error;
  }
};
