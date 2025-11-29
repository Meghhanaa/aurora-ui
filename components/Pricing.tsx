"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    tagline: "Perfect for hackathons and personal projects.",
    popular: false,
    cta: "Start for free",
    features: [
      "Next.js 14 App Router setup",
      "Core landing page sections",
      "Email support within 72 hours"
    ]
  },
  {
    name: "Pro",
    price: "₹499 / month",
    tagline: "For teams shipping polished marketing sites.",
    popular: true,
    cta: "Upgrade to Pro",
    features: [
      "Everything in Starter",
      "Extended component library",
      "Advanced motion presets",
      "Priority email support"
    ]
  },
  {
    name: "Enterprise",
    price: "Let&apos;s talk",
    tagline: "For product teams with custom requirements.",
    popular: false,
    cta: "Contact sales",
    features: [
      "Design & implementation review",
      "Custom sections & integrations",
      "Dedicated Slack channel",
      "Uptime & performance reports"
    ]
  }
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative border-t border-white/5 bg-slate-950/90 py-20"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Simple plans for serious builders.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
            Start for free, then upgrade when you&apos;re ready to launch at
            scale. No hidden fees, ever.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.06 * index }}
              className={`relative flex flex-col rounded-2xl border bg-slate-950/70 p-6 text-sm shadow-lg shadow-slate-950/50 ${
                plan.popular
                  ? "border-violet-400/80 ring-2 ring-violet-500/70"
                  : "border-white/8"
              }`}
            >
              {plan.popular && (
                <div className="absolute inset-x-6 -top-4 flex justify-center">
                  <span className="inline-flex items-center rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-3 py-1 text-[0.7rem] font-semibold text-white shadow-md shadow-violet-500/40">
                    Most popular
                  </span>
                </div>
              )}

              <div className="mt-1">
                <h3 className="text-base font-semibold text-slate-50">
                  {plan.name}
                </h3>
                <p className="mt-2 text-xs text-slate-300">{plan.tagline}</p>
                <p className="mt-4 text-2xl font-semibold text-slate-50">
                  {plan.price}
                </p>
              </div>

              <ul className="mt-5 space-y-2 text-xs text-slate-200">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <a
                  href="#contact"
                  className={`inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-xs font-semibold transition ${
                    plan.popular
                      ? "bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-lg shadow-violet-500/40 hover:shadow-violet-500/60"
                      : "border border-white/10 bg-slate-900/70 text-slate-100 hover:border-violet-400/70 hover:text-violet-100"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
