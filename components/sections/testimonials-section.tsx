"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Testimonial {
  id: string;
  content: string;
  author: string;
  position: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    content: "Anvitha Technologies transformed our digital presence with a cutting-edge web application that greatly improved our customer engagement and operational efficiency. Their team was professional, responsive, and delivered beyond our expectations.",
    author: "Sarah Johnson",
    position: "CTO",
    company: "Nexus Innovations",
  },
  {
    id: "testimonial-2",
    content: "Working with Anvitha Tech on our mobile app was a game-changer for our business. Their expertise in UI/UX design and development resulted in an intuitive app that our customers love. The project was delivered on time and within budget.",
    author: "Michael Chen",
    position: "Product Director",
    company: "Elevate Solutions",
  },
  {
    id: "testimonial-3",
    content: "The cloud migration strategy implemented by Anvitha Technologies significantly improved our system performance and reduced our infrastructure costs by 40%. Their team's technical knowledge and attention to detail made the transition seamless.",
    author: "Alexandra Rodriguez",
    position: "IT Director",
    company: "Global Enterprises",
  },
  {
    id: "testimonial-4",
    content: "Anvitha Technologies helped us implement advanced data analytics capabilities that provided valuable insights into our customer behavior. This has directly contributed to a 25% increase in our conversion rates over the past six months.",
    author: "David Williams",
    position: "Marketing VP",
    company: "Spectrum Brands",
  },
];

export default function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 mb-5 text-sm font-medium rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-2 mb-6"
          >
            What Our <span className="gradient-text">Clients Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            Read what our clients have to say about their experience working with us
            and the impact our solutions have had on their businesses.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 md:p-10 shadow-md"
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl text-primary-500 mb-6">"</div>
                <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 italic mb-8">
                  {testimonials[activeIndex].content}
                </p>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {testimonials[activeIndex].author}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-colors",
                    index === activeIndex
                      ? "bg-primary-600 dark:bg-primary-500"
                      : "bg-slate-300 dark:bg-slate-600"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrow Navigation */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 -left-4 md:-left-10 -translate-y-1/2 w-10 h-10 bg-white dark:bg-slate-700 rounded-full shadow-md flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 -right-4 md:-right-10 -translate-y-1/2 w-10 h-10 bg-white dark:bg-slate-700 rounded-full shadow-md flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
              aria-label="Next testimonial"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}