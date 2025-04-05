"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FiMonitor, FiSmartphone, FiCloud, FiDatabase, FiLayout, FiCode, FiPieChart, FiTrendingUp } from "react-icons/fi";
import { cn } from "@/lib/utils";

interface Service {
  id: string;
  icon: React.ComponentType;
  title: string;
  description: string;
  features: string[];
  color: string;
}

const services: Service[] = [
  {
    id: "web-development",
    icon: FiMonitor,
    title: "Web Development",
    description: "Custom web applications built with modern technologies that deliver exceptional user experiences.",
    features: [
      "Single Page Applications (SPAs)",
      "Progressive Web Apps (PWAs)",
      "E-commerce platforms",
      "Enterprise web applications",
      "Content Management Systems (CMS)",
      "API development & integration"
    ],
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: "mobile-development",
    icon: FiSmartphone,
    title: "Mobile App Development",
    description: "Cross-platform and native mobile applications that work seamlessly across all devices.",
    features: [
      "iOS and Android native apps",
      "Cross-platform development",
      "Mobile UI/UX design",
      "App performance optimization",
      "Wearable app development",
      "App maintenance & support"
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "cloud-solutions",
    icon: FiCloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and services that provide flexibility, security, and performance.",
    features: [
      "Cloud migration strategy",
      "AWS, Azure & GCP implementation",
      "Cloud-native application development",
      "Serverless architecture",
      "DevOps automation",
      "Cloud security & compliance"
    ],
    color: "from-indigo-500 to-blue-600",
  },
  {
    id: "data-services",
    icon: FiDatabase,
    title: "Data Services",
    description: "Comprehensive data solutions that transform raw data into valuable business insights.",
    features: [
      "Big data processing & analytics",
      "Business intelligence (BI)",
      "Data warehousing & ETL",
      "Predictive analytics",
      "Real-time data processing",
      "Custom dashboards & reporting"
    ],
    color: "from-green-500 to-teal-400",
  },
  {
    id: "ui-ux-design",
    icon: FiLayout,
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive and engaging digital experiences.",
    features: [
      "User research & personas",
      "Information architecture",
      "Wireframing & prototyping",
      "Visual design & branding",
      "Usability testing",
      "Design systems"
    ],
    color: "from-yellow-400 to-orange-500",
  },
  {
    id: "devops",
    icon: FiCode,
    title: "DevOps Services",
    description: "Streamlined development operations with CI/CD pipelines and automated testing.",
    features: [
      "CI/CD pipeline implementation",
      "Infrastructure as Code (IaC)",
      "Container orchestration",
      "Microservices architecture",
      "Performance monitoring",
      "Automated testing & deployment"
    ],
    color: "from-red-500 to-pink-600",
  },
  {
    id: "ai-ml",
    icon: FiPieChart,
    title: "AI & Machine Learning",
    description: "Advanced AI and ML solutions that automate processes and unlock new business opportunities.",
    features: [
      "Natural Language Processing",
      "Computer Vision",
      "Predictive modeling",
      "Recommendation systems",
      "Automated decision systems",
      "AI-powered chatbots"
    ],
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: "digital-strategy",
    icon: FiTrendingUp,
    title: "Digital Strategy",
    description: "Strategic technology consulting to help businesses navigate digital transformation.",
    features: [
      "Technology roadmapping",
      "Digital transformation",
      "IT architecture consulting",
      "Product strategy",
      "Technology stack assessment",
      "Security & compliance audits"
    ],
    color: "from-purple-600 to-indigo-600",
  },
];

export default function ServicesList() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <section
      id="services-list"
      ref={ref}
      className={cn(
        "py-16 md:py-24 bg-white dark:bg-slate-900",
        "transition-opacity duration-1000",
        isInView ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="heading-2 mb-6"
          >
            Our <span className="gradient-text">Service Offerings</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            We offer a comprehensive range of technology solutions designed to help businesses 
            innovate, grow, and succeed in today's competitive landscape.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeService === service.id;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                className={cn(
                  "bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300",
                  isActive && "ring-2 ring-primary-500"
                )}
                onClick={() => setActiveService(isActive ? null : service.id)}
              >
                <div className={cn("h-2 w-full bg-gradient-to-r", service.color)} />
                <div className="p-6">
                  <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 inline-block mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium">
                    <span>{isActive ? "Hide Details" : "View Details"}</span>
                    <svg
                      className={cn(
                        "ml-1 w-4 h-4 transition-transform duration-300",
                        isActive && "rotate-180"
                      )}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4"
                      >
                        <h4 className="font-medium text-slate-900 dark:text-white mb-2">
                          Key Features:
                        </h4>
                        <ul className="space-y-1 text-slate-600 dark:text-slate-400">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center">
                              <svg
                                className="w-4 h-4 mr-2 text-primary-500 dark:text-primary-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4">
                          <a
                            href={`/services/${service.id}`}
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
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}