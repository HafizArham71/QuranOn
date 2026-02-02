# 🕌 QuranOn - Online Quran Learning Platform

A modern, responsive web application for online Quran education with certified teachers, offering personalized learning experiences for students worldwide.

## 🌟 Features

### 📚 Core Educational Features
- **Live One-on-One Classes** - Personalized Quran education with certified teachers
- **Multiple Learning Paths** - Quran Reading, Memorization (Hifz), Tajweed, Islamic Values
- **Interactive Learning** - Real-time video sessions with screen sharing and digital whiteboard
- **Progress Tracking** - Comprehensive dashboard for parents and students
- **Flexible Scheduling** - Classes that fit your family's schedule

### 🎯 Student Experience
- **Free Trial Classes** - 3-day free trial with no credit card required
- **Certified Teachers** - 500+ expert Quran teachers from around the world
- **Personalized Curriculum** - Learning paths adapted to each student's pace
- **Multilingual Support** - Teachers fluent in English, Urdu, Arabic, and more
- **Age-Appropriate Content** - Tailored programs for children and adults

### 🏠 Parent Features
- **Parent Dashboard** - Monitor your child's progress and attendance
- **Class Recordings** - Access recorded sessions for review
- **Progress Reports** - Detailed monthly progress summaries
- **Teacher Communication** - Direct messaging with instructors
- **Payment Management** - Secure subscription and payment processing

### 💻 Technical Features
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Modern UI/UX** - Clean, intuitive interface inspired by top educational platforms
- **Secure Authentication** - User registration and login system
- **Real-time Notifications** - Email and in-app alerts for classes
- **Performance Analytics** - Learning insights and recommendations

## 🚀 Technology Stack

### Frontend
- **React 18** - Modern, component-based architecture
- **React Router** - Client-side routing and navigation
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Lucide React** - Beautiful, consistent icon library
- **Toast Notifications** - User-friendly notification system

### Backend & Services
- **Formspree** - Contact form handling and email notifications
- **Firebase Hosting** - Fast, secure web hosting
- **Vite** - Lightning-fast build tool and development server

### Development Tools
- **ESLint** - Code quality and consistency
- **Prettier** - Code formatting and style
- **Git** - Version control and collaboration

## 📁 Project Structure

```
quranon/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── Button.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Courses.jsx
│   │   ├── PrivacyPolicySimple.jsx
│   │   └── TermsOfService.jsx
│   ├── mock.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Git for version control

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/HafizArham71/QuranOn.git
   cd QuranOn
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Production Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Preview production build**
   ```bash
   npm run preview
   ```

3. **Deploy to hosting**
   The application is configured for Firebase Hosting. Deploy with:
   ```bash
   firebase deploy
   ```

## 📱 Pages & Routes

### 🏠 Home Page (`/`)
- **Hero Section** - Eye-catching design with call-to-action buttons
- **Features Showcase** - Core educational offerings
- **Social Proof** - Student testimonials and statistics
- **Trust Indicators** - Certifications and partnerships

### 📖 About Page (`/about`)
- **Mission & Vision** - Our educational philosophy
- **Teacher Profiles** - Meet our certified instructors
- **Success Stories** - Student achievements and testimonials
- **Platform History** - Our journey and growth

### 📚 Courses Page (`/courses`)
- **Course Catalog** - Detailed program descriptions
- **Pricing Plans** - Flexible subscription options
- **Curriculum Overview** - Learning objectives and outcomes
- **Enrollment Process** - How to get started

### 📞 Contact Page (`/contact`)
- **Contact Form** - Secure inquiry submission
- **Support Information** - Email, phone, and office hours
- **FAQ Section** - Common questions and answers
- **Location Details** - Physical office information

### 📋 Legal Pages
- **Privacy Policy** (`/privacy`) - Data protection and privacy
- **Terms of Service** (`/terms`) - Terms and conditions

## 🎨 Design System

### Color Palette
- **Primary Colors** - Emerald, Teal, Cyan (Islamic-inspired green tones)
- **Secondary Colors** - Orange, Red for CTAs and highlights
- **Neutral Colors** - Gray shades for text and backgrounds
- **Accent Colors** - Yellow for special features and highlights

### Typography
- **Headings** - Bold, modern sans-serif fonts
- **Body Text** - Clean, readable fonts for optimal learning
- **Arabic Text** - Proper Arabic font support for Quranic content

### UI Components
- **Buttons** - Consistent styling with hover effects
- **Cards** - Rounded corners with subtle shadows
- **Forms** - Clean, accessible form elements
- **Navigation** - Intuitive menu structure

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_FORMSPREE_ENDPOINT=your_formspree_endpoint
VITE_API_BASE_URL=your_api_base_url
```

