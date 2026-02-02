import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Quote } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel';
import { useState } from 'react';
import { teachers, testimonials } from '../mock';

const Testimonials = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredTestimonials = selectedCategory === 'All' 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.course === selectedCategory);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">Testimonials</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Real experiences from students who have transformed their Quran learning journey
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-xl bg-gray-50 p-1.5 shadow-sm border border-gray-200">
              {['All', 'Hifz', 'Nazira', 'Tarjuma', 'Tajweed', 'Arabic'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-white text-teal-600 shadow-md transform scale-105'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-teal-100"
              >
                {/* Animated Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-teal-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-50/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-lg backdrop-blur-sm border border-white/20">
                    {testimonial.course}
                  </span>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-teal-400/10 to-transparent rounded-full -translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-cyan-400/10 to-transparent rounded-full translate-x-12 translate-y-12"></div>
                
                <div className="relative p-6">
                  <div className="flex items-center mb-4">
                    <div className="relative">
                      {/* Avatar with Ring */}
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover shadow-lg ring-4 ring-white/50"
                      />
                      {/* Status Badge */}
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-white flex items-center justify-center shadow-md">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="font-bold text-gray-900 text-xl mb-1">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 font-medium">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  {/* Rating Section */}
                  <div className="flex items-center justify-between mb-4 bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className={`w-5 h-5 transition-all duration-200 ${
                            index < testimonial.rating 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-700 bg-white px-3 py-1 rounded-full border border-gray-200">
                      {testimonial.rating}.0
                    </span>
                  </div>
                  
                  {/* Testimonial Text */}
                  <div className="relative mb-4">
                    {/* Large Quote Mark */}
                    <div className="absolute -top-2 -left-2 text-6xl text-teal-100 font-serif leading-none opacity-50 select-none">
                      "
                    </div>
                    <div className="absolute -bottom-2 -right-2 text-6xl text-teal-100 font-serif leading-none rotate-180 opacity-50 select-none">
                      "
                    </div>
                    <p className="text-gray-700 leading-relaxed pl-8 pr-8 text-sm relative z-10 font-medium">
                      {testimonial.text}
                    </p>
                  </div>
                  
                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-teal-100">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center text-sm text-gray-600 font-medium">
                        <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mr-2">
                          <svg className="w-3 h-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        {testimonial.location}
                      </div>
                      <div className="flex items-center text-sm text-green-600 font-medium">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                          <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                        </div>
                        Active
                      </div>
                    </div>
                    <div className="text-teal-600 opacity-0 group-hover:opacity-100 transition-all duration-400 transform translate-x-3 group-hover:translate-x-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-teal-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm text-teal-600 font-semibold uppercase tracking-wider mb-2 block">Our Faculty</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Expert Teachers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Qualified, experienced, and dedicated to your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachers.map((teacher, index) => (
              <div key={teacher.id} className="group">
                {/* Premium Card */}
                <div className="relative bg-gradient-to-br from-white to-teal-50/30 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-teal-100">
                  {/* Top Accent Bar */}
                  <div className="h-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-600"></div>
                  
                  {/* Content */}
                  <div className="p-6">
                    {/* Avatar with Initials */}
                    <div className="relative mb-4">
                      <div className="relative w-20 h-20 mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                        <div className="relative w-full h-full bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                          <span className="text-white font-bold text-xl">
                            {teacher.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        {/* Online Badge */}
                        <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Name */}
                    <h3 className="text-lg font-bold text-center text-gray-900 mb-1 group-hover:text-teal-600 transition-colors duration-300">
                      {teacher.name}
                    </h3>
                    
                    {/* Qualification */}
                    <p className="text-sm text-center text-teal-600 font-medium mb-4">
                      {teacher.qualification}
                    </p>
                    
                    {/* Experience Badge */}
                    <div className="flex justify-center mb-4">
                      <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full">
                        <svg className="w-4 h-4 text-teal-600 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs font-semibold text-teal-700">{teacher.experience}</span>
                      </div>
                    </div>
                    
                    {/* Specialization */}
                    <div className="text-center mb-4">
                      <p className="text-xs text-gray-600 font-medium">{teacher.specialization}</p>
                    </div>
                    
                    {/* Languages */}
                    <div className="flex flex-wrap justify-center gap-1 mb-4">
                      {teacher.languages.map((lang, index) => (
                        <span key={index} className="px-2 py-1 bg-white border border-teal-200 text-teal-700 text-xs rounded-lg font-medium">
                          {lang}
                        </span>
                      ))}
                    </div>
                    
                    {/* Bio Quote */}
                    <div className="relative bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-3 mb-4">
                      <svg className="absolute top-2 left-2 w-4 h-4 text-teal-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <p className="text-xs text-gray-700 italic pl-5 line-clamp-2">
                        "{teacher.bio}"
                      </p>
                    </div>
                    
                    {/* Bottom Status */}
                    <div className="flex items-center justify-between pt-3 border-t border-teal-100">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-gray-500">Available</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <svg className="w-3 h-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs text-gray-500">Verified</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 to-teal-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Trusted Worldwide</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-teal-600 mb-2">5,000+</p>
              <p className="text-sm sm:text-base text-gray-700">Happy Students</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-teal-600 mb-2">50+</p>
              <p className="text-sm sm:text-base text-gray-700">Countries</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-teal-600 mb-2">100+</p>
              <p className="text-sm sm:text-base text-gray-700">Expert Teachers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-teal-600 mb-2">4.9/5</p>
              <p className="text-sm sm:text-base text-gray-700">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500 to-teal-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Join Our Family of Successful Learners
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Experience the same quality teaching that our students rave about.
          </p>
          <div className="mt-8">
            <Link to="/book-trial">
              <Button size="xl" variant="outlineLight">
                Book Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
