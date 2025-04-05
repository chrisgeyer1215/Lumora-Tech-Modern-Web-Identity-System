"use client";

import Link from "next/link";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi";
import { IconType } from "react-icons";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  icon: IconType; // Use IconType from react-icons for proper typing
  href: string;
  label: string;
}

const footerLinks: FooterSection[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile Apps", href: "/services/mobile-apps" },
      { label: "Cloud Solutions", href: "/services/cloud" },
      { label: "AI & ML", href: "/services/ai-ml" },
      { label: "UI/UX Design", href: "/services/design" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Documentation", href: "/docs" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

const socialLinks: SocialLink[] = [
  { icon: FiGithub, href: "https://github.com/anvitha-tech", label: "GitHub" },
  { icon: FiTwitter, href: "https://twitter.com/anvitha_tech", label: "Twitter" },
  { icon: FiLinkedin, href: "https://linkedin.com/company/anvitha-tech", label: "LinkedIn" },
  { icon: FiInstagram, href: "https://instagram.com/anvitha_tech", label: "Instagram" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 dark:bg-slate-900">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Anvitha
              </span>
              <span className="ml-1">Tech</span>
            </Link>
            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-md">
              Transforming ideas into digital excellence. We build innovative solutions 
              that help businesses thrive in the digital era.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-400">
                <FiMail className="text-primary-600 dark:text-primary-400" />
                <a href="mailto:contact@anvithatech.com" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  contact@anvithatech.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-400">
                <FiPhone className="text-primary-600 dark:text-primary-400" />
                <a href="tel:+1234567890" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-400">
                <FiMapPin className="text-primary-600 dark:text-primary-400" />
                <span>123 Tech Street, Silicon Valley, CA</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between">
          <div className="text-slate-600 dark:text-slate-400">
            © {currentYear} Anvitha Technologies. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0 flex space-x-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a 
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label={link.label}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}