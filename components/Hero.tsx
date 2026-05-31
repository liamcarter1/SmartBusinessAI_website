"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { apps } from "@/lib/apps";

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-[8%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gold-300/20 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="absolute right-[8%] top-[40%] h-[300px] w-[300px] rounded-full bg-blue-400/15 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="absolute left-[5%] top-[55%] h-[260px] w-[260px] rounded-full bg-gold-200/15 blur-[100px]"
        aria-hidden="true"
      />

      <div className="container-page relative">
        {/* Logo as eyebrow */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-14 flex justify-center"
        >
          <Image
            src="/smartbusinessAI_logo-removebg-preview.png"
            alt="Smart Business AI"
            width={703}
            height={355}
            priority
            className="h-24 w-auto md:h-32"
          />
        </motion.div>

        <motion.h1
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.15 }}
          className="mx-auto max-w-5xl text-center text-display-2xl font-medium text-balance"
        >
          <span className="text-navy-shine">Intelligent tools,</span>
          <br />
          <span className="font-display italic text-gold-shine">
            crafted for the work that matters.
          </span>
        </motion.h1>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.3 }}
          className="mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-ink-700 text-balance md:text-xl"
        >
          Smart Business AI is an applied-AI studio designing and shipping
          software for engineering, manufacturing and product teams — the kind
          of tools that quietly compound advantage.
        </motion.p>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.45 }}
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

        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-ink-600"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
          Now shipping {apps.length} AI products
        </motion.div>

        {/* Stat row */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.75 }}
          className="mx-auto mt-24 grid max-w-3xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-ink-900/[0.08] bg-ink-900/[0.03]"
        >
          {[
            { k: `${apps.length}`, l: "Products shipped" },
            { k: "100%", l: "Built in-house" },
            { k: "∞", l: "Iteration loops" },
          ].map((s) => (
            <div key={s.l} className="bg-white px-6 py-6 text-center">
              <div className="font-display text-4xl text-navy-700 md:text-5xl">
                {s.k}
              </div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-600">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
