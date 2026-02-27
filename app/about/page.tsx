import React from "react";
import type { Metadata } from "next";
import {
  Target,
  Eye,
  Heart,
  Lightbulb,
  Shield,
  Globe,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — NeuroFlow AI",
  description:
    "Learn about NeuroFlow AI's mission, the team behind the product, and our journey to revolutionize productivity with artificial intelligence.",
};

/* ─────────── DATA ─────────── */
const team = [
  {
    name: "Alex Rivera",
    role: "Co-Founder & CEO",
    bio: "Former Google PM. Stanford CS grad. Obsessed with human productivity and AI systems.",
    avatar: "AR",
    image: "https://i.pravatar.cc/160?img=33",
    gradient: "from-[#4F46E5] to-[#7C3AED]",
  },
  {
    name: "Dr. Maya Patel",
    role: "Co-Founder & CTO",
    bio: "PhD in Machine Learning from MIT. Previously led AI research at DeepMind. Built NeuroFlow's core algorithms.",
    avatar: "MP",
    image: "https://i.pravatar.cc/160?img=26",
    gradient: "from-[#06B6D4] to-[#3B82F6]",
  },
  {
    name: "Jordan Kim",
    role: "Head of Design",
    bio: "Ex-Figma design lead. Award-winning UX designer focused on making complex AI feel simple and intuitive.",
    avatar: "JK",
    image: "https://i.pravatar.cc/160?img=59",
    gradient: "from-[#8B5CF6] to-[#EC4899]",
  },
  {
    name: "Lena Okonkwo",
    role: "Head of Engineering",
    bio: "10+ years building scalable systems at Stripe and Vercel. Leads our distributed engineering team.",
    avatar: "LO",
    image: "https://i.pravatar.cc/160?img=44",
    gradient: "from-[#10B981] to-[#06B6D4]",
  },
  {
    name: "Samuel Torres",
    role: "Head of Growth",
    bio: "Scaled two YC startups from 0 to 100K users. Data-driven marketer with a passion for product-led growth.",
    avatar: "ST",
    image: "https://i.pravatar.cc/160?img=52",
    gradient: "from-[#F59E0B] to-[#EF4444]",
  },
  {
    name: "Dr. Aisha Rahman",
    role: "AI Research Lead",
    bio: "Neuroscience PhD. Bridges cognitive science and AI to build systems that truly understand human focus patterns.",
    avatar: "AR",
    image: "https://i.pravatar.cc/160?img=24",
    gradient: "from-[#4F46E5] to-[#06B6D4]",
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We push the boundaries of what AI can do for human productivity, constantly experimenting and improving.",
  },
  {
    icon: Heart,
    title: "User Obsession",
    description: "Every feature starts with a real user problem. We ship fast, listen deeply, and iterate relentlessly.",
  },
  {
    icon: Shield,
    title: "Trust & Privacy",
    description: "Your data is yours. We're transparent about how we use it and give you full control over your information.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description: "Productivity tools should be available to everyone. We design for inclusivity across ability, language, and budget.",
  },
];

const timeline = [
  { year: "2023", title: "The Spark", description: "Alex and Maya meet at a Stanford AI hackathon. NeuroFlow concept is born from their shared frustration with existing productivity tools." },
  { year: "2023", title: "Y Combinator", description: "Accepted into YC W23 batch. Built the MVP in 8 weeks. First 500 beta users onboarded." },
  { year: "2024", title: "Public Beta", description: "Launched public beta with AI prioritization and focus mode. Reached 5,000 users in the first month." },
  { year: "2024", title: "Series A", description: "Raised $12M Series A led by Sequoia. Expanded team to 25. Launched team collaboration features." },
  { year: "2025", title: "12K+ Users", description: "Crossed 12,000 active users across 80+ countries. Launched enterprise product and API platform." },
  { year: "2026", title: "The Future", description: "Building the world's most intelligent productivity assistant. Voice AI, wearable integration, and predictive planning on the roadmap." },
];

