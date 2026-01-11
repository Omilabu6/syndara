import React from 'react';

import { motion } from "framer-motion";
import  WhoWeHelpSection  from '../components/WhoWeHelpSection';
import {
  Home,
  RefreshCw,
  Building,
  Wallet,
  Building2,
  ArrowRight,
} from "lucide-react";
import Navbar from '../components/Navbar';

const whoWeHelp = [
  {
    icon: Home,
    title: "Homeowners",
    description: "Renewing or refinancing with better options than your bank offered",
  },
  {
    icon: RefreshCw,
    title: "Buyers",
    description: "Needing alternative capital to close when traditional financing falls short",
  },
  {
    icon: Building,
    title: "Builders",
    description: "Construction projects needing term-out or restructure mid-project",
  },
  {
    icon: Wallet,
    title: "Consolidation",
    description: "Second-position strategies where appropriate for debt management",
  },
  {
    icon: Building2,
    title: "Commercial",
    description: "Multi-family borrowers where traditional lending doesn't fit",
  },
];

const process = [
  { step: "01", title: "Submit your scenario and timeline" },
  { step: "02", title: "Receive a document checklist" },
  { step: "03", title: "Review and structure realistic options" },
  { step: "04", title: "Close through standard legal processes" },
  { step: "05", title: "Post-funding servicing communication" },
];

const faqs = [
  {
    question: "Is this crypto lending?",
    answer:
      "No. Borrower payments remain in CAD through normal payment rails. This is traditional mortgage lending with modern operational infrastructure.",
  },
  {
    question: "Do you replace my lawyer?",
    answer:
      "No. Closings remain standard legal processes and registration. We work with your chosen legal counsel.",
  },
  {
    question: "How fast can this move?",
    answer:
      "Timelines depend on documentation, appraisal, and complexity. We provide a realistic estimate after initial review.",
  },
];



const Borrowers = () => {
  return (
    <div className='bg-white data-scroll-section'>
        <Navbar />
      {/* Hero */}
      <section className="relative px-4 sm:px-6 md:px-10 bg-white text-black overflow-hidden pt-24">
        <div className="relative px-4 sm:px-6 py-16 md:py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif max-w-3xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight">
              Mortgage solutions for{" "}
              <span className="italic">real situations.</span>
            </h1>
            
            <div className='flex flex-col justify-end items-end'>
              <p className="mt-6 md:mt-8 max-w-full sm:max-w-[500px] text-base sm:text-lg md:text-xl text-black leading-relaxed">
                If a bank decision does not reflect the full picture, we help structure a plan 
                that fits your asset and your timeline.
              </p>
            </div>
            
            <div className='flex flex-col mr-0 sm:mr-20 md:mr-40 justify-end items-end'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-4 md:mt-6"
              >
                <a 
                  href="/contact"
                  className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white text-base sm:text-lg font-medium rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Start a Scenario
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </motion.div>
            </div>
            
            <div className='flex flex-col md:flex-row gap-6 md:gap-30 mt-8 md:mt-0'>
              <div className='w-full md:w-[28em] lg:w-[30em] md:-translate-y-20 md:ml-10'>
                <img src="/hotel.jpg" alt="Hotel property" className='rounded-2xl w-full' />
              </div>
              <div className='w-full md:w-[28em] lg:w-[30em] md:mt-40'>
                <img src="/twoStory.jpg" alt="Two story building" className='rounded-2xl w-full' />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div >
        <WhoWeHelpSection />
      </div>
      <style>{`
        [data-scroll-section-id="stacking-section"] {
            position: relative !important;
            transform: none !important;
        }
        
        [data-scroll-section-id="stacking-section"] [style*="position: sticky"] {
            position: sticky !important;
        }
        `}</style>

      {/* Process */}
      <section className="bg-[#faf8f5] py-16 md:py-20 px-6 md:px-10">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl mb-10 md:mb-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">What to expect</h2>
            <p className="text-lg md:text-xl text-gray-600">
              A clear process from initial conversation to closing and beyond.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 sm:gap-6 py-5 sm:py-6 border-b border-gray-200 last:border-0"
              >
                <span className="font-serif text-5xl sm:text-6xl md:text-7xl text-orange-500/50">{item.step}</span>
                <div className="pt-4 sm:pt-6 md:pt-8">
                  <h4 className="font-serif text-lg sm:text-xl text-gray-900">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-16 md:py-20 px-6 md:px-10">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-10">
            <div className="max-w-3xl mb-4 lg:mb-12">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900">Borrower FAQs</h2>
              <h3 className='text-gray-900 mt-2 text-base md:text-lg'>Have any questions?</h3>
            </div>

            <div className="max-w-2xl lg:mt-10 space-y-6 md:space-y-8">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h4 className="font-serif text-lg md:text-xl text-gray-900">{faq.question}</h4>
                  <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-16 md:py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight">
                Have a scenario? Let's talk.
              </h2>
              <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-300">
                We'll tell you what's realistic and outline the next steps.
              </p>
              <div className="mt-6 md:mt-8">
                <a 
                  href="/contact"
                  className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white text-base sm:text-lg font-medium rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Start a Scenario
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Borrowers;