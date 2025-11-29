"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    q: "Is Aurora UI suitable for interview take‑home assignments?",
    a: "Yes. It is intentionally structured and documented so you can explain your decisions clearly during interviews."
  },
  {
    q: "Can I customise the design?",
    a: "Absolutely. The layout uses Tailwind utility classes so you can quickly adjust spacing, colors, and typography."
  },
  {
    q: "Does it work with Vercel?",
    a: "Yes. The project is optimised for Vercel with Next.js 14 and can be deployed with a single command."
  },
  {
    q: "Do I need to know Framer Motion?",
    a: "No. Motion is added with small, focused snippets that you can keep, tweak, or remove as needed."
  }
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="border-t border-white/5 bg-slate-950/80 py-18 py-20"
    >
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Answers to common questions.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
            If you&apos;re presenting this in an interview, you&apos;ll have
            good talking points about structure, UI quality, and DX.
          </p>
        </motion.div>

        <div className="mt-8 space-y-4">
          {faqs.map((item, index) => (
            <motion.details
              key={item.q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.03 * index }}
              className="group rounded-2xl border border-white/5 bg-slate-900/70 p-4 text-sm shadow-sm shadow-slate-950/40 open:border-sky-400/80"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-slate-100">
                <span>{item.q}</span>
                <span className="text-xs text-slate-400 group-open:hidden">
                  +
                </span>
                <span className="hidden text-xs text-slate-400 group-open:inline">
                  −
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {item.a}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
