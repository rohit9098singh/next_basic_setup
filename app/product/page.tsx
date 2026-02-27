import React from "react";
import type { Metadata } from "next";
import {
  Brain,
  BarChart3,
  CalendarClock,
  Zap,
  Shield,
  Workflow,
  Lock,
  Server,
  Gauge,
  GraduationCap,
  Code2,
  Users,
  Briefcase,
  BookOpen,
  Layers,
  GitBranch,
  Bell,
  Plug,
  ArrowRight,
  CheckCircle2,
  Clock,
  TrendingUp,
  ListTodo,
  AlertTriangle,
  Heart,
  UserCircle,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product — NeuroFlow AI Features & Capabilities",
  description:
    "Explore NeuroFlow AI's powerful features: AI task prioritization, smart scheduling, focus mode, productivity analytics, stress prediction, and team collaboration.",
};

/* ─────────── DATA ─────────── */
const coreFeatures = [
  {
    icon: Brain,
    title: "AI Task Prioritization",
    mockupKey: "prioritization",
    description:
      "Machine learning models trained on millions of task patterns analyze your workload, deadline urgency, and estimated effort to surface exactly what needs attention now.",
    details: [
      "Eisenhower matrix automation",
      "Deadline-aware ranking",
      "Energy-level optimization",
      "Context-aware batching",
    ],
    gradient: "from-[#4F46E5] to-[#7C3AED]",
  },
  {
    icon: BarChart3,
    title: "Productivity Analytics",
    mockupKey: "analytics",
    description:
      "Comprehensive dashboards track your focus time, task completion rates, deep work streaks, and distraction patterns with weekly AI-generated reports.",
    details: [
      "Daily / weekly / monthly reports",
      "Focus score tracking",
      "Distraction heatmaps",
      "Goal progress visualization",
    ],
    gradient: "from-[#06B6D4] to-[#3B82F6]",
  },
  {
    icon: CalendarClock,
    title: "Smart Scheduling",
    mockupKey: "scheduling",
    description:
      "Integrates with Google Calendar, Outlook, and Apple Calendar to automatically block focus time and suggest optimal work windows based on your circadian rhythm.",
    details: [
      "Calendar auto-blocking",
      "Meeting-free zone detection",
      "Time zone intelligence",
      "Buffer time automation",
    ],
    gradient: "from-[#8B5CF6] to-[#EC4899]",
  },
  {
    icon: Zap,
    title: "Focus Mode Engine",
    mockupKey: "focus",
    description:
      "Advanced distraction blocker with adaptive Pomodoro sessions. The AI learns your attention span and optimizes session lengths for maximum deep work.",
    details: [
      "Adaptive session lengths",
      "Website & app blocking",
      "Ambient sound integration",
      "Break reminders",
    ],
    gradient: "from-[#F59E0B] to-[#EF4444]",
  },
  {
    icon: Shield,
    title: "Stress & Burnout Prediction",
    mockupKey: "stress",
    description:
      "Proprietary workload analysis algorithm monitors your task velocity, hours logged, and pattern changes to predict burnout 5-7 days before it impacts performance.",
    details: [
      "Burnout risk score",
      "Automatic workload rebalancing",
      "Rest day suggestions",
      "Wellness check-ins",
    ],
    gradient: "from-[#10B981] to-[#06B6D4]",
  },
  {
    icon: Workflow,
    title: "Team Collaboration",
    mockupKey: "team",
    description:
      "Shared workspaces with real-time task delegation, team productivity dashboards, and async standup reports for distributed teams.",
    details: [
      "Shared task boards",
      "Workload visibility",
      "Async standups",
      "Team analytics & insights",
    ],
    gradient: "from-[#4F46E5] to-[#06B6D4]",
  },
];

const techSpecs = [
  { icon: Server, label: "99.99% Uptime SLA", desc: "Enterprise-grade reliability with multi-region deployment" },
  { icon: Lock, label: "SOC 2 Type II", desc: "Fully audited security practices and data handling" },
  { icon: Gauge, label: "<50ms Latency", desc: "Edge computing ensures instant AI responses globally" },
  { icon: Layers, label: "REST & GraphQL API", desc: "Full API access for custom integrations and workflows" },
  { icon: GitBranch, label: "Webhooks", desc: "Real-time event notifications for your automation stack" },
  { icon: Bell, label: "Smart Notifications", desc: "AI-filtered alerts so you only see what matters" },
];

