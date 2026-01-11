import React from 'react';
import { Users, FileText, BarChart3, Shield } from 'lucide-react';

const platformCapabilities = [
  {
    icon: Users,
    title: "Investor Portal",
    description: "Secure access for eligible investors to track their participation and returns"
  },
  {
    icon: FileText,
    title: "Servicing Workflows",
    description: "Automated processes for payment distribution and compliance tracking"
  },
  {
    icon: BarChart3,
    title: "Standardized Reporting",
    description: "Real-time reporting and analytics for all stakeholders"
  },
  {
    icon: Shield,
    title: "Compliance Framework",
    description: "Built-in regulatory compliance and audit trail capabilities"
  }
];

const PhoneMockup = ({ activeIndex }) => {
  const activeCard = platformCapabilities[activeIndex];
  const Icon = activeCard.icon;

  return (
    <div className="relative  w-full max-w-[240px] md:max-w-[260px] mx-auto">
      {/* Phone Frame */}
      <div className="relative bg-gray-800 rounded-[2.2rem] p-2 shadow-2xl">
        {/* Phone Screen */}
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-[1.8rem] aspect-[9/19] overflow-hidden relative">
          {/* Screen Content */}
          <div 
            key={activeIndex}
            className="absolute inset-0 p-5 flex flex-col animate-phone-content"
          >
            {/* Top Section */}
            <div className="flex-1 flex flex-col justify-center items-center text-center">
              <div 
                className="w-16 h-16 rounded-xl bg-white shadow-md flex items-center justify-center mb-5 border border-orange-100 animate-icon-bounce"
              >
                <Icon className="w-8 h-8 text-orange-600" />
              </div>
              
              <h3 
                className="text-gray-900 text-lg font-semibold mb-2 animate-text-slide-up"
              >
                {activeCard.title}
              </h3>
              
              <p 
                className="text-gray-600 text-xs leading-relaxed px-3 animate-text-slide-up-delayed"
              >
                {activeCard.description}
              </p>
            </div>

            {/* Bottom Stats */}
            <div 
              className="grid grid-cols-2 gap-2 animate-stats-slide-up"
            >
              <div className="bg-white rounded-lg p-2.5 shadow-sm border border-orange-100">
                <div className="text-gray-500 text-[10px] mb-0.5">Status</div>
                <div className="text-gray-900 text-sm font-semibold">Active</div>
              </div>
              <div className="bg-white rounded-lg p-2.5 shadow-sm border border-orange-100">
                <div className="text-gray-500 text-[10px] mb-0.5">Security</div>
                <div className="text-gray-900 text-sm font-semibold">Secure</div>
              </div>
            </div>
          </div>
          
          {/* Notch */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-800 rounded-full" />
        </div>
      </div>

      {/* Subtle Shadow */}
      <div className="absolute inset-0 bg-orange-200/20 blur-2xl -z-10 rounded-full scale-75 animate-pulse-slow" />
    </div>
  );
};

const InDevelopmentSection = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef(null);

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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % platformCapabilities.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-6 md:px-10 bg-[#faf8f5] overflow-hidden">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes phoneContentFade {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes iconBounce {
          0% {
            transform: scale(0);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes textSlideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulseSlow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes slideInCard {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-in-view {
          opacity: 0;
        }

        .animate-in-view.visible {
          opacity: 1;
          animation-fill-mode: forwards;
        }

        .animate-heading {
          animation: fadeInLeft 0.6s ease-out;
        }

        .animate-subheading {
          animation: fadeInLeft 0.6s ease-out 0.1s;
        }

        .animate-phone-mockup {
          animation: fadeInRight 0.7s ease-out 0.3s;
        }

        .animate-phone-content {
          animation: phoneContentFade 0.3s ease-out;
        }

        .animate-icon-bounce {
          animation: iconBounce 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.1s both;
        }

        .animate-text-slide-up {
          animation: textSlideUp 0.3s ease-out 0.2s both;
        }

        .animate-text-slide-up-delayed {
          animation: textSlideUp 0.3s ease-out 0.3s both;
        }

        .animate-stats-slide-up {
          animation: textSlideUp 0.3s ease-out 0.4s both;
        }

        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }

        .animate-card {
          animation: slideInCard 0.5s ease-out both;
        }

        .animate-indicator {
          animation: iconBounce 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .card-hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card-hover-lift:hover {
          transform: translateY(-4px);
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto">
        <div className={`mb-10 md:mb-16 animate-in-view ${isVisible ? 'visible' : ''}`}>
          <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-gray-900 ${isVisible ? 'animate-heading' : ''}`}>
            What Covantra is building.
          </h2>
          <p className={`mt-4 md:mt-6 text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl ${isVisible ? 'animate-subheading' : ''}`}>
            A permissioned participation and servicing system designed to support eligible investor
            participation tracking, servicing workflows, and standardized reporting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Cards Grid */}
          <div className="space-y-3 md:space-y-4 order-2 lg:order-1">
            {platformCapabilities.map((cap, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                style={{ 
                  animationDelay: `${0.2 + index * 0.1}s`,
                  opacity: isVisible ? undefined : 0
                }}
                className={`${isVisible ? 'animate-card' : ''} card-hover-lift group cursor-pointer flex items-start gap-4 p-4 md:p-5 rounded-xl transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-white shadow-lg border-2 border-orange-500' 
                    : 'bg-white/60 hover:bg-white shadow-sm hover:shadow-md border-2 border-transparent'
                }`}
              >
                <div className={`p-2.5 md:p-3 rounded-lg bg-orange-50 border border-orange-100 flex-shrink-0 transition-all duration-300 ${
                  activeIndex === index ? 'bg-orange-100 scale-110' : 'scale-100'
                }`}>
                  <cap.icon className={`h-5 w-5 md:h-6 md:w-6 transition-colors ${
                    activeIndex === index ? 'text-orange-600' : 'text-orange-500'
                  }`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-sans font-semibold text-lg md:text-xl text-gray-900 mb-1.5">
                    {cap.title}
                  </h3>
                  <p className="text-xs md:text-sm leading-relaxed text-gray-600">
                    {cap.description}
                  </p>
                </div>
                
                {/* Active Indicator */}
                {activeIndex === index && (
                  <div
                    className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0 mt-2 animate-indicator"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Phone Mockup */}
          <div className={`flex justify-center  lg:justify-end order-1 lg:order-2 animate-in-view ${isVisible ? 'visible animate-phone-mockup' : ''}`}>
            <PhoneMockup activeIndex={activeIndex} />
          </div>
        </div>

        {/* Progress Dots - Mobile Only */}
        <div className="flex  lg:hidden justify-center gap-2 mt-8">
          {platformCapabilities.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'w-6 bg-orange-500' 
                  : 'w-1.5 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to feature ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InDevelopmentSection;