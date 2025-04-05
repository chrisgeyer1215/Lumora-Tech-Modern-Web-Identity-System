"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatProps {
  number: string;
  label: string;
  delay: number;
}

const Stat = ({ number, label, delay }: StatProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="text-center"
  >
    <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
      {number}
    </div>
    <div className="text-slate-600 dark:text-slate-400">{label}</div>
  </motion.div>
);

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const stats = [
    { number: "10+", label: "Years Experience", delay: 0.2 },
    { number: "250+", label: "Projects Completed", delay: 0.4 },
    { number: "100+", label: "Happy Clients", delay: 0.6 },
    { number: "30+", label: "Team Members", delay: 0.8 },
  ];

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
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              {/* Replace with actual image */}
              <div className="aspect-video w-full bg-gradient-to-br from-primary-500 to-secondary-600 rounded-2xl">
                <div className="flex items-center justify-center h-full text-white text-2xl font-bold">
                  About Anvitha Tech
                </div>
              </div>
            </motion.div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-1/2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.div variants={itemVariants}>
                <span className="inline-block px-3 py-1 mb-5 text-sm font-medium rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                  About Us
                </span>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="heading-2 mb-6"
              >
                We Transform <span className="gradient-text">Ideas</span> Into Impactful Digital Solutions
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-lg text-slate-600 dark:text-slate-400 mb-6"
              >
                Founded in 2015, Anvitha Technologies has grown from a small tech startup to a leading digital transformation partner for businesses worldwide. Our mission is to empower organizations with innovative technology solutions that drive growth and efficiency.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-lg text-slate-600 dark:text-slate-400 mb-8"
              >
                We combine technical expertise with strategic thinking to deliver solutions that solve real business challenges. Our agile development approach ensures we deliver high-quality solutions on time and within budget.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-10"
              >
                {stats.map((stat) => (
                  <Stat
                    key={stat.label}
                    number={stat.number}
                    label={stat.label}
                    delay={stat.delay}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}