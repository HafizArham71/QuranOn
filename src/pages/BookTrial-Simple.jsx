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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simple validation
    const requiredFields = ['parentName', 'email', 'phone', 'country', 'studentName', 'studentAge', 'course', 'preferredTime'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      toast.error("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    // Age validation
    const age = parseInt(formData.studentAge);
    if (isNaN(age) || age < 5 || age > 100) {
      toast.error("Please enter a valid age between 5 and 100");
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate API call - always succeed
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
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
      
    } catch (error) {
      toast.error("Error", {
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    'One-on-one personalized trial class',
    'Meet your qualified teacher',
    'Experience our teaching method',
    'No obligation to enroll',
    'Completely free of charge',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Book a Free Trial Class
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Experience our Quran teaching method with a complimentary trial session
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Book a Trial Class?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Book Your Free Trial Class
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Parent/Guardian Information */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Parent/Guardian Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                      <Input
                        id="parentName"
                        name="parentName"
                        type="text"
                        value={formData.parentName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="mt-1"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        className="mt-1"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="country">Country *</Label>
                      <Input
                        id="country"
                        name="country"
                        type="text"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="Your country"
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Student Information */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Student Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="studentName">Student Name *</Label>
                      <Input
                        id="studentName"
                        name="studentName"
                        type="text"
                        value={formData.studentName}
                        onChange={handleChange}
                        placeholder="Student's full name"
                        className="mt-1"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="studentAge">Student Age *</Label>
                      <Input
                        id="studentAge"
                        name="studentAge"
                        type="number"
                        value={formData.studentAge}
                        onChange={handleChange}
                        placeholder="Age in years"
                        className="mt-1"
                        min="5"
                        max="100"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Course Preferences */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Course Preferences
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="course">Interested Course *</Label>
                      <Select value={formData.course} onValueChange={(value) => handleSelectChange('course', value)}>
                        <SelectTrigger className="mt-1">
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
                    </div>
                    
                    <div>
                      <Label htmlFor="preferredTime">Preferred Time *</Label>
                      <Select value={formData.preferredTime} onValueChange={(value) => handleSelectChange('preferredTime', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select preferred time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (6 AM - 12 PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                          <SelectItem value="evening">Evening (5 PM - 9 PM)</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <Label htmlFor="additionalInfo">Additional Information</Label>
                  <Textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    placeholder="Any specific requirements or questions..."
                    rows={4}
                    className="mt-1"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Booking...' : 'Book Free Trial Class'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default BookTrial;
