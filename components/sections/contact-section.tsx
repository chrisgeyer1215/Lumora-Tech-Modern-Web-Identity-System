"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { IconType } from "react-icons";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactInfoProps {
  icon: IconType;
  title: string;
  content: string | React.ReactNode;
  delay: number;
  isInView: boolean;
}

const ContactInfo = ({ icon: Icon, title, content, delay, isInView }: ContactInfoProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    transition={{ duration: 0.5, delay }}
    className="flex items-start space-x-4"
  >
    <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
      <Icon size={24} />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
        {title}
      </h3>
      <div className="text-slate-600 dark:text-slate-400">{content}</div>
    </div>
  </motion.div>
);

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // In a real project, you would handle the form submission here
    // For example with an API call to your backend
    
    // Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Reset form and show success message
    reset();
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
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
            Contact Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-2 mb-6"
          >
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            Have questions or want to discuss your project? Reach out to us using the form 
            below or through our contact information.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">
                Send Us A Message
              </h3>

              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-lg">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={cn(
                      "w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-slate-800 text-slate-900 dark:text-white",
                      errors.name
                        ? "border-red-500 dark:border-red-500"
                        : "border-slate-300 dark:border-slate-600 focus:border-primary-500 dark:focus:border-primary-500"
                    )}
                    placeholder="John Doe"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={cn(
                      "w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-slate-800 text-slate-900 dark:text-white",
                      errors.email
                        ? "border-red-500 dark:border-red-500"
                        : "border-slate-300 dark:border-slate-600 focus:border-primary-500 dark:focus:border-primary-500"
                    )}
                    placeholder="your.email@example.com"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className={cn(
                      "w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-slate-800 text-slate-900 dark:text-white",
                      errors.subject
                        ? "border-red-500 dark:border-red-500"
                        : "border-slate-300 dark:border-slate-600 focus:border-primary-500 dark:focus:border-primary-500"
                    )}
                    placeholder="Project Inquiry"
                    {...register("subject")}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={cn(
                      "w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-slate-800 text-slate-900 dark:text-white",
                      errors.message
                        ? "border-red-500 dark:border-red-500"
                        : "border-slate-300 dark:border-slate-600 focus:border-primary-500 dark:focus:border-primary-500"
                    )}
                    placeholder="Your message here..."
                    {...register("message")}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full px-6 py-3 rounded-lg text-white font-medium transition-colors",
                    isSubmitting
                      ? "bg-primary-400 cursor-not-allowed"
                      : "bg-primary-600 hover:bg-primary-700"
                  )}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col justify-between"
          >
            <div className="space-y-8 mb-12">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                Contact Information
              </h3>

              <ContactInfo
                icon={FiMail}
                title="Email"
                content={
                  <a
                    href="mailto:contact@anvithatech.com"
                    className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    contact@anvithatech.com
                  </a>
                }
                delay={0.5}
                isInView={isInView}
              />

              <ContactInfo
                icon={FiPhone}
                title="Phone"
                content={
                  <a
                    href="tel:+1234567890"
                    className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                }
                delay={0.6}
                isInView={isInView}
              />

              <ContactInfo
                icon={FiMapPin}
                title="Location"
                content="123 Tech Street, Silicon Valley, CA 94041, USA"
                delay={0.7}
                isInView={isInView}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl p-6 text-white"
            >
              <h3 className="text-xl font-semibold mb-3">Ready to get started?</h3>
              <p className="mb-5">
                Schedule a free consultation with our experts to discuss your project.
              </p>
              <a
                href="/schedule"
                className="inline-block px-5 py-2.5 bg-white text-primary-600 font-medium rounded-lg hover:bg-slate-100 transition-colors"
              >
                Book a Call
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}