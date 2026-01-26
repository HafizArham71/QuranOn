import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { courses } from '../mock';

const Courses = () => {
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
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-500 to-teal-600 h-2"></div>
                <CardContent className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{course.title}</h3>
                    <p className="text-teal-600 font-medium mt-1">{course.subtitle}</p>
                  </div>
                  <p className="text-gray-700 mb-6">{course.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Course Includes:</h4>
                      <ul className="space-y-2">
                        {course.includes.map((item, index) => (
                          <li key={index} className="flex items-start space-x-2 text-sm text-gray-700">
                            <span className="text-teal-600 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4 text-teal-600" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <TrendingUp className="h-4 w-4 text-teal-600" />
                        <span>{course.level}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Selection Help */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Not Sure Which Course to Choose?</h2>
            <p className="mt-4 text-lg text-gray-600">
              We're here to help you find the perfect program
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">For Complete Beginners</h3>
                <p className="text-gray-700">
                  Start with <span className="font-semibold text-teal-600">Kids Quran Course</span> (children) or <span className="font-semibold text-teal-600">Adult Quran Learning</span> (adults). These courses begin with the basics and build a strong foundation.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">For Those Who Can Read</h3>
                <p className="text-gray-700">
                  If you can read but want to improve pronunciation and recite beautifully, <span className="font-semibold text-teal-600">Tajweed Mastery</span> is ideal for you.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">For Memorization Goals</h3>
                <p className="text-gray-700">
                  Our <span className="font-semibold text-teal-600">Hifz Program</span> is designed for students committed to memorizing the Quran. Suitable for all ages with proper dedication.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">For Understanding the Quran</h3>
                <p className="text-gray-700">
                  <span className="font-semibold text-teal-600">Quran with Translation</span> combines recitation with meaning, perfect for those who want to understand what they're reading.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-700 mb-4">Still have questions? Our team is happy to discuss your goals and recommend the best course.</p>
              <Link to="/contact">
                <Button variant="outline" className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-semibold">
                  Get Course Recommendations
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Affordable Pricing</h2>
          <p className="text-lg text-gray-700 mb-6">
            We believe quality Quran education should be accessible to everyone. Our pricing is competitive and transparent, with discounts available for multiple children from the same family.
          </p>
          <p className="text-gray-600 mb-8">
            For detailed pricing information based on your selected course and schedule, please contact us.
          </p>
          <Link to="/contact">
            <Button className="bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white font-semibold px-8 py-6 text-lg shadow-lg transition-all duration-300">
              Contact Us for Pricing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
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
              <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 font-semibold text-lg px-10 py-6 shadow-xl transition-all duration-300">
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
