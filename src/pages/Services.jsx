import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Brain, Mic2, Heart, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { services } from '../mock';

const iconMap = {
  BookOpen: BookOpen,
  Brain: Brain,
  Mic2: Mic2,
  Heart: Heart,
};

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">Services</span>
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive Quran education programs designed to meet the needs of every learner
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <Card key={service.id} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-teal-600">
                          <IconComponent className="h-7 w-7 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                        <p className="text-gray-700 mb-4">{service.description}</p>
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-teal-600">What you'll learn:</p>
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works - Unique Flow */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-full mb-8 shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-full animate-ping opacity-20"></div>
              <svg className="w-12 h-12 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 sm:text-6xl mb-6">
              Begin Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">Learning Journey</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Where quality teaching meets personal growth - Experience the path to Quranic excellence
            </p>
          </div>

          {/* Unique Flow - Diagonal Path */}
          <div className="relative">
            {/* Flow Path */}
            <svg className="hidden lg:block absolute inset-0 w-full h-full" viewBox="0 0 1200 400">
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.3"/>
                  <stop offset="50%" stopColor="#14B8A6" stopOpacity="0.5"/>
                  <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.3"/>
                </linearGradient>
              </defs>
              <path d="M 100 200 Q 300 100 500 200 T 900 200" stroke="url(#pathGradient)" strokeWidth="3" fill="none" strokeDasharray="5,5" className="animate-pulse"/>
            </svg>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative">
              {/* Step 1 - Floating */}
              <div className="group relative transform hover:-translate-y-3 transition-all duration-500">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-cyan-200 shadow-lg">
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    1
                  </div>
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-cyan-100 to-cyan-50 rounded-2xl border border-cyan-200">
                      <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Discover Your Path</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Begin with a free trial class where quality teaching comes alive through modern connection
                  </p>
                  <div className="mt-6 flex items-center text-cyan-600 text-sm">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse mr-2"></span>
                    Free • No obligation • Quality experience
                  </div>
                </div>
              </div>

              {/* Step 2 - Elevated */}
              <div className="group relative transform hover:-translate-y-3 transition-all duration-500 lg:translate-y-8">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-teal-200 shadow-lg">
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    2
                  </div>
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-teal-100 to-teal-50 rounded-2xl border border-teal-200">
                      <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Meet Your Teacher</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Connect with a qualified instructor who becomes your dedicated mentor on this learning journey
                  </p>
                  <div className="mt-6 flex items-center text-teal-600 text-sm">
                    <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse mr-2"></span>
                    Qualified • Experienced • Dedicated
                  </div>
                </div>
              </div>

              {/* Step 3 - Higher */}
              <div className="group relative transform hover:-translate-y-3 transition-all duration-500 lg:translate-y-16">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-blue-200 shadow-lg">
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    3
                  </div>
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl border border-blue-200">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Choose Your Schedule</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Select times that align with your learning rhythm and daily routine
                  </p>
                  <div className="mt-6 flex items-center text-blue-600 text-sm">
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse mr-2"></span>
                    Flexible • Convenient • Your pace
                  </div>
                </div>
              </div>

              {/* Step 4 - Peak */}
              <div className="group relative transform hover:-translate-y-3 transition-all duration-500 lg:translate-y-24">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-emerald-200 shadow-lg">
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    4
                  </div>
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl border border-emerald-200">
                      <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Start Learning</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Begin your transformative journey where every lesson brings you closer to Quranic mastery
                  </p>
                  <div className="mt-6 flex items-center text-emerald-600 text-sm">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse mr-2"></span>
                    Personal • Effective • Transformative
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-24">
            <div className="bg-gradient-to-br from-white/90 to-cyan-50/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-cyan-200 max-w-3xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/50 to-teal-100/50"></div>
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-full">
                    <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Your Learning Journey Awaits</h3>
                <p className="text-gray-600 mb-8 text-lg">
                  Join thousands of students on the path to Quranic excellence
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/book-trial">
                    <Button size="lg" variant="primary" className="h-12 px-8 py-3 text-base">
                      Start Free Trial
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/courses">
                    <Button size="lg" variant="outline" className="bg-transparent border-2 border-teal-600 text-teal-600 hover:bg-teal-50 hover:border-teal-700 hover:text-teal-700 shadow-md hover:shadow-lg hover:-translate-y-0.5 h-12 px-8 py-3 text-base">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What's Included</h2>
            <p className="mt-4 text-lg text-gray-600">
              Every service comes with comprehensive support
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">One-on-One Classes</h3>
              <p className="text-gray-600">Personalized attention ensures focused learning and faster progress.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Qualified Teachers</h3>
              <p className="text-gray-600">All instructors are Hafiz/Hafiza with Ijazah and teaching experience.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">Choose times that work for you. Available 7 days a week.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Progress Tracking</h3>
              <p className="text-gray-600">Regular assessments and detailed progress reports for parents.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Interactive Platform</h3>
              <p className="text-gray-600">User-friendly video conferencing with digital learning tools.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Bilingual Support</h3>
              <p className="text-gray-600">Instruction available in English and Urdu for better comprehension.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500 to-teal-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Begin Your Quran Journey?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Contact us for pricing or book a free trial class today.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/book-trial">
              <Button variant="outlineLight" size="lg" className="h-12 px-8 py-3 text-base">
                Book Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outlineLight" size="lg" className="h-12 px-8 py-3 text-base">
                Contact Us for Pricing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
