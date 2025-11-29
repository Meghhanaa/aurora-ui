"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/5 bg-slate-950/95 py-20"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="grid gap-10 md:grid-cols-[1.1fr,1.2fr] md:items-center"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-400">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Ready to present this in your next interview?
            </h2>
            <p className="mt-3 text-sm text-slate-300 md:text-base">
              Use this section as a simple contact form or call‑to‑action
              that routes people to your email or WhatsApp. For the
              assignment, it clearly demonstrates a functional contact area.
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-indigo-300" />
                your.email@example.com
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-emerald-300" />
                +91-90000-00000
              </p>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-2xl border border-white/8 bg-slate-900/80 p-6 text-sm shadow-lg shadow-slate-950/60"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-xs font-medium text-slate-200">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none ring-0 transition placeholder:text-slate-500 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-200">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none ring-0 transition placeholder:text-slate-500 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="text-xs font-medium text-slate-200">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your project or how you plan to use this template…"
                className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none ring-0 transition placeholder:text-slate-500 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-indigo-500/40 transition hover:shadow-indigo-500/60"
            >
              Send message
            </button>

            <p className="mt-3 text-[0.68rem] text-slate-400">
              This form is client‑side only for the assignment. In a real
              project, you could connect it to an API route, email service,
              or WhatsApp deep link.
            </p>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
