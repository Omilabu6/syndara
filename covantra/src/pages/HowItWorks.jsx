import React from 'react';
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  FileCheck,
  Scale,
  Users,
  BarChart3,
  ArrowRight,
  Layers,
  Shield,
  Zap,
} from "lucide-react";
import Navbar from '../components/Navbar';

const existsToday = [
  "Origination, underwriting, and closing through standard processes",
  "Legal registration remains fully traditional",
  "Borrower servicing occurs through normal payment rails",
];

const covantraAdds = [
  "Permissioned investor onboarding and participation records",
  "Operational servicing workflows that reduce manual reconciliation",
  "Standardized statements and reporting designed for scale",
];

const flow = [
  {
    step: "01",
    title: "Origination and underwriting remain traditional",
    Icon: FileCheck,
    description: "Standard mortgage processes you already know",
  },
  {
    step: "02",
    title: "Legal closing and registration remain traditional",
    Icon: Scale,
    description: "No changes to legal frameworks",
  },
  {
    step: "03",
    title: "Eligible investors onboard through a permissioned process",
    Icon: Users,
    description: "Secure, compliant investor access",
  },
  {
    step: "04",
    title: "Participation records are tracked in a permissioned ledger",
    Icon: BarChart3,
    description: "Transparent, auditable records",
  },
  {
    step: "05",
    title: "Servicing workflows support allocations and statements",
    Icon: Clock,
    description: "Automated distribution processing",
  },
  {
    step: "06",
    title: "Reporting creates a consistent record over time",
    Icon: FileCheck,
    description: "Clear, standardized documentation",
  },
];