/* ─────────── PAGE ─────────── */
export default function AboutPage() {
  return (
    <main className="bg-[#0F172A]">
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#4F46E5]/15 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#06B6D4] mb-4">About Us</p>
          <h1 className="text-5xl font-extrabold text-white sm:text-6xl leading-[1.1] max-w-3xl mx-auto">
            We&apos;re building the future of{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#4F46E5] to-[#06B6D4]">
              human productivity
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            NeuroFlow AI was founded on a simple belief: technology should amplify human potential, not distract from it.
          </p>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/5 bg-[#1E293B]/40 p-10">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-[#4F46E5] to-[#7C3AED] mb-5 shadow-lg">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                A world where every person has an AI partner that understands their unique work style, anticipates their needs, and helps them achieve peak performance — sustainably, without burnout.
              </p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-[#1E293B]/40 p-10">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-[#06B6D4] to-[#3B82F6] mb-5 shadow-lg">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                To democratize AI-powered productivity tools, making them accessible to students, professionals, and teams worldwide. We&apos;re here to help you do less busywork and more meaningful work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Brand Story ── */}
      <section className="py-24 bg-[#0B1120]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#06B6D4] mb-3">Our Story</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-8">
            Born from frustration, built with purpose
          </h2>
          <div className="text-gray-400 leading-relaxed space-y-4 text-left">
            <p>
              In 2023, Alex Rivera was a product manager at Google juggling 200+ tasks across four projects. Despite using every productivity app on the market, he still missed deadlines, felt overwhelmed, and burned out twice in one year.
            </p>
            <p>
              At a Stanford AI hackathon, he met Dr. Maya Patel, an ML researcher studying the neuroscience of focus and attention. They realized the same AI that could beat humans at chess could also understand human work patterns — and optimize them.
            </p>
            <p>
              That weekend, they built the first prototype of NeuroFlow: a system that could analyze a person&apos;s task history, predict when they&apos;d hit cognitive overload, and automatically restructure their day for maximum output with minimum stress.
            </p>
            <p>
              Three months later, they were in Y Combinator. Today, NeuroFlow AI serves 12,000+ users across 80+ countries, helping everyone from college students preparing for exams to startup founders building the next unicorn.
            </p>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#06B6D4] mb-3">Our Journey</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              From hackathon to{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#4F46E5] to-[#06B6D4]">global platform</span>
            </h2>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-[#4F46E5] via-[#06B6D4] to-transparent" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#4F46E5] border-2 border-[#0F172A] z-10" />

                  <div className={`flex-1 pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <span className="text-xs font-semibold text-[#06B6D4] uppercase tracking-wider">{item.year}</span>
                    <h3 className="text-lg font-semibold text-white mt-1">{item.title}</h3>
                    <p className="text-sm text-gray-400 mt-2 leading-relaxed">{item.description}</p>
                  </div>

                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-24 bg-[#0B1120]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#06B6D4] mb-3">Our Team</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              The minds behind NeuroFlow
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">
              A passionate team of engineers, designers, and researchers united by a mission to reinvent productivity.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <div key={i} className="rounded-2xl border border-white/5 bg-[#1E293B]/40 p-6 text-center hover:border-white/10 transition-colors group">
                <img
                  src={member.image}
                  alt={member.name}
                  className="mx-auto h-20 w-20 rounded-2xl object-cover mb-5 shadow-lg border border-white/10"
                />
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-sm text-[#06B6D4] mb-3">{member.role}</p>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{member.bio}</p>
                <div className="flex items-center justify-center gap-2">
                  <a href="#" className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition-all" aria-label={`${member.name}'s LinkedIn`}>
                    <Linkedin className="h-3.5 w-3.5" />
                  </a>
                  <a href="#" className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition-all" aria-label={`${member.name}'s Twitter`}>
                    <Twitter className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#06B6D4] mb-3">Our Values</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              What drives us every day
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/5 mb-5">
                  <v.icon className="h-6 w-6 text-[#4F46E5]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{v.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-[#0B1120]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            Want to join our mission?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            We&apos;re always looking for talented people who are passionate about AI, productivity, and building beautiful products.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-[#4F46E5] to-[#06B6D4] px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all hover:scale-[1.02]"
            >
              View Open Positions
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
