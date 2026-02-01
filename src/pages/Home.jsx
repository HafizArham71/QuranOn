import React from 'react';

import { Link } from 'react-router-dom';

import { ArrowRight, CheckCircle, Users, Globe, Award, Clock, BookOpen, Brain, Mic2, Heart } from 'lucide-react';

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

      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50 py-20 sm:py-28">

        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwZDk0ODgiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2djguMDczbDEwIDEwVjE2em0wIDI4djUuOTI3bDEwLTEwVjQ0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">

              {homeData.hero.title}

              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600 mt-2">

                {homeData.hero.subtitle}

              </span>

            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-700 sm:text-xl">

              {homeData.hero.description}

            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

              <Link to="/book-trial">

                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white font-semibold shadow-lg text-base px-8 py-6 transition-all duration-300">

                  Start Your Free Trial

                  <ArrowRight className="ml-2 h-5 w-5" />

                </Button>

              </Link>

              <Link to="/courses">

                <Button size="lg" variant="outline" className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-semibold text-base px-8 py-6 transition-all duration-300">

                  Explore Courses

                </Button>

              </Link>

            </div>

            <p className="mt-6 text-sm text-gray-600">

              No credit card required • Free trial class • Expert support

            </p>

          </div>

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
              <Button size="lg" className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 px-8 py-4">
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



export default Home;

