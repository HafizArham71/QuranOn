import React, { useEffect, useState } from 'react';
import { BookOpen } from 'lucide-react';

const ElegantLoader = () => {
  const [loading, setLoading] = useState(true);
  const [scale, setScale] = useState(0.8);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    // Initial entrance animation
    const entranceTimer = setTimeout(() => {
      setScale(1);
      setOpacity(1);
    }, 100);

    // Exit animation
    const exitTimer = setTimeout(() => {
      setScale(0.9);
      setOpacity(0);
    }, 2000);

    // Complete loading
    const completeTimer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      clearTimeout(entranceTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-50 to-teal-50">
      <div 
        className="text-center transition-all duration-700 ease-out"
        style={{ 
          transform: `scale(${scale})`,
          opacity: opacity
        }}
      >
        {/* Elegant Logo Container */}
        <div className="relative mb-8">
          {/* Outer Ring */}
          <div className="w-20 h-20 mx-auto relative">
            {/* Rotating Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-teal-200 border-t-teal-600 animate-spin"></div>
            
            {/* Center Circle with Header Logo */}
            <div className="absolute inset-2 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-full shadow-lg flex items-center justify-center">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
          </div>
          
          {/* Subtle Glow Effect */}
          <div className="absolute inset-0 w-20 h-20 mx-auto bg-teal-100 rounded-full blur-xl opacity-30 animate-pulse"></div>
        </div>

        {/* Brand Name - Matching Header */}
        <div className="flex flex-col items-center mb-3">
          <span className="text-2xl font-bold text-gray-900 tracking-wide">QuranOn</span>
          <span className="text-xs text-teal-600 font-light">Learn with Confidence</span>
        </div>
        
        {/* Elegant Loading Line */}
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent mx-auto mb-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-600 to-transparent animate-pulse"></div>
        </div>

        {/* Subtle Loading Text */}
        <p className="text-xs text-gray-500 font-light tracking-widest uppercase">
          Learning
        </p>

        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-1 h-1 bg-teal-300 rounded-full animate-ping"></div>
        <div className="absolute top-32 right-24 w-1 h-1 bg-teal-400 rounded-full animate-ping delay-75"></div>
        <div className="absolute bottom-24 left-32 w-1 h-1 bg-teal-300 rounded-full animate-ping delay-150"></div>
      </div>
    </div>
  );
};

export default ElegantLoader;