### Formspree Setup
1. Create a Formspree account at [formspree.io](https://formspree.io)
2. Create a new form for your contact page
3. Update the form endpoint in `src/pages/Contact.jsx`
4. Configure email notifications in Formspree dashboard

## 📊 Performance & Optimization

### Build Optimization
- **Code Splitting** - Automatic lazy loading of components
- **Asset Optimization** - Compressed images and minified CSS/JS
- **Bundle Analysis** - Optimized package sizes
- **Caching Strategy** - Efficient browser caching

### SEO Features
- **Meta Tags** - Optimized titles and descriptions
- **Structured Data** - Schema markup for search engines
- **Sitemap** - Automatic sitemap generation
- **Open Graph** - Social media sharing optimization

## 🔒 Security Features

### Data Protection
- **HTTPS Only** - Secure communication encryption
- **Form Validation** - Client and server-side validation
- **XSS Protection** - Cross-site scripting prevention
- **CSRF Protection** - Cross-site request forgery prevention

### Privacy Compliance
- **GDPR Compliant** - European data protection standards
- **COPPA Compliant** - Children's online privacy protection
- **Data Minimization** - Collect only necessary information
- **Transparent Policies** - Clear privacy and terms policies

## 📈 Analytics & Monitoring

### Performance Metrics
- **Page Load Speed** - Optimized for fast loading
- **Core Web Vitals** - Google performance standards
- **User Analytics** - Behavior tracking and insights
- **Error Monitoring** - Real-time error tracking

### Business Metrics
- **Conversion Tracking** - Trial sign-ups and enrollments
- **User Engagement** - Session duration and interactions
- **Retention Rates** - Student progress and completion
- **Support Tickets** - Customer service metrics

## 🤝 Contributing Guidelines

### Development Workflow
1. **Fork the repository**
2. **Create feature branch** - `git checkout -b feature/amazing-feature`
3. **Commit changes** - `git commit -m 'Add amazing feature'`
4. **Push to branch** - `git push origin feature/amazing-feature`
5. **Open Pull Request**

### Code Standards
- **Follow ESLint rules** - Maintain code quality
- **Use Prettier** - Consistent code formatting
- **Write meaningful commits** - Clear, descriptive messages
- **Test thoroughly** - Ensure functionality works as expected

## 🐛 Troubleshooting

### Common Issues

**Build Errors**
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Development Server Issues**
```bash
# Check port availability
netstat -tulpn | grep :5173
# Kill existing processes
pkill -f "vite"
```

**Styling Issues**
```bash
# Clear Tailwind cache
npx tailwindcss --init
```

### Getting Help
- **Documentation** - Check inline code comments
- **Issues** - Report bugs on GitHub Issues
- **Community** - Join our developer community
- **Support** - Contact our technical team

## 📞 Support & Contact

### Technical Support
- **Email** - quranon2@gmail.com
- **Phone** - +92 313 435 0157
- **Office Hours** - Monday - Friday, 9:00 AM - 6:00 PM (PKT)

### Business Inquiries
- **Partnerships** - For educational institutions
- **Teacher Applications** - Join our teaching team
- **Media Inquiries** - Press and media relations
- **Investor Relations** - Business development opportunities

## 📄 License

This project is proprietary software owned by QuranOn. All rights reserved.

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **Tailwind CSS** - For the excellent CSS framework
- **Lucide Icons** - For the beautiful icon library
- **Formspree** - For the reliable form handling service
- **Firebase** - For the robust hosting platform

---

**🕌 QuranOn - Transforming Quran Education for the Digital Age**

*Empowering Muslim families worldwide with quality Islamic education through technology and innovation.*

*Last Updated: February 2026*
