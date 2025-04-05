"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface TechCategory {
  title: string;
  items: string[];
}

const techStack: TechCategory[] = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Redux",
      "Vue.js",
      "Angular",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express",
      "NestJS",
      "Django",
      "Ruby on Rails",
      "Spring Boot",
      "FastAPI",
      "Laravel",
    ],
  },
  {
    title: "Mobile",
    items: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Ionic",
      "Xamarin",
      "Capacitor",
      "Android SDK",
    ],
  },
  {
    title: "Database",
    items: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Firebase",
      "DynamoDB",
      "Supabase",
      "Prisma",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Jenkins",
      "Terraform",
    ],
  },
];

interface TechItemProps {
  item: string;
  index: number;
  isInView: boolean;
}

const TechItem = ({ item, index, isInView }: TechItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
    className="bg-white dark:bg-slate-800 rounded-lg px-4 py-2 shadow hover:shadow-md transition-shadow"
  >
    {item}
  </motion.div>
);

interface TechCategoryComponentProps {
  category: TechCategory;
  isInView: boolean;
  index: number;
}

const TechCategoryComponent = ({ 
  category, 
  isInView, 
  index 
}: TechCategoryComponentProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
    className="mb-10"
  >
    <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
      {category.title}
    </h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {category.items.map((item, idx) => (
        <TechItem 
          key={item} 
          item={item} 
          index={idx} 
          isInView={isInView} 
        />
      ))}
    </div>
  </motion.div>
);

export default function TechStackSection() {
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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 mb-5 text-sm font-medium rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
          >
            Our Technology Stack
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-2 mb-6"
          >
            Cutting-Edge <span className="gradient-text">Technologies</span> We Use
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            We stay up-to-date with the latest technologies to deliver 
            high-performance, scalable, and future-proof solutions for our clients.
          </motion.p>
        </div>

        <div className="space-y-8">
          {techStack.map((category, index) => (
            <TechCategoryComponent
              key={category.title}
              category={category}
              isInView={isInView}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}