import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Heart, Users, Award, ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Faith & Excellence',
      description: 'We combine Islamic values with educational excellence to nurture spiritually grounded students.',
    },
    {
      icon: Users,
      title: 'Student-Centered',
      description: 'Every student is unique. We tailor our teaching to individual learning styles and pace.',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Our teachers undergo rigorous screening and continuous training to maintain the highest standards.',
    },
    {
      icon: Target,
      title: 'Clear Goals',
      description: 'We set measurable objectives and track progress to ensure consistent advancement.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">Quran Academy</span>
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              Connecting hearts to the Quran through quality education and dedicated teachers
            </p>
          </div>
        </div>
      </section>

      {/* Our Story - Unique Light Theme Design */}
      <section className="py-20 bg-gradient-to-br from-white via-teal-50 to-cyan-50 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="islamic-pattern-light" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="currentColor" className="text-teal-600"/>
              <path d="M10 5 L15 10 L10 15 L5 10 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-teal-600"/>
            </pattern>
            <rect width="100" height="100" fill="url(#islamic-pattern-light)" />
          </svg>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-teal-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-100 rounded-full opacity-20 animate-pulse delay-75"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-emerald-100 rounded-full opacity-20 animate-pulse delay-150"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          {/* <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A divine mission that began in the hearts of parents and blossomed into a global community of Quran learners
            </p>
          </div> */}

          {/* Unique Winding Path Timeline */}
          <div className="relative">
            {/* Curved Path */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
              <path d="M 100 100 Q 300 200, 500 150 T 900 250 Q 1000 300, 1100 400" 
                    stroke="url(#gradient-path)" 
                    strokeWidth="3" 
                    fill="none" 
                    opacity="0.3"/>
              <defs>
                <linearGradient id="gradient-path" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor: '#14b8a6', stopOpacity: 1}} />
                  <stop offset="50%" style={{stopColor: '#06b6d4', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#10b981', stopOpacity: 1}} />
                </linearGradient>
              </defs>
            </svg>

            {/* Story Points - Unique Layout */}
            <div className="grid md:grid-cols-2 gap-16 relative">
              {/* Beginning - Top Left */}
              <div className="relative">
                <div className="bg-white rounded-3xl shadow-xl p-8 border border-teal-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full opacity-50 -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-teal-600 text-sm font-semibold">2019</div>
                        <div className="text-gray-900 text-2xl font-bold">The Divine Calling</div>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      In the quiet moments of prayer and reflection, the vision was born - to create a sanctuary where the words of Allah could reach every corner of the world, touching hearts and transforming lives through the beauty of Quranic education.
                    </p>
                  </div>
                </div>
              </div>

              {/* Challenge - Top Right */}
              <div className="relative mt-32">
                <div className="bg-white rounded-3xl shadow-xl p-8 border border-cyan-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-full opacity-50 -ml-16 -mt-16"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-cyan-600 text-sm font-semibold">2020</div>
                        <div className="text-gray-900 text-2xl font-bold">Overcoming Barriers</div>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      We witnessed the struggles of families seeking authentic Quran education - geographical distances, time constraints, and the challenge of finding qualified teachers who could nurture both recitation and understanding.
                    </p>
                  </div>
                </div>
              </div>

              {/* Solution - Bottom Left */}
              <div className="relative mt-32">
                <div className="bg-white rounded-3xl shadow-xl p-8 border border-emerald-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full opacity-50 -mr-16 -mb-16"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-emerald-600 text-sm font-semibold">2021</div>
                        <div className="text-gray-900 text-2xl font-bold">Digital Revelation</div>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Technology became our bridge - connecting dedicated teachers with eager students across continents. We built not just a platform, but a digital ummah where knowledge flows freely and hearts connect through the love of Quran.
                    </p>
                  </div>
                </div>
              </div>

              {/* Growth - Bottom Right */}
              <div className="relative mt-32">
                <div className="bg-white rounded-3xl shadow-xl p-8 border border-teal-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-full opacity-50 -ml-16 -mb-16"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-teal-600 text-sm font-semibold">2022-2024</div>
                        <div className="text-gray-900 text-2xl font-bold">Global Blossoming</div>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      From a handful of students to thousands across 50+ nations, our digital garden flourished. Each student a flower, each teacher a gardener, all nurtured by the divine light of Quranic wisdom.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Unique Impact Visualization - Flower Garden */}
          <div className="mt-32 relative">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Global Garden</h3>
              <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto"></div>
              <p className="text-gray-600 mt-4 text-lg">Nurturing Quranic knowledge worldwide</p>
            </div>
            
            {/* Garden Layout */}
            <div className="relative w-full max-w-4xl mx-auto h-96">
              {/* Central Tree */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl">
                    <div className="text-center text-white">
                      <BookOpen className="w-12 h-12 mx-auto mb-2" />
                      <div className="text-sm font-bold">QuranOn</div>
                    </div>
                  </div>
                  {/* Roots */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-teal-600 to-emerald-700"></div>
                </div>
              </div>
              
              {/* Flowers representing stats */}
              <div className="absolute top-10 left-20 bg-white rounded-2xl p-4 shadow-lg border-2 border-teal-200 hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">50+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
              </div>
              
              <div className="absolute top-10 right-20 bg-white rounded-2xl p-4 shadow-lg border-2 border-cyan-200 hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600">1000s</div>
                  <div className="text-sm text-gray-600">Students</div>
                </div>
              </div>
              
              <div className="absolute bottom-10 left-20 bg-white rounded-2xl p-4 shadow-lg border-2 border-emerald-200 hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">100s</div>
                  <div className="text-sm text-gray-600">Teachers</div>
                </div>
              </div>
              
              <div className="absolute bottom-10 right-20 bg-white rounded-2xl p-4 shadow-lg border-2 border-teal-200 hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">24/7</div>
                  <div className="text-sm text-gray-600">Learning</div>
                </div>
              </div>
              
              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 300">
                <line x1="200" y1="150" x2="80" y2="50" stroke="#14b8a6" strokeWidth="2" opacity="0.3"/>
                <line x1="200" y1="150" x2="320" y2="50" stroke="#06b6d4" strokeWidth="2" opacity="0.3"/>
                <line x1="200" y1="150" x2="80" y2="250" stroke="#10b981" strokeWidth="2" opacity="0.3"/>
                <line x1="200" y1="150" x2="320" y2="250" stroke="#14b8a6" strokeWidth="2" opacity="0.3"/>
              </svg>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-teal-600 text-xl italic max-w-3xl mx-auto leading-relaxed">
              "And We have certainly made the Quran easy for remembrance, so is there anyone who will remember?" - Quran 54:17
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Meet Our Founder</h2>
            <p className="mt-4 text-lg text-gray-600">
              The visionary behind Quran Academy's mission
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-teal-600 to-cyan-600 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 overflow-hidden">
                    <img 
                      src="/images/founder-photo.jpg" 
                      alt="Hafiz Arham - Founder of Quran Academy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Hafiz Arham</h3>
                  <p className="text-teal-100">Founder & CEO</p>
                  <p className="text-teal-100">Quran Academy</p>
                </div>
              </div>
              
              <div className="md:w-2/3 p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Who I Am</h3>
                    <p className="text-gray-700 leading-relaxed">
                      I am Hafiz Arham, a passionate educator and multidimensional professional dedicated to bridging traditional Islamic knowledge with modern technology. As a Hafiz-ul-Quran with advanced expertise in software development, UI/UX design, and AI, I bring a unique blend of spiritual wisdom and technical innovation to Quran education.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">What I Do</h3>
                    <p className="text-gray-700 leading-relaxed">
                      As the founder of Quran Academy, I combine my deep understanding of Quranic teachings with cutting-edge technology to create exceptional learning experiences. I personally oversee curriculum development, teacher training, and technological innovation, ensuring every aspect of our platform meets the highest standards of both educational excellence and technical sophistication.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">My Aim for Quran Academy</h3>
                    <p className="text-gray-700 leading-relaxed">
                      My vision is to revolutionize Quran education by making it accessible, engaging, and effective for Muslims worldwide. I aim to build Quran Academy into the most trusted online learning platform, where technology and tradition unite to nurture a generation that not only recites the Quran beautifully but lives by its timeless wisdom and guidance.
                    </p>
                  </div>
                  
                  <div className="bg-teal-50 border-l-4 border-teal-600 p-4 rounded">
                    <p className="text-teal-800 italic">
                      "My goal is to create a world where every Muslim can connect deeply with the Quran through innovative, technology-enhanced learning that preserves authenticity while embracing modern educational excellence."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-teal-600 mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide world-class Quran education that is accessible, affordable, and effective. We aim to empower every Muslim—regardless of age, location, or background—to connect with the Quran through authentic teaching, modern technology, and compassionate guidance. Our mission is to nurture a generation that not only recites the Quran beautifully but understands and lives by its teachings.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-teal-600 mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  We envision a world where every Muslim has the opportunity to learn the Quran with qualified teachers. A world where distance, time, and resources are no longer barriers to Quranic education. We aspire to be the most trusted name in online Quran learning—known for our teaching excellence, student care, and commitment to preserving the authentic recitation and understanding of Allah's words.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Core Values</h2>
            <p className="mt-4 text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-100">
                      <value.icon className="h-7 w-7 text-teal-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-teal-50 to-emerald-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-teal-600 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-emerald-600 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-600 rounded-full"></div>
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Makes Us <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">Different</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the unique qualities that set our Quran learning experience apart
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Carefully Vetted Teachers */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-teal-100 hover:border-teal-300 hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-bl-2xl opacity-50"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-700 transition-colors duration-300">
                  Carefully Vetted Teachers
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We don't just hire anyone who can recite the Quran. Our teachers are Hafiz/Hafiza with formal Ijazah, possess teaching certifications, and undergo background checks. More importantly, they have the patience, compassion, and dedication that makes learning enjoyable.
                </p>
                <div className="mt-6 flex items-center text-teal-600 font-medium group-hover:text-teal-700 transition-colors duration-300 cursor-pointer" onClick={() => window.location.href = '/teachers'}>
                  <span>Learn about our teachers</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Personalized Learning Approach */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-teal-100 hover:border-teal-300 hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-bl-2xl opacity-50"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-cyan-700 transition-colors duration-300">
                  Personalized Learning Approach
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  No two students are alike. We assess each student's current level, learning style, and goals, then create a customized learning plan. Whether you're five or fifty, a complete beginner or looking to perfect Tajweed, we meet you where you are.
                </p>
                <div className="mt-6 flex items-center text-cyan-600 font-medium group-hover:text-cyan-700 transition-colors duration-300 cursor-pointer" onClick={() => window.location.href = '/courses'}>
                  <span>Explore learning paths</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Family-Centered Philosophy */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-teal-100 hover:border-teal-300 hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-bl-2xl opacity-50"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                  Family-Centered Philosophy
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We view parents as partners in education. We provide regular progress reports, encourage parental involvement, and offer guidance on how families can reinforce learning at home. Your child's success is a team effort.
                </p>
                <div className="mt-6 flex items-center text-emerald-600 font-medium group-hover:text-emerald-700 transition-colors duration-300 cursor-pointer" onClick={() => window.location.href = '/contact'}>
                  <span>Join our family program</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Proven Track Record */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-teal-100 hover:border-teal-300 hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-bl-2xl opacity-50"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-700 transition-colors duration-300">
                  Proven Track Record
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our students consistently achieve their goals—whether that's learning to read Quran fluently, completing memorization, or mastering Tajweed. Thousands of satisfied families across the globe trust us with their Quranic education.
                </p>
                <div className="mt-6 flex items-center text-teal-600 font-medium group-hover:text-teal-700 transition-colors duration-300 cursor-pointer" onClick={() => window.location.href = '/testimonials'}>
                  <span>View success stories</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Ready to experience the difference?
            </p>
            <Link to="/book-trial">
              <Button variant="primary" size="lg" className="h-12 px-8 py-3 text-base">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500 to-teal-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Join Our Global Family of Learners
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Experience the Quran Academy difference with a free trial class.
          </p>
          <div className="mt-8">
            <Link to="/book-trial">
              <Button variant="outlineLight" size="lg" className="h-12 px-8 py-3 text-base">
                Start Your Free Trial Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;