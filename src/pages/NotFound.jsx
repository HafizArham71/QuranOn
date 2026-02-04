import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Home, BookOpen, MessageCircle, Compass } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-[75vh] bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-16 left-8 w-56 h-56 bg-emerald-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-32 right-10 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 left-1/3 w-56 h-56 bg-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 mb-8">
            <Compass className="h-4 w-4 text-emerald-700 mr-2" />
            <span className="text-emerald-700 text-sm font-medium">This page doesn’t exist</span>
          </div>

          <div className="text-7xl sm:text-8xl font-extrabold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">404</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Page not found</h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            The page you’re looking for may have been moved, renamed, or never existed.
          </p>

          <div className="mt-4 text-sm text-gray-500">
            <span className="font-medium text-gray-700">Requested:</span>{' '}
            <span className="font-mono break-all">{location.pathname}</span>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto sm:max-w-none">
            <Link to="/" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto h-12 px-8 py-3 text-base">
                <Home className="h-5 w-5" />
                Back to Home
              </Button>
            </Link>

            <Button
              type="button"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-transparent border-2 border-teal-600 text-teal-600 hover:bg-teal-50 hover:border-teal-700 hover:text-teal-700 shadow-md hover:shadow-lg hover:-translate-y-0.5 h-12 px-8 py-3 text-base"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="h-5 w-5" />
              Go Back
            </Button>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/courses" className="block">
              <Card className="border border-emerald-100 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-emerald-700" />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-1">Browse Courses</h2>
                  <p className="text-sm text-gray-600">Explore Nazira, Hifz, Tajweed, and more.</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/book-trial" className="block">
              <Card className="border border-teal-100 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                    <Compass className="h-6 w-6 text-teal-700" />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-1">Start a Free Trial</h2>
                  <p className="text-sm text-gray-600">Book a risk-free class and meet your teacher.</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/contact" className="block">
              <Card className="border border-cyan-100 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                    <MessageCircle className="h-6 w-6 text-cyan-700" />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-1">Contact Support</h2>
                  <p className="text-sm text-gray-600">Tell us what you were looking for.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
