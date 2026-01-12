import { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Link, useLocation } from 'react-router-dom';

const legalSections = [
  {
    id: "disclosures",
    title: "Disclosures",
    content: [
      "Information on this website is for general informational purposes only and does not constitute an offer to sell or a solicitation to buy securities.",
      "Participation opportunities, if any, are available only to eligible investors, subject to applicable laws and onboarding requirements.",
      "Investing involves risk. Returns are not guaranteed.",
    ],
  },
  {
    id: "privacy-policy",
    title: "Privacy Policy",
    content: [
      "Syndara collects information you submit through forms, including contact details and scenario information. We use this information to review requests, communicate with you, and support onboarding where applicable.",
      "We may use vetted service providers for identity verification, secure document handling, and communications. We do not sell personal information.",
      "You may request access, correction, or deletion of your information by contacting us.",
    ],
  },
  {
    id: "terms-of-use",
    title: "Terms of Use",
    content: [
      "Website content is provided for general information and does not constitute legal, tax, or financial advice. You are responsible for decisions made based on your own due diligence and professional advice.",
      "Syndara is not liable for losses arising from reliance on information on this website.",
    ],
  },
];

const AccordionItem = ({ section, index, isOpen, onToggle }) => (
  <motion.div 
    id={section.id} // Add ID here for scrolling
    className="border-b border-gray-200 scroll-mt-32" // scroll-mt-32 adds offset for fixed navbar
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <button
      onClick={onToggle}
      className="w-full py-4 sm:py-6 md:py-8 flex items-center justify-between text-left group"
    >
      <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
        <span className={`font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl transition-colors ${
          isOpen ? 'text-orange-500' : 'text-orange-500/40 group-hover:text-orange-500'
        }`}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <h2 className={`font-serif text-xl sm:text-2xl md:text-3xl transition-colors ${
          isOpen ? 'text-orange-500' : 'text-gray-900 group-hover:text-orange-500'
        }`}>
          {section.title}
        </h2>
      </div>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 flex-shrink-0" />
      </motion.div>
    </button>
    
    <motion.div
      initial={false}
      animate={{
        height: isOpen ? 'auto' : 0,
        opacity: isOpen ? 1 : 0
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="overflow-hidden"
    >
      <div className="pb-6 sm:pb-8 pl-0 md:pl-20 space-y-3 sm:space-y-4">
        {section.content.map((paragraph, pIndex) => (
          <motion.p 
            key={pIndex} 
            className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
            transition={{ duration: 0.3, delay: pIndex * 0.1 }}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </motion.div>
  </motion.div>
);

export default function Legal() {
  const [openSection, setOpenSection] = useState(null);
  const location = useLocation();

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  // Handle hash navigation and smooth scrolling
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        // Open the accordion section
        setOpenSection(id);
        
        // Smooth scroll to the element after a small delay to allow accordion to open
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative text-white pt-24 md:pt-32 overflow-hidden">
        {/* Background Image */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/cloudy.jpg')" }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-32">
          <div className="max-w-4xl">
            <motion.p 
              className="text-orange-500 font-medium mb-4 tracking-wide uppercase text-xs sm:text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Legal
            </motion.p>
            <motion.h1 
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Transparency & <span className="italic">trust.</span>
            </motion.h1>
            <motion.p 
              className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-white/80 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Clear policies that protect your interests and define how we operate.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="bg-white py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            {legalSections.map((section, index) => (
              <AccordionItem
                key={section.id}
                section={section}
                index={index}
                isOpen={openSection === section.id}
                onToggle={() => toggleSection(section.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-50 py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div 
            className="flex flex-col items-center justify-between gap-6 sm:gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-xl">
              <motion.h2 
                className="font-serif text-2xl sm:text-3xl md:text-4xl text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Have questions about our policies?
              </motion.h2>
              <motion.p 
                className="mt-3 text-base sm:text-lg text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                We're here to provide the clarity you need.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white text-base sm:text-lg font-medium rounded-lg hover:bg-orange-600 transition-colors">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}