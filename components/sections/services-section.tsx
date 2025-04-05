"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiMonitor, FiSmartphone, FiCloud, FiDatabase, FiLayout, FiCode } from "react-icons/fi";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Service {
  id: string;
  icon: React.ComponentType;
  title: string;
  description: string;
  link: string;
  delay: number;
}

const services: Service[] = [
  {
    id: "web-development",
    icon: FiMonitor,
    title: "Web Development",
    description: "Custom web applications built with modern technologies like React, Next.js, and Node.js.",
    link: "/services/web-development",
    delay: 0.2,
  },
  {
    id: "mobile-development",
    icon: FiSmartphone,
    title: "Mobile App Development",
    description: "Cross-platform and native mobile applications for iOS and Android devices.",
    link: "/services/mobile-development",
    delay: 0.3,
  },
  {
    id: "cloud-solutions",
    icon: FiCloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and solutions using AWS, Azure, and Google Cloud.",
    link: "/services/cloud-solutions",
    delay: 0.4,
  },
  {
    id: "data-services",
    icon: FiDatabase,
    title: "Data Services",
    description: "Data analytics, machine learning, and AI solutions to drive business insights.",
    link: "/services/data-services",
    delay: 0.5,
  },
  {
    id: "ui-ux-design",
    icon: FiLayout,
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive and engaging digital experiences.",
    link: "/services/ui-ux-design",
    delay: 0.6,
  },
  {
    id: "devops",
    icon: FiCode,
    title: "DevOps Services",
    description: "Streamlined development operations with CI/CD pipelines and automated testing.",
    link: "/services/devops",
    delay: 0.7,
  },
];

interface ServiceCardProps {
  service: Service;
  isInView: boolean;
}

const ServiceCard = ({ service, isInView }: ServiceCardProps) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: service.delay }}
      className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 inline-block mb-4">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
        {service.title}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        {service.description}
      </p>
      <Link
        href={service.link}
        className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
      >
        Learn more
        <svg
          className="ml-1 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </motion.div>
  );
};

export default function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section
      ref={ref}
      className={cn(
        "py-16 md:py-24 bg-slate-50 dark:bg-slate-800",
        "transition-opacity duration-1000",
        isInView ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 mb-5 text-sm font-medium rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-2 mb-6"
          >
            Complete <span className="gradient-text">Tech Solutions</span> for Your Business
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            We offer a comprehensive range of services to help businesses 
            digitize their operations, enhance customer experiences, and drive growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}