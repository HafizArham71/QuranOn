import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, MessageCircle, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { toast } from '../components/ui/sonner';
import { Card, CardContent } from '../components/ui/card';
import { getFieldError, validateEmail, validatePhone, validateName, validateMessage } from '../utils/validation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [isRecaptchaLoading, setIsRecaptchaLoading] = useState(false);
  
  const RECAPTCHA_SITE_KEY = "6Lc56VwsAAAAAKsrPNd5-4xZ4tpzysYLeLHog7R7";
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Load selected course from localStorage
  useEffect(() => {
    const savedCourse = localStorage.getItem('selectedCourse');
    if (savedCourse) {
      const course = JSON.parse(savedCourse);
      setSelectedCourse(course);
      setFormData(prev => ({
        ...prev,
        subject: `Inquiry about ${course.title} - ${course.subtitle}`,
        message: `I'm interested in the ${course.title}. ${course.description}\n\nPlease provide more information about this course and the enrollment process.`
      }));
      localStorage.removeItem('selectedCourse');
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });

    const error = getFieldError(name, value, name !== 'phone');
    if (error) {
      setErrors({
        ...errors,
        [name]: error,
      });
    }
  };

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
            const token = await window.grecaptcha.enterprise.execute('6Lc56VwsAAAAAKsrPNd5-4xZ4tpzysYLeLHog7R7', {action: 'CONTACT_FORM'});
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

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (!validateName(formData.name)) {
      newErrors.name = 'Name must be between 2 and 100 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (!validateMessage(formData.message)) {
      newErrors.message = 'Message must be between 10 and 2000 characters';
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (at least 10 digits)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setTouched({
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
    });

    if (!validateForm()) {
      toast.error("Validation Error", {
        description: "Please fix the errors in the form before submitting.",
      });
      return;
    }

    setIsSubmitting(true);

    // Execute reCAPTCHA Enterprise before submission
    if (!recaptchaToken) {
      const token = await executeRecaptcha();
      if (!token) {
        setIsSubmitting(false);
        return;
      }
    }

    try {
      console.log('🚀 Submitting to Formspree...');
      
      // Use FormData exactly like the trial form
      const formspreeData = new FormData();
      formspreeData.append('name', formData.name);
      formspreeData.append('email', formData.email);
      formspreeData.append('phone', formData.phone);
      formspreeData.append('subject', formData.subject);
      formspreeData.append('message', formData.message);
      formspreeData.append('g-recaptcha-response', recaptchaToken);

      console.log('📤 Sending to Formspree:', Object.fromEntries(formspreeData));
      
      const formspreeResponse = await fetch('https://formspree.io/f/mvzqzkej', {
        method: 'POST',
        body: formspreeData,
        headers: {
          'Accept': 'application/json'
        }
      });

      console.log('📥 Formspree response:', formspreeResponse.status, formspreeResponse.statusText);

      if (formspreeResponse.ok) {
        console.log('✅ Form submitted successfully!');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
        setErrors({});
        setTouched({});
        setRecaptchaToken(null);
        
        // Show success modal
        setShowSuccessModal(true);
        
        setTimeout(() => {
          toast.success("Message Sent Successfully!", {
            description: "Thank you for contacting us. We'll get back to you within 24 hours.",
            duration: 5000,
          });
        }, 1000);
        
      } else {
        const errorText = await formspreeResponse.text();
        console.error('❌ Form submission failed:', formspreeResponse.status, errorText);
        
        toast.error("Submission Failed", {
          description: "Unable to send message. Please try again or contact us directly at quranon2@gmail.com",
          duration: 5000,
        });
      }
      
    } catch (error) {
      console.error('💥 Network error:', error);
      
      toast.error("Network Error", {
        description: "Unable to connect. Please check your internet connection and try again.",
        duration: 5000,
      });
      
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 animate-fade-in">
          <div className="bg-white rounded-2xl p-8 max-w-md mx-4 transform animate-bounce-in relative">
            {/* Close Button */}
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 animate-pulse">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully! 🎉</h3>
              <p className="text-gray-600 text-center mb-4">
                Thank you for reaching out to QuranOn! We've received your message and will get back to you within 24 hours.
              </p>
              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 w-full">
                <p className="text-sm text-teal-800">
                  <strong>What happens next?</strong><br />
                  • Our team will review your message<br />
                  • You'll receive a response at your email<br />
                  • We're committed to helping you learn Quran
                </p>
              </div>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="mt-6 px-6 py-2 bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-teal-700 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )} 

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">Us</span>
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              We're here to help you on your Quran learning journey. Reach out anytime and we'll respond within 24 hours.
            </p>
            {selectedCourse && (
              <div className="mt-6 inline-flex items-center bg-gradient-to-r from-cyan-500 to-teal-600 text-white px-6 py-3 rounded-full shadow-lg">
                <span className="font-medium">📚 {selectedCourse.title} selected</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-700 mb-8">
                  We're always happy to answer your questions and help you find the perfect Quran learning program for you or your family.
                </p>
              </div>

              <Card className="border-none shadow-md">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100 flex-shrink-0">
                      <Mail className="h-5 w-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email Us</p>
                      <p className="text-sm text-gray-600 mt-1">quranon2@gmail.com</p>
                      <p className="text-xs text-gray-500 mt-1">We reply within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100 flex-shrink-0">
                      <Phone className="h-5 w-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Call Us</p>
                      <p className="text-sm text-gray-600 mt-1">+92 313 435 0157</p>
                      <p className="text-xs text-gray-500 mt-1">Mon-Fri: 9AM - 9PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100 flex-shrink-0">
                      <MapPin className="h-5 w-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Serving Worldwide</p>
                      <p className="text-sm text-gray-600 mt-1">Online classes available globally</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100 flex-shrink-0">
                      <MessageCircle className="h-5 w-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Live Support</p>
                      <p className="text-sm text-gray-600 mt-1">Chat available on website</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-6 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Languages:</span> We provide support in English and Urdu to ensure clear communication.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-gray-900 font-medium">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`mt-2 border-gray-300 focus:border-teal-500 focus:ring-teal-500 ${
                            touched.name && errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                          }`}
                          placeholder="Enter your full name"
                        />
                        {touched.name && errors.name && (
                          <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="h-4 w-4" />
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-gray-900 font-medium">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`mt-2 border-gray-300 focus:border-teal-500 focus:ring-teal-500 ${
                            touched.email && errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                          }`}
                          placeholder="your.email@example.com"
                        />
                        {touched.email && errors.email && (
                          <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="h-4 w-4" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone" className="text-gray-900 font-medium">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`mt-2 border-gray-300 focus:border-teal-500 focus:ring-teal-500 ${
                            touched.phone && errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                          }`}
                          placeholder="+1 (555) 123-4567"
                        />
                        {touched.phone && errors.phone && (
                          <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="h-4 w-4" />
                            {errors.phone}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="subject" className="text-gray-900 font-medium">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`mt-2 border-gray-300 focus:border-teal-500 focus:ring-teal-500 ${
                            touched.subject && errors.subject ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                          }`}
                          placeholder="How can we help?"
                        />
                        {touched.subject && errors.subject && (
                          <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="h-4 w-4" />
                            {errors.subject}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-gray-900 font-medium">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        rows={6}
                        className={`mt-2 border-gray-300 focus:border-teal-500 focus:ring-teal-500 resize-none ${
                          touched.message && errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                        }`}
                        placeholder="Tell us more about your inquiry..."
                      />
                      <div className="mt-1 flex items-start justify-between">
                        {touched.message && errors.message ? (
                          <p className="text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="h-4 w-4" />
                            {errors.message}
                          </p>
                        ) : (
                          <p className="text-xs text-gray-500">
                            {formData.message.length}/2000 characters
                          </p>
                        )}
                      </div>
                    </div>

                    {/* reCAPTCHA Enterprise - Compact */}
                    <div className="pt-3">
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <svg className="h-4 w-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white font-semibold py-6 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Prefer to Try First?</h2>
          <p className="text-gray-700 mb-6">
            Experience our teaching quality firsthand with a free trial class. No credit card required.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white font-semibold px-8 py-6">
            <a href="/book-trial">Book Your Free Trial</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
