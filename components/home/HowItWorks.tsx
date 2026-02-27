import React from "react";
import { ListTodo, Cpu, Rocket } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: ListTodo,
    title: "Add Your Tasks",
    description:
      "Simply input your tasks, deadlines, and goals. Import from your existing tools or start fresh — NeuroFlow adapts to your workflow.",
    color: "#4F46E5",
  },
  {
    step: "02",
    icon: Cpu,
    title: "AI Optimizes Your Schedule",
    description:
      "Our AI engine analyzes your workload, energy patterns, and priorities to create the perfect daily plan with built-in focus sessions.",
    color: "#7C3AED",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Achieve Peak Productivity",
    description:
      "Follow your personalized plan, track your progress with real-time analytics, and watch your productivity soar week over week.",
    color: "#06B6D4",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-[#0B1120]">
      <div className="absolute inset-0 bg-linear-to-b from-[#0B1120] to-[#0F172A]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#06B6D4] mb-3">
            How It Works
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Three steps to{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#4F46E5] to-[#06B6D4]">
              peak focus
            </span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid gap-8 sm:gap-8 grid-cols-1 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              {/* Connector Line (between cards on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px bg-linear-to-r from-white/10 to-transparent" />
              )}

              {/* Step Number */}
              <div className="inline-flex items-center justify-center mb-6">
                <div
                  className="relative flex h-24 w-24 sm:h-32 sm:w-32 items-center justify-center rounded-2xl sm:rounded-3xl border border-white/5 bg-[#1E293B]/50"
                  style={{
                    boxShadow: `0 0 60px ${step.color}15`,
                  }}
                >
                  <step.icon className="h-8 w-8 sm:h-12 sm:w-12" style={{ color: step.color }} />
                  <span
                    className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.step}
                  </span>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
