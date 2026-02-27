import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-[#0B1120] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#4F46E5]/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-[#06B6D4]/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
          Ready to unlock your{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#4F46E5] to-[#06B6D4]">
            full potential?
          </span>
        </h2>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
          Join 12,000+ students, developers, and professionals who are already working smarter with NeuroFlow AI. Start free — no credit card required.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/pricing"
            className="group inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-[#4F46E5] to-[#06B6D4] px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Get Started Free
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all"
          >
            Talk to Sales
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Free 14-day trial
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            No credit card required
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Cancel anytime
          </span>
        </div>
      </div>
    </section>
  );
}