const useCases = [
  {
    icon: GraduationCap,
    title: "Students",
    description: "AI-optimized study plans, exam prep scheduling, revision tracking, and focus sessions designed for academic success.",
    gradient: "from-[#4F46E5] to-[#7C3AED]",
  },
  {
    icon: Code2,
    title: "Developers",
    description: "Deep work protection, context-switch reduction, sprint planning integration, and code session tracking for shipping faster.",
    gradient: "from-[#06B6D4] to-[#3B82F6]",
  },
  {
    icon: Users,
    title: "Remote Teams",
    description: "Async standup automation, team workload balancing, cross-timezone scheduling, and collaborative focus blocks.",
    gradient: "from-[#8B5CF6] to-[#EC4899]",
  },
  {
    icon: Briefcase,
    title: "Startup Founders",
    description: "Priority-first task management, investor meeting prep, fundraising timeline tracking, and founder wellness monitoring.",
    gradient: "from-[#F59E0B] to-[#EF4444]",
  },
  {
    icon: BookOpen,
    title: "Exam Aspirants",
    description: "Spaced repetition scheduling, subject-wise time allocation, mock test planning, and performance trend analysis.",
    gradient: "from-[#10B981] to-[#06B6D4]",
  },
  {
    icon: Plug,
    title: "Freelancers",
    description: "Client project tracking, billable hour monitoring, deadline management, and work-life balance optimization.",
    gradient: "from-[#4F46E5] to-[#06B6D4]",
  },
];

const integrations = [
  "Google Calendar", "Outlook", "Slack", "Notion", "Todoist",
  "Jira", "Linear", "GitHub", "Trello", "Asana",
  "Zoom", "Discord",
];

