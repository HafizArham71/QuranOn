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

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">How It Works</h2>
            <p className="mt-4 text-lg text-gray-600">
              Getting started is easy
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 text-white text-2xl font-bold">
                  1
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Book Free Trial</h3>
              <p className="text-sm text-gray-600">
                Sign up for a complimentary trial class to experience our teaching quality.
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
                We'll match you with a qualified teacher based on your needs and preferences.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 text-white text-2xl font-bold">
                  3
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Your Schedule</h3>
              <p className="text-sm text-gray-600">
                Select class times that fit your routine. Flexible and convenient.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 text-white text-2xl font-bold">
                  4
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Start Learning</h3>
              <p className="text-sm text-gray-600">
                Begin your Quranic journey with personalized one-on-one classes.
              </p>
            </div>
          </div>
        </div>
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
              <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 font-semibold text-lg px-10 py-6 shadow-xl transition-all duration-300">
                Book Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-10 py-6 transition-all duration-300">
                Contact Us for Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
