"use client";

import { Suspense, lazy } from "react";
import LoadingSpinner from "@/components/ui/loading-spinner";
import ParallaxSection from "@/components/ui/parallax-section";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Lazily load components
const Header = lazy(() => import("@/components/layout/header"));
const Footer = lazy(() => import("@/components/layout/footer"));

// Case studies data
const caseStudies = [
  {
    id: "fintech-dashboard",
    title: "Enterprise FinTech Dashboard Redesign",
    description: "Modernizing a legacy financial platform with improved UX and performance metrics",
    industry: "Financial Services",
    services: ["UI/UX Design", "Frontend Development", "Performance Optimization"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    results: [
      "42% increase in user engagement",
      "65% reduction in load time",
      "89% positive feedback from user testing"
    ]
  },
  {
    id: "healthcare-app",
    title: "Patient-Centered Healthcare Application",
    description: "Building a HIPAA-compliant mobile solution for patient management and telehealth services",
    industry: "Healthcare",
    services: ["Mobile Development", "API Integration", "Security Compliance"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    results: [
      "30% reduction in administrative workload",
      "95% patient satisfaction rate",
      "22% increase in appointment completions"
    ]
  },
  {
    id: "ecommerce-platform",
    title: "Global E-commerce Platform Migration",
    description: "Seamlessly transitioning a major retailer to a scalable, microservices-based architecture",
    industry: "Retail",
    services: ["Cloud Migration", "Microservices Architecture", "DevOps Implementation"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    results: [
      "300% improvement in scalability during peak seasons",
      "52% reduction in infrastructure costs",
      "99.99% uptime since deployment"
    ]
  },
  {
    id: "manufacturing-iot",
    title: "Smart Manufacturing IoT Solution",
    description: "Implementing IoT sensors and real-time analytics to optimize production workflows",
    industry: "Manufacturing",
    services: ["IoT Integration", "Real-time Analytics", "Custom Dashboard Development"],
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3297dee6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    results: [
      "27% increase in production efficiency",
      "35% reduction in maintenance costs",
      "18% improvement in product quality metrics"
    ]
  }
];

export default function CaseStudiesPage() {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Header />
      </Suspense>
      
      {/* Hero Section with Parallax */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 relative">
        <ParallaxSection 
          className="absolute inset-0 z-0" 
          direction="up" 
          intensity={0.3}
        >
          <div className="absolute top-20 right-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary-500/10 rounded-full blur-3xl" />
        </ParallaxSection>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 py-1 mb-5 text-sm font-medium rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
            >
              Case Studies
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="heading-1 mb-6"
            >
              Our <span className="gradient-text">Success Stories</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto"
            >
              Explore how we've helped businesses across various industries solve complex challenges
              and achieve outstanding results through innovative technology solutions.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Case Studies List */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="container">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div 
                key={study.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12`}
              >
                {/* Image */}
                <motion.div 
                  className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-xl"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative h-[300px] md:h-[400px] w-full">
                    <Image 
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
                
                {/* Content */}
                <motion.div 
                  className="w-full lg:w-1/2 flex flex-col justify-center"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                      {study.industry}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900 dark:text-white">
                    {study.title}
                  </h2>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    {study.description}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-sm uppercase tracking-wider text-slate-500 dark:text-slate-500 mb-2">Services</h3>
                    <div className="flex flex-wrap gap-2">
                      {study.services.map(service => (
                        <span 
                          key={service} 
                          className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-sm uppercase tracking-wider text-slate-500 dark:text-slate-500 mb-2">Results</h3>
                    <ul className="space-y-2">
                      {study.results.map(result => (
                        <li key={result} className="flex items-start text-slate-700 dark:text-slate-300">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium"
                    >
                      Read Full Case Study
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <ParallaxSection direction="up" intensity={0.2}>
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Become Our Next Success Story?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Let's discuss your business challenges and how our technology solutions can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href="/contact"
                className="bg-white text-primary-600 hover:bg-white/90 px-8 py-3 rounded-lg font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Project
              </motion.a>
              <motion.a
                href="/services"
                className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Services
              </motion.a>
            </div>
          </div>
        </section>
      </ParallaxSection>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </>
  );
}
