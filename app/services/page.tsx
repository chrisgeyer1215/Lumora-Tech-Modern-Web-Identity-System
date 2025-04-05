"use client";

import { Suspense, lazy } from "react";
import LoadingSpinner from "@/components/ui/loading-spinner";

// Lazily load components
const Header = lazy(() => import("@/components/layout/header"));
const Footer = lazy(() => import("@/components/layout/footer"));
const ServicesHero = lazy(() => import("@/components/pages/services/services-hero"));
const ServicesList = lazy(() => import("@/components/pages/services/services-list"));
const ProcessSection = lazy(() => import("@/components/pages/services/process-section"));
const TechStack = lazy(() => import("@/components/sections/tech-stack-section"));
const ContactSection = lazy(() => import("@/components/sections/contact-section"));

export default function ServicesPage() {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Header />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <ServicesHero />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <ServicesList />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <ProcessSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <TechStack />
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