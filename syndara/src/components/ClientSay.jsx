import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'

const ClientSay = () => {
  return (
    <div>
     {/* Client Values Section */}
      <section className="relative py-16 md:py-24 lg:py-32 px-6 md:px-10 lg:px-15 bg-[#faf8f5] overflow-hidden">
        <div className="container mx-auto max-w-7xl">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight text-gray-900 mb-8 md:mb-12">
                Crafted for
                <br />
                <span className='md:ml-20'>the discerning</span>
              </h2>
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/green.jpg"
                alt="Network visualization"
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl"
            >
              
              <p className="text-base md:text-lg leading-relaxed text-gray-900 mb-8 md:mb-10">
                For clients who value expertise, your mortgage journey is not just about rates — it's about strategy. We provide clarity, structure complex scenarios, and execute with precision. From the first consultation to closing, every detail is handled with discretion and care.
              </p>
              <a href="/about">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 border-2 border-gray-900 text-gray-900 font-medium rounded-sm hover:bg-gray-900 hover:text-white transition-all duration-300"
                >
                    <ArrowDown className="h-4 w-4" />
                    LEARN MORE
                </motion.button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Final CTA */}
      <section className="bg-[#faf8f5] py-16 md:py-20 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.h2
                className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-gray-900"
                animate={{ 
                  textShadow: [
                    "0 0 0px transparent",
                    "0 0 30px hsl(24 100% 50% / 0.2)",
                    "0 0 0px transparent",
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Ready to start a conversation?
              </motion.h2>
              <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600">
                If you have a scenario, send it. We will tell you what is realistic and what the next
                steps are. If you want early investor access, request onboarding details.
              </p>
              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a 
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-gray-900 text-white text-base md:text-lg font-medium rounded-lg hover:bg-gray-900/90 transition-colors"
                  >
                    Submit a Scenario
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a 
                    href="/contact?type=investor"
                    className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white text-orange-600 border-2 border-orange-600 text-base md:text-lg font-medium rounded-lg hover:bg-orange-100 transition-colors"
                  >
                    Request Early Access
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ClientSay