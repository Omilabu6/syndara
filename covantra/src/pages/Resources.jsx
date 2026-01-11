import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { 
  BookOpen, 
  ArrowRight, 
  GraduationCap, 
  Users, 
  FileText,
  Lightbulb,
  TrendingUp,
  Building2,
  Percent,
  Scale
} from "lucide-react";



const categories = [
  { id: "all", label: "All Resources" },
  { id: "borrower", label: "Borrower Guides" },
  { id: "investor", label: "Investor Guides" },
  { id: "education", label: "Education" },
  { id: "glossary", label: "Glossary" },
];

const resources = [
  {
    title: "Mortgage renewals: what to review before signing",
    category: "borrower",
    categoryLabel: "Borrower Guide",
    description: "Key considerations when your mortgage term is ending. Learn what to look for and questions to ask.",
    icon: FileText,
    featured: true,
    readTime: "8 min read",
  },
  {
    title: "Breaking a mortgage early: penalties and options",
    category: "borrower",
    categoryLabel: "Borrower Guide",
    description: "Understanding the costs and alternatives when you need to exit early.",
    icon: Scale,
    featured: false,
    readTime: "6 min read",
  },
  {
    title: "Construction financing gaps: what borrowers can do",
    category: "borrower",
    categoryLabel: "Borrower Guide",
    description: "Options when traditional construction financing falls short.",
    icon: Building2,
    featured: false,
    readTime: "5 min read",
  },
  {
    title: "Private vs bank financing: when each fits",
    category: "education",
    categoryLabel: "Education",
    description: "Comparing traditional bank lending with private mortgage solutions. A comprehensive breakdown.",
    icon: Lightbulb,
    featured: true,
    readTime: "10 min read",
  },
  {
    title: "Rate environment education and planning",
    category: "education",
    categoryLabel: "Education",
    description: "Understanding how rate changes impact your mortgage strategy.",
    icon: TrendingUp,
    featured: false,
    readTime: "7 min read",
  },
  {
    title: "What servicing means and why it matters",
    category: "investor",
    categoryLabel: "Investor Guide",
    description: "The operational side of mortgage management explained clearly.",
    icon: Users,
    featured: false,
    readTime: "5 min read",
  },
  {
    title: "Key terms: LTV, refinance, term-out, participation",
    category: "glossary",
    categoryLabel: "Glossary",
    description: "Definitions of common mortgage and investment terminology.",
    icon: BookOpen,
    featured: false,
    readTime: "4 min read",
  },
  {
    title: "Understanding participation structures",
    category: "investor",
    categoryLabel: "Investor Guide",
    description: "How syndicated mortgage investments work and what to look for.",
    icon: Percent,
    featured: true,
    readTime: "12 min read",
  },
];

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredResources = activeCategory === "all" 
    ? resources 
    : resources.filter(r => r.category === activeCategory);

  const featuredResources = filteredResources.filter(r => r.featured);
  const regularResources = filteredResources.filter(r => !r.featured);

  return (
    <div className="data-scroll-section bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-[2px] bg-orange-600" />
              <span className="text-sm font-medium text-orange-600 uppercase tracking-wider">
                Knowledge Base
              </span>
            </motion.div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal leading-tight text-gray-900">
              Resources
            </h1>
            
            <p className="mt-6 text-xl text-gray-600 max-w-xl leading-relaxed">
              Practical guides for borrowers and investors. Clear explanations in plain language.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-wrap gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Resources */}
      {featuredResources.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {featuredResources.map((resource, index) => {
                  const Icon = resource.icon;
                  return (
                    <motion.article
                      key={resource.title}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`group relative overflow-hidden rounded-3xl bg-gray-900 p-8 md:p-10 cursor-pointer hover:shadow-2xl transition-shadow ${
                        index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                      }`}
                    >
                      {/* Background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Content */}
                      <div className="relative h-full flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/70 text-xs font-medium">
                            <GraduationCap className="h-3.5 w-3.5" />
                            {resource.categoryLabel}
                          </span>
                          <span className="text-white/50 text-sm">
                            {resource.readTime}
                          </span>
                        </div>

                        <div className="flex-1">
                          <div className="p-4 rounded-2xl bg-white/10 w-fit mb-6 group-hover:bg-orange-600/20 transition-colors">
                            <Icon className="h-8 w-8 text-white" />
                          </div>

                          <h2 className={`font-serif text-white leading-tight mb-4 ${
                            index === 0 ? "text-3xl md:text-4xl" : "text-2xl"
                          }`}>
                            {resource.title}
                          </h2>
                          
                          <p className="text-white/60 leading-relaxed">
                            {resource.description}
                          </p>
                        </div>

                        <div className="mt-8 flex items-center gap-2 text-orange-500 group-hover:gap-4 transition-all">
                          <span className="font-medium">Read article</span>
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      )}

      {/* Regular Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="font-serif text-2xl md:text-3xl text-gray-900">
              All <span className="italic">articles</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid md:grid-cols-2 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {regularResources.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <motion.article
                    key={resource.title}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group relative p-6 md:p-8 rounded-2xl bg-white border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer"
                  >
                    <div className="flex gap-5">
                      <div className="shrink-0">
                        <div className="p-3 rounded-xl bg-gray-100 group-hover:bg-orange-100 transition-colors">
                          <Icon className="h-6 w-6 text-gray-900 group-hover:text-orange-600 transition-colors" />
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {resource.categoryLabel}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-gray-300" />
                          <span className="text-xs text-gray-500">
                            {resource.readTime}
                          </span>
                        </div>

                        <h3 className="font-serif text-xl text-gray-900 group-hover:text-orange-600 transition-colors leading-tight mb-2">
                          {resource.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {resource.description}
                        </p>
                      </div>

                      <div className="shrink-0 self-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="h-5 w-5 text-orange-600" />
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gray-900 p-10 md:p-16">
            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-orange-600/10 blur-2xl" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-orange-600/5 blur-3xl" />
            
            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                  Have a scenario you'd like{" "}
                  <span className="italic text-orange-500">explained?</span>
                </h2>
                <p className="mt-4 text-white/60 text-lg max-w-md">
                  We're always adding new resources. Send us your questions and we'll create guides that help.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:text-right"
              >
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Submit a Topic
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}