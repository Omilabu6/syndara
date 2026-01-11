import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Navbar from './Navbar';

const HeroSection = () => {
  const images = [
    '/nice.jpg',
    '/hotel.jpg',
    '/man.jpg',
    '/twoStory.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative w-full">
      <Navbar />
      <div className="relative w-full h-screen md:h-[150vh] overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Background ${currentIndex + 1}`}
            className="absolute  w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </AnimatePresence>
        
        {/* Dark overlay - UNIFIED COLOR */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute h-full inset-0 bg-black/60 z-[1]" 
        />
      </div>

      {/* Content on top */}
      <div className="absolute inset-0 z-10 flex items-center px-6 md:px-10 justify-start">
        <motion.div 
          className="max-w-3xl text-white"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: false }}
            variants={itemVariants}
            data-scroll
            data-scroll-speed="1.5" 
            className="text-2xl md:text-4xl font-serif font-bold"
          >
            Built from{' '}
            <motion.span 
              className="text-orange-500"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              $175M+
            </motion.span>{' '}
            of real mortgage execution. Now building the platform layer
          </motion.h1>
          
          <motion.h3 
            variants={itemVariants}
            data-scroll
            data-scroll-speed="1.5" 
            className="text-base md:text-lg mb-4 text-gray-100"
          >
            Covantra is being built by an active Canadian mortgage team to modernize private mortgage participation, servicing, and reporting.
          </motion.h3>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 md:gap-6"
          >
            <motion.div 
              variants={buttonVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(249, 115, 22, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                data-scroll 
                data-scroll-speed="1.5" 
                className="bg-orange-500 w-full sm:w-auto flex justify-center text-white px-6 py-3 rounded-lg font-medium  transition"
              >
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
            
            <motion.div 
              variants={buttonVariants}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderColor: "rgba(255, 255, 255, 1)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                data-scroll 
                data-scroll-speed="1.5" 
                className="border-2 border-white w-full sm:w-auto text-white px-6 py-3 rounded-lg font-medium transition"
              >
                <a href="/contact?type=investor">Join Early Access</a>
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Proof Strip */}
      <section className="relative bg-gray-100 border-b border-gray-300 py-6 md:py-8 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="px-6 md:px-10"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center md:text-left">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, color: "#1f2937" }}
              className="text-sm font-medium text-gray-700 cursor-default"
            >
              Mortgage Architects, Tara Borle's Team
            </motion.span>
            
            <motion.span 
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="hidden md:block w-px h-4 bg-gray-300" 
            />
            
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-sm text-gray-600"
            >
              <motion.strong 
                whileHover={{ scale: 1.1, color: "#f97316" }}
                className="text-gray-900 inline-block"
              >
                $175,000,000
              </motion.strong> mortgages funded since 2020
            </motion.span>
            
            <motion.span 
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="hidden md:block w-px h-4 bg-gray-300" 
            />
            
            <motion.span 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-sm text-gray-600"
            >
              Residential and commercial • Structured solutions
            </motion.span>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HeroSection;