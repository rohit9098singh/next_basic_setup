import React from "react";
import Link from "next/link";
import { Brain, Twitter, Github, Linkedin, Youtube } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "/product" },
    { label: "Pricing", href: "/pricing" },
    { label: "Integrations", href: "/product#integrations" },
    { label: "Changelog", href: "/product#changelog" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/about#careers" },
    { label: "Blog", href: "/about#blog" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "Documentation", href: "/product#docs" },
    { label: "Help Center", href: "/contact" },
    { label: "Community", href: "/about#community" },
    { label: "Status", href: "/product#status" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "GDPR", href: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#0B1120]">
      {/* Gradient Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#4F46E5] to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-12 sm:pt-16 pb-8">
        {/* Top Section */}
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-6 lg:grid-cols-6">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4" aria-label="NeuroFlow AI">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-[#4F46E5] to-[#06B6D4]">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Neuro<span className="text-transparent bg-clip-text bg-linear-to-r from-[#4F46E5] to-[#06B6D4]">Flow</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs mb-6">
              AI-powered productivity platform that helps you eliminate distractions and achieve peak focus.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition-all"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
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
        <div className="mt-10 sm:mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:pt-8 md:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} NeuroFlow AI. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Designed with precision. Built for productivity.
          </p>
        </div>
      </div>
    </footer>
  );
}
