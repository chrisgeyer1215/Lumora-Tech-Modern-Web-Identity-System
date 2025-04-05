"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description: "We start by understanding your business, goals, and requirements through in-depth consultations and research.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Based on our findings, we develop a comprehensive strategy and roadmap tailored to your specific needs and objectives.",
  },
  {
    number: "03",
    title: "Design",
    description: "Our designers create intuitive, user-centered interfaces and experiences that align with your brand and business goals.",
  },
  {
    number: "04",
    title: "Development",
    description: "Our expert developers bring the designs to life using modern technologies and best practices in software development.",
  },
  {
    number: "05",
    title: "Testing",
    description: "Rigorous testing ensures that your solution works flawlessly across all devices and scenarios.",
  },
  {
    number: "06",
    title: "Deployment",
    description: "We carefully deploy your solution to production, ensuring a smooth transition and minimal disruption.",
  },
  {
    number: "07",
    title: "Support",
    description: "Our relationship doesn't end at launch. We provide ongoing support, maintenance, and optimization services.",
  },
];

export default function ProcessSection() {
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
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 mb-5 text-sm font-medium rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
          >
            Our Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-2 mb-6"
          >
            How We <span className="gradient-text">Deliver Excellence</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            Our well-defined process ensures that we deliver high-quality solutions 
            that meet your business objectives and exceed expectations.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute top-0 bottom-0 left-0 md:left-1/2 w-px bg-slate-200 dark:bg-slate-700 transform md:translate-x-[-0.5px]"></div>
          
          <div className="space-y-12 md:space-y-0 relative">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={step.number} className="relative">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className={cn(
                      "md:w-1/2 p-6 mb-8 md:mb-24",
                      isEven ? "md:ml-auto" : "md:mr-auto"
                    )}
                  >
                    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md p-6">
                      <div className="flex items-start">
                        <div className="w-12 h-12 flex-shrink-0 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg flex items-center justify-center font-bold text-lg">
                          {step.number}
                        </div>
                        <div className="ml-4">
                          <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                            {step.title}
                          </h3>
                          <p className="text-slate-600 dark:text-slate-400">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Circle marker on timeline */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className={cn(
                      "absolute top-8 md:top-6 w-6 h-6 bg-primary-500 rounded-full z-10",
                      "border-4 border-white dark:border-slate-800",
                      "left-[-12px] md:left-1/2 md:transform md:-translate-x-1/2"
                    )}
                  ></motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}