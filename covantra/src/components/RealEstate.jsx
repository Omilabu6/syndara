import React from 'react';

const RealEstate = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    // Trigger animation on mount
    setIsVisible(true);
  }, []);

  return (
    <div className='relative top-0 h-[50vh] md:h-[70vh] w-full overflow-hidden'>
      <style>{`
        @keyframes zoomIn {
          from {
            transform: scale(1.1);
          }
          to {
            transform: scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradientShift {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.7;
          }
        }

        .animate-bg-zoom {
          animation: zoomIn 1.2s ease-out, fadeIn 0.8s ease-out;
        }

        .animate-gradient {
          animation: fadeIn 1s ease-out 0.3s both, gradientShift 8s ease-in-out infinite;
        }

        .animate-title {
          animation: slideUpFade 0.8s ease-out 0.5s both;
        }

        .parallax-bg {
          transition: transform 0.1s ease-out;
        }
      `}</style>

      {/* Background Image with Zoom Animation */}
      <div
        className={`absolute inset-0 bg-cover bg-center parallax-bg ${isVisible ? 'animate-bg-zoom' : ''}`}
        style={{ backgroundImage: `url(${"/bluey.png"})` }}
      ></div>

      {/* Gradient Overlay with Fade */}
      <div className={`absolute inset-0 bg-gradient-to-t from-[#faf8f5] via-gray-900/60 to-transparent ${isVisible ? 'animate-gradient' : ''}`}></div>

      {/* Title with Slide Up Animation */}
      <div className='font-serif text-white pt-32 md:pt-50 text-3xl md:text-5xl lg:text-7xl drop-shadow-lg justify-center items-center flex text-center px-6'>
        <h1 className={`${isVisible ? 'animate-title' : 'opacity-0'}`}>
          Real Estate. Real Results.
        </h1>
      </div>
    </div>
  );
};

export default RealEstate;