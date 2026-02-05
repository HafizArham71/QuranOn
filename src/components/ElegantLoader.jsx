import React, { useState, useEffect } from 'react';

const ElegantLoader = () => {
  const [loadingStage, setLoadingStage] = useState('Loading');
  const [progress, setProgress] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const stages = [
      { name: 'Loading', duration: 1000 },
      { name: 'Processing', duration: 800 },
      { name: 'Ready', duration: 600 }
    ];

    let currentStage = 0;
    let stageProgress = 0;

    const updateProgress = () => {
      if (currentStage < stages.length) {
        const stage = stages[currentStage];
        stageProgress += 2;
        
        if (stageProgress >= 100) {
          currentStage++;
          stageProgress = 0;
        }
        
        const totalProgress = (currentStage * 100 + stageProgress) / stages.length;
        setProgress(Math.min(totalProgress, 95));
        
        if (currentStage < stages.length) {
          setLoadingStage(stages[currentStage].name);
        } else {
          // Animation complete
          setLoadingStage('Ready');
          setProgress(100);
          setAnimationComplete(true);
          
          // Notify parent that animation is complete
          window.dispatchEvent(new CustomEvent('loaderAnimationComplete'));
        }
      }
    };

    const interval = setInterval(updateProgress, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center">
        {/* Logo with subtle animation */}
        <div className="mb-8">
          <div className="relative w-20 h-20 mx-auto">
            {/* Rotating ring */}
            <div className={`absolute inset-0 rounded-full border-2 border-teal-100 border-t-teal-500 transition-all duration-500 ${animationComplete ? 'animate-pulse' : 'animate-spin'}`}></div>
            
            {/* Center logo */}
            <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
              <img 
                src="/images/LogoTransparent.png" 
                alt="QuranOn" 
                className={`w-12 h-12 transition-all duration-500 ${animationComplete ? 'scale-110' : 'scale-100'}`}
              />
            </div>
          </div>
        </div>

        {/* Brand name */}
        <h1 className={`text-2xl font-semibold mb-3 transition-all duration-500 ${animationComplete ? 'text-teal-600' : 'text-gray-900'}`}>
          QuranOn
        </h1>

        {/* Loading stage */}
        <p className={`text-sm mb-4 font-medium transition-all duration-500 ${animationComplete ? 'text-teal-600' : 'text-gray-600'}`}>
          {loadingStage}
        </p>

        {/* Progress bar */}
        <div className="w-40 h-1 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
          <div 
            className={`h-full rounded-full transition-all duration-500 ease-out ${animationComplete ? 'bg-gradient-to-r from-teal-500 to-emerald-500' : 'bg-gradient-to-r from-teal-400 to-teal-600'}`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Simple loading dots - hide when complete */}
        {!animationComplete && (
          <div className="flex justify-center space-x-1.5">
            <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        )}

        {/* Success indicator - show when complete */}
        {animationComplete && (
          <div className="flex items-center justify-center space-x-2 text-teal-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Complete</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ElegantLoader;
