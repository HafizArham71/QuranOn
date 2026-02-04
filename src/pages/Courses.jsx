import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Clock, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { toast } from '../components/ui/sonner';
import { courses } from '../mock';

const Courses = () => {
  const navigate = useNavigate();

  const handleStartLearning = (course) => {
    // Save selected course to localStorage
    localStorage.setItem('selectedCourse', JSON.stringify({
      id: course.id,
      title: course.title,
      subtitle: course.subtitle,
      description: course.description
    }));
    
    // Show success toast
    toast.success(`${course.title} selected! Redirecting to contact...`);
    
    // Navigate to contact page after a short delay
    setTimeout(() => {
      navigate('/contact');
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">Courses</span>
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              Structured programs for every age and level
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="group">
                {/* Modern Card */}
                <div className="bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                  {/* Icon Header */}
                  <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-200/30 to-teal-200/30 rounded-full -mr-12 -mt-12"></div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center mb-3 shadow-lg">
                        <div className="w-6 h-6 bg-white rounded-lg"></div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                      <div className="inline-block bg-gradient-to-r from-cyan-500 to-teal-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {course.subtitle}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    {/* Description */}
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">{course.description}</p>
                    
                    {/* Course Includes - Compact */}
                    <div className="mb-4">
                      <h4 className="text-xs font-bold text-gray-900 mb-2 uppercase tracking-wide">What You'll Learn</h4>
                      <ul className="space-y-2">
                        {course.includes.slice(0, 3).map((item, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-4 h-4 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-gray-700 text-sm">{item}</span>
                          </li>
                        ))}
                        {course.includes.length > 3 && (
                          <li className="text-xs text-gray-500 italic">+{course.includes.length - 3} more topics</li>
                        )}
                      </ul>
                    </div>
                    
                    {/* Course Details - Compact */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center space-x-2 bg-cyan-50 rounded-lg p-2">
                        <Clock className="h-4 w-4 text-cyan-600" />
                        <span className="text-xs font-semibold text-gray-900">{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-teal-50 rounded-lg p-2">
                        <TrendingUp className="h-4 w-4 text-teal-600" />
                        <span className="text-xs font-semibold text-gray-900">{course.level}</span>
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <Button 
                      onClick={() => handleStartLearning(course)}
                      size="default"
                      variant="primary"
                      className="w-full"
                    >
                      <span>Start Learning</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Selection Help - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-teal-400/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-36 h-36 bg-blue-400/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-full mb-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
              Not Sure Which <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">Course</span> to Choose?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Let us guide you to the perfect Quran learning program tailored to your goals
            </p>
          </div>
          
          {/* Interactive Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Complete Beginners Card */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-emerald-500"></div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Complete Beginners</h3>
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full mt-1">Starting Point</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Perfect for those starting from scratch. Build a strong foundation with basic Arabic letters and Quran reading.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="font-medium text-gray-900">Kids Quran Course</span>
                    <span className="ml-auto text-gray-500">Ages 5-12</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="font-medium text-gray-900">Adult Quran Learning</span>
                    <span className="ml-auto text-gray-500">Ages 13+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Can Read - Tajweed Card */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-cyan-500"></div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Can Read Quran</h3>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mt-1">Improve Recitation</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Already know how to read? Focus on perfecting pronunciation, rhythm, and beautiful recitation with Tajweed rules.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                    <span className="font-medium text-gray-900">Tajweed Mastery</span>
                    <span className="ml-auto text-gray-500">All Levels</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                    <span className="font-medium text-gray-900">Advanced Recitation</span>
                    <span className="ml-auto text-gray-500">Experienced</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Memorization Card */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 to-pink-500"></div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Memorization Goals</h3>
                    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full mt-1">Hifz Journey</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Ready to memorize the Quran? Our structured Hifz program helps you memorize efficiently with proper revision.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                    <span className="font-medium text-gray-900">Hifz Program</span>
                    <span className="ml-auto text-gray-500">Dedicated</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                    <span className="font-medium text-gray-900">Revision System</span>
                    <span className="ml-auto text-gray-500">Built-in</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Understanding Quran Card */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-red-500"></div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Understanding Quran</h3>
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mt-1">Meaning & Context</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Want to understand what you're reciting? Learn Quran with translation and tafsir to grasp the divine message.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0" />
                    <span className="font-medium text-gray-900">Quran with Translation</span>
                    <span className="ml-auto text-gray-500">With Tafsir</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0" />
                    <span className="font-medium text-gray-900">Arabic Basics</span>
                    <span className="ml-auto text-gray-500">Included</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="text-center">
            <div className="relative">
              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50 rounded-3xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-teal-100/20 to-cyan-100/20 rounded-3xl blur-2xl"></div>
              
              {/* Main Card */}
              <div className="relative bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-2xl border border-teal-200 max-w-5xl mx-auto overflow-hidden">
                {/* Top Decoration */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex justify-center mb-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center shadow-xl">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Heading */}
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">
                    Still Have <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">Questions?</span>
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-10 text-xl leading-relaxed max-w-2xl mx-auto">
                    Our expert team is ready to discuss your goals and recommend the perfect course for your Quran learning journey
                  </p>
                  
                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto sm:max-w-none">
                    <Link to="/contact" className="w-full sm:w-auto">
                      <Button size="lg" variant="primary" className="w-full sm:w-auto h-12 px-8 py-3 text-base">
                        <span className="sm:hidden">Get Recommendations</span>
                        <span className="hidden sm:inline">Get Personalized Recommendations</span>
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Link to="/book-trial" className="w-full sm:w-auto">
                      <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-2 border-teal-600 text-teal-600 hover:bg-teal-50 hover:border-teal-700 hover:text-teal-700 shadow-md hover:shadow-lg hover:-translate-y-0.5 h-12 px-8 py-3 text-base">
                        <span className="sm:hidden">Free Assessment</span>
                        <span className="hidden sm:inline">Try Free Assessment Class</span>
                      </Button>
                    </Link>
                  </div>
                  
                  {/* Trust Indicators */}
                  <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                      <span>Expert Guidance</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                      <span>Free Assessment</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-teal-500 mr-2" />
                      <span>No Obligation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment in Your Future */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-teal-400/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-400/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-36 h-36 bg-blue-400/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full mb-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
              Invest in <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">Your Future</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Quality Quran education is not an expense—it's an investment in your child's spiritual journey and eternal success
            </p>
          </div>

          {/* Value Proposition Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Value Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-100">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Investment Options</h3>
              <p className="text-gray-600 leading-relaxed">
                Choose plans that fit your family's budget. Monthly, quarterly, and annual options available with family discounts.
              </p>
            </div>

            {/* Value Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-cyan-100">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Value Beyond Measure</h3>
              <p className="text-gray-600 leading-relaxed">
                Spiritual guidance, character building, and Quranic wisdom—benefits that last a lifetime and beyond.
              </p>
            </div>

            {/* Value Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Family-Centered Approach</h3>
              <p className="text-gray-600 leading-relaxed">
                Special family packages and sibling discounts make it easier for the whole family to learn together.
              </p>
            </div>
          </div>

          {/* Trust Building Section */}
          <div className="bg-gradient-to-br from-white/90 to-teal-50/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-teal-200 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400"></div>
            
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Start Your Journey <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">Risk-Free</span>
              </h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Experience our teaching quality with a complimentary trial class. See the difference our expert teachers can make in your child's Quran learning journey.
              </p>
              
              {/* Benefits List */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="flex items-center justify-center space-x-2 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0" />
                  <span className="font-medium">No Credit Card Required</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0" />
                  <span className="font-medium">Free Trial Class</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0" />
                  <span className="font-medium">No Long-Term Commitment</span>
                </div>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/book-trial">
                  <Button size="lg" variant="primary">
                    Start Free Trial Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Discuss Family Plans
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500 to-teal-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Experience Our Teaching Quality
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Book a free trial class and see why families trust us with their Quran education.
          </p>
          <div className="mt-8">
            <Link to="/book-trial">
              <Button variant="outlineLight" size="lg" className="h-12 px-8 py-3 text-base">
                Book Your Free Trial Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
