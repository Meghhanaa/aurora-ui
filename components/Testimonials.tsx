"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Founding Engineer, Flowcast",
    text: "We rebuilt our marketing site with Aurora UI in a weekend and immediately saw an uplift in signups."
  },
  {
    name: "Priya Sharma",
    role: "Product Designer, Nova",
    text: "The layout feels premium out of the box. Small touches like motion and gradients make a huge difference."
  },
  {
    name: "Rohan Gupta",
    role: "Full‑stack Developer, Lumos",
    text: "The structure is clean, components are reusable, and deployment to Vercel was frictionless."
  }
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="border-t border-white/5 bg-slate-950/80 py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-400">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Teams who ship fast love Aurora.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
            Here&apos;s what other builders say after switching to a modern
            Next.js + Tailwind starter.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.05 * index }}
              className="relative overflow-hidden rounded-2xl border border-white/5 bg-slate-900/70 p-5 text-sm shadow-md shadow-slate-950/40"
            >
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-br from-indigo-500/20 via-sky-400/10 to-transparent" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-400 to-sky-400 text-xs font-semibold text-slate-950">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-50">
                      {t.name}
                    </p>
                    <p className="text-[0.7rem] text-slate-400">{t.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-200">
                  “{t.text}”
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
