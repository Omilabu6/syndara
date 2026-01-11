import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  MessageSquare,
  BarChart3,
  Zap,
  ArrowRight,
} from 'lucide-react';

import Navbar from '../components/Navbar';
const values = [
  {
    icon: Shield,
    title: "Compliance-first execution",
    description: "Every decision starts with what's permissible and sustainable.",
  },
  {
    icon: MessageSquare,
    title: "Clear communication",
    description: "No jargon, no hidden terms. Just honest conversation about what's possible.",
  },
  {
    icon: BarChart3,
    title: "Consistent reporting",
    description: "Standardized information that you can rely on, every time.",
  },
  {
    icon: Zap,
    title: "Practical technology",
    description: "Tools that reduce friction, not complexity for its own sake.",
  },
];

const About = () => {
  return (
    <div className="data-scroll-section bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative text-gray-900 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-24 md:pt-32 lg:pt-40">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-normal leading-tight tracking-tight">
                Operators first.{" "}
                <span className="italic font-light">Technology second.</span>
              </h1>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className='flex justify-center items-center px-6 md:px-10 mt-12 md:mt-16'
        >
          <div className='w-full max-w-7xl'>
            <img 
              src="/whiteHouse.jpg" 
              alt="Property" 
              className='w-full rounded-2xl md:rounded-3xl shadow-xl' 
            />
          </div> 
        </motion.div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24 lg:py-32 px-6 md:px-10 lg:px-15">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-24 lg:self-start"
            >
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                ABOUT COVANTRA
              </h2>
              <h3 className='text-base md:text-lg text-gray-600 max-w-md'>
                Our mission is to simplify mortgage operations through smart technology—helping teams work faster, stay compliant, and scale sustainably.
              </h3>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 max-w-2xl text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed"
            >
              <p>
                Covantra is being built by an active Canadian mortgage team operating under Mortgage Architects, led by Tara Borle's Team. Since 2020, the team has publicly funded over $175,000,000 in mortgages across both residential and commercial markets, working closely with borrowers, investors, and legal professionals across Canada.
              </p>
              <p>
                We created Covantra because while the mortgage business itself is well-established and trusted, the operational layer behind it remains heavily manual, fragmented, and time-consuming. From participation tracking to servicing workflows and reporting, many processes still rely on spreadsheets, emails, and repetitive admin work.
              </p>
              <p>
                Our mission is to modernize this backend without disrupting what already works. Covantra focuses on scaling responsibly by improving transparency, accuracy, and efficiency while fully respecting existing legal closing standards and regulatory requirements.
              </p>
              <p>
                By streamlining internal operations, Covantra helps mortgage teams spend less time on paperwork and more time building relationships, closing deals, and delivering better service to clients and partners.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16"
          >
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-4 md:mb-6 leading-tight">
              What we stand for
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-8 md:mb-12 max-w-4xl leading-relaxed">
              Principles that guide every decision we make.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="flex items-start gap-4 p-6 rounded-xl bg-white border border-gray-300 hover:border-orange-600 hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-orange-100 flex-shrink-0">
                    <Icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-[#faf8f5] text-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight mb-4 md:mb-6">
              Want to work with us?
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-8">
              Reach out to discuss your scenario or explore investor opportunities.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a 
                href="/contact"
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-orange-600 text-white text-base md:text-lg font-medium rounded-lg hover:bg-orange-600/90 transition-colors"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;