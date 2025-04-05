"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "What services does Anvitha Technologies offer?",
    answer: "We offer a comprehensive range of technology services including web development, mobile app development, cloud solutions, data analytics and AI/ML, UI/UX design, and DevOps services. Our team can help with everything from small business websites to enterprise-scale applications."
  },
  {
    question: "How much does it cost to develop a website or app?",
    answer: "The cost of development varies greatly depending on the scope, complexity, and specific requirements of your project. We offer customized quotes based on your unique needs. Contact us for a free consultation and estimate tailored to your project."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines depend on the scope and complexity of the work. A simple website might take 2-4 weeks, while complex applications can take several months. During our initial consultation, we'll provide you with a detailed timeline based on your specific project requirements."
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer: "Yes, we offer comprehensive support and maintenance packages to ensure your digital products continue to run smoothly after launch. Our support services include regular updates, security patches, performance optimization, and technical assistance when needed."
  },
  {
    question: "How do you handle project communication?",
    answer: "We believe in transparent and regular communication. Depending on project needs, we typically use a combination of weekly video calls, project management tools, and email updates. Each client is assigned a dedicated project manager who serves as your main point of contact throughout the project."
  },
  {
    question: "What technologies and frameworks do you specialize in?",
    answer: "Our team is proficient in a wide range of modern technologies including React, Next.js, Angular, Vue.js, Node.js, Python, React Native, Flutter, AWS, Azure, Google Cloud, and much more. We stay up-to-date with the latest advancements and choose the best technology stack based on your specific project needs."
  },
  {
    question: "Can you help with an existing project that needs improvements?",
    answer: "Absolutely! We often work with clients who need to update, improve, or scale existing applications. Our team can conduct a thorough code review, identify areas for improvement, and implement necessary changes to enhance performance, security, and functionality."
  },
  {
    question: "What happens after I submit the contact form?",
    answer: "After you submit the contact form, one of our team members will reach out to you within 24 business hours to schedule an initial consultation. During this call, we'll discuss your project requirements, answer any questions you may have, and determine the best path forward for your needs."
  },
];

export default function Faq() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

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
            FAQs
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-2 mb-6"
          >
            Frequently Asked <span className="gradient-text">Questions</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            Find answers to common questions about our services, process, and working with us.
            If you don't see your question here, please contact us directly.
          </motion.p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md overflow-hidden">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={cn(
                  "border-b border-slate-200 dark:border-slate-700",
                  index === faqItems.length - 1 && "border-b-0"
                )}
              >
                <button
                  className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleItem(index)}
                  aria-expanded={openItem === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white pr-8">
                    {item.question}
                  </h3>
                  <svg
                    className={cn(
                      "w-5 h-5 text-slate-600 dark:text-slate-400 transition-transform",
                      openItem === index ? "transform rotate-180" : ""
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
                </button>
                
                <AnimatePresence>
                  {openItem === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-slate-600 dark:text-slate-400">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 + faqItems.length * 0.1 }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Still have questions? Feel free to{" "}
              <a href="#contact-form" className="text-primary-600 dark:text-primary-400 hover:underline">
                contact us
              </a>{" "}
              directly.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}