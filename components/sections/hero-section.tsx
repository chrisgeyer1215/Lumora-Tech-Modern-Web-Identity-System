"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    } 
  }
};

interface AvatarProps {
  index: number;
}

const Avatar = ({ index }: AvatarProps) => (
  <div 
    key={index} 
    className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden"
  >
    <span className="text-xs font-medium">
      C{index}
    </span>
  </div>
);

// Create a TechIcon component for the floating tech elements
interface TechIconProps {
  emoji: string;
  className: string;
  animate: {
    x?: number[];
    y?: number[];
  };
  duration: number;
}

const TechIcon = ({ emoji, className, animate, duration }: TechIconProps) => (
  <motion.div
    className={`absolute bg-white dark:bg-slate-800 rounded-xl shadow-lg flex items-center justify-center ${className}`}
    animate={animate}
    transition={{
      duration,
      repeat: Infinity,
      repeatType: "reverse"
    }}
  >
    <span className="text-xl">{emoji}</span>
  </motion.div>
);

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const router = useRouter();

  // Prefetch route for performance improvement
  const handleGetStarted = () => {
    router.prefetch("/contact");
  };

  return (
    <section 
      ref={ref}
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"
          animate={isInView ? { 
            x: [0, 20, 0],
            y: [0, 30, 0],
          } : {}}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-72 h-72 bg-secondary-500/10 rounded-full blur-3xl"
          animate={isInView ? { 
            x: [0, -30, 0],
            y: [0, -20, 0],
          } : {}}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-xl"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-3 py-1 mb-5 text-sm font-medium rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                Innovative Technology Solutions
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="heading-1 mb-6"
            >
              <span className="block">Transforming Ideas into</span>
              <span className="gradient-text">Digital Excellence</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-slate-600 dark:text-slate-400 mb-8"
            >
              We build cutting-edge digital products that help businesses thrive in the modern world.
              From web and mobile applications to AI solutions and cloud infrastructure, we deliver technology
              that drives real results.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact" onMouseEnter={handleGetStarted}>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary px-6 py-3"
                >
                  Get Started
                </motion.button>
              </Link>
              <Link href="/services">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-outline px-6 py-3"
                >
                  Our Services
                </motion.button>
              </Link>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="mt-12 flex items-center space-x-6"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <Avatar key={i} index={i} />
                ))}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                <span className="font-medium text-slate-900 dark:text-white">100+</span> happy clients 
                worldwide
              </div>
            </motion.div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="relative w-full h-[400px] md:h-[500px] bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-900 z-0"></div>
              
              <div className="relative z-10 h-full w-full flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-block animate-float mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center text-white text-3xl font-bold transform rotate-12">
                      A
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Anvitha Technologies</h3>
                  <p className="text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
                    Innovative tech solutions that transform businesses
                  </p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <motion.div 
                className="absolute top-6 right-6 w-16 h-16 bg-secondary-500/20 rounded-full"
                animate={isInView ? { 
                  scale: [1, 1.2, 1],
                } : {}}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.div 
                className="absolute bottom-10 left-10 w-20 h-20 bg-primary-500/20 rounded-full"
                animate={isInView ? { 
                  scale: [1, 1.3, 1],
                } : {}}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </div>
            
            {/* Floating Tech Elements */}
            <TechIcon 
              emoji="⚛️"
              className="-top-10 -right-10 w-20 h-20"
              animate={{ y: [0, -10, 0] }}
              duration={3}
            />
            
            <TechIcon 
              emoji="📱"
              className="-bottom-8 -left-8 w-16 h-16"
              animate={{ y: [0, 10, 0] }}
              duration={4}
            />
            
            <TechIcon 
              emoji="☁️"
              className="top-1/2 -left-12 w-14 h-14"
              animate={{ x: [0, -10, 0] }}
              duration={3.5}
            />
            
            <TechIcon 
              emoji="🤖"
              className="bottom-20 -right-10 w-16 h-16"
              animate={{ x: [0, 10, 0] }}
              duration={4.5}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}