/* ─────────── PAGE ─────────── */
export default function ProductPage() {
  return (
    <main className="bg-[#0F172A]">
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#4F46E5]/15 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#06B6D4] mb-4">Product</p>
          <h1 className="text-5xl font-extrabold text-white sm:text-6xl leading-[1.1]">
            The Most Intelligent{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#4F46E5] to-[#06B6D4]">
              Productivity Platform
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Every feature is designed with one goal: helping you achieve deep focus and produce your best work, powered by cutting-edge AI.
          </p>
        </div>
      </section>

      {/* ── Core Features (detailed) ── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 space-y-20">
          {coreFeatures.map((f, i) => (
            <div
              key={i}
              className={`flex flex-col gap-12 lg:flex-row lg:items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Info */}
              <div className="flex-1 space-y-5">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ${f.gradient} shadow-lg`}>
                  <f.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">{f.title}</h3>
                <p className="text-gray-400 leading-relaxed">{f.description}</p>
                <ul className="grid grid-cols-2 gap-3">
                  {f.details.map((d, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#06B6D4]" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Feature Mockup */}
              <div className="flex-1">
                <div className="rounded-2xl border border-white/5 bg-[#1E293B]/40 p-1.5 sm:p-2 overflow-hidden">
                  <div className="rounded-xl bg-[#0F172A] border border-white/5 overflow-hidden">
                    {/* Browser bar */}
                    <div className="flex items-center gap-2 px-3 sm:px-4 py-2 border-b border-white/5">
                      <div className="flex gap-1.5">
                        <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-red-500/70" />
                        <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-yellow-500/70" />
                        <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-green-500/70" />
                      </div>
                      <div className="flex-1 flex justify-center">
                        <div className="rounded-md bg-white/5 px-3 py-0.5 text-[9px] sm:text-[10px] text-gray-500">
                          neuroflow.ai/{f.title.toLowerCase().replace(/\s+/g, "-")}
                        </div>
                      </div>
                    </div>

                    {/* Unique mockup content per feature */}
                    <div className="p-3 sm:p-4">
                      {f.mockupKey === "prioritization" && (
                        <div className="space-y-2.5">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-1.5">
                              <ListTodo className="h-3.5 w-3.5 text-[#4F46E5]" />
                              <span className="text-[10px] sm:text-xs font-medium text-white/70">AI-Ranked Tasks</span>
                            </div>
                            <span className="text-[9px] text-gray-500">Priority Score</span>
                          </div>
                          {[
                            { task: "Ship v2.0 release", tag: "Critical", score: 98, tagColor: "text-red-400 bg-red-400/10" },
                            { task: "Review design mockups", tag: "High", score: 85, tagColor: "text-orange-400 bg-orange-400/10" },
                            { task: "Update API docs", tag: "Medium", score: 62, tagColor: "text-yellow-400 bg-yellow-400/10" },
                            { task: "Refactor auth module", tag: "Medium", score: 54, tagColor: "text-yellow-400 bg-yellow-400/10" },
                            { task: "Team retro notes", tag: "Low", score: 28, tagColor: "text-green-400 bg-green-400/10" },
                          ].map((t, j) => (
                            <div key={j} className="flex items-center gap-2 rounded-lg bg-white/[0.02] border border-white/5 px-2.5 py-2">
                              <div className={`h-3 w-3 rounded border shrink-0 ${j < 2 ? "border-[#4F46E5] bg-[#4F46E5]" : "border-white/20"}`}>
                                {j < 2 && <CheckCircle2 className="h-3 w-3 text-white" />}
                              </div>
                              <span className={`text-[10px] sm:text-[11px] flex-1 truncate ${j < 2 ? "text-gray-500 line-through" : "text-gray-300"}`}>{t.task}</span>
                              <span className={`text-[8px] sm:text-[9px] font-medium rounded-full px-1.5 py-0.5 shrink-0 ${t.tagColor}`}>{t.tag}</span>
                              <span className="text-[10px] font-mono text-[#4F46E5] w-6 text-right shrink-0">{t.score}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {f.mockupKey === "analytics" && (
                        <div className="space-y-3">
                          <div className="grid grid-cols-3 gap-2 mb-1">
                            <div className="rounded-lg bg-[#06B6D4]/10 border border-[#06B6D4]/10 p-2.5">
                              <p className="text-[9px] text-gray-400">Focus Score</p>
                              <p className="text-base sm:text-lg font-bold text-white">92</p>
                              <p className="text-[8px] text-green-400">+12% vs last week</p>
                            </div>
                            <div className="rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/10 p-2.5">
                              <p className="text-[9px] text-gray-400">Tasks Done</p>
                              <p className="text-base sm:text-lg font-bold text-white">147</p>
                              <p className="text-[8px] text-green-400">+8% this month</p>
                            </div>
                            <div className="rounded-lg bg-purple-500/10 border border-purple-500/10 p-2.5">
                              <p className="text-[9px] text-gray-400">Deep Work</p>
                              <p className="text-base sm:text-lg font-bold text-white">28h</p>
                              <p className="text-[8px] text-green-400">+3h vs avg</p>
                            </div>
                          </div>
                          <div className="rounded-lg bg-white/[0.02] border border-white/5 p-3">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[10px] text-white/60">Weekly Productivity</span>
                              <span className="text-[9px] text-gray-500">This Week</span>
                            </div>
                            <div className="flex items-end gap-1.5 h-20 sm:h-24">
                              {[
                                { day: "M", h: 70 }, { day: "T", h: 90 }, { day: "W", h: 55 },
                                { day: "T", h: 85 }, { day: "F", h: 75 }, { day: "S", h: 35 }, { day: "S", h: 20 },
                              ].map((bar, j) => (
                                <div key={j} className="flex-1 flex flex-col items-center gap-1">
                                  <div className="w-full rounded-t-sm bg-linear-to-t from-[#06B6D4] to-[#3B82F6]" style={{ height: `${bar.h}%` }} />
                                  <span className="text-[7px] sm:text-[8px] text-gray-500">{bar.day}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {f.mockupKey === "scheduling" && (
                        <div className="space-y-2">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] sm:text-xs font-medium text-white/70">Today&apos;s Schedule</span>
                            <span className="text-[9px] text-gray-500">Feb 27, 2026</span>
                          </div>
                          {[
                            { time: "9:00", label: "Deep Work Block", duration: "2h", color: "border-l-[#8B5CF6] bg-[#8B5CF6]/8", icon: "focus" },
                            { time: "11:00", label: "Team Standup", duration: "30m", color: "border-l-[#3B82F6] bg-[#3B82F6]/8", icon: "meet" },
                            { time: "11:30", label: "Buffer Time", duration: "15m", color: "border-l-gray-500 bg-white/[0.02]", icon: "buffer" },
                            { time: "13:00", label: "AI Focus Session", duration: "1.5h", color: "border-l-[#EC4899] bg-[#EC4899]/8", icon: "ai" },
                            { time: "14:30", label: "Code Review", duration: "1h", color: "border-l-[#06B6D4] bg-[#06B6D4]/8", icon: "work" },
                            { time: "16:00", label: "Wrap-up & Plan", duration: "30m", color: "border-l-[#10B981] bg-[#10B981]/8", icon: "plan" },
                          ].map((event, j) => (
                            <div key={j} className={`flex items-center gap-2.5 rounded-lg border-l-2 ${event.color} border border-white/5 px-2.5 py-1.5 sm:py-2`}>
                              <span className="text-[9px] sm:text-[10px] font-mono text-gray-500 w-8 shrink-0">{event.time}</span>
                              <div className="flex-1 min-w-0">
                                <p className="text-[10px] sm:text-[11px] text-gray-200 truncate">{event.label}</p>
                              </div>
                              <span className="text-[8px] sm:text-[9px] text-gray-500 shrink-0">{event.duration}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {f.mockupKey === "focus" && (
                        <div className="flex flex-col items-center py-2 sm:py-4">
                          {/* Timer Ring */}
                          <div className="relative h-28 w-28 sm:h-36 sm:w-36 mb-4">
                            <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                              <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                              <circle cx="60" cy="60" r="52" fill="none" stroke="url(#focusGradient)" strokeWidth="8" strokeLinecap="round" strokeDasharray={`${0.72 * 326.7} ${326.7}`} />
                              <defs>
                                <linearGradient id="focusGradient" x1="0" y1="0" x2="1" y2="1">
                                  <stop offset="0%" stopColor="#F59E0B" />
                                  <stop offset="100%" stopColor="#EF4444" />
                                </linearGradient>
                              </defs>
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                              <span className="text-xl sm:text-2xl font-bold text-white font-mono">18:24</span>
                              <span className="text-[9px] sm:text-[10px] text-gray-400">remaining</span>
                            </div>
                          </div>
                          <span className="text-[10px] sm:text-xs font-medium text-[#F59E0B] mb-3">Focus Session Active</span>
                          <div className="flex items-center gap-3 mb-3">
                            <div className="rounded-lg bg-white/5 border border-white/5 px-3 py-1.5 text-[10px] text-gray-400">
                              <span className="text-white font-medium">3</span> / 4 sessions
                            </div>
                            <div className="rounded-lg bg-white/5 border border-white/5 px-3 py-1.5 text-[10px] text-gray-400">
                              <span className="text-white font-medium">72</span> min focused
                            </div>
                          </div>
                          <div className="flex gap-2 w-full max-w-[200px]">
                            {["twitter.com", "reddit.com", "youtube.com"].map((site) => (
                              <div key={site} className="flex-1 rounded bg-red-500/10 border border-red-500/20 px-1.5 py-1 text-center">
                                <span className="text-[7px] sm:text-[8px] text-red-400">🚫 {site.split(".")[0]}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {f.mockupKey === "stress" && (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] sm:text-xs font-medium text-white/70">Wellness Dashboard</span>
                            <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-[9px] font-medium text-green-400">Healthy</span>
                          </div>
                          {/* Gauge */}
                          <div className="flex items-center justify-center py-2">
                            <div className="relative h-20 w-40 sm:h-24 sm:w-48 overflow-hidden">
                              <svg className="w-full h-full" viewBox="0 0 200 110">
                                <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="12" strokeLinecap="round" />
                                <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="url(#stressGrad)" strokeWidth="12" strokeLinecap="round" strokeDasharray="251.3" strokeDashoffset="75.4" />
                                <defs>
                                  <linearGradient id="stressGrad" x1="0" y1="0" x2="1" y2="0">
                                    <stop offset="0%" stopColor="#10B981" />
                                    <stop offset="50%" stopColor="#F59E0B" />
                                    <stop offset="100%" stopColor="#EF4444" />
                                  </linearGradient>
                                </defs>
                                <text x="100" y="85" textAnchor="middle" fill="white" fontSize="26" fontWeight="bold">24</text>
                                <text x="100" y="100" textAnchor="middle" fill="#9CA3AF" fontSize="10">Stress Level</text>
                              </svg>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            {[
                              { label: "Workload", value: "Normal", icon: ListTodo, color: "text-green-400" },
                              { label: "Sleep Quality", value: "Good", icon: Heart, color: "text-[#06B6D4]" },
                              { label: "Task Velocity", value: "+12%", icon: TrendingUp, color: "text-green-400" },
                              { label: "Next Break", value: "45 min", icon: Clock, color: "text-yellow-400" },
                            ].map((m, j) => (
                              <div key={j} className="rounded-lg bg-white/[0.02] border border-white/5 p-2">
                                <div className="flex items-center gap-1 mb-1">
                                  <m.icon className="h-2.5 w-2.5 text-gray-500" />
                                  <span className="text-[8px] sm:text-[9px] text-gray-500">{m.label}</span>
                                </div>
                                <p className={`text-[11px] sm:text-xs font-medium ${m.color}`}>{m.value}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {f.mockupKey === "team" && (
                        <div className="space-y-2.5">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] sm:text-xs font-medium text-white/70">Team Board</span>
                            <div className="flex -space-x-1.5">
                              {[11, 25, 33, 44].map((id) => (
                                <img key={id} src={`https://i.pravatar.cc/40?img=${id}`} alt="" className="h-5 w-5 rounded-full border border-[#0F172A] object-cover" />
                              ))}
                              <div className="h-5 w-5 rounded-full bg-white/10 border border-[#0F172A] flex items-center justify-center text-[7px] text-gray-400">+3</div>
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-1.5">
                            {[
                              { col: "To Do", count: 4, color: "border-t-gray-500", tasks: ["API redesign", "User research"] },
                              { col: "In Progress", count: 3, color: "border-t-[#4F46E5]", tasks: ["Dashboard v2", "Auth flow"] },
                              { col: "Done", count: 7, color: "border-t-[#10B981]", tasks: ["Landing page", "CI pipeline"] },
                            ].map((column) => (
                              <div key={column.col} className={`rounded-lg bg-white/[0.02] border border-white/5 border-t-2 ${column.color} p-2`}>
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-[8px] sm:text-[9px] font-medium text-gray-400">{column.col}</span>
                                  <span className="text-[8px] text-gray-600">{column.count}</span>
                                </div>
                                <div className="space-y-1.5">
                                  {column.tasks.map((task) => (
                                    <div key={task} className="rounded bg-white/[0.03] border border-white/5 p-1.5">
                                      <p className="text-[8px] sm:text-[9px] text-gray-300 leading-tight">{task}</p>
                                      <div className="flex items-center gap-1 mt-1">
                                        <img src={`https://i.pravatar.cc/20?u=${task}`} alt="" className="h-3 w-3 rounded-full object-cover" />
                                        <div className="h-1 flex-1 rounded-full bg-white/5">
                                          <div className="h-1 rounded-full bg-linear-to-r from-[#4F46E5] to-[#06B6D4]" style={{ width: `${Math.random() * 60 + 30}%` }} />
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Tech Specs / Security ── */}
      <section className="py-24 bg-[#0B1120]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#06B6D4] mb-3">
              Technical Specifications
            </p>
            <h2 className="text-4xl font-bold text-white sm:text-5xl">
              Enterprise-grade{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#4F46E5] to-[#06B6D4]">
                security & performance
              </span>
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {techSpecs.map((t, i) => (
              <div key={i} className="rounded-2xl border border-white/5 bg-[#1E293B]/40 p-6 hover:border-white/10 transition-colors">
                <t.icon className="h-8 w-8 text-[#4F46E5] mb-4" />
                <h3 className="text-lg font-semibold text-white mb-1">{t.label}</h3>
                <p className="text-sm text-gray-400">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Integrations ── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#06B6D4] mb-3">
            Integrations
          </p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl mb-4">
            Works with your favorite tools
          </h2>
          <p className="text-gray-400 mb-12 max-w-xl mx-auto">
            NeuroFlow connects seamlessly with the tools you already use, so you never have to change your workflow.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 max-w-3xl mx-auto">
            {integrations.map((name) => (
              <div
                key={name}
                className="rounded-xl border border-white/5 bg-[#1E293B]/50 px-5 py-3 text-sm font-medium text-gray-300 hover:border-white/10 hover:bg-[#1E293B]/80 transition-all"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="py-24 bg-[#0B1120]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#06B6D4] mb-3">
              Use Cases
            </p>
            <h2 className="text-4xl font-bold text-white sm:text-5xl">
              Built for{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#4F46E5] to-[#06B6D4]">
                every workflow
              </span>
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((u, i) => (
              <div key={i} className="rounded-2xl border border-white/5 bg-[#1E293B]/40 p-8 hover:border-white/10 transition-colors group">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ${u.gradient} mb-5 shadow-lg`}>
                  <u.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{u.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{u.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold text-white sm:text-5xl mb-6">
            Experience the future of productivity
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            Start your free trial today and see why thousands of professionals trust NeuroFlow AI to do their best work.
          </p>
          <Link
            href="/pricing"
            className="group inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-[#4F46E5] to-[#06B6D4] px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all hover:scale-[1.02]"
          >
            Start Free Trial
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}
