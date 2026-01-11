import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Users, Briefcase, Home, TrendingUp, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

const whoWeHelp = [
  {
    icon: Building2,
    title: "Real Estate Investors",
    description: "Whether you're acquiring your first rental property or expanding a multi-million dollar portfolio, we understand the unique financing needs of real estate investors. From bridge loans to long-term refinancing, we structure deals that align with your investment strategy and timeline.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80",
    color: "#1e40af"
  },
  {
    icon: Users,
    title: "Self-Employed Professionals",
    description: "Traditional banks often struggle to assess income for business owners, freelancers, and consultants. We look beyond conventional income verification to understand the true financial picture, offering flexible solutions that recognize your entrepreneurial success.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=80",
    color: "#b45309"
  },
  {
    icon: Briefcase,
    title: "Business Owners",
    description: "From securing commercial properties to managing cash flow with business lines of credit, we partner with entrepreneurs who need a financing partner that understands business cycles, seasonal fluctuations, and growth opportunities.",
    image: "/gray.jpg",
    color: "#047857"
  },
  {
    icon: Home,
    title: "New Canadians",
    description: "Building credit history in a new country takes time, but your homeownership dreams shouldn't wait. We work with newcomers to Canada, understanding international credit histories and alternative documentation to help you establish roots.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80",
    color: "#6b21a8"
  },
  {
    icon: TrendingUp,
    title: "Debt Consolidation Seekers",
    description: "High-interest debt can feel overwhelming, but your home equity can be a powerful tool for financial recovery. We help homeowners consolidate debt into manageable payments, often at significantly lower interest rates than credit cards or personal loans.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=80",
    color: "#be123c"
  },
  {
    icon: Shield,
    title: "Credit Rebuilders",
    description: "Past financial challenges don't define your future. Whether you've experienced bankruptcy, consumer proposal, or other credit events, we specialize in second-chance financing that helps you rebuild while accessing the capital you need today.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=80",
    color: "#334155"
  }
];

const WhoWeHelpSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % whoWeHelp.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + whoWeHelp.length) % whoWeHelp.length);
  };

  const currentItem = whoWeHelp[currentIndex];
  const Icon = currentItem.icon;

  return (
    <section className="bg-white py-20 ">
      <div className="max-w-7xl mx-auto ">
        {/* Header */}
        <div className=" mb-16 px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
          <div className="max-w-3xl mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">Who we help</h2>
            <p className="text-xl text-gray-600">
              We work with borrowers across a range of situations where traditional lending falls short.
            </p>
          </div>
          </motion.div>
        </div>

        {/* Slider */}
        <div className="relative  px-2.5 max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-3xl shadow-2xl"
              style={{ backgroundColor: currentItem.color }}
            >
              <div className="flex flex flex-col-reverse flex-col md:flex-row min-h-[500px]">
                {/* Content Side */}
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Text Content */}
                  <h3 className="font-serif  text-3xl md:text-4xl text-white mb-4">
                    {currentItem.title}
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed mb-8">
                    {currentItem.description}
                  </p>

                  {/* Counter */}
                  <div className="flex  items-center gap-4 text-white/60">
                    <span className="font-serif text-6xl font-bold">
                      {String(currentIndex + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm">
                      / {String(whoWeHelp.length).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Image Side */}
                <div className="flex-1 relative min-h-[300px] md:min-h-[500px]">
                  <img
                    src={currentItem.image}
                    alt={currentItem.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent to-black/20" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center group hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-amber-600 transition-colors" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {whoWeHelp.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'w-8 bg-amber-600' 
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center group hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-amber-600 transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelpSection;