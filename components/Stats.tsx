"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Faster build setup", value: "10×" },
  { label: "Time saved per launch", value: "24h" },
  { label: "Average uplift in conversions", value: "+32%" },
  { label: "Developer satisfaction", value: "9.6/10" }
];

export default function Stats() {
  return (
    <section className="border-t border-white/5 bg-slate-950/90 py-14">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 md:grid-cols-[1.2fr,1.6fr] md:items-center"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
              Proven impact
            </p>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              Launch faster without compromising on polish.
            </h2>
            <p className="mt-3 text-sm text-slate-300 md:text-base">
              Aurora UI keeps your stack opinionated but flexible, so you can
              deliver experiences your users love while still hitting your
              deadlines.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/5 bg-slate-900/70 px-4 py-4 text-sm shadow-sm shadow-slate-950/40"
              >
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  {stat.label}
                </p>
                <p className="mt-2 text-2xl font-semibold text-sky-300">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
