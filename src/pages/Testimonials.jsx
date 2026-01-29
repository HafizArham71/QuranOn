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
import { teachers, testimonials } from '../mock';

const Testimonials = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">Testimonials</span>
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              Hear from families who have transformed their Quran learning journey with us
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="border-none shadow-lg h-full mx-2">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-4">
                        <Quote className="h-8 w-8 text-teal-600 opacity-50" />
                      </div>
                      <div className="flex mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-6 flex-grow italic">"{testimonial.text}"</p>
                      <div className="border-t border-gray-200 pt-4">
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.location}</p>
                        <p className="text-sm text-teal-600 mt-1">{testimonial.course}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What Parents Say</h2>
            <p className="mt-4 text-lg text-gray-600">
              Real experiences from our student families
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 text-sm">"{testimonial.text}"</p>
                  <div className="border-t border-gray-200 pt-3">
                    <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-600">{testimonial.location}</p>
                    <p className="text-xs text-teal-600 mt-1">{testimonial.course}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Meet Our Teachers</h2>
            <p className="mt-4 text-lg text-gray-600">
              Qualified, experienced, and dedicated to your success
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachers.map((teacher) => (
              <Card key={teacher.id} className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <img 
                      src={teacher.image} 
                      alt={teacher.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto object-cover border-4 border-teal-100"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">{teacher.name}</h3>
                  <p className="text-sm text-teal-600 font-medium mb-2">{teacher.qualification}</p>
                  <p className="text-xs text-gray-600 mb-3">{teacher.experience} experience</p>
                  <div className="text-xs text-gray-700 mb-3">
                    <span className="font-semibold">Specialization:</span>
                    <p className="mt-1">{teacher.specialization}</p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-1 mb-3">
                    {teacher.languages.map((lang, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {lang}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{teacher.bio}</p>
                </CardContent>
              </Card>
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
              <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 font-semibold text-lg px-10 py-6 shadow-xl transition-all duration-300">
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
