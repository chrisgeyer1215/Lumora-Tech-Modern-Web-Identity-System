"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { FiMail, FiPhone, FiMapPin, FiClock, FiGithub, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi";
import type { IconType } from "react-icons";

interface ContactInfoItem {
  icon: IconType;
  title: string;
  content: React.ReactNode;
  delay: number;
}

interface SocialLink {
  icon: IconType;
  href: string;
  label: string;
}

const contactInfoItems: ContactInfoItem[] = [
  {
    icon: FiMail,
    title: "Email",
    content: (
      <a
        href="mailto:contact@anvithatech.com"
        className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
      >
        contact@anvithatech.com
      </a>
    ),
    delay: 0.1,
  },
  {
    icon: FiPhone,
    title: "Phone",
    content: (
      <a
        href="tel:+1234567890"
        className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
      >
        +1 (234) 567-890
      </a>
    ),
    delay: 0.2,
  },
  {
    icon: FiMapPin,
    title: "Location",
    content: (
      <div>
        <p>123 Tech Street</p>
        <p>Silicon Valley, CA 94041</p>
        <p>United States</p>
      </div>
    ),
    delay: 0.3,
  },
  {
    icon: FiClock,
    title: "Business Hours",
    content: (
      <div>
        <p>Monday - Friday: 9am - 6pm</p>
        <p>Saturday: 10am - 4pm</p>
        <p>Sunday: Closed</p>
      </div>
    ),
    delay: 0.4,
  },
];

const socialLinks: SocialLink[] = [
  { icon: FiGithub, href: "https://github.com/anvitha-tech", label: "GitHub" },
  { icon: FiTwitter, href: "https://twitter.com/anvitha_tech", label: "Twitter" },
  { icon: FiLinkedin, href: "https://linkedin.com/company/anvitha-tech", label: "LinkedIn" },
  { icon: FiInstagram, href: "https://instagram.com/anvitha_tech", label: "Instagram" },
];

export default function ContactInfo() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <div 
      ref={ref} 
      className={cn(
        "transition-opacity duration-700",
        isInView ? "opacity-100" : "opacity-0"
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Contact Information
        </h2>
        
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          We'd love to hear from you. Here's how you can reach us:
        </p>
      </motion.div>

      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 md:p-8 shadow-md space-y-6">
        {contactInfoItems.map((item, index) => {
          const Icon = item.icon;
          
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: item.delay }}
              className="flex space-x-4"
            >
              <div className="p-3 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg flex-shrink-0">
                <Icon size={20} />
              </div>
              <div>
                <h3 className="font-medium text-slate-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                <div className="text-slate-600 dark:text-slate-400">
                  {item.content}
                </div>
              </div>
            </motion.div>
          );
        })}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="pt-6 border-t border-slate-200 dark:border-slate-700"
        >
          <h3 className="font-medium text-slate-900 dark:text-white mb-3">
            Connect With Us
          </h3>
          <div className="flex space-x-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-lg hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label={link.label}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="pt-6 border-t border-slate-200 dark:border-slate-700"
        >
          <h3 className="font-medium text-slate-900 dark:text-white mb-3">
            Need Urgent Support?
          </h3>
          <a
            href="/support"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
          >
            Visit our support center
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
        </motion.div>
      </div>
    </div>
  );
}