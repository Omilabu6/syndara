import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ActiveBusiness = () => {
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

  return (
    <div ref={sectionRef} className="bg-[#faf8f5] py-12 md:py-16 px-6 md:px-10">
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

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInBullet {
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
          animation-fill-mode: forwards;
        }

        .animate-badge {
          animation: scaleIn 0.5s ease-out;
        }

        .animate-heading {
          animation: fadeInLeft 0.6s ease-out 0.1s;
        }

        .animate-subheading {
          animation: fadeInLeft 0.6s ease-out 0.2s;
        }

        .animate-section-title {
          animation: fadeInUp 0.5s ease-out 0.3s;
        }

        .animate-bullet-1 {
          animation: slideInBullet 0.5s ease-out 0.4s;
        }

        .animate-bullet-2 {
          animation: slideInBullet 0.5s ease-out 0.5s;
        }

        .animate-bullet-3 {
          animation: slideInBullet 0.5s ease-out 0.6s;
        }

        .animate-image {
          animation: fadeInRight 0.7s ease-out 0.5s;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className={`inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-6 md:mb-8 animate-in-view ${isVisible ? 'visible animate-badge' : ''}`}>
          <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-orange-600" />
          <span className="text-orange-600 font-medium text-sm md:text-base">Active Business</span>
        </div>

        {/* Main Heading */}
        <h1 className={`text-3xl md:text-5xl font-serif text-gray-900 mb-4 md:mb-6 leading-tight animate-in-view ${isVisible ? 'visible animate-heading' : ''}`}>
          Mortgage solutions for real situations.
        </h1>

        {/* Subheading */}
        <p className={`text-lg md:text-xl text-gray-600 mb-8 md:mb-12 max-w-4xl leading-relaxed animate-in-view ${isVisible ? 'visible animate-subheading' : ''}`}>
          We actively support purchase, refinance, renewal, consolidation, and construction-related scenarios through standard underwriting and legal closing processes.
        </p>

        {/* Common Situations */}
        <h2 className={`text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4 md:mb-6 animate-in-view ${isVisible ? 'visible animate-section-title' : ''}`}>
          COMMON SITUATIONS WE HANDLE
        </h2>

        {/* List Items */}
        <div className="space-y-3 md:space-y-4 mb-8 md:mb-0">
          <div className={`flex items-start gap-3 animate-in-view ${isVisible ? 'visible animate-bullet-1' : ''}`}>
            <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 flex-shrink-0"></div>
            <p className="text-base md:text-lg text-gray-900">
              Clients who went to their bank first and need a better structure
            </p>
          </div>

          <div className={`flex items-start gap-3 animate-in-view ${isVisible ? 'visible animate-bullet-2' : ''}`}>
            <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 flex-shrink-0"></div>
            <p className="text-base md:text-lg text-gray-900">
              Construction financing that falls short mid-project
            </p>
          </div>

          <div className={`flex items-start gap-3 animate-in-view ${isVisible ? 'visible animate-bullet-3' : ''}`}>
            <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 flex-shrink-0"></div>
            <p className="text-base md:text-lg text-gray-900">
              Consolidation and strategic refinances
            </p>
          </div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, x: 100 }}   
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{
          duration: 0.8,
          ease: "easeOut"
        }}
        viewport={{ once: false }} 
        className={`flex justify-center md:justify-end items-end px-0 md:px-20 md:-mt-20 mt-8 animate-in-view `}>
        <img 
          src="/bg.png" 
          alt="Property" 
          className='rounded-2xl w-full md:w-auto max-w-2xl shadow-lg hover:shadow-xl transition-shadow duration-300' 
        />
      </motion.div>
    </div>
  );
};

export default ActiveBusiness;