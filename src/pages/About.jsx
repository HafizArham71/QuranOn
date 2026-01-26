import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Heart, Users, Award, ArrowRight } from 'lucide-react';
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

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose prose-lg text-gray-700 space-y-4">
            <p>
              Quran Academy was founded with a simple yet profound mission: to make authentic, quality Quran education accessible to Muslim families worldwide. We recognized that many families struggle to find qualified Quran teachers in their local communities, and even when available, scheduling conflicts and commutes create barriers to consistent learning.
            </p>
            <p>
              Our founders, themselves parents who faced these challenges, envisioned a platform that would connect students with expert Quran teachers regardless of geographical boundaries. What began as a small initiative has grown into a thriving global community of learners and educators, united by their love for the Quran.
            </p>
            <p>
              Today, we serve thousands of students across more than 50 countries. From young children taking their first steps in reading Arabic letters to adults memorizing the entire Quran, we've had the honor of accompanying students on every stage of their Quranic journey. Our success is measured not in numbers, but in the transformed lives and strengthened faith of our students.
            </p>
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
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Makes Us Different</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Carefully Vetted Teachers</h3>
              <p className="text-gray-700">
                We don't just hire anyone who can recite the Quran. Our teachers are Hafiz/Hafiza with formal Ijazah, possess teaching certifications, and undergo background checks. More importantly, they have the patience, compassion, and dedication that makes learning enjoyable.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Learning Approach</h3>
              <p className="text-gray-700">
                No two students are alike. We assess each student's current level, learning style, and goals, then create a customized learning plan. Whether you're five or fifty, a complete beginner or looking to perfect Tajweed, we meet you where you are.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Family-Centered Philosophy</h3>
              <p className="text-gray-700">
                We view parents as partners in education. We provide regular progress reports, encourage parental involvement, and offer guidance on how families can reinforce learning at home. Your child's success is a team effort.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Track Record</h3>
              <p className="text-gray-700">
                Our students consistently achieve their goals—whether that's learning to read Quran fluently, completing memorization, or mastering Tajweed. Thousands of satisfied families across the globe trust us with their Quranic education.
              </p>
            </div>
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
              <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 font-semibold text-lg px-10 py-6 shadow-xl transition-all duration-300">
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
