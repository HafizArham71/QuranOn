import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, ChevronUp, MessageCircle, Mail, Phone, Star, Users, BookOpen, HelpCircle, ThumbsUp, ThumbsDown, User, Settings, Headphones, ExternalLink, ArrowRight, CheckCircle, AlertCircle, Clock, Globe } from 'lucide-react';
import { faqs } from '../mock';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedItems, setExpandedItems] = useState(new Set());
  const [sortBy, setSortBy] = useState('popular');
  const [userRatings, setUserRatings] = useState({});

  const categories = [
    { 
      id: 'all', 
      name: 'All Questions', 
      icon: HelpCircle, 
      color: 'blue'
    },
    { 
      id: 'general', 
      name: 'General', 
      icon: Star, 
      color: 'green'
    },
    { 
      id: 'learning', 
      name: 'Learning', 
      icon: BookOpen, 
      color: 'purple'
    },
    { 
      id: 'scheduling', 
      name: 'Scheduling', 
      icon: User, 
      color: 'orange'
    },
    { 
      id: 'technical', 
      name: 'Technical', 
      icon: Settings, 
      color: 'red'
    }
  ];

  const [filteredFaqs, setFilteredFaqs] = useState(faqs);

  // Load ratings from localStorage on component mount
  useEffect(() => {
    const savedRatings = localStorage.getItem('faqRatings');
    if (savedRatings) {
      setUserRatings(JSON.parse(savedRatings));
    }
  }, []);

  // Save ratings to localStorage whenever they change
  useEffect(() => {
    if (Object.keys(userRatings).length > 0) {
      localStorage.setItem('faqRatings', JSON.stringify(userRatings));
    }
  }, [userRatings]);

  // Enhanced filtering with search
  useEffect(() => {
    let filtered = faqs;

    // Search functionality - more comprehensive
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(faq => {
        // Search in question and answer
        const questionMatch = faq.question.toLowerCase().includes(searchLower);
        const answerMatch = faq.answer.toLowerCase().includes(searchLower);
        
        // Also search for individual words
        const searchWords = searchLower.split(' ');
        const wordsMatch = searchWords.some(word => 
          faq.question.toLowerCase().includes(word) || 
          faq.answer.toLowerCase().includes(word)
        );
        
        return questionMatch || answerMatch || wordsMatch;
      });
    }

    // Category filtering
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(faq => {
        // Categorize FAQs based on content
        if (selectedCategory === 'general') {
          return faq.id === 1 || faq.id === 2 || faq.id === 9 || faq.id === 12;
        } else if (selectedCategory === 'learning') {
          return faq.id === 3 || faq.id === 7 || faq.id === 10;
        } else if (selectedCategory === 'scheduling') {
          return faq.id === 4 || faq.id === 5 || faq.id === 11;
        } else if (selectedCategory === 'technical') {
          return faq.id === 6 || faq.id === 8;
        }
        return true;
      });
    }

    setFilteredFaqs(filtered);
  }, [searchTerm, selectedCategory]);

  const toggleExpanded = (id) => {
    // Auto-hide logic: only one FAQ can be expanded at a time
    if (expandedItems.has(id)) {
      // If clicking the already expanded item, collapse it
      setExpandedItems(new Set());
    } else {
      // If clicking a different item, collapse all others and expand this one
      setExpandedItems(new Set([id]));
    }
  };

  const handleRating = (faqId, rating) => {
    setUserRatings(prev => ({ ...prev, [faqId]: rating }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">Questions</span>
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              Find answers to common questions about our Quran learning platform
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Search Bar */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-md">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-md' 
                      : 'bg-white/70 text-gray-700 hover:bg-white/90 border border-gray-200'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Icon className="w-4 h-4" />
                    <span>{category.name}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* FAQ Items */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isExpanded = expandedItems.has(faq.id);
            
            return (
              <div 
                key={faq.id} 
                className="group"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Simplified Card */}
                <div className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden border ${
                  isExpanded 
                    ? 'border-teal-200' 
                    : 'border-gray-100'
                }`}>
                  {/* Question Button */}
                  <button
                    onClick={() => toggleExpanded(faq.id)}
                    className="w-full px-6 py-4 text-left focus:outline-none"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 flex-1 pr-4">
                        {/* Simplified Icon */}
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                          isExpanded 
                            ? 'bg-teal-500 text-white' 
                            : 'bg-gray-100 text-gray-600 group-hover:bg-teal-100 group-hover:text-teal-600'
                        }`}>
                          <HelpCircle className="w-4 h-4" />
                        </div>
                        
                        {/* Question text */}
                        <h3 className={`font-semibold text-gray-900 transition-colors duration-200 ${
                          isExpanded ? 'text-teal-700' : ''
                        }`}>{faq.question}</h3>
                      </div>
                      
                      {/* Simplified Chevron */}
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 ${
                        isExpanded 
                          ? 'bg-teal-100 text-teal-600 rotate-180' 
                          : 'bg-gray-100 text-gray-400 group-hover:bg-teal-50 group-hover:text-teal-600'
                      }`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </button>
                  
                  {/* Simplified Answer Section */}
                  <div 
                    className={`transition-all duration-200 ease-in-out ${
                      isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-4">
                      <div className="pt-4 border-t border-gray-100">
                        {/* Clean answer display */}
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        
                        {/* Simplified feedback */}
                        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-50">
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Users className="w-3 h-3" />
                            <span>Popular</span>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-gray-500">Helpful?</span>
                            <div className="flex items-center space-x-1">
                              <button 
                                onClick={() => handleRating(faq.id, 'helpful')}
                                className={`p-1.5 rounded transition-all duration-200 ${
                                  userRatings[faq.id] === 'helpful'
                                    ? 'bg-green-500 text-white' 
                                    : 'hover:bg-green-100 hover:text-green-600'
                                }`}
                                title="Helpful"
                              >
                                <ThumbsUp className="w-3 h-3" />
                              </button>
                              <button 
                                onClick={() => handleRating(faq.id, 'not-helpful')}
                                className={`p-1.5 rounded transition-all duration-200 ${
                                  userRatings[faq.id] === 'not-helpful'
                                    ? 'bg-red-500 text-white' 
                                    : 'hover:bg-red-100 hover:text-red-600'
                                }`}
                                title="Not helpful"
                              >
                                <ThumbsDown className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredFaqs.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">No questions found</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">Try adjusting your search terms or browse all categories to find what you're looking for.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-lg hover:from-cyan-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Clear search & filters
            </button>
          </div>
        )}
      </div>

      {/* Add custom styles for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Enhanced Contact Support Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-20 w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-teal-400/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-100 border border-teal-200 mb-6">
              <span className="w-2 h-2 bg-teal-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-teal-700 text-sm font-medium">24/7 Support Available</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Still Need <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">Help?</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our dedicated support team is here to assist you with any questions about Quran learning, courses, or technical issues.
            </p>
          </div>

          {/* Contact Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Live Chat Option */}
            <div className="group relative">
              <div className="relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 overflow-hidden border border-gray-100">
                {/* Icon Container */}
                <div className="relative p-8 pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Live Chat</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Get instant help from our support team through real-time chat. Average response time: 2 minutes.
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Online Now</span>
                    </div>
                    <span className="text-sm text-gray-500">24/7 Available</span>
                  </div>
                  
                  <button 
                    onClick={() => window.open('https://wa.me/923134350157', '_blank')}
                    className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-md"
                  >
                    <span>Start Live Chat</span>
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Email Support Option */}
            <div className="group relative">
              <div className="relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 overflow-hidden border border-gray-100">
                {/* Icon Container */}
                <div className="relative p-8 pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Email Support</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Send us detailed questions and receive comprehensive responses within 24 hours.
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>Response Time</span>
                    </div>
                    <span className="text-sm text-gray-500">Within 24 hours</span>
                  </div>
                  
                  <button 
                    onClick={() => window.open('mailto:quranon2@gmail.com', '_blank')}
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-md"
                  >
                    <span>Send Email</span>
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Phone Support Option */}
            <div className="group relative">
              <div className="relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 overflow-hidden border border-gray-100">
                {/* Icon Container */}
                <div className="relative p-8 pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Phone Support</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Speak directly with our support team for immediate assistance and personalized guidance.
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>Available</span>
                    </div>
                    <span className="text-sm text-gray-500">9AM-6PM EST</span>
                  </div>
                  
                  <button 
                    onClick={() => window.open('tel:+923134350157', '_blank')}
                    className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-emerald-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-md"
                  >
                    <span>Call Now</span>
                    <Phone className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Support Info */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Other Ways to Reach Us</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                      <Globe className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Website Contact Form</p>
                      <p className="text-sm text-gray-600">Fill out our detailed contact form</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Social Media</p>
                      <p className="text-sm text-gray-600">Connect with us on social platforms</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Support Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium text-gray-900">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium text-gray-900">10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium text-gray-900">Emergency Support Only</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add custom styles */}
      <style jsx>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>

      </div>
  );
};

export default FAQ;
