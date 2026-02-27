import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Brain, BarChart3, Zap, CheckCircle2, Clock, TrendingUp, ListTodo } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 w-full">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#0F172A]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#4F46E5]/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#06B6D4]/15 rounded-full blur-[100px]" />
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300 backdrop-blur-sm mb-8">
          <Sparkles className="h-4 w-4 text-[#06B6D4]" />
          <span>Now in Public Beta — Try it Free</span>
        </div>

        {/* Headline */}
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]">
          Work Smarter with{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#4F46E5] via-[#7C3AED] to-[#06B6D4]">
            AI-Powered
          </span>{" "}
          Focus
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-6 max-w-2xl text-base text-gray-400 leading-relaxed sm:text-lg md:text-xl">
          NeuroFlow AI automatically prioritizes your tasks, predicts workload stress, and optimizes your schedule — so you can achieve deep focus and peak productivity.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/pricing"
            className="group inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-[#4F46E5] to-[#06B6D4] px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Start Free Trial
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/product"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all"
          >
            See How It Works
          </Link>
        </div>

        {/* Social Proof */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map((id) => (
              <img
                key={id}
                src={`https://i.pravatar.cc/80?img=${id + 10}`}
                alt="User avatar"
                className="h-10 w-10 rounded-full border-2 border-[#0F172A] object-cover"
              />
            ))}
          </div>
          <p className="text-sm text-gray-400">
            Trusted by <span className="text-white font-semibold">12,000+</span> professionals worldwide
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-16 sm:mt-20 mx-auto max-w-5xl">
          <div className="relative rounded-2xl border border-white/10 bg-[#1E293B]/50 p-1.5 sm:p-2 backdrop-blur-sm shadow-2xl">
            <div className="rounded-xl bg-[#0F172A] border border-white/5 overflow-hidden">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-red-500/80" />
                  <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="rounded-md bg-white/5 px-3 py-0.5 text-[10px] sm:text-xs text-gray-500">
                    app.neuroflow.ai/dashboard
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-3 sm:p-5 md:p-6">
                {/* Top bar inside dashboard */}
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-linear-to-br from-[#4F46E5] to-[#06B6D4]">
                      <Brain className="h-3.5 w-3.5 text-white" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-white/80">NeuroFlow Dashboard</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-2">
                    <div className="rounded-lg bg-white/5 border border-white/5 px-3 py-1 text-[10px] text-gray-500">Today: Feb 27</div>
                    <div className="h-6 w-6 rounded-lg bg-[#4F46E5]/20 flex items-center justify-center">
                      <Sparkles className="h-3 w-3 text-[#4F46E5]" />
                    </div>
                  </div>
                </div>

                {/* Stat Cards Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-5">
                  <div className="rounded-xl bg-linear-to-br from-[#4F46E5]/15 to-[#4F46E5]/5 border border-[#4F46E5]/10 p-3 sm:p-4">
                    <div className="flex items-center gap-1.5 mb-2">
                      <TrendingUp className="h-3 w-3 text-[#4F46E5]" />
                      <span className="text-[10px] sm:text-xs text-gray-400">Focus Score</span>
                    </div>
                    <p className="text-lg sm:text-2xl font-bold text-white">92<span className="text-xs text-green-400 ml-1">+5%</span></p>
                  </div>
                  <div className="rounded-xl bg-linear-to-br from-[#06B6D4]/15 to-[#06B6D4]/5 border border-[#06B6D4]/10 p-3 sm:p-4">
                    <div className="flex items-center gap-1.5 mb-2">
                      <Clock className="h-3 w-3 text-[#06B6D4]" />
                      <span className="text-[10px] sm:text-xs text-gray-400">Deep Work</span>
                    </div>
                    <p className="text-lg sm:text-2xl font-bold text-white">4.2<span className="text-xs text-gray-400 ml-0.5">hrs</span></p>
                  </div>
                  <div className="rounded-xl bg-linear-to-br from-purple-500/15 to-purple-500/5 border border-purple-500/10 p-3 sm:p-4 hidden sm:block">
                    <div className="flex items-center gap-1.5 mb-2">
                      <CheckCircle2 className="h-3 w-3 text-purple-400" />
                      <span className="text-[10px] sm:text-xs text-gray-400">Completed</span>
                    </div>
                    <p className="text-lg sm:text-2xl font-bold text-white">18<span className="text-xs text-gray-400 ml-0.5">/24</span></p>
                  </div>
                  <div className="rounded-xl bg-linear-to-br from-green-500/15 to-green-500/5 border border-green-500/10 p-3 sm:p-4 hidden sm:block">
                    <div className="flex items-center gap-1.5 mb-2">
                      <Zap className="h-3 w-3 text-green-400" />
                      <span className="text-[10px] sm:text-xs text-gray-400">Streak</span>
                    </div>
                    <p className="text-lg sm:text-2xl font-bold text-white">12<span className="text-xs text-gray-400 ml-0.5">days</span></p>
                  </div>
                </div>

                {/* Main Grid: Tasks + Chart */}
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 sm:gap-4">
                  {/* Task List */}
                  <div className="sm:col-span-3 rounded-xl bg-white/[0.02] border border-white/5 p-3 sm:p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1.5">
                        <ListTodo className="h-3.5 w-3.5 text-[#06B6D4]" />
                        <span className="text-[11px] sm:text-xs font-medium text-white/70">Today&apos;s Tasks</span>
                      </div>
                      <span className="text-[10px] text-gray-500">6 remaining</span>
                    </div>
                    <div className="space-y-2">
                      {[
                        { label: "Review Q4 analytics report", tag: "High", tagColor: "text-red-400 bg-red-400/10", done: true },
                        { label: "AI model training pipeline", tag: "In Progress", tagColor: "text-[#06B6D4] bg-[#06B6D4]/10", done: false },
                        { label: "Update landing page copy", tag: "Medium", tagColor: "text-yellow-400 bg-yellow-400/10", done: false },
                        { label: "Team standup prep notes", tag: "Low", tagColor: "text-green-400 bg-green-400/10", done: true },
                      ].map((task, i) => (
                        <div key={i} className="flex items-center gap-2.5 rounded-lg bg-white/[0.02] border border-white/5 px-3 py-2">
                          <div className={`h-3.5 w-3.5 rounded border flex items-center justify-center shrink-0 ${task.done ? "border-[#4F46E5] bg-[#4F46E5]" : "border-white/20"}`}>
                            {task.done && <CheckCircle2 className="h-2.5 w-2.5 text-white" />}
                          </div>
                          <span className={`text-[11px] sm:text-xs flex-1 truncate ${task.done ? "text-gray-500 line-through" : "text-gray-300"}`}>
                            {task.label}
                          </span>
                          <span className={`text-[9px] sm:text-[10px] font-medium rounded-full px-2 py-0.5 shrink-0 ${task.tagColor}`}>
                            {task.tag}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Weekly Activity Chart */}
                  <div className="sm:col-span-2 rounded-xl bg-white/[0.02] border border-white/5 p-3 sm:p-4">
                    <div className="flex items-center gap-1.5 mb-3">
                      <BarChart3 className="h-3.5 w-3.5 text-[#4F46E5]" />
                      <span className="text-[11px] sm:text-xs font-medium text-white/70">Weekly Activity</span>
                    </div>
                    <div className="flex items-end gap-1.5 sm:gap-2 h-24 sm:h-32">
                      {[
                        { day: "Mon", h: 65, color: "from-[#4F46E5] to-[#4F46E5]/60" },
                        { day: "Tue", h: 85, color: "from-[#4F46E5] to-[#06B6D4]" },
                        { day: "Wed", h: 45, color: "from-[#4F46E5] to-[#4F46E5]/60" },
                        { day: "Thu", h: 90, color: "from-[#06B6D4] to-[#4F46E5]" },
                        { day: "Fri", h: 70, color: "from-[#4F46E5] to-[#4F46E5]/60" },
                        { day: "Sat", h: 30, color: "from-[#4F46E5]/40 to-[#4F46E5]/20" },
                        { day: "Sun", h: 20, color: "from-[#4F46E5]/40 to-[#4F46E5]/20" },
                      ].map((bar) => (
                        <div key={bar.day} className="flex-1 flex flex-col items-center gap-1">
                          <div
                            className={`w-full rounded-t-md bg-linear-to-t ${bar.color} transition-all`}
                            style={{ height: `${bar.h}%` }}
                          />
                          <span className="text-[8px] sm:text-[9px] text-gray-500">{bar.day}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Glow */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-linear-to-r from-[#4F46E5]/20 to-[#06B6D4]/20 blur-[80px] rounded-full" />
        </div>
      </div>
    </section>
  );
}
