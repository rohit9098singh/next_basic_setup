import React from "react";
import { Users, Clock, TrendingUp, Globe } from "lucide-react";

const stats = [
  { icon: Users, value: "12,000+", label: "Active Users", color: "#4F46E5" },
  { icon: Clock, value: "2.4M", label: "Focus Hours Logged", color: "#06B6D4" },
  { icon: TrendingUp, value: "40%", label: "Avg. Productivity Gain", color: "#7C3AED" },
  { icon: Globe, value: "80+", label: "Countries", color: "#10B981" },
];

export default function Stats() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-[#0F172A]">
      <div className="absolute inset-0 bg-linear-to-b from-[#0B1120] to-[#0F172A]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/5 mb-4">
                <stat.icon className="h-6 w-6" style={{ color: stat.color }} />
              </div>
              <div className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">{stat.value}</div>
              <p className="mt-1 text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
