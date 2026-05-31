"use client";

import { motion } from "framer-motion";
import { type App } from "@/lib/apps";

/**
 * Placeholder app mockup — abstract UI inside a browser chrome.
 * Replace by setting App.screenshot to a real /public path; this
 * component will render the image when the file exists.
 */
export function AppMockup({ app, index = 0 }: { app: App; index?: number }) {
  const tone =
    app.accent === "gold"
      ? "from-gold-300/30 to-gold-500/10"
      : app.accent === "blue"
      ? "from-blue-400/30 to-blue-700/10"
      : "from-slate-300/20 to-slate-500/10";

  return (
    <div className="relative">
      {/* Glow */}
      <div
        className={`absolute -inset-8 rounded-[2rem] bg-gradient-to-br ${tone} opacity-60 blur-3xl`}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative overflow-hidden rounded-2xl border border-white/[0.10] bg-ink-900/80 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)] backdrop-blur-xl"
      >
        {/* Browser chrome */}
        <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          </div>
          <div className="rounded-md bg-white/[0.04] px-3 py-1 text-[11px] font-mono text-slate-400">
            {app.slug}.smartbusinessai.co.uk
          </div>
          <div className="h-2.5 w-2.5" />
        </div>

        {/* Mocked content */}
        <div className="relative aspect-[16/10] overflow-hidden bg-ink-950">
          <div
            className="absolute inset-0 grid-bg opacity-50"
            aria-hidden="true"
          />
          <div
            className={`absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gradient-to-br ${tone} opacity-40 blur-3xl`}
            aria-hidden="true"
          />

          <div className="relative grid h-full grid-cols-[180px_1fr] gap-px bg-white/[0.04]">
            {/* Sidebar */}
            <div className="bg-ink-900 p-4">
              <div className="mb-4 h-2 w-12 rounded-full bg-white/10" />
              <div className="space-y-2">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`h-6 rounded-md ${
                      i === index % 5
                        ? "bg-gold-300/20 border border-gold-300/30"
                        : "bg-white/[0.03]"
                    }`}
                  />
                ))}
              </div>
              <div className="mt-6 space-y-1.5">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="h-1.5 w-full rounded-full bg-white/[0.04]" />
                ))}
              </div>
            </div>

            {/* Main */}
            <div className="bg-ink-900/60 p-5">
              <div className="mb-3 flex items-center justify-between">
                <div className="h-3 w-24 rounded-full bg-white/10" />
                <div className="flex gap-1.5">
                  <div className="h-5 w-12 rounded-md bg-white/[0.06]" />
                  <div className="h-5 w-12 rounded-md bg-gold-300/30" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3"
                  >
                    <div className="mb-2 h-1.5 w-8 rounded-full bg-white/10" />
                    <div className="h-4 w-12 rounded-full bg-white/[0.10]" />
                  </div>
                ))}
              </div>

              <div className="mt-3 rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                <div className="mb-2 flex items-center gap-2">
                  <div className="h-1.5 w-12 rounded-full bg-gold-300/40" />
                  <div className="h-1.5 w-20 rounded-full bg-white/[0.06]" />
                </div>
                <div className="flex items-end gap-1">
                  {[
                    "h-8",
                    "h-12",
                    "h-6",
                    "h-16",
                    "h-10",
                    "h-14",
                    "h-9",
                    "h-12",
                    "h-7",
                    "h-16",
                    "h-11",
                    "h-13",
                  ].map((h, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-sm ${h} ${
                        i % 3 === index % 3
                          ? "bg-gradient-to-t from-gold-500/60 to-gold-300/80"
                          : "bg-white/[0.08]"
                      }`}
                      style={{ height: `${20 + ((i * 7 + index * 11) % 32)}px` }}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-3 flex gap-2">
                <div className="h-6 flex-1 rounded-md bg-white/[0.04]" />
                <div className="h-6 w-20 rounded-md bg-gold-300/30" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
