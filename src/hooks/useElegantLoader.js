import { useState, useEffect } from 'react';

export const useElegantLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isWebsiteLoaded, setIsWebsiteLoaded] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    const checkAllResourcesLoaded = () => {
      return new Promise((resolve) => {
        let resourcesChecked = 0;
        const totalChecks = 4; // DOM, Images, Fonts, Network Resources
        
        const checkComplete = () => {
          resourcesChecked++;
          if (resourcesChecked === totalChecks) {
            resolve();
          }
        };

        // 1. Check DOM readiness
        if (document.readyState === 'complete') {
          checkComplete();
        } else {
          window.addEventListener('load', checkComplete);
        }

        // 2. Check all images are loaded
        const checkImages = () => {
          const images = Array.from(document.images);
          if (images.length === 0) {
            checkComplete();
            return;
          }

          let loadedImages = 0;
          const imagePromises = images.map(img => {
            return new Promise((imgResolve) => {
              if (img.complete) {
                loadedImages++;
                imgResolve();
              } else {
                img.addEventListener('load', () => {
                  loadedImages++;
                  imgResolve();
                });
                img.addEventListener('error', () => {
                  loadedImages++;
                  imgResolve();
                });
              }
            });
          });

          Promise.all(imagePromises).then(() => {
            checkComplete();
          });
        };

        // Small delay for images to be available in DOM
        setTimeout(checkImages, 100);

        // 3. Check fonts are loaded
        if (document.fonts && document.fonts.ready) {
          document.fonts.ready.then(() => {
            checkComplete();
          });
        } else {
          // Fallback for older browsers
          setTimeout(checkComplete, 1000);
        }

        // 4. Check critical network resources (CSS, JS)
        const checkNetworkResources = () => {
          // Check if performance API is available
          if (window.performance && window.performance.getEntriesByType) {
            const resources = window.performance.getEntriesByType('resource');
            const criticalResources = resources.filter(resource => 
              resource.initiatorType === 'script' || 
              resource.initiatorType === 'stylesheet' ||
              resource.initiatorType === 'link'
            );
            
            // Check if critical resources are loaded
            const loadedResources = criticalResources.filter(resource => 
              resource.transferSize > 0 || resource.responseEnd > 0
            );

            // If we have resources and they're loaded, or wait for timeout
            if (criticalResources.length === 0 || loadedResources.length === criticalResources.length) {
              checkComplete();
            } else {
              // Wait a bit more for network resources
              setTimeout(checkComplete, 2000);
            }
          } else {
            // Fallback - wait for reasonable time
            setTimeout(checkComplete, 2000);
          }
        };

        setTimeout(checkNetworkResources, 500);
      });
    };

    const checkLoaded = async () => {
      try {
        // Wait for all resources to be loaded
        await checkAllResourcesLoaded();
        
        setIsWebsiteLoaded(true);
        
        // Wait for animation to complete before hiding loader
        const checkAnimationComplete = () => {
          if (isAnimationComplete) {
            // Additional small delay for smooth transition
            setTimeout(() => {
              setIsLoading(false);
            }, 300);
          } else {
            setTimeout(checkAnimationComplete, 100);
          }
        };
        
        // Give animation time to start, then check
        setTimeout(checkAnimationComplete, 500);
      } catch (error) {
        console.error('Error checking resources:', error);
        // Fallback - hide loader after reasonable time
        setTimeout(() => {
          setIsLoading(false);
        }, 5000);
      }
    };

    // Start checking immediately
    checkLoaded();

    return () => {
      window.removeEventListener('load', checkLoaded);
    };
  }, [isAnimationComplete]);

  // Listen for animation completion from loader component
  useEffect(() => {
    const handleAnimationComplete = () => {
      setIsAnimationComplete(true);
    };

    window.addEventListener('loaderAnimationComplete', handleAnimationComplete);
    
    return () => {
      window.removeEventListener('loaderAnimationComplete', handleAnimationComplete);
    };
  }, []);

  return isLoading;
};
