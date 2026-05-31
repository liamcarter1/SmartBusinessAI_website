"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Sparkles } from "lucide-react";
import { apps } from "@/lib/apps";

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden pt-36 pb-28 md:pt-44 md:pb-40">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg" aria-hidden="true" />
      <div
        className="absolute inset-x-0 top-0 h-[600px] bg-ink-radial"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 top-[10%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gold-300/[0.08] blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="absolute right-[5%] top-[40%] h-[300px] w-[300px] rounded-full bg-blue-500/[0.08] blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-8 flex items-center justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-slate-300 backdrop-blur">
            <Sparkles className="h-3 w-3 text-gold-300" />
            <span>Now shipping {apps.length} AI products</span>
            <span className="ml-1 h-1 w-1 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          </span>
        </motion.div>

        <motion.h1
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.1 }}
          className="mx-auto max-w-5xl text-center text-display-2xl font-medium text-balance"
        >
          <span className="text-slate-50">Intelligent tools,</span>
          <br />
          <span className="font-display italic text-gold-shine">
            crafted for the work that matters.
          </span>
        </motion.h1>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.25 }}
          className="mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-slate-300 text-balance md:text-xl"
        >
          Smart Business AI is an applied-AI studio designing and shipping
          software for engineering, manufacturing and product teams — the kind
          of tools that quietly compound advantage.
        </motion.p>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link href="#apps" className="group btn-primary">
            See the apps
            <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </Link>
          <Link href="#contact" className="group btn-secondary">
            Start a project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        {/* Stat row */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.6 }}
          className="mx-auto mt-24 grid max-w-3xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur"
        >
          {[
            { k: `${apps.length}`, l: "Products shipped" },
            { k: "100%", l: "Built in-house" },
            { k: "∞", l: "Iteration loops" },
          ].map((s) => (
            <div
              key={s.l}
              className="bg-ink-900/40 px-6 py-6 text-center"
            >
              <div className="font-display text-4xl text-slate-50 md:text-5xl">
                {s.k}
              </div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
