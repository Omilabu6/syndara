import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Navbar from './Navbar';

const HeroSection = () => {
  const images = [
    '/bg.png',
    '/longHouse.png',
    '/shiny.webp',
    '/bluey.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 9000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full">
      <Navbar />
      <div className="relative w-full h-screen md:h-[150vh] overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Background ${currentIndex + 1}`}
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </AnimatePresence>
        
        {/* Dark overlay - UNIFIED COLOR */}
        <div className="absolute h-full inset-0 bg-gray-900/60 z-[1]" />
      </div>

      {/* Content on top */}
      <div className="absolute inset-0 z-10 flex items-center px-6 md:px-10 justify-start">
        <div className="max-w-3xl text-white">
          <h1 data-scroll
            data-scroll-speed="1.5" 
            className="text-2xl md:text-4xl font-serif font-bold ">
            Built from <span className="text-orange-500">$175M+</span> of real mortgage execution. Now building the platform layer
          </h1>
          <h3  data-scroll
           data-scroll-speed="1.5" className="text-base md:text-lg mb-4 text-gray-100">
            Syndara is being built by an active Canadian mortgage team to modernize private mortgage participation, servicing, and reporting.
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <button data-scroll 
                data-scroll-speed="1.5" className="bg-orange-500 w-full sm:w-auto flex justify-center text-white px-6 py-3 rounded-lg font-medium hover:bg-white transition">
                <a href="/contact" className="flex justify-center items-center">
                  <span>Submit a Scenario</span>
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                </a>
              </button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <button data-scroll 
               data-scroll-speed="1.5" className="border-2 border-white w-full sm:w-auto text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition">
                <a href="/contact?type=investor">Join Early Access</a>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
     {/* Proof Strip */}
      <section className="relative bg-gray-100 border-b border-gray-300 py-6 md:py-8 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="px-6 md:px-10"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center md:text-left">
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="text-sm font-medium text-gray-700 cursor-default"
            >
              Mortgage Architects, Tara Borle's Team
            </motion.span>
            <span className="hidden md:block w-px h-4 bg-gray-300" />
            <span className="text-sm text-gray-600">
              <strong className="text-gray-900">$175,000,000</strong> mortgages funded since 2020
            </span>
            <span className="hidden md:block w-px h-4 bg-gray-300" />
            <span className="text-sm text-gray-600">
              Residential and commercial • Structured solutions
            </span>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HeroSection;