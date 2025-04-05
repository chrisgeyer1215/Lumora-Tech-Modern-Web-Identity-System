"use client";

import { Suspense, lazy } from "react";
import LoadingSpinner from "@/components/ui/loading-spinner";
import ParallaxSection from "@/components/ui/parallax-section";
import ThreeDCard from "@/components/ui/three-d-card";

// Lazily load components
const Header = lazy(() => import("@/components/layout/header"));
const Footer = lazy(() => import("@/components/layout/footer"));
const HeroSection = lazy(() => import("@/components/sections/hero-section"));
const AboutSection = lazy(() => import("@/components/sections/about-section"));
const ServicesSection = lazy(() => import("@/components/sections/services-section"));
const TechStackSection = lazy(() => import("@/components/sections/tech-stack-section"));
const CaseStudiesSection = lazy(() => import("@/components/sections/case-studies-section"));
const TestimonialsSection = lazy(() => import("@/components/sections/testimonials-section"));
const ContactSection = lazy(() => import("@/components/sections/contact-section"));

// Featured technologies with 3D cards
const technologies = [
  {
    name: "Next.js",
    description: "React framework for production",
    color: "from-blue-500 to-cyan-400",
  },
  {
    name: "React",
    description: "JavaScript library for user interfaces",
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "TypeScript",
    description: "JavaScript with syntax for types",
    color: "from-purple-600 to-indigo-600",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework",
    color: "from-teal-500 to-green-400",
  },
];

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Header />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <HeroSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <AboutSection />
      </Suspense>
      
      {/* Enhanced services section with 3D cards */}
      <section className="py-12 bg-slate-50 dark:bg-slate-800">
        <div className="container">
          <h2 className="heading-2 mb-8 text-center">Our <span className="gradient-text">Tech Stack</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <ThreeDCard 
                key={tech.name} 
                className="h-52 rounded-xl"
                rotationIntensity={15}
                hoverScale={1.05}
              >
                <div className={`w-full h-full rounded-xl flex flex-col items-center justify-center p-6 bg-gradient-to-br ${tech.color}`}>
                  <h3 className="text-xl font-semibold text-white mb-2">{tech.name}</h3>
                  <p className="text-white/80 text-center">{tech.description}</p>
                </div>
              </ThreeDCard>
            ))}
          </div>
        </div>
      </section>
      
      <Suspense fallback={<LoadingSpinner />}>
        <ServicesSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <TechStackSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <CaseStudiesSection />
      </Suspense>
      
      {/* Testimonials with parallax effect */}
      <ParallaxSection direction="up" intensity={0.1}>
        <Suspense fallback={<LoadingSpinner />}>
          <TestimonialsSection />
        </Suspense>
      </ParallaxSection>
      
      <Suspense fallback={<LoadingSpinner />}>
        <ContactSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </>
  );
}