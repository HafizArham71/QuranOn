# QuranOn - Firebase Migration Guide

## 🚀 Complete Firebase Setup

### 1. Install Firebase CLI
```bash
npm install -g firebase-tools
```

### 2. Login to Firebase
```bash
firebase login
```

### 3. Initialize Firebase Project
```bash
firebase init
```
- Choose **Hosting** and **Functions**
- Select existing project or create new one
- Use `dist` as public directory
- Configure as single-page app (SPA)

### 4. Configure Email Environment Variables
```bash
firebase functions:config:set email.user="your-gmail@gmail.com"
firebase functions:config:set email.password="your-16-character-app-password"
firebase functions:config:set email.to="harham0210@gmail.com"
```

### 5. Deploy to Firebase
```bash
# Deploy everything
npm run firebase:deploy

# Or deploy separately
npm run firebase:deploy:functions
npm run firebase:deploy:hosting
```

## 🔧 Firebase Configuration

### firebase.json
- Hosting configured for SPA
- Functions with Node.js 18 runtime
- Proper rewrites for React Router

### Firebase Functions
- **Contact Form**: `/contact` endpoint
- **Trial Booking**: `/bookTrial` endpoint
- **Email Integration**: Gmail SMTP with Nodemailer
- **CORS**: Enabled for cross-origin requests

## 🌍 Environment Detection

### Development (Local)
- **API URL**: `http://localhost:3001` (local server)
- **Forms**: Use local Express server for real emails

### Production (Firebase)
- **API URL**: `https://us-central1-quranon-website.cloudfunctions.net`
- **Forms**: Use Firebase Cloud Functions
- **Email**: Sent through Firebase Functions

## 📧 Email Setup

### Gmail App Password
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Security → 2-Step Verification (enable if not already)
3. App passwords → Generate app password
4. Select "Mail" and "Other (Custom name)"
5. Copy the 16-character password

### Set Environment Variables
```bash
firebase functions:config:set email.user="harham0210@gmail.com"
firebase functions:config:set email.password="your-16-character-app-password"
firebase functions:config:set email.to="harham0210@gmail.com"
```

## 🚀 Deployment Commands

### Full Deployment
```bash
npm run build
npm run firebase:deploy
```

### Functions Only
```bash
npm run firebase:deploy:functions
```

### Hosting Only
```bash
npm run firebase:deploy:hosting
```

## 🔍 Testing

### Local Testing
```bash
# Start local server for emails
npm run dev:server

# Start frontend
npm run dev

# Test forms with real email sending
```

### Firebase Functions Testing
```bash
# Test functions locally
cd firebase-functions
npm run shell
```

### Production Testing
- Deploy to Firebase
- Test forms on hosted site
- Check Firebase Console logs

## 🎯 Benefits of Firebase

✅ **Reliable Hosting**: Fast global CDN
✅ **Serverless Functions**: No server management
✅ **Environment Variables**: Secure configuration
✅ **Scalability**: Auto-scaling infrastructure
✅ **Analytics**: Built-in performance monitoring
✅ **Security**: HTTPS by default

## 📋 Firebase Console

After deployment, monitor:
- **Functions**: Check function logs and performance
- **Hosting**: View deployment history
- **Usage**: Monitor function invocations
- **Error Reporting**: Track any issues

## 🔄 Migration from Netlify

1. ✅ Removed Netlify configuration
2. ✅ Added Firebase hosting config
3. ✅ Created Firebase Cloud Functions
4. ✅ Updated API endpoints
5. ✅ Configured environment variables
6. ✅ Added deployment scripts

Your website is now fully migrated to Firebase! 🎉
