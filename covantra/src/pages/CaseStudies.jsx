import { motion } from "framer-motion";
import { Building2, Wallet, Clock, ArrowRight, MapPin, TrendingUp, Menu, X } from "lucide-react";
import { useState } from "react";
import Navbar from '../components/Navbar';

const caseStudies = [
  {
    icon: Building2,
    title: "Multi-family financing",
    location: "Edmonton, Alberta",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    description:
      "Public posts reference financing of a 42-unit property in Edmonton, Alberta.",
    improvement:
      "Consistent participation reporting and standardized servicing operations.",
    stat: "42",
    statLabel: "Units",
  },
  {
    icon: Wallet,
    title: "Structured consolidation",
    location: "Calgary, Alberta",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    description:
      "Public posts reference a syndicated loan of $602,000 for debt consolidation in Calgary.",
    improvement:
      "Clearer allocation logic and statement generation.",
    stat: "$602K",
    statLabel: "Syndicated",
  },
  {
    icon: Clock,
    title: "Construction refinance",
    location: "Various locations",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
    description:
      "Public posts discuss cases where traditional construction financing falls short and refinancing is needed.",
    improvement:
      "Cleaner workflows across time-sensitive files.",
    stat: "15",
    statLabel: "Days avg.",
  },
];

const CaseStudies = () => {
  return (
    <div className="data-scroll-section bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop"
            alt="Urban development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600/20 text-orange-500 text-sm font-medium mb-6"
              >
                <TrendingUp className="h-4 w-4" />
                Real-world examples
              </motion.div>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
                Case Studies
              </h1>

              <p className="mt-6 text-lg md:text-xl text-white/70 max-w-lg leading-relaxed">
                Every scenario is different. These examples are shared at a high level
                to protect privacy while demonstrating our approach.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors"
                >
                  Submit a Scenario
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a 
                  href="#cases" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white rounded-lg font-medium border border-white/20 hover:bg-white/20 transition-colors"
                >
                  View Cases
                </a>
              </motion.div>
            </motion.div>

            {/* Right - Stats Cards */}
            <div className="hidden lg:block">
              <div className="relative h-[400px]">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-0 right-0 p-6 bg-white rounded-2xl shadow-2xl border border-gray-200 w-64"
                >
                  <p className="text-5xl font-serif text-orange-600">$175M+</p>
                  <p className="text-sm text-gray-600 mt-2">Total Funded</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-32 left-0 p-5 bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 w-56"
                >
                  <p className="text-3xl font-serif text-white">50+</p>
                  <p className="text-sm text-white/70 mt-1">Projects Completed</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="absolute bottom-0 right-16 p-5 bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl shadow-2xl w-48"
                >
                  <p className="text-3xl font-serif text-white">98%</p>
                  <p className="text-sm text-white/80 mt-1">Success Rate</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="cases" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
              Featured <span className="italic">scenarios</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Explore how we've helped structure and manage complex financing situations.
            </p>
          </motion.div>

          <div className="space-y-12 md:space-y-16">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div
                    className={`grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center ${
                      !isEven ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Image */}
                    <div className={`relative overflow-hidden rounded-2xl ${!isEven ? "lg:order-2" : ""}`}>
                      <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                        <img
                          src={study.image}
                          alt={study.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      {/* Floating stat card */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="absolute -bottom-4 -right-4 md:bottom-4 md:right-4 p-4 md:p-5 bg-orange-600 rounded-xl shadow-xl"
                      >
                        <p className="text-2xl md:text-3xl font-serif text-white">{study.stat}</p>
                        <p className="text-xs md:text-sm text-white/80">{study.statLabel}</p>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className={`py-4 ${!isEven ? "lg:order-1" : ""}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-gray-100">
                          <Icon className="h-6 w-6 text-gray-900" />
                        </div>
                        <span className="flex items-center gap-1.5 text-sm text-gray-600">
                          <MapPin className="h-4 w-4" />
                          {study.location}
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl md:text-3xl text-gray-900 mb-4">
                        {study.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed mb-4">
                        {study.description}
                      </p>

                      <div className="p-4 rounded-xl bg-orange-50 border border-orange-200">
                        <p className="text-sm font-medium text-orange-600">What Covantra improves:</p>
                        <p className="text-gray-900 mt-1">{study.improvement}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-7xl  mx-auto">
          <div className="">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-center text-3xl md:text-4xl lg:text-5xl text-gray-900 font-normal">
                Have a similar
                <span className="italic ml-3 text-orange-600">scenario?</span>
              </h2>
              <p className="mt-4 text-center md:mt-6 text-lg text-gray-600 ">
                We're happy to discuss what's realistic and outline next steps for
                your specific situation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 lg:justify-center mt-8"
            >
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
              >
                Submit a Scenario
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/contact?type=investor"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-white text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Request Early Access
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;