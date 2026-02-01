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

      <section className="py-20 bg-gray-50">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>

            <p className="mt-4 text-lg text-gray-600">

              Comprehensive Quran education tailored to your needs

            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {services.map((service) => {

              const IconComponent = iconMap[service.icon];

              return (

                <Card key={service.id} className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

                  <CardContent className="p-6">

                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-teal-600 mb-4">

                      <IconComponent className="h-6 w-6 text-white" />

                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>

                    <p className="text-sm text-gray-600">{service.description}</p>

                  </CardContent>

                </Card>

              );

            })}

          </div>

          <div className="text-center mt-10">

            <Link to="/services">

              <Button variant="outline" className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-semibold">

                View All Services

                <ArrowRight className="ml-2 h-4 w-4" />

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

