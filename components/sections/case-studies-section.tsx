"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  category: string;
  link: string;
  imagePlaceholder: string;
  delay: number;
}

const caseStudies: CaseStudy[] = [
  {
    id: "fintech-app",
    title: "FinTech Mobile App",
    description: "Developed a secure and user-friendly mobile banking application with advanced features.",
    category: "Mobile Development",
    link: "/case-studies/fintech-app",
    imagePlaceholder: "bg-gradient-to-br from-blue-500 to-cyan-400",
    delay: 0.2,
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "Built a scalable e-commerce platform with advanced product recommendations and personalization.",
    category: "Web Development",
    link: "/case-studies/ecommerce-platform",
    imagePlaceholder: "bg-gradient-to-br from-purple-500 to-pink-500",
    delay: 0.3,
  },
  {
    id: "healthcare-analytics",
    title: "Healthcare Analytics",
    description: "Created a data analytics platform for healthcare providers to improve patient outcomes.",
    category: "Data & AI",
    link: "/case-studies/healthcare-analytics",
    imagePlaceholder: "bg-gradient-to-br from-green-500 to-teal-400",
    delay: 0.4,
  },
];

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  isInView: boolean;
}

const CaseStudyCard = ({ caseStudy, isInView }: CaseStudyCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
    transition={{ duration: 0.5, delay: caseStudy.delay }}
    className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
  >
    <div className="h-52 w-full overflow-hidden">
      <div className={cn("w-full h-full", caseStudy.imagePlaceholder)}>
        <div className="h-full w-full flex items-center justify-center text-white font-semibold text-xl">
          {caseStudy.title}
        </div>
      </div>
    </div>
    <div className="p-6">
      <div className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-2">
        {caseStudy.category}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
        {caseStudy.title}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        {caseStudy.description}
      </p>
      <Link
        href={caseStudy.link}
        className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
      >
        View Case Study
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
    </div>
  </motion.div>
);

export default function CaseStudiesSection() {
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
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 py-1 mb-5 text-sm font-medium rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
            >
              Case Studies
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="heading-2 mb-6"
            >
              Our <span className="gradient-text">Success Stories</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-600 dark:text-slate-400"
            >
              Explore how we've helped businesses transform their digital presence 
              and achieve tangible results.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 md:mt-0"
          >
            <Link
              href="/case-studies"
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors"
            >
              View All Case Studies
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard
              key={caseStudy.id}
              caseStudy={caseStudy}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}