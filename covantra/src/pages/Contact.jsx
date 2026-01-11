import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import { Mail } from 'lucide-react';


const Send = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const ArrowRight = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const provinces = [
  "Alberta", "British Columbia", "Manitoba", "New Brunswick",
  "Newfoundland and Labrador", "Nova Scotia", "Ontario",
  "Prince Edward Island", "Quebec", "Saskatchewan",
];

const purposes = ["Purchase", "Refinance", "Renewal", "Construction", "Other"];
const investorCategories = ["Accredited Investor", "Eligible Investor", "Institutional", "Other"];

export default function Contact() {
  const [formType, setFormType] = useState("borrower");
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const heroVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="data-scroll-section  bg-white">
      <Navbar />
      
      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-4 right-4 bg-orange-600 text-white px-6 py-3 rounded-lg shadow-lg z-50"
          >
            <p className="font-semibold">Form submitted</p>
            <p className="text-sm">We'll be in touch within 1-2 business days.</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="relative text-white overflow-hidden">
        <motion.img 
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&h=900&fit=crop"
          alt="" 
          className="absolute inset-0 w-full h-full object-cover"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        />
        <div className="absolute inset-0 bg-white/10" />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-gray-900/60 to-gray-900/80" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 md:py-40">
          <motion.div 
            className="max-w-3xl"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="font-serif mt-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Contact Us
            </motion.h1>
            <motion.p 
              className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Tell us what you are trying to do and when you need it done.
            </motion.p>
             
          </motion.div>
          <a
              href="mailto:info@covantra.com"
              className="fixed border-2 border-white right-5 text-white 
                        flex items-center gap-2 
                        px-6 py-8 rounded-full 
                        shadow-lg  font-semibold
                        hover:bg-white/30
                        transition"
            >
              <Mail size={18} />
              info@covantra.com
            </a>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#faf8f5]">
        <motion.div 
          className="max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Form Type Toggle */}
          <motion.div 
            className="flex gap-2 p-1 bg-gray-100 rounded-lg mb-6 sm:mb-8"
            variants={itemVariants}
          >
            <button
              onClick={() => setFormType("borrower")}
              className={`flex-1 py-2.5 px-3 sm:px-4 rounded-md text-xs sm:text-sm font-medium transition-all ${
                formType === "borrower"
                  ? "bg-white shadow-sm text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Borrower / Builder
            </button>
            <button
              onClick={() => setFormType("investor")}
              className={`flex-1 py-2.5 px-3 sm:px-4 rounded-md text-xs sm:text-sm font-medium transition-all ${
                formType === "investor"
                  ? "bg-white shadow-sm text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Investor
            </button>
          </motion.div>

          <motion.div 
            className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-sm border border-gray-300"
            variants={itemVariants}
          >
            <AnimatePresence mode="wait">
              {formType === "borrower" ? (
                <motion.div 
                  key="borrower"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <motion.div 
                      className="space-y-2"
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                        Full name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all"
                      />
                    </motion.div>
                    <motion.div 
                      className="space-y-2"
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all"
                      />
                    </motion.div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <motion.div 
                      className="space-y-2"
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label htmlFor="province" className="block text-sm font-medium text-gray-900">
                        Province
                      </label>
                      <select
                        id="province"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Select province</option>
                        {provinces.map((province) => (
                          <option key={province} value={province.toLowerCase()}>
                            {province}
                          </option>
                        ))}
                      </select>
                    </motion.div>
                    <motion.div 
                      className="space-y-2"
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label htmlFor="location" className="block text-sm font-medium text-gray-900">
                        Property location
                      </label>
                      <input
                        id="location"
                        type="text"
                        placeholder="City, Province"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all"
                      />
                    </motion.div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <motion.div 
                      className="space-y-2"
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label htmlFor="purpose" className="block text-sm font-medium text-gray-900">
                        Purpose
                      </label>
                      <select
                        id="purpose"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Select purpose</option>
                        {purposes.map((purpose) => (
                          <option key={purpose} value={purpose.toLowerCase()}>
                            {purpose}
                          </option>
                        ))}
                      </select>
                    </motion.div>
                    <motion.div 
                      className="space-y-2"
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label htmlFor="amount" className="block text-sm font-medium text-gray-900">
                        Approx. loan amount
                      </label>
                      <input
                        id="amount"
                        type="text"
                        placeholder="$500,000"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all"
                      />
                    </motion.div>
                  </div>

                  <motion.div 
                    className="space-y-2"
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-900">
                      Timeline
                    </label>
                    <input
                      id="timeline"
                      type="text"
                      placeholder="e.g., Closing in 30 days"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all"
                    />
                  </motion.div>

                  <motion.div 
                    className="space-y-2"
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                      Additional details (optional)
                    </label>
                    <textarea
                      id="message"
                      placeholder="Tell us more about your scenario..."
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all resize-none"
                    />
                  </motion.div>

                  <motion.button
                    onClick={handleSubmit}
                    className="w-full px-6 py-3 bg-orange-600 hover:bg-orange-600/90 text-white rounded-lg font-medium inline-flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Submit Scenario
                    <Send className="ml-2" />
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div 
                  key="investor"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <motion.div 
                      className="space-y-2"
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label htmlFor="investor-name" className="block text-sm font-medium text-gray-900">
                        Full name
                      </label>
                      <input
                        id="investor-name"
                        type="text"
                        placeholder="Your full name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all"
                      />
                    </motion.div>
                    <motion.div 
                      className="space-y-2"
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label htmlFor="investor-email" className="block text-sm font-medium text-gray-900">
                        Email
                      </label>
                      <input
                        id="investor-email"
                        type="email"
                        placeholder="you@example.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all"
                      />
                    </motion.div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <motion.div 
                      className="space-y-2"
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label htmlFor="jurisdiction" className="block text-sm font-medium text-gray-900">
                        Jurisdiction
                      </label>
                      <select
                        id="jurisdiction"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Select jurisdiction</option>
                        {provinces.map((province) => (
                          <option key={province} value={province.toLowerCase()}>
                            {province}
                          </option>
                        ))}
                      </select>
                    </motion.div>
                    <motion.div 
                      className="space-y-2"
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label htmlFor="category" className="block text-sm font-medium text-gray-900">
                        Investor category
                      </label>
                      <select
                        id="category"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Select category</option>
                        {investorCategories.map((category) => (
                          <option key={category} value={category.toLowerCase()}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </motion.div>
                  </div>

                  <motion.div 
                    className="space-y-2"
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label htmlFor="ticket" className="block text-sm font-medium text-gray-900">
                      Typical ticket size
                    </label>
                    <input
                      id="ticket"
                      type="text"
                      placeholder="e.g., $100,000 - $250,000"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all"
                    />
                  </motion.div>

                  <motion.div 
                    className="space-y-2"
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label htmlFor="investor-message" className="block text-sm font-medium text-gray-900">
                      Message
                    </label>
                    <textarea
                      id="investor-message"
                      placeholder="Tell us about your investment interests..."
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all resize-none"
                    />
                  </motion.div>

                  <motion.button
                    onClick={handleSubmit}
                    className="w-full px-6 py-3 bg-orange-600 hover:bg-orange-600/90 text-white rounded-lg font-medium inline-flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Request Early Access
                    <ArrowRight className="ml-2" />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}