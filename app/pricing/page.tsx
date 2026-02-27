"use client";

import React, { useState } from "react";
import type { Metadata } from "next";
import { Check, X, ChevronDown, ChevronUp, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/* ─────────── PRICING DATA ─────────── */
const plans = [
  {
    name: "Free",
    description: "Perfect for getting started with AI productivity.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    cta: "Get Started",
    ctaStyle: "border border-white/10 bg-white/5 hover:bg-white/10 text-white",
    popular: false,
    features: [
      "Up to 25 tasks",
      "Basic AI prioritization",
      "3 focus sessions/day",
      "Weekly productivity report",
      "1 calendar integration",
      "Community support",
    ],
  },
  {
    name: "Pro",
    description: "For individuals serious about peak productivity.",
    monthlyPrice: 12,
    yearlyPrice: 9,
    cta: "Start Free Trial",
    ctaStyle: "bg-linear-to-r from-[#4F46E5] to-[#06B6D4] text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40",
    popular: true,
    features: [
      "Unlimited tasks",
      "Advanced AI prioritization",
      "Unlimited focus sessions",
      "Daily AI-generated reports",
      "Unlimited calendar integrations",
      "Smart scheduling",
      "Stress prediction",
      "Focus mode with app blocking",
      "Priority email support",
      "API access",
    ],
  },
  {
    name: "Enterprise",
    description: "For teams and organizations at scale.",
    monthlyPrice: 39,
    yearlyPrice: 29,
    cta: "Contact Sales",
    ctaStyle: "border border-white/10 bg-white/5 hover:bg-white/10 text-white",
    popular: false,
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "Team analytics dashboard",
      "Admin & role management",
      "SSO / SAML authentication",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee (99.99%)",
      "On-premise deployment option",
      "Custom AI model training",
    ],
  },
];

/* Feature comparison */
const comparisonCategories = [
  {
    category: "Core Features",
    features: [
      { name: "Tasks", free: "25", pro: "Unlimited", enterprise: "Unlimited" },
      { name: "AI Prioritization", free: "Basic", pro: "Advanced", enterprise: "Custom AI" },
      { name: "Focus Sessions", free: "3/day", pro: "Unlimited", enterprise: "Unlimited" },
      { name: "Productivity Reports", free: "Weekly", pro: "Daily", enterprise: "Real-time" },
    ],
  },
  {
    category: "Scheduling & Integrations",
    features: [
      { name: "Calendar Integrations", free: "1", pro: "Unlimited", enterprise: "Unlimited" },
      { name: "Smart Scheduling", free: false, pro: true, enterprise: true },
      { name: "Third-party Integrations", free: "3", pro: "All", enterprise: "All + Custom" },
      { name: "API Access", free: false, pro: true, enterprise: true },
    ],
  },
  {
    category: "AI & Analytics",
    features: [
      { name: "Stress Prediction", free: false, pro: true, enterprise: true },
      { name: "Focus Mode + App Blocking", free: false, pro: true, enterprise: true },
      { name: "Team Analytics", free: false, pro: false, enterprise: true },
      { name: "Custom AI Models", free: false, pro: false, enterprise: true },
    ],
  },
  {
    category: "Support & Security",
    features: [
      { name: "Support", free: "Community", pro: "Priority Email", enterprise: "Dedicated Manager" },
      { name: "SSO / SAML", free: false, pro: false, enterprise: true },
      { name: "SLA", free: false, pro: false, enterprise: "99.99%" },
      { name: "On-Premise Deployment", free: false, pro: false, enterprise: true },
    ],
  },
];

const faqs = [
  {
    q: "Can I try NeuroFlow AI for free?",
    a: "Absolutely! Our Free plan gives you access to core features with no credit card required. You can also start a 14-day free trial of Pro to experience the full power of NeuroFlow AI.",
  },
  {
    q: "How does the AI prioritization work?",
    a: "Our machine learning models analyze your task metadata (deadlines, estimated effort, dependencies) along with your historical productivity patterns to rank tasks by impact and urgency. The more you use it, the smarter it gets.",
  },
  {
    q: "Can I switch plans at any time?",
    a: "Yes! You can upgrade, downgrade, or cancel your plan at any time. When upgrading, you'll be prorated for the remainder of your billing cycle. When downgrading, the change takes effect at the next billing cycle.",
  },
  {
    q: "Is my data secure?",
    a: "Security is our top priority. We're SOC 2 Type II certified, use AES-256 encryption at rest and TLS 1.3 in transit. Enterprise customers get additional options including on-premise deployment and custom data retention policies.",
  },
  {
    q: "Do you offer student discounts?",
    a: "Yes! Students with a valid .edu email get 50% off Pro plans. We believe in making productivity tools accessible to learners.",
  },
  {
    q: "What integrations do you support?",
    a: "We integrate with Google Calendar, Outlook, Slack, Notion, Todoist, Jira, Linear, GitHub, Trello, Asana, Zoom, Discord, and more. Enterprise plans can request custom integrations.",
  },
];

