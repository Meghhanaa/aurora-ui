"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-20 md:pt-32 md:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.16),transparent_60%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.12),transparent_55%)]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-4 md:flex-row md:items-center md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-slate-950/60 px-3 py-1 text-xs font-medium text-indigo-200 shadow-sm shadow-indigo-500/30 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Trusted by teams shipping fast UIs
          </div>

          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Design{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">
              world‑class
            </span>{" "}
            landing pages in minutes, not weeks.
          </h1>

          <p className="text-pretty text-base text-slate-300 sm:text-lg">
            Aurora UI gives you a production‑ready Next.js starter with
            handcrafted components, motion, and dark mode so you can focus on
            your product, not boilerplate.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-indigo-500/40 transition hover:translate-y-0.5 hover:shadow-indigo-500/60"
            >
              Start free
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600/70 bg-slate-900/60 px-5 py-3 text-sm font-medium text-slate-200 shadow-sm transition hover:border-indigo-400/70 hover:text-indigo-200"
            >
              <PlayCircle className="h-4 w-4" />
              Watch how it works
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-400 sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="h-5 w-5 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-500 opacity-80" />
              <span>Next.js 14 App Router</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-5 w-5 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-400 opacity-80" />
              <span>Tailwind CSS + Framer Motion</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mx-auto w-full max-w-md md:max-w-lg"
        >
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-500/30 blur-3xl" />
          <div className="absolute -left-6 -bottom-10 h-40 w-40 rounded-full bg-sky-400/25 blur-3xl" />

          <div className="relative rounded-3xl border border-white/10 bg-slate-950/60 p-4 shadow-2xl shadow-slate-950/80 backdrop-blur">
            <div className="flex items-center gap-1 pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-300">
                    Dashboard
                  </p>
                  <p className="mt-2 text-lg font-semibold text-slate-50">
                    Launch metrics
                  </p>
                </div>
                <div className="rounded-xl bg-slate-900/80 px-3 py-2 text-right text-xs text-slate-300">
                  <p className="text-[0.68rem] uppercase tracking-widest text-slate-400">
                    Conversion
                  </p>
                  <p className="text-base font-semibold text-emerald-300">
                    +42%
                  </p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3 text-xs text-slate-200">
                <div className="rounded-xl border border-white/5 bg-slate-900/70 p-3">
                  <p className="text-[0.7rem] text-slate-400">Bounce</p>
                  <p className="mt-1 text-base font-semibold">18%</p>
                  <p className="mt-1 text-[0.65rem] text-emerald-300">
                    -9% this week
                  </p>
                </div>
                <div className="rounded-xl border border-white/5 bg-slate-900/70 p-3">
                  <p className="text-[0.7rem] text-slate-400">Sessions</p>
                  <p className="mt-1 text-base font-semibold">24.3k</p>
                  <p className="mt-1 text-[0.65rem] text-emerald-300">
                    +3.4k
                  </p>
                </div>
                <div className="rounded-xl border border-white/5 bg-slate-900/70 p-3">
                  <p className="text-[0.7rem] text-slate-400">Time on page</p>
                  <p className="mt-1 text-base font-semibold">3m 21s</p>
                  <p className="mt-1 text-[0.65rem] text-sky-300">
                    +32% uplift
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-indigo-500/40 bg-gradient-to-r from-indigo-500/15 via-violet-500/15 to-sky-500/15 p-3 text-xs text-slate-100">
                <p className="font-medium">✨ Aurora optimization</p>
                <p className="mt-1 text-[0.7rem] text-slate-300">
                  Your landing page is performing better than{" "}
                  <span className="font-semibold text-indigo-200">
                    92% of similar sites
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
