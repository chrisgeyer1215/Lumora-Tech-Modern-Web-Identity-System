"use client";

import { Suspense, lazy } from "react";
import LoadingSpinner from "@/components/ui/loading-spinner";

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
      
      <Suspense fallback={<LoadingSpinner />}>
        <ServicesSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <TechStackSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <CaseStudiesSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <TestimonialsSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <ContactSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </>
  );
}