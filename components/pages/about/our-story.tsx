"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface Milestone {
  year: string;
  title: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    year: "2015",
    title: "Foundation",
    description: "Anvitha Technologies was founded with a mission to deliver cutting-edge tech solutions to businesses of all sizes."
  },
  {
    year: "2017",
    title: "Early Growth",
    description: "Expanded our team to 10 members and opened our first dedicated office space in Silicon Valley."
  },
  {
    year: "2019",
    title: "International Expansion",
    description: "Opened our first international office and expanded our client base to Europe and Asia."
  },
  {
    year: "2021",
    title: "New Service Lines",
    description: "Launched our AI and Machine Learning division to help clients leverage advanced technologies."
  },
  {
    year: "2023",
    title: "Strategic Partnerships",
    description: "Formed strategic partnerships with leading tech companies to enhance our service offerings."
  },
  {
    year: "2025",
    title: "Today",
    description: "Now with over 30 team members across three continents, we continue to innovate and grow."
  },
];

export default function OurStory() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section
      ref={ref}
      className={cn(
        "py-16 md:py-24 bg-white dark:bg-slate-900",
        "transition-opacity duration-1000",
        isInView ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="inline-block px-3 py-1 mb-5 text-sm font-medium rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
              Our Journey
            </span>
            
            <h2 className="heading-2 mb-6">
              The <span className="gradient-text">Story</span> Behind Our Success
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              From humble beginnings to a global technology company, our journey has been defined by innovation, growth, and a relentless commitment to excellence.
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              Founded in 2015 by a small team of tech enthusiasts with a big vision, Anvitha Technologies has grown into a leading technology partner for businesses around the world.
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Throughout our journey, we've stayed true to our core values and mission: to help businesses leverage technology to achieve their goals and transform their operations.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute top-0 bottom-0 left-4 w-px bg-slate-200 dark:bg-slate-700"></div>
            
            <div className="space-y-10">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="relative pl-10"
                >
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center font-medium text-sm">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {milestone.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}