const FloatingCard = ({ delay, className, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function HowItWorks() {
  return (
    <div className="data-scroll-section bg-white">
        <Navbar />
      
      {/* Hero - Asymmetric Split Design */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Left dark panel with gradient */}
        <div className="absolute left-0 top-0 w-full lg:w-[55%] h-full bg-gray-900">
          <img 
            src="/glassy.jpg" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gray-900/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(249,115,22,0.1)_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(255,255,255,0.03)_0%,_transparent_40%)]" />
        </div>

        <div className="relative container mx-auto px-6 md:px-10 py-16 md:py-20 lg:py-28 xl:py-36">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[70vh]">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white mt-20 lg:mt-30 relative z-10"
            >
              <h1 className="font-serif text-4xl  font-normal leading-[1.1] tracking-tight">
                Traditional mortgages.{" "}
                <span className="italic text-orange-400">Modern administration.</span>
              </h1>

              <p className="mt-6 text-lg  text-gray-300 max-w-xl leading-relaxed">
                We don't change how mortgages are closed or registered. We add an operational 
                layer that makes participation tracking, servicing, and reporting cleaner.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4"
              >
                <a 
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white text-base font-medium rounded-lg hover:bg-orange-600/90 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a 
                  href="#flow"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 text-white text-base font-medium rounded-lg hover:bg-white/5 transition-colors"
                >
                  See The Flow
                </a>
              </motion.div>
            </motion.div>

            {/* Right Content - Floating Cards */}
            <div className="relative hidden lg:block h-[500px]">
              <FloatingCard 
                delay={0.3} 
                className="absolute top-0 right-0 w-72 p-6 bg-white rounded-2xl shadow-xl border border-gray-200"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Traditional</p>
                    <p className="text-xl font-serif text-gray-900">Unchanged</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Legal registration & closing processes stay the same</p>
              </FloatingCard>

              <FloatingCard 
                delay={0.5} 
                className="absolute top-32 left-0 w-64 p-5 bg-gray-900 rounded-2xl shadow-xl border border-gray-700"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Layers className="h-5 w-5 text-orange-500" />
                  <span className="text-white font-medium">Modern Layer</span>
                </div>
                <p className="text-sm text-gray-400">Adds operational efficiency without disrupting existing workflows</p>
              </FloatingCard>

              <FloatingCard 
                delay={0.7} 
                className="absolute bottom-20 right-10 w-56 p-5 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-xl"
              >
                <div className="text-white">
                  <p className="text-sm opacity-80">Processing Time</p>
                  <p className="text-3xl font-serif mt-1">-60%</p>
                  <p className="text-sm opacity-80 mt-2">Manual reconciliation reduced</p>
                </div>
              </FloatingCard>

              <FloatingCard 
                delay={0.9} 
                className="absolute bottom-0 left-10 w-48 p-4 bg-white rounded-xl shadow-lg border border-gray-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Shield className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Security</p>
                    <p className="font-medium text-gray-900">Permissioned</p>
                  </div>
                </div>
              </FloatingCard>
            </div>
          </div>
        </div>
      </section>

      {/* What Exists vs What Covantra Adds - Bento Style */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className=" mb-12 md:mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
              Building on <span className="italic">what works</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              We enhance existing processes without replacing them
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* What Exists Today */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-3xl transform -rotate-1 group-hover:rotate-0 transition-transform" />
              <div className="relative p-8 md:p-10 bg-white rounded-3xl border border-gray-200 shadow-sm">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
                  <CheckCircle2 className="h-4 w-4" />
                  What exists today
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-gray-900 mb-6">
                  Traditional processes remain unchanged
                </h3>
                <ul className="space-y-5">
                  {existsToday.map((item, index) => (
                    <motion.li 
                      key={index} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="mt-1 p-1 rounded-full bg-green-100 flex-shrink-0">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 text-lg">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* What Covantra Adds */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-600/5 rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform" />
              <div className="relative p-8 md:p-10 bg-white rounded-3xl border border-gray-200 shadow-sm">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
                  <Zap className="h-4 w-4" />
                  What Covantra adds
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-gray-900 mb-6">
                  Modern administration layer
                </h3>
                <ul className="space-y-5">
                  {covantraAdds.map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="mt-2 w-3 h-3 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Covantra Flow - Enhanced Cards */}
      <section id="flow" className="py-16 md:py-24 px-6 md:px-10 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="  mb-12 md:mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
              The Covantra <span className="italic">flow</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              A simple progression from traditional origination to modern reporting.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {flow.map((item, index) => {
                const Icon = item.Icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-100 transform rotate-2 group-hover:rotate-1 transition-all" />
                    <div className="relative p-6 md:p-8 rounded-2xl bg-white border border-gray-200 group-hover:border-transparent transition-all shadow-sm group-hover:shadow-xl">
                      <div className="flex items-center justify-between mb-5">
                        <span className="font-serif text-4xl md:text-5xl text-orange-500/30 group-hover:text-orange-500/50 transition-colors">{item.step}</span>
                        <div className="p-3 rounded-xl bg-gray-100 group-hover:bg-orange-100 transition-colors">
                          <Icon className="h-5 w-5 text-gray-700 group-hover:text-orange-600 transition-colors" />
                        </div>
                      </div>
                      <h4 className="font-medium text-gray-900 text-lg mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Split Design */}
      <section className=" bg-[#faf8f5] text-black overflow-hidden">
       
        <div className="relative  px-6 md:px-10 py-16 md:py-20 lg:py-28">
          <div className=" items-center justify-center flex flex-col ">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-center text-3xl md:text-4xl lg:text-5xl text-black font-normal tracking-tight">
                Ready to 
                <span className="italic ml-3 text-orange-400">learn more?</span>
              </h2>
              <p className="mt-4 md:mt-6 mb-7 text-center text-base md:text-lg text-gray-900 max-w-md">
                Whether you're a borrower or investor, we'd be happy to discuss how this works.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 lg:justify-end"
            >
              <a 
                href="/contact"
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-orange-600 text-white text-base md:text-lg font-medium rounded-lg hover:bg-orange-600/90 transition-colors"
              >
                Submit a Scenario
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="/investors"
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 border-2 border-black text-black text-base md:text-lg font-medium rounded-lg hover:bg-white/5 transition-colors"
              >
                Request Early Access
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}