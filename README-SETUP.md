# Full-Stack Setup Guide

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Email Settings

1. Copy `.env.example` to `.env` (if not already done):
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` file and add your Gmail credentials:

   **Important:** You need to use a Gmail App Password, NOT your regular Gmail password.

   **To generate a Gmail App Password:**
   1. Go to your [Google Account](https://myaccount.google.com/)
   2. Click on **Security** in the left sidebar
   3. Enable **2-Step Verification** (if not already enabled)
   4. Go to **App passwords** (under Security)
   5. Select **Mail** and **Other (Custom name)**
   6. Enter "Quran Academy Website" as the name
   7. Click **Generate**
   8. Copy the 16-character password
   9. Paste it in your `.env` file as `EMAIL_APP_PASSWORD`

   **Example `.env` file:**
   ```env
   PORT=3000
   EMAIL_USER=your-email@gmail.com
   EMAIL_APP_PASSWORD=abcd efgh ijkl mnop
   EMAIL_TO=harham0210@gmail.com
   ```

### 3. Start the Development Servers

**Option 1: Run both frontend and backend together (Recommended)**
```bash
npm run dev:all
```

**Option 2: Run separately in different terminals**

Terminal 1 (Frontend):
```bash
npm run dev
```

Terminal 2 (Backend):
```bash
npm run dev:server
```

### 4. Access Your Application

- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:3000
- **Health Check:** http://localhost:3000/api/health

## 📧 Email Configuration

The website will send emails to `harham0210@gmail.com` when:
- Users submit the contact form
- Users book a trial class

All form submissions are also saved to JSON files in the `server/data/` directory:
- `contact-submissions.json` - Contact form submissions
- `trial-submissions.json` - Trial booking submissions

## 🗄️ Database

Currently, form submissions are stored in JSON files. For production, consider migrating to:
- MongoDB
- PostgreSQL
- MySQL

## 🔧 Troubleshooting

### Email not sending?

1. **Check your Gmail App Password:**
   - Make sure you're using an App Password, not your regular password
   - App Passwords are 16 characters with spaces (remove spaces in .env)

2. **Verify 2-Step Verification is enabled:**
   - Gmail requires 2-Step Verification to use App Passwords

3. **Check server logs:**
   - Look for error messages in the terminal where the backend is running

### CORS Errors?

- Make sure the backend server is running on port 3000
- Check that the frontend is making requests to `http://localhost:3000`

### Port Already in Use?

- Change the `PORT` in `.env` file
- Update the API URL in frontend components if you change the port

## 📝 API Endpoints

- `POST /api/contact` - Submit contact form
- `POST /api/book-trial` - Book trial class
- `GET /api/health` - Health check

## 🚀 Production Deployment

For production:
1. Set up environment variables on your hosting platform
2. Use a proper database (MongoDB, PostgreSQL, etc.)
3. Set up proper email service (SendGrid, Mailgun, etc.)
4. Configure CORS for your production domain
5. Use HTTPS for secure connections
