"use client";

import { motion } from "framer-motion";
import { Code2, Gauge, ShieldCheck, Zap } from "lucide-react";

const features = [
  {
    icon: Gauge,
    title: "Blazing performance",
    description:
      "Optimized by default for Core Web Vitals with Next.js 14, Image, and font optimizations."
  },
  {
    icon: Code2,
    title: "Beautiful code",
    description:
      "App Router, server components, and a clean file structure keep your project maintainable."
  },
  {
    icon: ShieldCheck,
    title: "Production‑ready",
    description:
      "Built-in dark mode, accessibility-minded components, and responsive layouts from day one."
  },
  {
    icon: Zap,
    title: "Delightful motion",
    description:
      "Framer Motion micro‑interactions make your interface feel alive without being overwhelming."
  }
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative border-t border-white/5 bg-slate-950/70 py-20"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-400">
            Features
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Everything you need to ship a{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-sky-300 bg-clip-text text-transparent">
              premium
            </span>{" "}
            landing page.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
            Handcrafted components, smart defaults, and a layout that just
            works on every screen size.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="group rounded-2xl border border-white/5 bg-slate-900/60 p-5 shadow-md shadow-slate-950/40 transition hover:-translate-y-1 hover:border-indigo-400/70 hover:shadow-xl hover:shadow-indigo-500/30"
              >
                <div className="inline-flex rounded-xl bg-indigo-500/15 p-2 text-indigo-300 ring-1 ring-indigo-500/30">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-50">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
