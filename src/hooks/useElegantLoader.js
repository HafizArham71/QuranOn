import { useEffect, useState } from "react";

/**
 * Custom hook that waits for browser load, critical resources, and your app data.
 */
export const useElegantLoader = (loaders = []) => {
  const [isLoading, setIsLoading] = useState(true);
  const [resourcesLoaded, setResourcesLoaded] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    let cancelled = false;

    // Wait for window load event
    const waitForBrowserLoad = () =>
      new Promise((resolve) => {
        if (document.readyState === "complete") {
          resolve();
        } else {
          window.addEventListener("load", resolve, { once: true });
        }
      });

    // Wait for fonts to be fully loaded (if using font loading API)
    const waitForFonts = () =>
      document.fonts?.ready || Promise.resolve();

    // Wait for all images (including lazy-loaded images)
    const waitForImages = () => {
      return new Promise((resolve) => {
        // Wait a bit for DOM to populate
        setTimeout(() => {
          const images = Array.from(document.images);
          if (images.length === 0) {
            resolve(); // No images to load
            return;
          }

          let loadedCount = 0;
          const totalImages = images.length;

          const checkImage = (img) => {
            return new Promise((imgResolve) => {
              if (img.complete) {
                imgResolve();
                return;
              }

              const handleLoad = () => {
                imgResolve();
              };

              const handleError = () => {
                imgResolve(); // Resolve even on error to not block
              };

              img.addEventListener('load', handleLoad, { once: true });
              img.addEventListener('error', handleError, { once: true });

              // Fallback timeout
              setTimeout(() => {
                imgResolve();
              }, 3000);
            });
          };

          Promise.all(images.map(checkImage)).then(resolve);
        }, 500); // Wait for DOM to populate
      });
    };

    // Wait for all media (audio, video) elements to load
    const waitForMedia = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const mediaElements = Array.from(document.querySelectorAll("video, audio"));
          if (mediaElements.length === 0) {
            resolve(); // No media to load
            return;
          }

          const mediaPromises = mediaElements.map((media) => {
            return new Promise((mediaResolve) => {
              if (media.readyState >= 2) { // `HAVE_CURRENT_DATA` or higher
                mediaResolve(); // Already loaded
                return;
              }

              const handleLoadedData = () => {
                mediaResolve();
              };

              const handleError = () => {
                mediaResolve(); // Resolve even on error
              };

              media.addEventListener('loadeddata', handleLoadedData, { once: true });
              media.addEventListener('error', handleError, { once: true });

              // Fallback timeout
              setTimeout(() => {
                mediaResolve();
              }, 4000);
            });
          });

          Promise.all(mediaPromises).then(resolve);
        }, 500); // Wait for DOM to populate
      });
    };

    // Wait for your app critical data to load (such as API data)
    const waitForAppData = () => Promise.all(loaders);

    const startLoadingCheck = async () => {
      try {
        console.log('🔄 Starting comprehensive resource check...');
        
        await Promise.all([
          waitForBrowserLoad(),
          waitForFonts(),
          waitForImages(),
          waitForMedia(),
          waitForAppData(), // Wait for your app's critical data
        ]);
        
        console.log('✅ All resources loaded - waiting for animation');
        setResourcesLoaded(true);
      } finally {
        // Don't set isLoading to false here - wait for animation
      }
    };

    // Listen for animation completion from loader component
    const handleAnimationComplete = () => {
      console.log('🎬 Animation complete');
      setAnimationComplete(true);
    };

    window.addEventListener('loaderAnimationComplete', handleAnimationComplete);

    startLoadingCheck();

    return () => {
      cancelled = true;
      window.removeEventListener('loaderAnimationComplete', handleAnimationComplete);
    };
  }, [loaders]);

  // Only hide loader when both resources AND animation are complete
  useEffect(() => {
    if (resourcesLoaded && animationComplete) {
      console.log('🎯 Both resources and animation complete - hiding loader');
      setTimeout(() => {
        setIsLoading(false);
      }, 300); // Small delay for smooth transition
    }
  }, [resourcesLoaded, animationComplete]);

  return isLoading;
};

// Helper function to load images
export const loadImage = (src) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = resolve;
    img.onerror = reject;
  });
