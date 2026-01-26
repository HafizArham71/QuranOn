# 🚀 Quick Start Guide

## Step 1: Install Dependencies

First, make sure all dependencies are installed:

```bash
npm install
```

This will install both frontend and backend dependencies.

## Step 2: Verify Email Configuration

Your `.env` file is already configured with:
- Email: `harham0210@gmail.com`
- App Password: Already set

**Note:** Make sure your Gmail App Password is correct. If emails aren't sending, you may need to regenerate it.

## Step 3: Run Both Frontend and Backend

### Option 1: Run Both Together (Recommended) ✨

Open **one terminal** and run:

```bash
npm run dev:all
```

This will start:
- **Frontend** on http://localhost:5173
- **Backend** on http://localhost:3000

### Option 2: Run Separately

If you prefer to run them in separate terminals:

**Terminal 1 - Frontend:**
```bash
npm run dev
```
Frontend will run on http://localhost:5173

**Terminal 2 - Backend:**
```bash
npm run dev:server
```
Backend will run on http://localhost:3000

## Step 4: Access Your Website

1. **Open your browser** and go to: **http://localhost:5173**
2. You should see your Quran Academy website!

## ✅ Verification

To verify everything is working:

1. **Frontend:** Visit http://localhost:5173 - You should see your website
2. **Backend:** Visit http://localhost:3000/api/health - You should see `{"status":"ok","message":"Server is running"}`
3. **Test Contact Form:** Fill out the contact form and check your email (harham0210@gmail.com)

## 🐛 Troubleshooting

### Port Already in Use?

If you see "Port 5173 is in use" or "Port 3000 is in Use":

1. **Kill existing processes:**
   ```bash
   # Windows PowerShell
   Get-Process -Name node | Stop-Process -Force
   ```

2. **Or change the port** in `.env`:
   ```
   PORT=3001
   ```
   Then update the API URL in your frontend forms.

### Email Not Sending?

1. **Check your Gmail App Password:**
   - Make sure you're using an App Password (16 characters), not your regular password
   - Remove spaces from the app password in `.env` file
   - Example: `EMAIL_APP_PASSWORD=llwqktzrdclztggz` (no spaces)

2. **Verify 2-Step Verification is enabled** on your Google Account

3. **Check server logs** for error messages

### Blank White Screen?

1. **Check browser console** (F12) for errors
2. **Make sure both servers are running**
3. **Clear browser cache** and hard refresh (Ctrl+Shift+R)

## 📝 Available Commands

- `npm run dev` - Start frontend only
- `npm run dev:server` - Start backend only
- `npm run dev:all` - Start both frontend and backend
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎯 What Happens When Forms Are Submitted?

1. **Contact Form** → Email sent to `harham0210@gmail.com` + Saved to `server/data/contact-submissions.json`
2. **Trial Booking** → Email sent to `harham0210@gmail.com` + Saved to `server/data/trial-submissions.json`

---

**That's it! Your full-stack website is ready to run! 🎉**
