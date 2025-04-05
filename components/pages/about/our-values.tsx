"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  FiTarget, 
  FiStar, 
  FiUsers, 
  FiTrendingUp, 
  FiCode, 
  FiHeart
} from "react-icons/fi";

interface Value {
  icon: React.ComponentType;
  title: string;
  description: string;
  color: string;
}

const values: Value[] = [
  {
    icon: FiTarget,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from code quality to client communication.",
    color: "bg-blue-500",
  },
  {
    icon: FiStar,
    title: "Innovation",
    description: "We embrace new technologies and methodologies to deliver innovative solutions.",
    color: "bg-purple-500",
  },
  {
    icon: FiUsers,
    title: "Collaboration",
    description: "We believe in the power of teamwork and collaborative problem-solving.",
    color: "bg-green-500",
  },
  {
    icon: FiTrendingUp,
    title: "Growth",
    description: "We are committed to continuous learning and professional growth.",
    color: "bg-yellow-500",
  },
  {
    icon: FiCode,
    title: "Craftsmanship",
    description: "We take pride in our technical craftsmanship and attention to detail.",
    color: "bg-red-500",
  },
  {
    icon: FiHeart,
    title: "Integrity",
    description: "We operate with honesty, transparency, and strong ethical principles.",
    color: "bg-indigo-500",
  },
];

export default function OurValues() {
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
            Core Values
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-2 mb-6"
          >
            The <span className="gradient-text">Principles</span> That Guide Us
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            Our values form the foundation of our company culture and guide our decisions, 
            actions, and interactions with clients and each other.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start">
                  <div className={cn("p-3 rounded-lg text-white", value.color)}>
                    <Icon size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-slate-600 dark:text-slate-400">
            <span className="font-semibold text-slate-900 dark:text-white">Our Mission:</span> To empower businesses with innovative technology solutions that drive growth, efficiency, and success in the digital age.
          </p>
        </motion.div>
      </div>
    </section>
  );
}