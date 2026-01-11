import React, { useState } from 'react';
import {motion} from "framer-motion"

// Icon Components
const ArrowLeft = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

const ArrowRight = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

// FeatureCard Component
const FeatureCard = ({ title, description, icon, variant, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isLive = variant === "live";
  
  return (
    <div
      className="group opacity-0 animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`aspect-square rounded-2xl mb-5 p-6 flex items-center justify-center transition-all duration-500 overflow-hidden ${
          isLive ? "bg-orange-100" : "bg-orange-100"
        }`}
        style={{
          transform: isHovered ? 'scale(1.02)' : 'scale(1)',
        }}
      >
        <img
          src={icon}
          alt={title}
          className="w-full h-full object-cover rounded-2xl transition-transform duration-500"
          style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          }}
        />
      </div>
      <h3 className="font-sans text-lg font-semibold text-gray-900 mb-2 uppercase tracking-wide">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

// Main Clarity Component
const Clarity = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = React.useRef(null);
  
  // Responsive items per page
  const getItemsPerPage = () => {
    if (typeof window === 'undefined') return 4;
    if (window.innerWidth < 640) return 1; // mobile
    if (window.innerWidth < 1024) return 2; // tablet
    return 4; // desktop
  };
  
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Handle resize
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
      setIsMobile(window.innerWidth < 640);
      // Reset to valid index on resize
      setCurrentIndex(0);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const liveFeatures = [
    {
      title: "Mortgage Origination",
      description: "Complete mortgage origination and structuring services for seamless property financing.",
      icon: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=400&fit=crop",
    },
    {
      title: "Underwriting Guidance",
      description: "Expert underwriting guidance and comprehensive deal planning support.",
      icon: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop",
    },
    {
      title: "Legal Closing",
      description: "Standard legal closing and registration handled with precision and care.",
      icon: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=400&fit=crop",
    },
    {
      title: "Borrower Support",
      description: "Ongoing servicing communication and dedicated borrower support channels.",
      icon: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=400&fit=crop",
    },
    {
      title: "Additional Service 1",
      description: "Extra service description for demonstration purposes.",
      icon: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop",
    },
    {
      title: "Additional Service 2",
      description: "Another service to show carousel functionality.",
      icon: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=400&fit=crop",
    },
  ];

  const developmentFeatures = [
    {
      title: "Investor Tracking",
      description: "Permissioned participation tracking for eligible investors with full transparency.",
      icon: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop",
    },
    {
      title: "Reporting & Statements",
      description: "Standardized investor reporting and automated statement generation.",
      icon: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop",
    },
    {
      title: "Operational Tools",
      description: "Powerful tools to reduce spreadsheet work and streamline email admin.",
      icon: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=400&fit=crop",
    },
    {
      title: "Partner Onboarding",
      description: "Simplified partner onboarding designed for scaled distribution.",
      icon: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=400&fit=crop",
    },
  ];

  const maxIndex = Math.max(0, liveFeatures.length - itemsPerPage);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 lg:py-34 px-6 md:px-10 overflow-hidden bg-[#faf8f5]">
      <style>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes draw-line {
          from {
            width: 0;
          }
          to {
            width: 4rem;
          }
        }

        .animate-fade-up {
          animation: fade-up 0.7s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-slide-left {
          animation: slide-in-left 0.7s ease-out forwards;
        }

        .animate-slide-right {
          animation: slide-in-right 0.7s ease-out forwards;
        }

        .animate-scale-in {
          animation: scale-in 0.6s ease-out forwards;
        }

        .animate-draw-line {
          animation: draw-line 0.8s ease-out forwards;
        }

        .section-badge {
          position: relative;
          overflow: hidden;
        }

        .section-badge::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          100% {
            left: 100%;
          }
        }

        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-lift:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .hover-lift:active:not(:disabled) {
          transform: translateY(0);
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <motion.h2 
           initial={{ opacity: 0, y: 25 }}   
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{
              duration: 0.8,
              ease: "easeOut"
            }}
            viewport={{ once: false }} 
            className={`font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-4 md:mb-6 `}  
          >
            Clarity on what exists today
          </motion.h2>

          <motion.p 
           initial={{ opacity: 0, y: 25 }}   
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{
              duration: 0.8,
              ease: "easeOut"
            }}
            viewport={{ once: false }} 
            className={`text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto `}
          >
            We believe in transparency. Here's exactly what's live and what we're building.
          </motion.p>
        </div>

        {/* Live Today Section */}
        <div className="mb-16 md:mb-24 mt-8 md:mt-10">
          <div className="flex items-center justify-between mb-8 md:mb-10">
            <div className={`flex items-center gap-4 ${isVisible ? 'animate-slide-left' : 'opacity-0'}`} style={{ animationDelay: '250ms' }}>
              <span className="text-sm text-gray-600 section-badge">Live Today</span>
              <div className={`h-px bg-orange-600 ${isVisible ? 'animate-draw-line' : 'w-0'}`} style={{ animationDelay: '400ms' }} />
            </div>
          </div>

          <div className="flex items-start gap-8">
            {/* Title on left */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <h3 
                className={`font-serif text-4xl lg:text-5xl font-normal text-gray-900 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: '300ms' }}
              >
                What's<br />available?
              </h3>
              <div 
                className={`flex gap-3 mt-8 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: '450ms' }}
              >
                <button 
                  onClick={handlePrevious}
                  disabled={currentIndex === 0}
                  className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover-lift transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                >
                  <ArrowLeft />
                </button>
                <button 
                  onClick={handleNext}
                  disabled={currentIndex >= maxIndex}
                  className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover-lift transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                >
                  <ArrowRight />
                </button>
              </div>
            </div>

            {/* Feature cards with carousel */}
            <div className="flex-1 overflow-hidden">
              <div 
                className="flex gap-6 transition-all duration-700 ease-in-out"
                style={{
                  transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 1.5}rem))`,
                }}
              >
                {liveFeatures.map((feature, index) => (
                  <div key={feature.title} className="flex-shrink-0 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]">
                    <FeatureCard
                      title={feature.title}
                      description={feature.description}
                      icon={feature.icon}
                      variant="live"
                      delay={isVisible ? 400 + index * 80 : 0}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile navigation */}
          <div className={`lg:hidden flex justify-center gap-3 mt-8 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '500ms' }}>
            <button 
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover-lift transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ArrowLeft />
            </button>
            <button 
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover-lift transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* In Development Section */}
        <div className={`bg-white rounded-3xl p-6 md:p-8 lg:p-12 mt-12 md:mt-20 shadow-lg border border-gray-300 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
          <div className="flex items-center justify-between mb-8 md:mb-10">
            <div className={`flex items-center gap-4 ${isVisible ? 'animate-slide-left' : 'opacity-0'}`} style={{ animationDelay: '700ms' }}>
              <span className="text-sm text-gray-600 section-badge">In Development</span>
              <div className={`h-px bg-orange-600 ${isVisible ? 'animate-draw-line' : 'w-0'}`} style={{ animationDelay: '850ms' }} />
            </div>
          </div>

          <div className="mb-8 md:mb-10">
            <h3 
              className={`font-serif text-2xl md:text-3xl lg:text-4xl font-normal text-gray-900 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: '750ms' }}
            >
              What we're building next
            </h3>
            <p 
              className={`text-gray-600 text-sm md:text-base mt-3 max-w-xl ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: '800ms' }}
            >
              Exciting features in our pipeline to enhance your investment experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentFeatures.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                variant="development"
                delay={isVisible ? 900 + index * 100 : 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clarity;