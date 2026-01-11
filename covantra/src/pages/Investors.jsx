import React from 'react';
import { motion } from "framer-motion";
import {
  Shield,
  FileText,
  BarChart3,
  Clock,
  Building2,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import Navbar from '../components/Navbar';

const buildingFor = [
  {
    icon: FileText,
    title: "Permissioned Records",
    description: "Participation records designed for private distributions with full compliance and audit trails",
    gradient: "from-orange-600/10 to-orange-600/5",
  },
  {
    icon: BarChart3,
    title: "Consistent Statements",
    description: "Transaction history and statements that eliminate guesswork with real-time updates",
    gradient: "from-orange-600/10 to-orange-600/5",
  },
  {
    icon: Shield,
    title: "Defined Allocation Logic",
    description: "Clear logic for distributions that you can rely on with transparent calculations",
    gradient: "from-orange-600/10 to-orange-600/5",
  },
  {
    icon: Clock,
    title: "Standardized Updates",
    description: "Servicing updates and reporting on a consistent cadence you can count on",
    gradient: "from-orange-600/10 to-orange-600/5",
  },
];

const experience = [
  {
    icon: Building2,
    title: "Multi-family/commercial financings",
    description: "Experience with larger, complex property types requiring sophisticated structuring",
    stat: "50+",
    statLabel: "Projects",
  },
  {
    icon: Briefcase,
    title: "Structured and syndicated solutions",
    description: "Track record of participation-based deals with multiple stakeholders",
    stat: "$175M+",
    statLabel: "Funded",
  },
  {
    icon: Shield,
    title: "Complex refinance scenarios",
    description: "Construction and time-sensitive files handled successfully under pressure",
    stat: "98%",
    statLabel: "Success Rate",
  },
];

const Investors = () => {
  return (
    <div className="data-scroll-section bg-white">
        <Navbar />
      {/* Hero - Similar to Borrowers */}
      <section className="relative px-4 sm:px-6 md:px-10 bg-white text-black overflow-hidden pt-24">
        <div className="relative px-4 sm:px-6 py-16 md:py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif max-w-3xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight">
              Private mortgage participation with{" "}
              <span className="italic">clearer reporting.</span>
            </h1>
            
            <div className='flex flex-col justify-end items-end'>
              <p className="mt-6 md:mt-8 max-w-full sm:max-w-[500px] text-base sm:text-lg md:text-xl text-black leading-relaxed">
                Covantra is building a permissioned system to modernize participation tracking, 
                servicing workflows, and reporting for private mortgage capital.
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
                  href="/contact?type=investor"
                  className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white text-base sm:text-lg font-medium rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Join Early Access
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </motion.div>
            </div>
            
            <div className='flex flex-col md:flex-row gap-6 md:gap-25 mt-8 md:mt-0'>
              <div className='w-full md:w-[28em] lg:w-[30em] md:-translate-y-20 md:ml-10'>
                <img src="/cloudy.jpg" alt="Investment property" className='rounded-2xl w-full' />
              </div>
              <div className='w-full md:w-[28em] lg:w-[30em] md:mt-40'>
                <img src="/purple.jpg" alt="Modern building" className='rounded-2xl w-full' />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We're Building - Bento Grid */}
      <section id="platform" className="bg-white py-16 md:py-24 px-6 md:px-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-start">
            <div className="lg:sticky lg:top-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-4 md:mb-6">
                  What Covantra is <br className="hidden sm:block" />
                  <span className="italic">building for investors</span>
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  A platform designed to bring clarity and consistency to private mortgage participation.
                </p>
              </motion.div>
            </div>

            <div className="grid gap-4 md:gap-6">
              {buildingFor.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className={`group p-5 md:p-6 lg:p-8 rounded-2xl bg-gradient-to-br ${item.gradient} border border-gray-300 hover:border-orange-600 transition-all hover:shadow-lg cursor-pointer`}
                  >
                    <div className="flex items-start gap-4 md:gap-5">
                      <div className="p-2.5 md:p-3 rounded-xl bg-white shadow-sm group-hover:shadow-md transition-shadow flex-shrink-0">
                        <Icon className="h-5 w-5 md:h-6 md:w-6 text-orange-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-serif text-lg md:text-xl lg:text-2xl font-normal text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                      <ArrowRight className="hidden sm:block h-5 w-5 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Qualified - Stats Cards */}
      <section className="bg-[#faf8f5] py-16 md:py-24 px-6 md:px-10">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-10 md:mb-12 lg:mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-4 md:mb-6">
              Why we're qualified <span className="italic">to build it</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600">
              We are not starting from theory. Our experience spans real-world execution.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {experience.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-600 rounded-2xl transform rotate-3 group-hover:rotate-1 transition-transform opacity-0 group-hover:opacity-100" />
                  <div className="relative p-6 md:p-8 bg-white rounded-2xl border border-gray-300 group-hover:border-transparent transition-all shadow-sm group-hover:shadow-xl">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 md:p-4 rounded-xl bg-gray-100 group-hover:bg-orange-100 transition-colors">
                        <Icon className="h-6 w-6 md:h-8 md:w-8 text-gray-900 group-hover:text-orange-600 transition-colors" />
                      </div>
                      <div className="text-right">
                        <p className="text-2xl sm:text-3xl md:text-4xl font-serif text-orange-600">{item.stat}</p>
                        <p className="text-xs sm:text-sm text-gray-600">{item.statLabel}</p>
                      </div>
                    </div>
                    <h3 className="font-serif text-base sm:text-lg md:text-xl font-normal text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-sm md:text-base text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA - Split Design */}
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
                Interested in <span className="italic text-orange-400">early access?</span>
              </h2>
              <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-300">
                Request onboarding details and we'll be in touch about eligibility.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact?type=investor"
                  className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-orange-500 text-white text-base md:text-lg font-medium rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Request Early Access
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </a>
                <a 
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 border-2 border-white/20 text-white text-base md:text-lg font-medium rounded-lg hover:bg-white/5 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investors;