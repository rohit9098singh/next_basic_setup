import React from "react";
import {
  Brain,
  BarChart3,
  CalendarClock,
  Zap,
  Shield,
  Workflow,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Task Prioritization",
    description:
      "Our AI engine analyzes your tasks, deadlines, and energy patterns to automatically rank what you should work on next.",
    gradient: "from-[#4F46E5] to-[#7C3AED]",
  },
  {
    icon: BarChart3,
    title: "Productivity Analytics",
    description:
      "Deep insights into your work patterns, focus sessions, and performance trends with actionable recommendations.",
    gradient: "from-[#06B6D4] to-[#3B82F6]",
  },
  {
    icon: CalendarClock,
    title: "Smart Scheduling",
    description:
      "Automatically blocks focus time on your calendar and suggests optimal work windows based on your productivity cycles.",
    gradient: "from-[#8B5CF6] to-[#EC4899]",
  },
  {
    icon: Zap,
    title: "Focus Mode Engine",
    description:
      "Intelligent distraction blocking with Pomodoro integration. The AI adapts session lengths to your attention span.",
    gradient: "from-[#F59E0B] to-[#EF4444]",
  },
  {
    icon: Shield,
    title: "Stress Prediction",
    description:
      "Workload analysis that predicts burnout risk before it happens and suggests breaks or task redistribution.",
    gradient: "from-[#10B981] to-[#06B6D4]",
  },
  {
    icon: Workflow,
    title: "Team Collaboration",
    description:
      "Shared workspaces, delegated tasks, and team productivity dashboards for managers and team leads.",
    gradient: "from-[#4F46E5] to-[#06B6D4]",
  },
];

export default function Features() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-[#0F172A]">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0F172A] via-[#0F172A] to-[#0B1120]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#06B6D4] mb-3">
            Features
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Everything you need to{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#4F46E5] to-[#06B6D4]">
              stay focused
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Powerful AI-driven tools designed to transform how you work, study, and manage your time.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-white/5 bg-[#1E293B]/50 p-5 sm:p-8 backdrop-blur-sm hover:border-white/10 hover:bg-[#1E293B]/80 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ${feature.gradient} mb-5 shadow-lg`}
              >
                <feature.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#4F46E5]/5 to-[#06B6D4]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
