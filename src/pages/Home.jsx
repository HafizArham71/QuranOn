import React from 'react';

import { Link } from 'react-router-dom';

import { ArrowRight, CheckCircle, Users, Globe, Award, Clock, BookOpen, Brain, Mic2, Heart, Star, ChevronDown, Shield } from 'lucide-react';

import { Button } from '../components/ui/button';

import { Card, CardContent } from '../components/ui/card';

import { services, homeData } from '../mock';



const iconMap = {

  BookOpen: BookOpen,

  Brain: Brain,

  Mic2: Mic2,

  Heart: Heart,

};



const statsIconMap = {

  Users: Users,

  Globe: Globe,

  Award: Award,

  Clock: Clock,

};



const Home = () => {



  return (

    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-100/30 via-transparent to-cyan-100/30"></div>
          <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-56 h-56 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 mb-8">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-emerald-700 text-sm font-medium">Trusted by 10,000+ Muslim Families Worldwide</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6">
              <span className="block mb-2">Learn Quran Online with</span>
              <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Expert Teachers
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              One-on-one live Quran classes with certified teachers. Personalized learning that adapts to your child's pace and schedule.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
              <div className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-emerald-600" />
                <span className="text-2xl font-bold text-gray-900">10,000+</span>
                <span className="text-gray-600">Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-emerald-600" />
                <span className="text-2xl font-bold text-gray-900">500+</span>
                <span className="text-gray-600">Teachers</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-6 w-6 text-emerald-600" />
                <span className="text-2xl font-bold text-gray-900">50+</span>
                <span className="text-gray-600">Countries</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <Link to="/book-trial">
                <Button size="xl" variant="default">
                  Start Free Trial
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              
              <Link to="/courses">
                <Button size="xl" variant="outline">
                  View Courses
                </Button>
              </Link>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-100">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <BookOpen className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Quran Reading</h3>
                <p className="text-gray-600 text-sm">From basics to fluent recitation</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-100">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Brain className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Memorization</h3>
                <p className="text-gray-600 text-sm">Structured Hifz programs</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-100">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Mic2 className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Tajweed</h3>
                <p className="text-gray-600 text-sm">Perfect pronunciation</p>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 mt-12 text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Free trial class</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Expert teachers</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Wave - Full Width */}
        <div className="absolute bottom-0 left-0 right-0 w-screen overflow-hidden">
          <svg className="w-full h-24 text-white" viewBox="0 0 1440 120" fill="currentColor" preserveAspectRatio="none">
            <path d="M0,64 C80,48 160,32 240,32 C320,32 400,48 480,64 C560,80 640,96 720,96 C800,96 880,80 960,64 C1040,48 1120,32 1200,32 C1280,32 1360,48 1440,64 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </section>



      {/* Stats Section */}

      <section className="bg-white py-16">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">

            {homeData.stats.map((stat, index) => {

              const IconComponent = statsIconMap[stat.icon];

              return (

                <div key={index} className="text-center">

                  <div className="flex justify-center mb-3">

                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-100">

                      <IconComponent className="h-7 w-7 text-teal-600" />

                    </div>

                  </div>

                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>

                  <p className="mt-1 text-sm text-gray-600">{stat.label}</p>

                </div>

              );

            })}

          </div>

        </div>

      </section>



      {/* Services Preview */}
      <section className="py-24 bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-20 w-40 h-40 bg-teal-600 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-cyan-600 rounded-full"></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-emerald-600 rounded-full"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive Quran education tailored to your spiritual journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              
              return (
                <div key={service.id} className="group relative">
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-all duration-500 blur"></div>
                  
                  <Card className="relative border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white rounded-2xl overflow-hidden">
                    {/* Gradient top border */}
                    <div className={`h-2 bg-gradient-to-r ${
                      index === 0 ? 'from-teal-500 to-cyan-600' :
                      index === 1 ? 'from-cyan-500 to-teal-600' :
                      index === 2 ? 'from-emerald-500 to-teal-600' :
                      'from-teal-500 to-emerald-600'
                    }`}></div>
                    
                    <CardContent className="p-8">
                      {/* Enhanced icon container */}
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-600 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {service.description}
                      </p>

                      {/* Learn more link */}
                      <Link to={`/services#${service.id}`} className="flex items-center text-teal-600 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer">
                        <span>Learn more</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <Link to="/services">
              <Button size="lg" variant="primary">
                Explore All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>



      {/* Why Choose Us */}

      <section className="py-20 bg-white">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Choose Quran Academy?</h2>

            <p className="mt-4 text-lg text-gray-600">

              Trusted by thousands of families worldwide

            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {homeData.whyChooseUs.map((item, index) => (

              <div key={index} className="flex items-start space-x-4">

                <div className="flex-shrink-0">

                  <CheckCircle className="h-6 w-6 text-teal-600" />

                </div>

                <div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>

                  <p className="text-gray-600">{item.description}</p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* Risk-Free Trial Section - Conversion Focused */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2314b8a6' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 mb-6">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
                <span className="text-emerald-700 text-sm font-medium">Limited Time Offer</span>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Free Trial</span> Today
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join 10,000+ Muslim families who trust QuranOn for their children's Islamic education. 
                No credit card required. Cancel anytime.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-lg">
                  <Shield className="h-5 w-5 text-emerald-600" />
                  <span className="text-sm font-medium text-gray-700">100% Secure</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-lg">
                  <Clock className="h-5 w-5 text-emerald-600" />
                  <span className="text-sm font-medium text-gray-700">Cancel Anytime</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-lg">
                  <Award className="h-5 w-5 text-emerald-600" />
                  <span className="text-sm font-medium text-gray-700">Certified Teachers</span>
                </div>
              </div>

              {/* CTA Button */}
              <Link to="/book-trial">
                <Button size="lg" variant="default">
                  Start Your 3-Day Free Trial
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>

              <p className="text-sm text-gray-500 mt-4">
                ✓ No hidden fees ✓ Instant access ✓ 24/7 support
              </p>
            </div>

            {/* Right Content - Benefits Grid */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What You'll Get:</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Personalized Learning Plan</h4>
                    <p className="text-gray-600 text-sm">Custom curriculum based on your child's level and goals</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">One-on-One Sessions</h4>
                    <p className="text-gray-600 text-sm">Individual attention from certified Quran teachers</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Progress Tracking</h4>
                    <p className="text-gray-600 text-sm">Monitor your child's learning journey with detailed reports</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Flexible Scheduling</h4>
                    <p className="text-gray-600 text-sm">Classes that fit your family's busy schedule</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Parent Dashboard</h4>
                    <p className="text-gray-600 text-sm">Stay involved with real-time updates and insights</p>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="mt-8 pt-6 border-t border-emerald-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">4.9/5 from 2,500+ reviews</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">10,000+</p>
                    <p className="text-sm text-gray-600">Happy Students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}

      <section className="py-20 bg-gradient-to-r from-cyan-500 to-teal-600">

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-3xl font-bold text-white sm:text-4xl">

            Begin Your Quran Journey Today

          </h2>

          <p className="mt-4 text-lg text-white/90">

            Experience our teaching quality with a free trial class. No commitment required.

          </p>

          <div className="mt-8">

            <Link to="/book-trial">
              <Button size="xl" variant="outlineLight">
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



export default Home;

