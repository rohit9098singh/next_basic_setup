import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CS Student, Stanford",
    quote:
      "NeuroFlow completely transformed how I study for exams. The AI scheduling predicted my burnout before I felt it and adjusted my plan. My GPA went from 3.2 to 3.8 in one semester.",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=47",
  },
  {
    name: "Marcus Rodriguez",
    role: "Senior Developer, Stripe",
    quote:
      "As a developer, context switching kills my flow. NeuroFlow's Focus Mode and smart task batching helped me ship 40% more features per sprint. It's now essential to my stack.",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=12",
  },
  {
    name: "Priya Sharma",
    role: "Startup Founder, TechCrunch Featured",
    quote:
      "Running a startup means infinite tasks and zero time. NeuroFlow's AI prioritization ensures I always work on what moves the needle most. It's like having a personal chief of staff.",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=23",
  },
  {
    name: "James Wright",
    role: "Remote PM, Shopify",
    quote:
      "Managing a distributed team across 4 time zones was chaos. NeuroFlow's team analytics and workload prediction helped us reduce missed deadlines by 60%.",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=53",
  },
  {
    name: "Emily Nakamura",
    role: "UPSC Aspirant",
    quote:
      "The AI study planner is incredible for competitive exam prep. It automatically adjusts my revision schedule based on how well I'm retaining topics. Absolute game-changer.",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=32",
  },
  {
    name: "David Kim",
    role: "Freelance Designer",
    quote:
      "I used to lose 3 hours daily to distractions. NeuroFlow's Focus Engine + analytics showed me exactly where my time went and helped me reclaim it. Now I finish by 4 PM daily.",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=59",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-[#0F172A]">
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#4F46E5]/5 rounded-full blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#06B6D4] mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Loved by{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#4F46E5] to-[#06B6D4]">
              12,000+ users
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-400">
            See what our community says about NeuroFlow AI.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-white/5 bg-[#1E293B]/40 p-4 sm:p-6 hover:border-white/10 hover:bg-[#1E293B]/60 transition-all duration-300"
            >
              <Quote className="h-8 w-8 text-[#4F46E5]/30 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover border border-white/10"
                />
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
