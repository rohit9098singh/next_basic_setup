"use client";

import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  Github,
  Linkedin,
  Youtube,
  CheckCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ─────────── CONTACT PAGE ─────────── */
export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Enter a valid email";
    if (!form.message.trim()) errs.message = "Message is required";
    else if (form.message.trim().length < 10)
      errs.message = "Message must be at least 10 characters";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@neuroflow.ai",
      href: "mailto:hello@neuroflow.ai",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 000-1234",
      href: "tel:+15550001234",
    },
    {
      icon: MapPin,
      label: "Office",
      value: "San Francisco, CA",
      href: "#map",
    },
  ];

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <main className="bg-[#0F172A]">
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#4F46E5]/15 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#06B6D4] mb-4">
            Contact
          </p>
          <h1 className="text-5xl font-extrabold text-white sm:text-6xl leading-[1.1]">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#4F46E5] to-[#06B6D4]">
              touch
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Have a question, feedback, or want to explore enterprise plans? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-12 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* ── Contact Info Sidebar ── */}
            <div className="lg:col-span-2 space-y-8">
              {/* Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 rounded-xl border border-white/5 bg-[#1E293B]/40 p-5 hover:border-white/10 transition-colors group"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#4F46E5]/10">
                      <info.icon className="h-5 w-5 text-[#4F46E5]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">{info.label}</p>
                      <p className="text-sm font-medium text-white group-hover:text-[#06B6D4] transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm font-semibold text-white mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition-all"
                    >
                      <social.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div id="map" className="rounded-xl border border-white/5 bg-[#1E293B]/40 overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <iframe
                    title="NeuroFlow AI Office Location"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-122.4494%2C37.7549%2C-122.3894%2C37.7849&layer=mapnik&marker=37.7699%2C-122.4194"
                    className="w-full h-full border-0 absolute inset-0 opacity-70 grayscale"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 left-3 rounded-lg bg-[#0F172A]/90 backdrop-blur-sm px-3 py-2 border border-white/10">
                    <p className="text-xs font-medium text-white">San Francisco, CA</p>
                    <p className="text-[10px] text-gray-400">NeuroFlow AI HQ</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Contact Form ── */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-white/5 bg-[#1E293B]/40 p-8 sm:p-10">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 mb-6">
                      <CheckCircle className="h-8 w-8 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                    <p className="text-gray-400 mb-6">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-sm font-medium text-[#06B6D4] hover:text-[#4F46E5] transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">Send us a message</h3>
                      <p className="text-sm text-gray-400">
                        Fill out the form below and we&apos;ll respond as soon as possible.
                      </p>
                    </div>

                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className={cn(
                          "w-full rounded-xl border bg-[#0F172A]/50 px-4 py-3.5 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:ring-2 focus:ring-[#4F46E5]/50",
                          errors.name ? "border-red-500/50" : "border-white/10 focus:border-[#4F46E5]"
                        )}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1.5 text-xs text-red-400">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={cn(
                          "w-full rounded-xl border bg-[#0F172A]/50 px-4 py-3.5 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:ring-2 focus:ring-[#4F46E5]/50",
                          errors.email ? "border-red-500/50" : "border-white/10 focus:border-[#4F46E5]"
                        )}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help..."
                        rows={5}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined}
                        className={cn(
                          "w-full rounded-xl border bg-[#0F172A]/50 px-4 py-3.5 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:ring-2 focus:ring-[#4F46E5]/50 resize-none",
                          errors.message ? "border-red-500/50" : "border-white/10 focus:border-[#4F46E5]"
                        )}
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-1.5 text-xs text-red-400">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#4F46E5] to-[#06B6D4] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
