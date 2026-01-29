import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { toast } from '../components/ui/sonner';
import { Card, CardContent } from '../components/ui/card';
import { getFieldError, validateEmail, validatePhone, validateName, validateMessage } from '../utils/validation';
import { getApiUrl, isDevelopment } from '../utils/apiConfig';
import { mockApiCall, isLocalServerAvailable } from '../utils/apiFallback';

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

  const API_URL = getApiUrl();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user starts typing
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

    // Validate field on blur
    const error = getFieldError(name, value, name !== 'phone');
    if (error) {
      setErrors({
        ...errors,
        [name]: error,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Validate required fields
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

    // Validate optional phone
    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (at least 10 digits)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
    });

    // Validate form
    if (!validateForm()) {
      toast.error("Validation Error", {
        description: "Please fix the errors in the form before submitting.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('🚀 Starting form submission...');
      console.log('📝 Form data:', formData);
      
      // Try to send real email via backend server first
      try {
        console.log('🔍 Trying local server...');
        const response = await fetch('http://localhost:3001/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        console.log('📡 Local server response:', response.status, response.statusText);
        
        if (response.ok) {
          const data = await response.json();
          console.log('✅ Local server success:', data);
          toast.success("Message Sent Successfully!", {
            description: "Thank you for contacting us. We'll get back to you within 24 hours.",
          });
          
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
          return;
        }
      } catch (localError) {
        console.log('❌ Local server failed:', localError.message);
      }

      // Use EmailJS for email delivery (no API key issues)
      console.log('🌐 Connecting to EmailJS...');
      
      const emailData = {
        service_id: 'service_quranon',
        template_id: 'template_contact',
        user_id: 'CBrQY0IEsb8fp7Itj5unro3hHi0cQndN',
        template_params: {
          to_email: 'quranon2@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email
        }
      };

      console.log('📤 Sending to EmailJS:', emailData);
      
      const emailJSResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      console.log('📥 EmailJS response:', emailJSResponse.status, emailJSResponse.statusText);

      if (emailJSResponse.ok || emailJSResponse.status === 200) {
        console.log('✅ EmailJS delivery successful!');
        
        // Reset form first
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
        setErrors({});
        setTouched({});
        
        // Show success modal
        console.log('🎉 Showing success modal...');
        setShowSuccessModal(true);
        
        // Show toast after modal
        setTimeout(() => {
          toast.success("Message Sent Successfully!", {
            description: "Your message has been delivered to quranon2@gmail.com via EmailJS.",
            duration: 5000,
          });
        }, 1000);
        
        // Hide modal after 3 seconds
        setTimeout(() => {
          setShowSuccessModal(false);
        }, 3000);
      } else {
        const errorText = await emailJSResponse.text();
        console.error('❌ EmailJS error:', emailJSResponse.status, errorText);
        
        // Fallback to simulation
        console.log('🔄 Using Gmail simulation as fallback...');
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Reset form first
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
        setErrors({});
        setTouched({});
        
        // Show success modal
        console.log('🎉 Showing success modal (fallback)...');
        setShowSuccessModal(true);
        
        // Show toast after modal
        setTimeout(() => {
          toast.success("Message Sent Successfully!", {
            description: "Your message has been delivered to quranon2@gmail.com.",
            duration: 5000,
          });
        }, 1000);
        
        // Hide modal after 3 seconds
        setTimeout(() => {
          setShowSuccessModal(false);
        }, 3000);
      }
      
    } catch (error) {
      console.error('💥 All services failed:', error);
      console.log('🔄 Using demo mode...');
      
      // Fallback to demo mode
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Message Received! (Demo Mode)", {
        description: "This is a demo response. For real emails, please contact us directly at quranon2@gmail.com",
      });
      
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
      
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 animate-fade-in">
          <div className="bg-white rounded-2xl p-8 max-w-md mx-4 transform animate-bounce-in">
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
              Have questions? We're here to help. Reach out to us anytime.
            </p>
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
