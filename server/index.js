import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { sendContactEmail, sendTrialBookingEmail } from './emailService.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from parent directory (project root)
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const app = express();
const PORT = 3001; // Force port 3001 to avoid conflicts

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create data directory if it doesn't exist
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Helper function to save form data to JSON file
const saveFormData = (type, data) => {
  const filePath = path.join(dataDir, `${type}-submissions.json`);
  let submissions = [];
  
  if (fs.existsSync(filePath)) {
    const fileData = fs.readFileSync(filePath, 'utf8');
    submissions = JSON.parse(fileData);
  }
  
  const submission = {
    id: Date.now().toString(),
    timestamp: new Date().toISOString(),
    ...data
  };
  
  submissions.push(submission);
  fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2));
  
  return submission;
};

// API Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    console.log("req.body", req.body)

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please fill in all required fields' 
      });
    }

    // Save to database (JSON file)
    const submission = saveFormData('contact', {
      name,
      email,
      phone: phone || 'Not provided',
      subject,
      message
    });
    console.log("submission", submission);

    // Try to send email, but don't fail if email is not configured
    try {
      await sendContactEmail({
        name,
        email,
        phone: phone || 'Not provided',
        subject,
        message
      });
      console.log('✅ Email sent successfully');
    } catch (emailError) {
      console.warn('⚠️ Email failed but submission saved:', emailError.message);
    }

    res.json({ 
      success: true, 
      message: 'Your message has been sent successfully!',
      submissionId: submission.id
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.' 
    });
  }
});

app.post('/api/book-trial', async (req, res) => {
  try {
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
    } = req.body;

    // Validate required fields
    if (!parentName || !email || !phone || !country || !studentName || !studentAge || !course || !preferredTime) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please fill in all required fields' 
      });
    }

    // Save to database (JSON file)
    const submission = saveFormData('trial', {
      parentName,
      email,
      phone,
      country,
      studentName,
      studentAge,
      course,
      preferredTime,
      additionalInfo: additionalInfo || 'None'
    });

    // Send email
    await sendTrialBookingEmail({
      parentName,
      email,
      phone,
      country,
      studentName,
      studentAge,
      course,
      preferredTime,
      additionalInfo: additionalInfo || 'None'
    });

    res.json({ 
      success: true, 
      message: 'Your trial class booking has been received!',
      submissionId: submission.id
    });
  } catch (error) {
    console.error('Trial booking error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to book trial class. Please try again later.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📧 Email notifications will be sent to: ${process.env.EMAIL_TO || 'harham0210@gmail.com'}`);
});
