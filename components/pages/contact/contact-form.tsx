"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  services: z.enum(["", "web-development", "mobile-development", "cloud-solutions", "data-services", "ui-ux-design", "other"]).optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
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
    <div 
      id="contact-form"
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
          Send Us a Message
        </h2>
        
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          Have a question or want to work together? Fill out the form below, and we'll get back to you as soon as possible.
        </p>
      </motion.div>

      {submitSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-lg"
        >
          Thank you for your message! We'll get back to you shortly.
        </motion.div>
      )}

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white dark:bg-slate-800 rounded-xl p-6 md:p-8 shadow-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label 
              htmlFor="name" 
              className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              className={cn(
                "w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-slate-700 text-slate-900 dark:text-white",
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
            <label 
              htmlFor="email" 
              className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              className={cn(
                "w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-slate-700 text-slate-900 dark:text-white",
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
            <label 
              htmlFor="phone" 
              className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:border-primary-500 dark:focus:border-primary-500"
              placeholder="+1 (234) 567-890"
              {...register("phone")}
            />
          </div>

          <div>
            <label 
              htmlFor="services" 
              className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              Interested Service
            </label>
            <select
              id="services"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:border-primary-500 dark:focus:border-primary-500"
              {...register("services")}
            >
              <option value="">Select a service</option>
              <option value="web-development">Web Development</option>
              <option value="mobile-development">Mobile App Development</option>
              <option value="cloud-solutions">Cloud Solutions</option>
              <option value="data-services">Data Services</option>
              <option value="ui-ux-design">UI/UX Design</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label 
              htmlFor="subject" 
              className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              className={cn(
                "w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-slate-700 text-slate-900 dark:text-white",
                errors.subject
                  ? "border-red-500 dark:border-red-500"
                  : "border-slate-300 dark:border-slate-600 focus:border-primary-500 dark:focus:border-primary-500"
              )}
              placeholder="How can we help you?"
              {...register("subject")}
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <label 
              htmlFor="message" 
              className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              className={cn(
                "w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-slate-700 text-slate-900 dark:text-white",
                errors.message
                  ? "border-red-500 dark:border-red-500"
                  : "border-slate-300 dark:border-slate-600 focus:border-primary-500 dark:focus:border-primary-500"
              )}
              placeholder="Let us know how we can help you..."
              {...register("message")}
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
            )}
          </div>
        </div>

        <div className="mt-8">
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
        </div>
      </motion.form>
    </div>
  );
}