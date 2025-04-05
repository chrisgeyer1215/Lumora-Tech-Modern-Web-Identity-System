"use client";

import { Suspense, lazy, useState } from "react";
import LoadingSpinner from "@/components/ui/loading-spinner";
import ParallaxSection from "@/components/ui/parallax-section";
import ThreeDCard from "@/components/ui/three-d-card";
import ImageGallery from "@/components/ui/image-gallery";
import { motion } from "framer-motion";

// Lazily load components
const Header = lazy(() => import("@/components/layout/header"));
const Footer = lazy(() => import("@/components/layout/footer"));

interface Category {
  id: string;
  name: string;
}

const categories: Category[] = [
  { id: "all", name: "All Work" },
  { id: "web", name: "Web Development" },
  { id: "mobile", name: "Mobile Apps" },
  { id: "ui", name: "UI/UX Design" },
  { id: "cloud", name: "Cloud Solutions" },
];

const featuredProjects = [
  {
    id: "project1",
    title: "E-commerce Platform",
    description: "A comprehensive e-commerce solution with advanced features like personalized recommendations and seamless checkout flow.",
    category: "web",
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: "project2",
    title: "Healthcare Mobile App",
    description: "An intuitive mobile application connecting patients with healthcare providers for virtual consultations and appointment management.",
    category: "mobile",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "project3",
    title: "Financial Dashboard",
    description: "A data-rich financial analytics dashboard with real-time visualization and predictive analytics capabilities.",
    category: "web",
    color: "from-green-500 to-teal-400",
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

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
              Our Portfolio
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="heading-1 mb-6"
            >
              Showcasing Our <span className="gradient-text">Creative Work</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto"
            >
              Browse through our collection of projects that showcase our expertise in web development, 
              mobile apps, UI/UX design, and cloud solutions.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Featured Projects with 3D Effect */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="container">
          <div className="mb-16 max-w-3xl">
            <h2 className="heading-2 mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              These are some of our top projects that represent the quality and innovation we bring to every client engagement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ThreeDCard
                key={project.id}
                className="h-[300px] rounded-xl shadow-md"
                rotationIntensity={10}
              >
                <div className={`w-full h-full rounded-xl p-6 bg-gradient-to-br ${project.color} flex flex-col justify-end`}>
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-white/80">{project.description}</p>
                  <div className="mt-4">
                    <button className="bg-white/20 hover:bg-white/30 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors">
                      View Project
                    </button>
                  </div>
                </div>
              </ThreeDCard>
            ))}
          </div>
        </div>
      </section>
      
      {/* Project Gallery */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-800">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <h2 className="heading-2 mb-6">
              Project <span className="gradient-text">Gallery</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              Explore our diverse range of projects across different industries and technologies.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    activeCategory === category.id
                      ? "bg-primary-600 text-white"
                      : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          <ImageGallery 
            type="masonry"
            columns={3}
            gap="medium"
            imageCount={12}
            withLightbox={true}
          />
        </div>
      </section>
      
      {/* Call to Action */}
      <ParallaxSection direction="up" intensity={0.2}>
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Let's discuss how we can help bring your vision to life with our expertise in design and development.
            </p>
            <div className="flex justify-center gap-4">
              <motion.a
                href="/contact"
                className="bg-white text-primary-600 hover:bg-white/90 px-8 py-3 rounded-lg font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="/services"
                className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Services
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