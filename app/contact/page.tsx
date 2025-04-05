"use client";

import { Suspense, lazy } from "react";
import LoadingSpinner from "@/components/ui/loading-spinner";

// Lazily load components
const Header = lazy(() => import("@/components/layout/header"));
const Footer = lazy(() => import("@/components/layout/footer"));
const ContactHero = lazy(() => import("@/components/pages/contact/contact-hero"));
const ContactForm = lazy(() => import("@/components/pages/contact/contact-form"));
const ContactInfo = lazy(() => import("@/components/pages/contact/contact-info"));
const Faq = lazy(() => import("@/components/pages/contact/faq"));

export default function ContactPage() {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Header />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <ContactHero />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <div className="py-16 md:py-24 bg-white dark:bg-slate-900">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              <div className="lg:col-span-3">
                <ContactForm />
              </div>
              <div className="lg:col-span-2">
                <ContactInfo />
              </div>
            </div>
          </div>
        </div>
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Faq />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </>
  );
}