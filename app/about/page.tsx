"use client";

import { Suspense, lazy } from "react";
import LoadingSpinner from "@/components/ui/loading-spinner";

// Lazily load components
const Header = lazy(() => import("@/components/layout/header"));
const Footer = lazy(() => import("@/components/layout/footer"));
const AboutHero = lazy(() => import("@/components/pages/about/about-hero"));
const OurStory = lazy(() => import("@/components/pages/about/our-story"));
const OurValues = lazy(() => import("@/components/pages/about/our-values"));
const TeamSection = lazy(() => import("@/components/pages/about/team-section"));
const ContactSection = lazy(() => import("@/components/sections/contact-section"));

export default function AboutPage() {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Header />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <AboutHero />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <OurStory />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <OurValues />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <TeamSection />
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