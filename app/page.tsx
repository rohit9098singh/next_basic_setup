import React from "react";
import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import HowItWorks from "@/components/home/HowItWorks";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "NeuroFlow AI — Work Smarter with AI-Powered Focus",
  description:
    "NeuroFlow AI is an intelligent task and focus management platform that helps students, developers, and professionals eliminate distractions and increase productivity using AI-driven planning, smart scheduling, and performance analytics.",
  keywords: [
    "AI productivity",
    "task management",
    "focus timer",
    "smart scheduling",
    "productivity analytics",
    "AI planner",
  ],
  openGraph: {
    title: "NeuroFlow AI — Work Smarter with AI-Powered Focus",
    description:
      "AI-powered productivity platform that automatically prioritizes tasks, predicts workload stress, and optimizes your schedule.",
    type: "website",
    url: "https://neuroflow.ai",
  },
};

export default function HomePage() {
  return (
    <main >
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </main>
  );
}
