import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center">
                <img 
                  src="/images/LogoTransparent.png" 
                  alt="QuranOn Logo" 
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-900">QuranOn</span>
                <span className="text-xs text-teal-600">Learn with Confidence</span>
              </div>
            </Link>
            <p className="text-sm text-gray-600">
              Trusted online Quran education for students worldwide. Expert teachers, flexible schedules, and personalized learning.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/profile.php?id=61587238274658" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">Our Services</Link></li>
              <li><Link to="/courses" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">Courses</Link></li>
              <li><Link to="/testimonials" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">Testimonials</Link></li>
              <li><Link to="/blog" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/faqs" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">Contact Us</Link></li>
              <li><Link to="/book-trial" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">Book Free Trial</Link></li>
              <li><Link to="/privacy-policy" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-gray-600">
                <Mail className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <span>quranon2@gmail.com</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-gray-600">
                <Phone className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <span>+92 313 435 0157</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-gray-600">
                <MapPin className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <span>Serving students worldwide</span>
              </li>
            </ul>
            <div className="mt-4 text-xs text-gray-500">
              <p>Live support available</p>
              <p className="mt-1">Languages: English, Urdu</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            © {currentYear} Quran Online. All rights reserved. Built with faith and dedication.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
