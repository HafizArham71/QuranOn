import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, ChevronUp, MessageCircle, Mail, Phone, Star, Users, BookOpen, HelpCircle, ThumbsUp, ThumbsDown, User, Settings, Headphones, ExternalLink, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
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
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
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
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
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
                      ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-lg' 
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
                className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                <button
                  onClick={() => toggleExpanded(faq.id)}
                  className="w-full px-6 py-5 text-left hover:bg-white/90 transition-all duration-300 focus:outline-none group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 flex-1 pr-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <HelpCircle className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 text-lg leading-tight">{faq.question}</h3>
                    </div>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isExpanded 
                        ? 'bg-cyan-100 text-cyan-600 rotate-180' 
                        : 'bg-gray-100 text-gray-500 group-hover:bg-cyan-50 group-hover:text-cyan-600'
                    }`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5 border-t border-white/20">
                    <div className="pt-5">
                      <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-lg p-4 border border-cyan-100">
                        <p className="text-gray-700 leading-relaxed text-base">{faq.answer}</p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>Popular Question</span>
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <span className="text-sm text-gray-500">Was this helpful?</span>
                          <div className="flex items-center space-x-1">
                            <button 
                              onClick={() => handleRating(faq.id, 'helpful')}
                              className={`p-2 rounded-lg transition-all duration-200 ${
                                userRatings[faq.id] === 'helpful'
                                  ? 'bg-green-100 text-green-600'
                                  : 'hover:bg-green-100 hover:text-green-600'
                              }`}
                              title="Helpful"
                            >
                              <ThumbsUp className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={() => handleRating(faq.id, 'not-helpful')}
                              className={`p-2 rounded-lg transition-all duration-200 ${
                                userRatings[faq.id] === 'not-helpful'
                                  ? 'bg-red-100 text-red-600'
                                  : 'hover:bg-red-100 hover:text-red-600'
                              }`}
                              title="Not helpful"
                            >
                              <ThumbsDown className="w-4 h-4" />
                            </button>
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
              className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-lg hover:from-cyan-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
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

      {/* Contact Support */}
      <div className="bg-gradient-to-r from-cyan-600 to-teal-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Still Need Help?</h2>
          <p className="text-white/90 mb-8">Our support team is here to help you 24/7</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button 
              onClick={() => window.open('https://wa.me/923134350157', '_blank')}
              className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg p-6 hover:bg-white/30 transition-all duration-300 text-left"
            >
              <MessageCircle className="w-8 h-8 text-white mb-3" />
              <h3 className="font-semibold text-white mb-2">Live Chat</h3>
              <p className="text-white/80 text-sm mb-4">Chat with our support team</p>
              <span className="text-white font-medium">Start Chat →</span>
            </button>
            
            <button 
              onClick={() => window.open('mailto:quranon2@gmail.com', '_blank')}
              className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg p-6 hover:bg-white/30 transition-all duration-300 text-left"
            >
              <Mail className="w-8 h-8 text-white mb-3" />
              <h3 className="font-semibold text-white mb-2">Email Support</h3>
              <p className="text-white/80 text-sm mb-4">Get detailed responses</p>
              <span className="text-white font-medium">Send Email →</span>
            </button>
            
            <button 
              onClick={() => window.open('https://wa.me/923134350157?call=1', '_blank')}
              className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg p-6 hover:bg-white/30 transition-all duration-300 text-left"
            >
              <Phone className="w-8 h-8 text-white mb-3" />
              <h3 className="font-semibold text-white mb-2">Phone Support</h3>
              <p className="text-white/80 text-sm mb-4">Speak with our team</p>
              <span className="text-white font-medium">Call Now →</span>
            </button>
          </div>
        </div>
      </div>

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
