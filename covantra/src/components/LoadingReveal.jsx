import { useState, useEffect } from 'react';

const LoadingReveal = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState('loading');
  const [slicePhase, setSlicePhase] = useState('idle');
   
  useEffect(() => {
    let mounted = true;
    const imageListeners = new Map();

    const waitForImages = async () => {
      // Wait a bit for DOM to be ready
      await new Promise(resolve => {
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', resolve, { once: true });
        } else {
          resolve();
        }
      });

      // Small delay to ensure all images are in DOM
      await new Promise(resolve => setTimeout(resolve, 100));

      const images = Array.from(document.images);
      const totalImages = images.length;

      console.log(`Found ${totalImages} images to load`);

      if (totalImages === 0) {
        // No images, complete immediately
        console.log('No images found, completing...');
        if (mounted) {
          setProgress(100);
          setTimeout(() => setStage('fadeOut'), 300);
        }
        return;
      }

      let loadedImages = 0;

      const updateProgress = () => {
        loadedImages++;
        const newProgress = Math.round((loadedImages / totalImages) * 100);
        
        if (mounted) {
          setProgress(newProgress);
          console.log(`Image loaded: ${loadedImages}/${totalImages} (${newProgress}%)`);
        }

        if (loadedImages === totalImages) {
          console.log('All images loaded!');
          if (mounted) {
            setTimeout(() => setStage('fadeOut'), 300);
          }
        }
      };

      // Track each image
      images.forEach((img) => {
        if (img.complete && img.naturalHeight !== 0) {
          // Already loaded
          updateProgress();
        } else {
          // Wait for load or error
          const loadHandler = () => {
            updateProgress();
            img.removeEventListener('load', loadHandler);
            img.removeEventListener('error', errorHandler);
            imageListeners.delete(img);
          };
          
          const errorHandler = () => {
            console.warn('Image failed to load:', img.src);
            updateProgress(); // Count as loaded even on error
            img.removeEventListener('load', loadHandler);
            img.removeEventListener('error', errorHandler);
            imageListeners.delete(img);
          };

          img.addEventListener('load', loadHandler);
          img.addEventListener('error', errorHandler);
          imageListeners.set(img, { loadHandler, errorHandler });
        }
      });
    };

    waitForImages();

    return () => {
      mounted = false;
      // Clean up all listeners
      imageListeners.forEach((handlers, img) => {
        img.removeEventListener('load', handlers.loadHandler);
        img.removeEventListener('error', handlers.errorHandler);
      });
      imageListeners.clear();
    };
  }, []);

  useEffect(() => {
    if (stage === 'fadeOut') {
      setTimeout(() => {
        setStage('slicing');
        setSlicePhase('dropping');
      }, 800);
    } else if (stage === 'slicing' && slicePhase === 'dropping') {
      setTimeout(() => setSlicePhase('splitting'), 700);
    } else if (slicePhase === 'splitting') {
      setTimeout(() => setStage('complete'), 1200);
    } else if (stage === 'complete') {
      setTimeout(onComplete, 100);
    }
  }, [stage, slicePhase, onComplete]);

  if (stage === 'complete') return null;

  const isVisible = stage === 'loading' || stage === 'fadeOut';
  const isFadingOut = stage === 'fadeOut';

  return (
    <div className="fixed inset-0 z-[10000] pointer-events-none">
      {/* Left curtain */}
      <div
        className="absolute top-0 left-0 h-full w-1/2 bg-white z-20"
        style={{
          transform: slicePhase === 'splitting' ? 'translateX(-100%)' : 'translateX(0)',
          transition: slicePhase === 'splitting' ? 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)' : 'none'
        }}
      />
      
      {/* Right curtain */}
      <div
        className="absolute top-0 right-0 h-full w-1/2 bg-white z-20"
        style={{
          transform: slicePhase === 'splitting' ? 'translateX(100%)' : 'translateX(0)',
          transition: slicePhase === 'splitting' ? 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)' : 'none'
        }}
      />

      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center z-30">
        {isVisible && (
          <div 
            className="flex flex-col items-center gap-6"
            style={{
              opacity: isFadingOut ? 0 : 1,
              transition: 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            <h1
              style={{
                fontSize: 'clamp(2rem, 8vw, 6rem)',
                letterSpacing: '0.2em',
                fontWeight: 700,
              }}
            >
              COVANTRA
            </h1>
            
            {/* Loading bar container */}
            <div 
              className="relative"
              style={{
                width: 'clamp(200px, 40vw, 400px)',
                height: '2px',
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
              }}
            >
              {/* Loading bar fill */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  height: '100%',
                  width: `${progress}%`,
                  backgroundColor: '#000',
                  transition: 'width 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
              />
            </div>
            
            {/* Optional: Show percentage */}
            <p style={{ fontSize: '0.875rem', opacity: 0.6 }}>
              {progress}%
            </p>
          </div>
        )}
      </div>

      {/* Dropping line */}
      {stage === 'slicing' && slicePhase === 'dropping' && (
        <div 
          className="absolute left-1/2 bg-black z-50"
          style={{
            width: '4px',
            marginLeft: '-2px',
            top: 0,
            height: '0',
            animation: 'dropLineDown 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards'
          }}
        />
      )}

      {/* Splitting lines */}
      {stage === 'slicing' && slicePhase === 'splitting' && (
        <>
          <div
            className="absolute top-0 bg-black z-40"
            style={{
              left: '50%',
              width: '2px',
              height: '100vh',
              transform: 'translateX(-100vw)',
              transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          />
          <div
            className="absolute top-0 bg-black z-40"
            style={{
              left: '50%',
              width: '2px',
              height: '100vh',
              transform: 'translateX(100vw)',
              transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          />
        </>
      )}

      <style>{`
        @keyframes dropLineDown {
          from { height: 0; }
          to { height: 100vh; }
        }
      `}</style>
    </div>
  );
};

export default LoadingReveal;