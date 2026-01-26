# QuranOn - Deployment Guide

## Environment Configuration

The contact forms are designed to work in both development and production environments automatically.

### Development Mode (Local)
- **API URL**: `http://localhost:3000` (local server)
- **Fallback**: Mock API when local server is not running
- **Features**: Real email sending with Gmail configuration

### Production Mode (Netlify)
- **API URL**: `/api` (Netlify Functions)
- **Backend**: Serverless functions handle form submissions
- **Features**: Real email sending through Netlify Functions

## Deployment Steps

### 1. Netlify Functions Setup
The following files are already configured:
- `netlify/functions/api/contact.js` - Contact form handler
- `netlify/functions/api/book-trial.js` - Trial booking handler
- `netlify.toml` - Netlify configuration

### 2. Environment Variables
Set these in your Netlify dashboard:
```
EMAIL_USER=your-gmail@gmail.com
EMAIL_APP_PASSWORD=your-16-character-app-password
EMAIL_TO=harham0210@gmail.com
```

### 3. Build and Deploy
```bash
npm run build
# Deploy to Netlify
```

## How It Works

### Automatic Environment Detection
The forms automatically detect the environment:
- **Development**: Uses local server at `localhost:3000`
- **Production**: Uses Netlify Functions at `/api`

### Fallback System
In development, if local server is not available:
- Forms show "Demo Mode" message
- Still validates and processes form data
- Provides user feedback about server status

### Error Handling
- Network errors are handled gracefully
- Users get clear feedback about connection issues
- Forms never crash - always provide some response

## Testing

### Local Testing
1. Start local server: `npm run dev:server`
2. Start frontend: `npm run dev`
3. Forms will use real API with email sending

### Production Testing
1. Deploy to Netlify
2. Forms will use serverless functions
3. Emails are sent through Netlify Functions

## Troubleshooting

### "Local Network Access" Warning
This warning appears when:
- Site is hosted but trying to connect to localhost
- **Solution**: The forms now auto-detect environment and use appropriate API

### Forms Not Working
1. Check environment variables are set on Netlify
2. Verify Gmail App Password is correct
3. Check Netlify Function logs

### Emails Not Sending
1. Verify Gmail credentials in environment variables
2. Check 2-Step Verification is enabled
3. Ensure App Password is generated correctly

## Features

✅ **Environment-Aware**: Automatically works in dev/prod
✅ **Fallback System**: Demo mode when server unavailable
✅ **Error Handling**: Graceful failure with user feedback
✅ **Email Integration**: Real Gmail sending in both environments
✅ **Validation**: Client and server-side validation
✅ **Security**: CORS headers and input validation
