export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950 py-10 text-xs text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 to-violet-500 text-[0.7rem] font-semibold text-white">
              AU
            </div>
            <span className="text-sm font-semibold text-slate-100">
              Aurora <span className="text-indigo-400">UI</span>
            </span>
          </div>
          <p className="max-w-sm text-[0.72rem] text-slate-400">
            A modern, interview‑ready landing page template built with
            Next.js 14, Tailwind CSS, and Framer Motion.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-[0.75rem]">
          <div className="space-y-1">
            <p className="font-medium text-slate-200">Links</p>
            <div className="flex gap-3">
              <a href="#features" className="hover:text-indigo-300">
                Features
              </a>
              <a href="#pricing" className="hover:text-indigo-300">
                Pricing
              </a>
              <a href="#faq" className="hover:text-indigo-300">
                FAQ
              </a>
              <a href="#contact" className="hover:text-indigo-300">
                Contact
              </a>
            </div>
          </div>

          <div className="space-y-1">
            <p className="font-medium text-slate-200">Social</p>
            <div className="flex gap-3">
              <span>Twitter</span>
              <span>LinkedIn</span>
              <span>GitHub</span>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-6 text-center text-[0.7rem] text-slate-500">
        © {new Date().getFullYear()} Aurora UI. All rights reserved.
      </p>
    </footer>
  );
}
