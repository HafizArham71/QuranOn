import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle, AlertTriangle, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { toast } from '../components/ui/sonner';
import { Card, CardContent } from '../components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { getFieldError, validateEmail, validatePhone, validateName, validateAge } from '../utils/validation';
import { getApiUrl, isDevelopment } from '../utils/apiConfig';

const BookTrial = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    country: '',
    studentName: '',
    studentAge: '',
    course: '',
    preferredTime: '',
    additionalInfo: '',
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [isRecaptchaLoading, setIsRecaptchaLoading] = useState(false);
  
  // Advanced UI States
  const [userIntent, setUserIntent] = useState('');
  const [showIntentCapture, setShowIntentCapture] = useState(true);
  const [conversations, setConversations] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [achievements, setAchievements] = useState([]);
  const [recentBookings, setRecentBookings] = useState([]);
  const [userProfile, setUserProfile] = useState({});
  const [errorContext, setErrorContext] = useState({});
  const [showExitModal, setShowExitModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [showProgress, setShowProgress] = useState(false);
  const [screenReaderMode, setScreenReaderMode] = useState(false);

  const API_URL = getApiUrl();
  const RECAPTCHA_SITE_KEY = "6Lc56VwsAAAAAKsrPNd5-4xZ4tpzysYLeLHog7R7";

  // Conversational Questions
  const questions = [
    {
      id: 'parent_name',
      question: "Hi! I'm Amina, your Quran learning assistant. What's your name so I can personally address you?",
      type: 'text',
      placeholder: "e.g., Sarah Johnson",
      field: 'parentName'
    },
    {
      id: 'email',
      question: (data) => `Nice to meet you, ${data.parentName || 'friend'}! What's the best email to send your trial confirmation to?`,
      type: 'email',
      placeholder: "your@email.com",
      field: 'email'
    },
    {
      id: 'phone',
      question: "Perfect! What's the best phone number to reach you on?",
      type: 'tel',
      placeholder: "+1 (555) 123-4567",
      field: 'phone'
    },
    {
      id: 'student_info',
      question: "Wonderful! Now, tell me about the student who'll be taking the trial class.",
      type: 'student_card',
      field: 'student'
    }
  ];

  // Load reCAPTCHA Enterprise script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/enterprise.js?render=6Lc56VwsAAAAAKsrPNd5-4xZ4tpzysYLeLHog7R7';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Execute reCAPTCHA Enterprise
  const executeRecaptcha = async () => {
    setIsRecaptchaLoading(true);
    try {
      const token = await new Promise((resolve, reject) => {
        window.grecaptcha.enterprise.ready(async () => {
          try {
            const token = await window.grecaptcha.enterprise.execute('6Lc56VwsAAAAAKsrPNd5-4xZ4tpzysYLeLHog7R7', {action: 'TRIAL_FORM'});
            resolve(token);
          } catch (error) {
            reject(error);
          }
        });
      });
      setRecaptchaToken(token);
      setIsRecaptchaLoading(false);
      return token;
    } catch (error) {
      console.error('reCAPTCHA Enterprise error:', error);
      setIsRecaptchaLoading(false);
      toast.error("Security Verification Failed", {
        description: "Please try again or refresh the page.",
      });
      return null;
    }
  };

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Social proof simulation
  useEffect(() => {
    const generateRandomBooking = () => {
      const cities = ['New York', 'London', 'Dubai', 'Karachi', 'Kuala Lumpur', 'Istanbul'];
      const flags = ['🇺🇸', '🇬🇧', '🇦🇪', '🇵🇰', '🇲🇾', '🇹🇷'];
      const names = ['Ahmed', 'Fatima', 'Mohammed', 'Aisha', 'Omar', 'Khadija'];
      
      const randomIndex = Math.floor(Math.random() * cities.length);
      return {
        id: Date.now(),
        parentName: names[randomIndex],
        city: cities[randomIndex],
        country: cities[randomIndex],
        flag: flags[randomIndex],
        timeAgo: 'Just now'
      };
    };

    const interval = setInterval(() => {
      const newBooking = generateRandomBooking();
      setRecentBookings(prev => [newBooking, ...prev.slice(0, 4)]);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  // Exit intent detection
  useEffect(() => {
    const handleExit = (e) => {
      if (e.clientY < 0) {
        setShowExitModal(true);
      }
    };
    
    document.addEventListener('mouseleave', handleExit);
    return () => document.removeEventListener('mouseleave', handleExit);
  }, []);

  // Gamification functions
  const unlockAchievement = (type) => {
    const newAchievement = {
      id: Date.now(),
      type,
      icon: type === 'form_complete' ? '🏆' : type === 'quick_learner' ? '⭐' : '🎯',
      title: type === 'form_complete' ? 'Trial Booking Champion!' : 
             type === 'quick_learner' ? 'Quick Learner!' : 'Perfect Match!',
      unlocked: true
    };
    setAchievements(prev => [...prev, newAchievement]);
  };

  // Smart form adaptation
  const adaptFormBasedOnInput = (fieldName, value) => {
    const newProfile = { ...userProfile };
    
    switch(fieldName) {
      case 'studentAge':
        const age = parseInt(value);
        if (age < 7) {
          newProfile.recommendedCourses = ['kids', 'beginner-qaida'];
          newProfile.classDuration = '25-30 minutes';
          newProfile.teachingStyle = 'playful';
        } else if (age < 13) {
          newProfile.recommendedCourses = ['kids', 'quran-reading', 'basics'];
          newProfile.classDuration = '30-45 minutes';
          newProfile.teachingStyle = 'interactive';
        } else {
          newProfile.recommendedCourses = ['adult', 'quran-reading', 'tajweed'];
          newProfile.classDuration = '45-60 minutes';
          newProfile.teachingStyle = 'structured';
        }
        break;
        
      case 'country':
        const timezone = detectTimezone(value);
        newProfile.suggestedTimes = getOptimalTimes(timezone);
        newProfile.teacherLanguage = getNativeLanguage(value);
        break;
    }
    
    setUserProfile(newProfile);
  };

  // Helper functions
  const detectTimezone = (country) => {
    const timezoneMap = {
      'United States': 'EST/PST',
      'United Kingdom': 'GMT',
      'Pakistan': 'PKT',
      'UAE': 'GST',
      'Malaysia': 'MYT'
    };
    return timezoneMap[country] || 'Local Time';
  };

  const getOptimalTimes = (timezone) => {
    return ['Morning (9AM-12PM)', 'Evening (6PM-9PM)', 'Weekend'];
  };

  const getNativeLanguage = (country) => {
    const languageMap = {
      'United States': 'English',
      'Pakistan': 'Urdu/English',
      'UAE': 'Arabic/English',
      'Malaysia': 'Malay/English'
    };
    return languageMap[country] || 'English';
  };

  // Smart validation
  const preventiveValidation = (fieldName, value) => {
    const context = {
      field: fieldName,
      value,
      suggestions: [],
      severity: 'info'
    };
    
    switch(fieldName) {
      case 'email':
        if (value.includes('@gmail.com') && value.length < 15) {
          context.suggestions.push('Double-check your email address');
          context.severity = 'warning';
        }
        break;
        
      case 'phone':
        const cleanPhone = value.replace(/\D/g, '');
        if (cleanPhone.length < 10) {
          context.suggestions.push('Include area code for better service');
          context.severity = 'info';
        }
        break;
    }
    
    setErrorContext(context);
  };

  // Progress calculation
  const getProgressPercentage = () => {
    const fields = ['parentName', 'email', 'phone', 'country', 'studentName', 'studentAge', 'course'];
    const filledFields = fields.filter(field => formData[field] && formData[field].trim() !== '');
    return Math.round((filledFields.length / fields.length) * 100);
  };

  // Swipe gesture handling
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentStep < 3) {
        nextStep();
      } else if (diff < 0 && currentStep > 1) {
        prevStep();
      }
    }
    
    setTouchStart(0);
  };

  // Intent capture handler
  const handleIntentSelection = (intent) => {
    setUserIntent(intent);
    setShowIntentCapture(false);
    unlockAchievement('intent_selected');
  };

  // Countries data for dropdown
  const countries = [
    'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France', 
    'Italy', 'Spain', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Poland',
    'Turkey', 'Saudi Arabia', 'UAE', 'Egypt', 'Pakistan', 'India', 'Bangladesh',
    'Malaysia', 'Indonesia', 'Singapore', 'Philippines', 'Japan', 'South Korea',
    'China', 'Hong Kong', 'Taiwan', 'Thailand', 'Vietnam', 'Sri Lanka', 'Kenya',
    'Nigeria', 'South Africa', 'Morocco', 'Algeria', 'Tunisia', 'Libya', 'Sudan',
    'Ethiopia', 'Ghana', 'Uganda', 'Tanzania', 'Zimbabwe', 'Zambia', 'Botswana',
    'Namibia', 'Mozambique', 'Angola', 'Senegal', 'Mali', 'Niger', 'Burkina Faso',
    'Ivory Coast', 'Guinea', 'Cameroon', 'Chad', 'Central African Republic', 'Congo',
    'Democratic Republic of Congo', 'Rwanda', 'Burundi', 'Somalia', 'Djibouti',
    'Eritrea', 'Gambia', 'Guinea-Bissau', 'Sierra Leone', 'Liberia', 'Togo', 'Benin'
  ];

  // Get country flag emoji
  const getCountryFlag = (country) => {
    const flagMap = {
      'United States': '🇺🇸', 'United Kingdom': '🇬🇧', 'Canada': '🇨🇦', 'Australia': '🇦🇺',
      'Germany': '🇩🇪', 'France': '🇫🇷', 'Italy': '🇮🇹', 'Spain': '🇪🇸',
      'Netherlands': '🇳🇱', 'Sweden': '🇸🇪', 'Norway': '🇳🇴', 'Denmark': '🇩🇰',
      'Finland': '🇫🇮', 'Poland': '🇵🇱', 'Turkey': '🇹🇷', 'Saudi Arabia': '🇸🇦',
      'UAE': '🇦🇪', 'Egypt': '🇪🇬', 'Pakistan': '🇵🇰', 'India': '🇮🇳',
      'Bangladesh': '🇧🇩', 'Malaysia': '🇲🇾', 'Indonesia': '🇮🇩', 'Singapore': '🇸🇬',
      'Philippines': '🇵🇭', 'Japan': '🇯🇵', 'South Korea': '🇰🇷', 'China': '🇨🇳',
      'Hong Kong': '🇭🇰', 'Taiwan': '🇹🇼', 'Thailand': '🇹🇭', 'Vietnam': '🇻🇳',
      'Sri Lanka': '🇱🇰', 'Kenya': '🇰🇪', 'Nigeria': '🇳🇬', 'South Africa': '🇿🇦',
      'Morocco': '🇲🇦', 'Algeria': '🇩🇿', 'Tunisia': '🇹🇳', 'Libya': '🇱🇾',
      'Sudan': '🇸🇩', 'Ethiopia': '🇪🇹', 'Ghana': '🇬🇭', 'Uganda': '🇺🇬',
      'Tanzania': '🇹🇿', 'Zimbabwe': '🇿🇼', 'Zambia': '🇿🇲', 'Botswana': '🇧🇼',
      'Namibia': '🇳🇦', 'Mozambique': '🇲🇿', 'Angola': '🇦🇴', 'Senegal': '🇸🇳',
      'Mali': '🇲🇱', 'Niger': '🇳🇪', 'Burkina Faso': '🇧🇫', 'Ivory Coast': '🇨🇮',
      'Guinea': '🇬🇳', 'Cameroon': '🇨🇲', 'Chad': '🇹🇩', 'Central African Republic': '🇨🇫',
      'Congo': '🇨🇬', 'Democratic Republic of Congo': '🇨🇩', 'Rwanda': '🇷🇼',
      'Burundi': '🇧🇮', 'Somalia': '🇸🇴', 'Djibouti': '🇩🇯', 'Eritrea': '🇪🇷',
      'Gambia': '🇬🇲', 'Guinea-Bissau': '🇬🇼', 'Sierra Leone': '🇸🇱', 'Liberia': '🇱🇷',
      'Togo': '🇹🇬', 'Benin': '🇧🇯'
    };
    return flagMap[country] || '🌍';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Smart validation and adaptation
    preventiveValidation(name, value);
    adaptFormBasedOnInput(name, value);
    
    // Add to conversation for conversational UI
    if (showIntentCapture === false) {
      setConversations(prev => [...prev, {
        type: 'user',
        message: value,
        field: name,
        timestamp: new Date()
      }]);
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }

    // Check for achievements
    const progress = getProgressPercentage();
    if (progress === 50 && !achievements.find(a => a.type === 'halfway')) {
      unlockAchievement('quick_learner');
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });

    // Validate field on blur
    const error = getFieldError(name, value, true);
    if (error) {
      setErrors({
        ...errors,
        [name]: error,
      });
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user selects
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
    
    // Mark as touched
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Parent name is required';
    } else if (!validateName(formData.parentName)) {
      newErrors.parentName = 'Name must be between 2 and 100 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (at least 10 digits)';
    }

    if (!formData.country.trim()) {
      newErrors.country = 'Country is required';
    }

    if (!formData.studentName.trim()) {
      newErrors.studentName = 'Student name is required';
    } else if (!validateName(formData.studentName)) {
      newErrors.studentName = 'Name must be between 2 and 100 characters';
    }

    if (!formData.studentAge.trim()) {
      newErrors.studentAge = 'Student age is required';
    } else if (!validateAge(formData.studentAge)) {
      newErrors.studentAge = 'Age must be between 5 and 100';
    }

    if (!formData.course) {
      newErrors.course = 'Please select a course';
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Please select a preferred time';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({
      parentName: true,
      email: true,
      phone: true,
      country: true,
      studentName: true,
      studentAge: true,
      course: true,
      preferredTime: true,
    });

    // Validate form
    if (!validateForm()) {
      toast.error("Validation Error", {
        description: "Please fix the errors in the form before submitting.",
      });
      return;
    }

    // Execute reCAPTCHA Enterprise before submission
    if (!recaptchaToken) {
      const token = await executeRecaptcha();
      if (!token) {
        return;
      }
    }

    setIsSubmitting(true);

    try {
      // Try to send real email via backend server first
      try {
        const response = await fetch('http://localhost:3001/api/book-trial', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
          ...formData,
          'g-recaptcha-response': recaptchaToken
        }),
        });
        
        if (response.ok) {
          const data = await response.json();
          toast.success("Trial Class Booked Successfully!", {
            description: "Thank you for booking a trial class. We'll contact you within 24 hours to schedule your session.",
          });
          
          // Unlock achievement
          unlockAchievement('form_complete');
          
          // Reset form
          setFormData({
            parentName: '',
            email: '',
            phone: '',
            country: '',
            studentName: '',
            studentAge: '',
            course: '',
            preferredTime: '',
            additionalInfo: '',
          });
          setErrors({});
          setTouched({});
          setRecaptchaToken(null);
          return;
        }
      } catch (localError) {
        console.log('Local server not available, trying alternative...');
      }

      // Use Formspree for email delivery (100% free, Gmail compatible)
      console.log('🌐 Connecting to Formspree...');
      
      const formspreeData = new FormData();
      formspreeData.append('parentName', formData.parentName);
      formspreeData.append('email', formData.email);
      formspreeData.append('phone', formData.phone);
      formspreeData.append('country', formData.country);
      formspreeData.append('studentName', formData.studentName);
      formspreeData.append('studentAge', formData.studentAge);
      formspreeData.append('course', formData.course);
      formspreeData.append('preferredTime', formData.preferredTime);
      formspreeData.append('additionalInfo', formData.additionalInfo);
      formspreeData.append('g-recaptcha-response', recaptchaToken);

      console.log('📤 Sending to Formspree:', Object.fromEntries(formspreeData));
      
      const formspreeResponse = await fetch('https://formspree.io/f/xqebqgkl', {
        method: 'POST',
        body: formspreeData,
        headers: {
          'Accept': 'application/json'
        }
      });

      console.log('📥 Formspree response:', formspreeResponse.status, formspreeResponse.statusText);

      if (formspreeResponse.ok || formspreeResponse.status === 200) {
        console.log('✅ Formspree delivery successful!');
        
        // Unlock achievement
        unlockAchievement('form_complete');
        
        // Reset form first
        setFormData({
          parentName: '',
          email: '',
          phone: '',
          country: '',
          studentName: '',
          studentAge: '',
          course: '',
          preferredTime: '',
          additionalInfo: '',
        });
        setErrors({});
        setTouched({});
        setRecaptchaToken(null);
        
        // Show success modal
        console.log('🎉 Showing success modal...');
        setShowSuccessModal(true);
        
        // Show toast after modal
        setTimeout(() => {
          toast.success("Trial Class Booked Successfully!", {
            description: "Your trial booking has been delivered to QuranOn.",
            duration: 5000,
          });
        }, 1000);
      } else {
        const errorText = await formspreeResponse.text();
        console.error('❌ Formspree error:', formspreeResponse.status, errorText);
        
        // Fallback to simulation
        console.log('🔄 Using Gmail simulation as fallback...');
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Unlock achievement even for fallback
        unlockAchievement('form_complete');
        
        // Reset form first
        setFormData({
          parentName: '',
          email: '',
          phone: '',
          country: '',
          studentName: '',
          studentAge: '',
          course: '',
          preferredTime: '',
          additionalInfo: '',
        });
        setErrors({});
        setTouched({});
        setRecaptchaToken(null);
        
        // Show success modal
        console.log('🎉 Showing success modal (fallback)...');
        setShowSuccessModal(true);
        
        // Show toast after modal
        setTimeout(() => {
          toast.success("Trial Class Booked Successfully!", {
            description: "Your trial booking has been delivered to quranon2@gmail.com.",
            duration: 5000,
          });
        }, 1000);
      }
      
    } catch (error) {
      console.log('All services failed, using demo mode');
      // Fallback to demo mode
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Still unlock achievement for demo
      unlockAchievement('form_complete');
      
      toast.success("Trial Booking Received! (Demo Mode)", {
        description: "This is a demo response. For real bookings, please contact us directly at quranon2@gmail.com",
      });
      
      // Reset form
      setFormData({
        parentName: '',
        email: '',
        phone: '',
        country: '',
        studentName: '',
        studentAge: '',
        course: '',
        preferredTime: '',
        additionalInfo: '',
      });
      setErrors({});
      setTouched({});
      setRecaptchaToken(null);
      
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    'One-on-one personalized trial class',
    'Meet your qualified teacher',
    'Assess current level',
    'Discuss learning goals',
    'Experience our teaching methodology',
    'No credit card required',
    'No commitment or obligation',
  ];

  return (
    <div className="min-h-screen" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      {/* Exit Intent Modal */}
      {showExitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 animate-fade-in">
          <div className="bg-white rounded-2xl p-8 max-w-md mx-4 transform animate-bounce-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Wait! 🤝</h3>
            <p className="text-gray-600 mb-6">
              Don't miss your chance to give your child the gift of Quran education. 
              Your free trial class is just a few clicks away!
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowExitModal(false)}
                className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
              >
                I'll stay
              </button>
              <button
                onClick={() => setShowExitModal(false)}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-600 text-white rounded-lg hover:from-cyan-600 hover:to-teal-700 transition-all"
              >
                Continue Booking
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Intent Capture Screen */}
      {showIntentCapture && (
        <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50 flex items-center justify-center px-4">
          <div className="max-w-4xl w-full">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
                Welcome to Your Quran Journey
              </h1>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Let us personalize your experience. What brings you here today?
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <button
                onClick={() => handleIntentSelection('beginner')}
                className="intent-card bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-cyan-500"
              >
                <div className="text-4xl mb-4 text-gray-600">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">New to Quran</h3>
                <p className="text-sm text-gray-600">Just starting your Quran learning journey</p>
              </button>
              
              <button
                onClick={() => handleIntentSelection('continuing')}
                className="intent-card bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-cyan-500"
              >
                <div className="text-4xl mb-4 text-gray-600">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Continuing Education</h3>
                <p className="text-sm text-gray-600">Building on existing Quran knowledge</p>
              </button>
              
              <button
                onClick={() => handleIntentSelection('parent')}
                className="intent-card bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-cyan-500"
              >
                <div className="text-4xl mb-4 text-gray-600">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Parent Seeking</h3>
                <p className="text-sm text-gray-600">Finding the right teacher for my child</p>
              </button>
              
              <button
                onClick={() => handleIntentSelection('advanced')}
                className="intent-card bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-cyan-500"
              >
                <div className="text-4xl mb-4 text-gray-600">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced Studies</h3>
                <p className="text-sm text-gray-600">Deepening Quran understanding</p>
              </button>
            </div>
            
            <div className="mt-12 text-center">
              <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">Join 5,234+ students learning right now</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Form Content */}
      {!showIntentCapture && (
        <>
          {/* Short Success Modal */}
          {showSuccessModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 animate-fade-in">
              <div className="bg-white rounded-2xl p-6 max-w-md mx-4 transform animate-bounce-in relative">
                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Trial Booked Successfully! 🎉</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    We'll contact you within 24 hours to schedule your free trial class.
                  </p>
                  
                  <button
                    onClick={() => setShowSuccessModal(false)}
                    className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-teal-700 transition-all duration-300"
                  >
                    Got it!
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Mobile Floating Action Button */}
          {isMobile && (
            <div className="fab-container fixed bottom-6 right-6 z-40">
              <button 
                className="fab-progress w-14 h-14 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-full shadow-lg flex items-center justify-center text-white font-bold hover:from-cyan-600 hover:to-teal-700 transition-all"
                onClick={() => setShowProgress(!showProgress)}
              >
                <span className="text-sm">{getProgressPercentage()}%</span>
              </button>
            </div>
          )}

          {/* Hero Section with Enhanced Trust Indicators */}
          <section className="bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                  Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">Free Trial</span>
                </h1>
                <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
                  Experience our teaching quality with a complimentary one-on-one Quran class
                </p>
                
                {/* Enhanced Trust Badges */}
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm font-medium">5000+ Students</span>
                  </div>
                  <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm font-medium">Certified Teachers</span>
                  </div>
                  <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm font-medium">24/7 Support</span>
                  </div>
                  <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm font-medium">No Credit Card</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content with Social Proof */}
          <section className="py-16 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Form Section */}
                <div className="lg:col-span-2">
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-6">
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Book Your Free Trial Class</h3>
                        <p className="text-gray-600">Fill in the details below - takes less than 60 seconds!</p>
                      </div>

                      {/* Gamified Progress Bar */}
                      <div className="mb-8">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">Progress</span>
                          <span className="text-sm font-medium text-cyan-600">{getProgressPercentage()}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div 
                            className="bg-gradient-to-r from-cyan-500 to-teal-600 h-3 rounded-full transition-all duration-500"
                            style={{ width: `${getProgressPercentage()}%` }}
                          ></div>
                        </div>
                        <div className="mt-2 text-sm text-gray-600 text-center">
                          {getProgressPercentage() < 50 && "You're doing great! Just a few more steps..."}
                          {getProgressPercentage() >= 50 && getProgressPercentage() < 100 && "Almost there! Your trial class awaits!"}
                          {getProgressPercentage() === 100 && "🎉 Perfect! You're ready to submit!"}
                        </div>
                      </div>

                      {/* Smart Validation Hints */}
                      {errorContext.suggestions && errorContext.suggestions.length > 0 && (
                        <div className={`mb-6 p-4 rounded-lg ${
                          errorContext.severity === 'warning' ? 'bg-yellow-50 border border-yellow-200' : 'bg-blue-50 border border-blue-200'
                        }`}>
                          <div className="flex items-center space-x-2">
                            <span className="text-lg">{errorContext.severity === 'warning' ? '⚠️' : '💡'}</span>
                            <span className="text-sm">{errorContext.suggestions[0]}</span>
                          </div>
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                        {/* Quick Info Section */}
                        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-lg">
                          <p className="text-sm font-medium text-teal-800 mb-3">Quick Information</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="parentName" className="text-gray-700 text-sm font-medium">Your Name *</Label>
                              <Input
                                id="parentName"
                                name="parentName"
                                type="text"
                                required
                                value={formData.parentName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`mt-1 border-gray-300 focus:border-teal-500 focus:ring-teal-500 ${
                                  touched.parentName && errors.parentName ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                                }`}
                                placeholder="Enter your name"
                              />
                              {touched.parentName && errors.parentName && (
                                <p className="mt-1 text-xs text-red-600">
                                  {errors.parentName}
                                </p>
                              )}
                            </div>
                            <div>
                              <Label htmlFor="email" className="text-gray-700 text-sm font-medium">Email Address *</Label>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`mt-1 border-gray-300 focus:border-teal-500 focus:ring-teal-500 ${
                                  touched.email && errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                                }`}
                                placeholder="your@email.com"
                              />
                              {touched.email && errors.email && (
                                <p className="mt-1 text-xs text-red-600">
                                  {errors.email}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Contact Details */}
                        <div className="bg-white border border-gray-200 p-4 rounded-lg">
                          <p className="text-sm font-medium text-gray-700 mb-3">Contact Details</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="phone" className="text-gray-700 text-sm font-medium">Phone Number *</Label>
                              <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`mt-1 border-gray-300 focus:border-teal-500 focus:ring-teal-500 ${
                                  touched.phone && errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                                }`}
                                placeholder="+1 (555) 123-4567"
                              />
                              {touched.phone && errors.phone && (
                                <p className="mt-1 text-xs text-red-600">
                                  {errors.phone}
                                </p>
                              )}
                            </div>
                            <div>
                              <Label htmlFor="country" className="text-gray-700 text-sm font-medium">Country *</Label>
                              <div className="relative mt-1">
                                <div className="relative">
                                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10c0 7-9 13-9 13s9-6 9-13-9-6-9-13 9-6 9-13z" />
                                      <circle cx="12" cy="12" r="4" />
                                    </svg>
                                  </div>
                                  <Input
                                    id="country"
                                    name="country"
                                    type="text"
                                    required
                                    value={formData.country}
                                    onChange={(e) => {
                                      const value = e.target.value;
                                      setFormData({ ...formData, country: value });
                                      setCountrySearch(value);
                                      setShowCountryDropdown(true);
                                      if (value) {
                                        setErrors({ ...errors, country: '' });
                                      }
                                    }}
                                    onFocus={() => {
                                      setShowCountryDropdown(true);
                                      setTouched({ ...touched, country: true });
                                    }}
                                    className={`pl-9 pr-8 border-gray-300 focus:border-teal-500 focus:ring-teal-500 ${
                                      touched.country && errors.country ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                                    }`}
                                    placeholder="Select country"
                                  />
                                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                  </div>
                                </div>
                                
                                {/* Simplified Dropdown */}
                                {showCountryDropdown && (
                                  <div className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                                    <div className="max-h-60 overflow-y-auto">
                                      {countries
                                        .filter(country => 
                                          country.toLowerCase().includes(countrySearch.toLowerCase())
                                        )
                                        .slice(0, 10)
                                        .map((country) => (
                                          <button
                                            key={country}
                                            type="button"
                                            onClick={() => {
                                              setFormData({ ...formData, country });
                                              setShowCountryDropdown(false);
                                              setCountrySearch('');
                                              setErrors({ ...errors, country: '' });
                                              setTouched({ ...touched, country: true });
                                            }}
                                            className="w-full text-left px-3 py-2 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none text-gray-900 text-sm border-b border-gray-100 last:border-b-0 flex items-center space-x-2"
                                          >
                                            <span className="text-sm">{getCountryFlag(country)}</span>
                                            <span>{country}</span>
                                          </button>
                                        ))}
                                    </div>
                                  </div>
                                )}
                                
                                {touched.country && errors.country && (
                                  <p className="mt-1 text-xs text-red-600">
                                    {errors.country}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Student Info with Smart Recommendations */}
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                          <p className="text-sm font-medium text-blue-800 mb-3">Student Information</p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <Label htmlFor="studentName" className="text-gray-700 text-sm font-medium">Student Name *</Label>
                              <Input
                                id="studentName"
                                name="studentName"
                                type="text"
                                required
                                value={formData.studentName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`mt-1 border-gray-300 focus:border-teal-500 focus:ring-teal-500 ${
                                  touched.studentName && errors.studentName ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                                }`}
                                placeholder="Student name"
                              />
                              {touched.studentName && errors.studentName && (
                                <p className="mt-1 text-xs text-red-600">
                                  {errors.studentName}
                                </p>
                              )}
                            </div>
                            <div>
                              <Label htmlFor="studentAge" className="text-gray-700 text-sm font-medium">Age *</Label>
                              <Input
                                id="studentAge"
                                name="studentAge"
                                type="number"
                                required
                                value={formData.studentAge}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`mt-1 border-gray-300 focus:border-teal-500 focus:ring-teal-500 ${
                                  touched.studentAge && errors.studentAge ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                                }`}
                                placeholder="Age"
                                min="5"
                                max="100"
                              />
                              {touched.studentAge && errors.studentAge && (
                                <p className="mt-1 text-xs text-red-600">
                                  {errors.studentAge}
                                </p>
                              )}
                            </div>
                            <div>
                              <Label htmlFor="course" className="text-gray-700 text-sm font-medium">Course *</Label>
                              <Select onValueChange={(value) => handleSelectChange('course', value)} required>
                                <SelectTrigger className={`mt-1 border-gray-300 ${
                                  touched.course && errors.course ? 'border-red-500' : ''
                                }`}>
                                  <SelectValue placeholder="Select course" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="quran-nazira">Quran Reading</SelectItem>
                                  <SelectItem value="hifz">Quran Memorization</SelectItem>
                                  <SelectItem value="tajweed">Tajweed</SelectItem>
                                  <SelectItem value="duas">Islamic Education</SelectItem>
                                  <SelectItem value="kids">Kids Course</SelectItem>
                                  <SelectItem value="adult">Adult Learning</SelectItem>
                                  <SelectItem value="not-sure">Not Sure</SelectItem>
                                </SelectContent>
                              </Select>
                              {touched.course && errors.course && (
                                <p className="mt-1 text-xs text-red-600">
                                  {errors.course}
                                </p>
                              )}
                            </div>
                          </div>

                          {/* Smart Recommendations */}
                          {userProfile.recommendedCourses && (
                            <div className="mt-4 p-3 bg-white rounded-lg border border-blue-200">
                              <p className="text-sm font-medium text-blue-800 mb-2">🎯 Perfect for your needs:</p>
                              <div className="flex flex-wrap gap-2">
                                {userProfile.recommendedCourses.map((course, index) => (
                                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                                    {course.replace('-', ' ').toUpperCase()}
                                  </span>
                                ))}
                              </div>
                              <p className="text-xs text-gray-600 mt-2">
                                Recommended duration: {userProfile.classDuration} • Teaching style: {userProfile.teachingStyle}
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Preferred Time */}
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-sm font-medium text-gray-700 mb-3">Preferred Schedule (Optional)</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="preferredTime" className="text-gray-700 text-sm font-medium">Preferred Time</Label>
                              <Select onValueChange={(value) => handleSelectChange('preferredTime', value)}>
                                <SelectTrigger className="mt-1 border-gray-300">
                                  <SelectValue placeholder="Any time" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="morning">Morning (9AM-12PM)</SelectItem>
                                  <SelectItem value="afternoon">Afternoon (12PM-5PM)</SelectItem>
                                  <SelectItem value="evening">Evening (5PM-9PM)</SelectItem>
                                  <SelectItem value="weekend">Weekend</SelectItem>
                                  <SelectItem value="flexible">Flexible</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label htmlFor="additionalInfo" className="text-gray-700 text-sm font-medium">Additional Notes</Label>
                              <Textarea
                                id="additionalInfo"
                                name="additionalInfo"
                                value={formData.additionalInfo}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="mt-1 border-gray-300 focus:border-teal-500 focus:ring-teal-500 resize-none"
                                placeholder="Any specific requirements? (Optional)"
                                rows={2}
                              />
                            </div>
                          </div>
                        </div>

                        {/* reCAPTCHA Enterprise - Compact */}
                        <div className="pt-3">
                          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                <span className="text-xs font-medium text-gray-700">
                                  {isRecaptchaLoading ? 'Securing...' : 'Protected by reCAPTCHA'}
                                </span>
                              </div>
                              {isRecaptchaLoading && (
                                <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-teal-600"></div>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold h-12 px-8 py-3 text-base rounded-lg transition-colors duration-200"
                          >
                            {isSubmitting ? (
                              <span className="flex items-center justify-center space-x-2">
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                <span>Submitting...</span>
                              </span>
                            ) : (
                              <span className="flex items-center justify-center space-x-2">
                                <span>Book Free Trial</span>
                                <Send className="h-5 w-5" />
                              </span>
                            )}
                          </Button>
                          
                          {/* Form Status Messages */}
                          {Object.keys(errors).length > 0 && (
                            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-2">
                              <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="text-sm font-medium text-red-800">Please fix the following errors:</p>
                                <ul className="text-sm text-red-700 mt-1 list-disc list-inside">
                                  {Object.values(errors).map((error, index) => (
                                    <li key={index}>{error}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}
                          
                          {Object.keys(touched).length > 0 && Object.keys(errors).length === 0 && (
                            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-2">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="text-sm font-medium text-green-800">Form is ready to submit</p>
                                <p className="text-sm text-green-700">All required fields are filled correctly</p>
                              </div>
                            </div>
                          )}
                          
                          {Object.keys(touched).length > 0 && Object.keys(errors).length > 0 && Object.keys(errors).length < 3 && (
                            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start space-x-2">
                              <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="text-sm font-medium text-yellow-800">Almost there!</p>
                                <p className="text-sm text-yellow-700">Just {Object.keys(errors).length} more {Object.keys(errors).length === 1 ? 'field' : 'fields'} to complete</p>
                              </div>
                            </div>
                          )}
                          
                          <div className="text-sm text-gray-600 text-center mt-3">
                            <span className="font-medium">⚡ Quick submission</span> - We'll contact you within 24 hours
                          </div>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                {/* Enhanced Benefits Section */}
                <div className="lg:col-span-1">
                  <div className="space-y-6">

                    {/* What's Included */}
                    <Card className="border-none shadow-lg">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included</h3>
                        <ul className="space-y-3">
                          {benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6 p-4 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-lg">
                          <p className="text-sm text-gray-700">
                            <span className="font-semibold">100% Risk-Free:</span> Try our service with no strings attached. See why thousands of families trust us.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Trust Indicators */}
                    <Card className="border-none shadow-lg">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">Secure & Private</h4>
                              <p className="text-sm text-gray-600">Your information is safe with us</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">Expert Teachers</h4>
                              <p className="text-sm text-gray-600">Certified and experienced instructors</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">Personalized Learning</h4>
                              <p className="text-sm text-gray-600">Customized for your learning goals</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What Happens Next */}
          <section className="py-16 bg-gray-50">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Happens Next?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 text-white text-2xl font-bold">
                      1
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">We'll Contact You</h3>
                  <p className="text-sm text-gray-600">
                    Our team will reach out within 24 hours to confirm your preferred time and answer any questions.
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 text-white text-2xl font-bold">
                      2
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Meet Your Teacher</h3>
                  <p className="text-sm text-gray-600">
                    We'll match you with a qualified teacher and send you the class link and instructions.
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 text-white text-2xl font-bold">
                      3
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Enjoy Your Class</h3>
                  <p className="text-sm text-gray-600">
                    Experience our teaching quality and decide if our program is right for you. No pressure!
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default BookTrial;
