import React, { useState, useEffect, useRef } from 'react';

const TrendingUp = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const Building2 = () => (
  <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const Users = () => (
  <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const Hammer = () => (
  <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
  </svg>
);

const MapPin = () => (
  <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

// Custom hook for count-up animation
const useCountUp = ({ end, duration = 2000, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);

      if (now < endTime) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isVisible, end, duration]);

  return {
    ref,
    displayValue: `${prefix}${count}${suffix}`,
    isVisible
  };
};

const TractionSection = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);
  const heroCounter = useCountUp({ end: 175, duration: 2000, prefix: '$', suffix: 'M' });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  const milestones = [
    {
      icon: Building2,
      label: "Multi-Family Execution",
      highlight: "42-unit",
      description: "Property financing for commercial multi-family developments",
    },
    {
      icon: Users,
      label: "Structured Participation",
      highlight: "$602K",
      description: "Syndicated loan for debt consolidation in Calgary",
    },
    {
      icon: Hammer,
      label: "Construction Refinance",
      highlight: "Bridge",
      description: "Solutions when traditional construction financing falls short",
    },
    {
      icon: MapPin,
      label: "Cross-Market Activity",
      highlight: "National",
      description: "Refinance success stories spanning Ottawa to Calgary",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 px-6 md:px-10 lg:px-15 bg-[#faf8f5] overflow-hidden">
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideUpStagger {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleInBounce {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .animate-fade-up {
          animation: fadeUp 0.6s ease-out forwards;
        }

        .animate-fade-in-scale {
          animation: fadeInScale 0.7s ease-out forwards;
        }

        .animate-slide-up {
          animation: slideUpStagger 0.6s ease-out forwards;
        }

        .animate-scale-bounce {
          animation: scaleInBounce 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }

        .gradient-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }

        .card-entrance {
          opacity: 0;
          transform: translateY(30px);
          animation: slideUpStagger 0.6s ease-out forwards;
        }
      `}</style>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      <div className="absolute w-60 h-60 md:w-80 md:h-80 bg-orange-600/5 rounded-full blur-3xl top-10 -right-40" />
          
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="mb-12 md:mb-16">
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 mb-4 md:mb-6 transition-all duration-500 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <TrendingUp />
            <span className="text-sm font-medium">Traction Milestones</span>
          </div>
          <h2 
            className={`font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-gray-900 transition-all duration-600 delay-100 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Public highlights
          </h2>
          <p 
            className={`mt-4 md:mt-6 text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl transition-all duration-700 delay-200 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Milestones and achievements we're proud to share with the world, showcasing our growth, impact, and the moments that define our journey.
          </p>
        </div>

        {/* Hero Stat with Animated Counter */}
        <div 
          ref={heroCounter.ref}
          className="relative mb-16 md:mb-20"
        >
          <div 
            className={`bg-gradient-to-br from-orange-600/10 via-orange-600/5 to-transparent rounded-3xl p-8 md:p-12 lg:p-16 text-center border border-gray-300 transition-all duration-700 ${
              heroCounter.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="inline-flex items-baseline gap-1 mb-4">
              <span 
                className={`font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent transition-all duration-500 ${
                  heroCounter.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {heroCounter.displayValue}
              </span>
            </div>
            <p className={`text-lg md:text-xl lg:text-2xl text-gray-600 transition-all duration-600 delay-300 ${
              heroCounter.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Mortgages funded since 2020
            </p>
          </div>
        </div>

        {/* Milestone Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <div
                key={milestone.label}
                className={`group relative bg-white rounded-2xl p-6 md:p-8 border border-gray-300 hover:border-orange-600 hover:shadow-xl transition-all duration-500 ${
                  heroCounter.isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: heroCounter.isVisible ? `${400 + index * 150}ms` : '0ms'
                }}
              >
                <div className="flex items-start gap-4 md:gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 group-hover:scale-110 transition-all duration-300">
                    <Icon className="text-orange-600 transition-transform duration-300 group-hover:rotate-6" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-2">
                      <span className="font-serif text-xl md:text-2xl font-bold text-orange-600 group-hover:scale-105 transition-transform duration-300 inline-block">
                        {milestone.highlight}
                      </span>
                      <span className="text-sm text-gray-600 font-medium">
                        {milestone.label}
                      </span>
                    </div>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-6 right-6 md:left-8 md:right-8 h-0.5 bg-gradient-to-r from-transparent via-orange-600 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 scale-x-0 group-hover:scale-x-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TractionSection;