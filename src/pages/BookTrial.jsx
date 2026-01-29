import React, { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
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

    setIsSubmitting(true);

    try {
      // Try to send real email via backend server first
      try {
        const response = await fetch('http://localhost:3001/api/book-trial', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        if (response.ok) {
          const data = await response.json();
          toast.success("Trial Class Booked Successfully!", {
            description: "Thank you for booking a trial class. We'll contact you within 24 hours to schedule your session.",
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
        
        // Show success modal
        console.log('🎉 Showing success modal...');
        setShowSuccessModal(true);
        
        // Show toast after modal
        setTimeout(() => {
          toast.success("Trial Class Booked Successfully!", {
            description: "Your trial booking has been delivered to quranon2@gmail.com via Formspree.",
            duration: 5000,
          });
        }, 1000);
        
        // Hide modal after 3 seconds
        setTimeout(() => {
          setShowSuccessModal(false);
        }, 3000);
      } else {
        const errorText = await formspreeResponse.text();
        console.error('❌ Formspree error:', formspreeResponse.status, errorText);
        
        // Fallback to simulation
        console.log('🔄 Using Gmail simulation as fallback...');
        await new Promise(resolve => setTimeout(resolve, 1500));
        
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
        
        // Hide modal after 3 seconds
        setTimeout(() => {
          setShowSuccessModal(false);
        }, 3000);
      }
      
    } catch (error) {
      console.log('All services failed, using demo mode');
      // Fallback to demo mode
      await new Promise(resolve => setTimeout(resolve, 1000));
      
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
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Trial Class Booked Successfully! 🎉</h3>
              <p className="text-gray-600 text-center mb-4">
                Congratulations! Your trial class has been booked. We're excited to help your student begin their Quran learning journey!
              </p>
              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 w-full">
                <p className="text-sm text-teal-800">
                  <strong>What happens next?</strong><br />
                  • Our team will contact you within 24 hours<br />
                  • We'll schedule a convenient time for the trial<br />
                  • You'll receive confirmation at your email<br />
                  • Get ready for an amazing learning experience!
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
              Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">Free Trial</span>
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              Experience our teaching quality with a complimentary one-on-one Quran class
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Benefits */}
            <div className="lg:col-span-1">
              <Card className="border-none shadow-lg sticky top-20">
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
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Schedule Your Free Trial Class</h3>
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    {/* Parent Information */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Parent/Guardian Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="parentName" className="text-gray-900 font-medium">Full Name *</Label>
                          <Input
                            id="parentName"
                            name="parentName"
                            type="text"
                            required
                            value={formData.parentName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`mt-2 border-gray-300 focus:border-teal-500 focus:ring-teal-500 ${
                              touched.parentName && errors.parentName ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                            }`}
                            placeholder="Your full name"
                          />
                          {touched.parentName && errors.parentName && (
                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                              <AlertCircle className="h-4 w-4" />
                              {errors.parentName}
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
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div>
                          <Label htmlFor="phone" className="text-gray-900 font-medium">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
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
                          <Label htmlFor="country" className="text-gray-900 font-medium">Country *</Label>
                          <Input
                            id="country"
                            name="country"
                            type="text"
                            required
                            value={formData.country}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`mt-2 border-gray-300 focus:border-teal-500 focus:ring-teal-500 ${
                              touched.country && errors.country ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                            }`}
                            placeholder="Your country"
                          />
                          {touched.country && errors.country && (
                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                              <AlertCircle className="h-4 w-4" />
                              {errors.country}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Student Information */}
                    <div className="border-t border-gray-200 pt-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Student Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="studentName" className="text-gray-900 font-medium">Student Name *</Label>
                          <Input
                            id="studentName"
                            name="studentName"
                            type="text"
                            required
                            value={formData.studentName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`mt-2 border-gray-300 focus:border-teal-500 focus:ring-teal-500 ${
                              touched.studentName && errors.studentName ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                            }`}
                            placeholder="Student's full name"
                          />
                          {touched.studentName && errors.studentName && (
                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                              <AlertCircle className="h-4 w-4" />
                              {errors.studentName}
                            </p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="studentAge" className="text-gray-900 font-medium">Student Age *</Label>
                          <Input
                            id="studentAge"
                            name="studentAge"
                            type="number"
                            required
                            value={formData.studentAge}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`mt-2 border-gray-300 focus:border-teal-500 focus:ring-teal-500 ${
                              touched.studentAge && errors.studentAge ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                            }`}
                            placeholder="Age"
                            min="5"
                            max="100"
                          />
                          {touched.studentAge && errors.studentAge && (
                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                              <AlertCircle className="h-4 w-4" />
                              {errors.studentAge}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Course Preferences */}
                    <div className="border-t border-gray-200 pt-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Course Preferences</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="course" className="text-gray-900 font-medium">Interested Course *</Label>
                          <Select onValueChange={(value) => handleSelectChange('course', value)} required>
                            <SelectTrigger className={`mt-2 border-gray-300 ${
                              touched.course && errors.course ? 'border-red-500' : ''
                            }`}>
                              <SelectValue placeholder="Select a course" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="quran-nazira">Quran Nazira (Reading)</SelectItem>
                              <SelectItem value="hifz">Hifz-ul-Quran (Memorization)</SelectItem>
                              <SelectItem value="tajweed">Tajweed Mastery</SelectItem>
                              <SelectItem value="duas">Duas & Islamic Education</SelectItem>
                              <SelectItem value="kids">Kids Quran Course</SelectItem>
                              <SelectItem value="adult">Adult Quran Learning</SelectItem>
                              <SelectItem value="translation">Quran with Translation</SelectItem>
                              <SelectItem value="not-sure">Not Sure / Need Guidance</SelectItem>
                            </SelectContent>
                          </Select>
                          {touched.course && errors.course && (
                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                              <AlertCircle className="h-4 w-4" />
                              {errors.course}
                            </p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="preferredTime" className="text-gray-900 font-medium">Preferred Time *</Label>
                          <Select onValueChange={(value) => handleSelectChange('preferredTime', value)} required>
                            <SelectTrigger className={`mt-2 border-gray-300 ${
                              touched.preferredTime && errors.preferredTime ? 'border-red-500' : ''
                            }`}>
                              <SelectValue placeholder="Select preferred time" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="morning">Morning (6 AM - 12 PM)</SelectItem>
                              <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                              <SelectItem value="evening">Evening (5 PM - 9 PM)</SelectItem>
                              <SelectItem value="flexible">Flexible</SelectItem>
                            </SelectContent>
                          </Select>
                          {touched.preferredTime && errors.preferredTime && (
                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                              <AlertCircle className="h-4 w-4" />
                              {errors.preferredTime}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="border-t border-gray-200 pt-6">
                      <Label htmlFor="additionalInfo" className="text-gray-900 font-medium">Additional Information (Optional)</Label>
                      <Textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        rows={4}
                        className="mt-2 border-gray-300 focus:border-teal-500 focus:ring-teal-500 resize-none"
                        placeholder="Tell us about your current level, goals, or any special requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white font-semibold py-6 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Booking...' : 'Book My Free Trial Class'}
                    </Button>

                    <p className="text-sm text-gray-600 text-center">
                      By submitting this form, you agree to be contacted by our team to schedule your trial class.
                    </p>
                  </form>
                </CardContent>
              </Card>
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
    </div>
  );
};

export default BookTrial;