/* ─────────── PAGE ─────────── */
export default function PricingPage() {
  const [yearly, setYearly] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="bg-[#0F172A]">
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#4F46E5]/15 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#06B6D4] mb-4">Pricing</p>
          <h1 className="text-5xl font-extrabold text-white sm:text-6xl leading-[1.1]">
            Simple, transparent{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#4F46E5] to-[#06B6D4]">pricing</span>
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Start free and scale as you grow. No hidden fees, no surprise charges.
          </p>

          {/* Toggle */}
          <div className="mt-10 inline-flex items-center gap-4 rounded-xl bg-[#1E293B]/60 border border-white/5 p-1.5">
            <button
              onClick={() => setYearly(false)}
              className={cn(
                "px-5 py-2.5 rounded-lg text-sm font-medium transition-all",
                !yearly ? "bg-white/10 text-white" : "text-gray-400 hover:text-gray-300"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={cn(
                "px-5 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2",
                yearly ? "bg-white/10 text-white" : "text-gray-400 hover:text-gray-300"
              )}
            >
              Yearly
              <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-xs font-semibold text-green-400">
                Save 25%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ── Pricing Cards ── */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  "relative rounded-2xl border p-8 flex flex-col",
                  plan.popular
                    ? "border-[#4F46E5]/50 bg-[#1E293B]/60 shadow-xl shadow-indigo-500/10"
                    : "border-white/5 bg-[#1E293B]/30"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-linear-to-r from-[#4F46E5] to-[#06B6D4] px-4 py-1 text-xs font-semibold text-white shadow-lg">
                      <Sparkles className="h-3 w-3" /> Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="text-sm text-gray-400 mt-1">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-end gap-1">
                    <span className="text-5xl font-extrabold text-white">
                      ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    {plan.monthlyPrice > 0 && (
                      <span className="text-gray-400 mb-1.5">/mo</span>
                    )}
                  </div>
                  {yearly && plan.yearlyPrice > 0 && (
                    <p className="text-xs text-gray-500 mt-1">
                      Billed annually (${plan.yearlyPrice * 12}/year)
                    </p>
                  )}
                </div>

                <Link
                  href="/contact"
                  className={cn(
                    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] mb-8",
                    plan.ctaStyle
                  )}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
                    What&apos;s included
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <Check className="h-4 w-4 mt-0.5 text-[#06B6D4] shrink-0" />
                        <span className="text-gray-300">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature Comparison ── */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Detailed feature comparison
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-4 pr-6 text-sm font-medium text-gray-400 w-1/3">Feature</th>
                  <th className="pb-4 px-4 text-sm font-medium text-gray-400 text-center">Free</th>
                  <th className="pb-4 px-4 text-sm font-medium text-center">
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-[#4F46E5] to-[#06B6D4] font-semibold">Pro</span>
                  </th>
                  <th className="pb-4 pl-4 text-sm font-medium text-gray-400 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonCategories.map((cat) => (
                  <React.Fragment key={cat.category}>
                    <tr>
                      <td colSpan={4} className="pt-8 pb-3">
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                          {cat.category}
                        </span>
                      </td>
                    </tr>
                    {cat.features.map((f) => (
                      <tr key={f.name} className="border-b border-white/5">
                        <td className="py-3 pr-6 text-sm text-gray-300">{f.name}</td>
                        {[f.free, f.pro, f.enterprise].map((val, j) => (
                          <td key={j} className="py-3 px-4 text-center">
                            {typeof val === "boolean" ? (
                              val ? (
                                <Check className="h-4 w-4 mx-auto text-[#06B6D4]" />
                              ) : (
                                <X className="h-4 w-4 mx-auto text-gray-600" />
                              )
                            ) : (
                              <span className="text-sm text-gray-300">{val}</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-[#0B1120]">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#06B6D4] mb-3">FAQ</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/5 bg-[#1E293B]/30 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className="text-sm font-medium text-white pr-4">{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp className="h-4 w-4 text-gray-400 shrink-0" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-gray-400 shrink-0" />
                  )}
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openFaq === i ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="px-6 pb-4 text-sm text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            Still have questions?
          </h2>
          <p className="text-gray-400 mb-8">
            Our team is here to help. Reach out and we&apos;ll get back to you within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all"
          >
            Contact Sales
          </Link>
        </div>
      </section>
    </main>
  );
}
