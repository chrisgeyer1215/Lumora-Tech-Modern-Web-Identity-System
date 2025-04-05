"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  imagePlaceholder: string;
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  department: 'leadership' | 'engineering' | 'design' | 'product';
}

const teamMembers: TeamMember[] = [
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    position: "CEO & Co-Founder",
    bio: "Sarah brings over 15 years of experience in technology leadership. Prior to founding Anvitha Tech, she led product development at several Fortune 500 companies.",
    imagePlaceholder: "bg-gradient-to-br from-blue-500 to-cyan-400",
    social: {
      linkedin: "https://linkedin.com/in/sarah-johnson",
      twitter: "https://twitter.com/sarahjohnson",
      email: "sarah@anvithatech.com",
    },
    department: "leadership",
  },
  {
    id: "michael-chen",
    name: "Michael Chen",
    position: "CTO & Co-Founder",
    bio: "Michael is a tech visionary with expertise in software architecture and emerging technologies. He leads our technical strategy and innovation initiatives.",
    imagePlaceholder: "bg-gradient-to-br from-purple-500 to-pink-500",
    social: {
      linkedin: "https://linkedin.com/in/michael-chen",
      twitter: "https://twitter.com/michaelchen",
      email: "michael@anvithatech.com",
    },
    department: "leadership",
  },
  {
    id: "alex-rodriguez",
    name: "Alex Rodriguez",
    position: "Lead Software Architect",
    bio: "Alex specializes in designing scalable and robust software systems. He oversees our technical architecture and code quality standards.",
    imagePlaceholder: "bg-gradient-to-br from-green-500 to-teal-400",
    social: {
      linkedin: "https://linkedin.com/in/alex-rodriguez",
      email: "alex@anvithatech.com",
    },
    department: "engineering",
  },
  {
    id: "emily-patel",
    name: "Emily Patel",
    position: "UX Design Director",
    bio: "Emily leads our design team in creating intuitive and delightful user experiences. She combines creativity with data-driven design principles.",
    imagePlaceholder: "bg-gradient-to-br from-yellow-400 to-orange-500",
    social: {
      linkedin: "https://linkedin.com/in/emily-patel",
      twitter: "https://twitter.com/emilypatel",
      email: "emily@anvithatech.com",
    },
    department: "design",
  },
  {
    id: "david-kim",
    name: "David Kim",
    position: "Mobile Development Lead",
    bio: "David is an expert in mobile app development across iOS and Android platforms. He drives our mobile strategy and implementation.",
    imagePlaceholder: "bg-gradient-to-br from-red-500 to-pink-600",
    social: {
      linkedin: "https://linkedin.com/in/david-kim",
      email: "david@anvithatech.com",
    },
    department: "engineering",
  },
  {
    id: "jessica-wong",
    name: "Jessica Wong",
    position: "Product Manager",
    bio: "Jessica translates business requirements into technical specifications. She ensures our products meet client needs and market demands.",
    imagePlaceholder: "bg-gradient-to-br from-indigo-500 to-blue-600",
    social: {
      linkedin: "https://linkedin.com/in/jessica-wong",
      twitter: "https://twitter.com/jessicawong",
      email: "jessica@anvithatech.com",
    },
    department: "product",
  },
  {
    id: "rahul-singh",
    name: "Rahul Singh",
    position: "AI Research Lead",
    bio: "Rahul leads our AI initiatives, bringing expertise in machine learning, natural language processing, and computer vision.",
    imagePlaceholder: "bg-gradient-to-br from-cyan-500 to-blue-500",
    social: {
      linkedin: "https://linkedin.com/in/rahul-singh",
      email: "rahul@anvithatech.com",
    },
    department: "engineering",
  },
  {
    id: "olivia-martinez",
    name: "Olivia Martinez",
    position: "Client Relations Director",
    bio: "Olivia ensures our clients receive exceptional service. She builds strong relationships and ensures client success with our solutions.",
    imagePlaceholder: "bg-gradient-to-br from-purple-600 to-indigo-600",
    social: {
      linkedin: "https://linkedin.com/in/olivia-martinez",
      twitter: "https://twitter.com/oliviamartinez",
      email: "olivia@anvithatech.com",
    },
    department: "leadership",
  },
];

type Department = 'all' | 'leadership' | 'engineering' | 'design' | 'product';

export default function TeamSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [activeFilter, setActiveFilter] = useState<Department>('all');
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  const filteredMembers = activeFilter === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.department === activeFilter);

  const filters: { label: string; value: Department }[] = [
    { label: 'All Team', value: 'all' },
    { label: 'Leadership', value: 'leadership' },
    { label: 'Engineering', value: 'engineering' },
    { label: 'Design', value: 'design' },
    { label: 'Product', value: 'product' },
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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 mb-5 text-sm font-medium rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
          >
            Our Team
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-2 mb-6"
          >
            Meet the <span className="gradient-text">People</span> Behind Our Success
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            Our talented team of experts is dedicated to delivering innovative solutions
            and exceptional results for our clients.
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={cn(
                "px-4 py-2 rounded-md transition-colors",
                activeFilter === filter.value
                  ? "bg-primary-600 text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              )}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
            >
              <div className={cn("h-48 w-full", member.imagePlaceholder)}>
                <div className="h-full w-full flex items-center justify-center text-white font-semibold text-xl">
                  {member.name.split(' ').map(name => name[0]).join('')}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-slate-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 mb-3">
                  {member.position}
                </p>
                
                <AnimatePresence>
                  {selectedMember === member.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-slate-600 dark:text-slate-400 mb-4">
                        {member.bio}
                      </p>
                      <div className="flex space-x-3">
                        {member.social.linkedin && (
                          <a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                            aria-label={`${member.name}'s LinkedIn`}
                          >
                            <FiLinkedin size={18} />
                          </a>
                        )}
                        {member.social.twitter && (
                          <a
                            href={member.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                            aria-label={`${member.name}'s Twitter`}
                          >
                            <FiTwitter size={18} />
                          </a>
                        )}
                        {member.social.email && (
                          <a
                            href={`mailto:${member.social.email}`}
                            className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                            aria-label={`Email ${member.name}`}
                          >
                            <FiMail size={18} />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <div className="flex items-center mt-3 text-primary-600 dark:text-primary-400 font-medium">
                  <span>{selectedMember === member.id ? "Hide Details" : "View Details"}</span>
                  <svg
                    className={cn(
                      "ml-1 w-4 h-4 transition-transform duration-300",
                      selectedMember === member.id && "rotate-180"
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
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Interested in joining our team? Check out our <a href="/careers" className="text-primary-600 dark:text-primary-400 hover:underline">careers page</a> for current openings.
          </p>
        </motion.div>
      </div>
    </section>
  );
}