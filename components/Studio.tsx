"use client";

import { Reveal } from "./motion/Reveal";

const principles = [
  {
    n: "01",
    title: "Domain before model",
    body: "We start with the actual problem inside the business — the machine shop, the engineering bench, the product backlog. The AI fits the work, not the other way around.",
  },
  {
    n: "02",
    title: "Ship the smallest useful thing",
    body: "Every product begins as a focused tool one person can use today. We earn the right to expand by being indispensable at one thing first.",
  },
  {
    n: "03",
    title: "Boring reliability over flashy demos",
    body: "Real businesses adopt tools that work the tenth time as well as the first. We design for the long Tuesday afternoon, not the launch tweet.",
  },
  {
    n: "04",
    title: "Built by the operator",
    body: "Every app in the portfolio was built by someone who has worked the problem it solves — not theorised about it from a slide deck.",
  },
];

export function Studio() {
  return (
    <section
      id="studio"
      className="relative border-t border-ink-900/[0.08] bg-slate-50 py-28 md:py-40"
    >
      <div className="container-page grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-6 bg-gold-500/60" /> The Studio
            </p>
            <h2 className="mt-5 text-display-lg font-medium text-balance text-ink-900">
              An applied-AI studio for{" "}
              <span className="font-display italic text-gold-shine">
                businesses that build things.
              </span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-ink-700">
              Smart Business AI is a small, sharp studio. We design, build and
              ship intelligent software for engineering, manufacturing and
              product teams — and we use the same tools we sell.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-700">
              Every product in the portfolio is built end-to-end inside the
              studio: research, design, code, deployment and the long tail of
              iteration. No outsourced layers. No throwaway prototypes
              dressed up as products.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-ink-900/[0.08] bg-ink-900/[0.05] md:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal
              key={p.n}
              delay={i * 0.08}
              className="bg-white p-8 md:p-10"
            >
              <div className="font-mono text-xs uppercase tracking-[0.22em] text-gold-600">
                {p.n}
              </div>
              <h3 className="mt-4 font-display text-2xl text-ink-900">
                {p.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-700">
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
