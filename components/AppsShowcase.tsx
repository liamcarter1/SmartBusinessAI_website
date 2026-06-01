"use client";

import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { type EnrichedApp } from "@/lib/apps.server";
import { AppMockup } from "./AppMockup";
import { Reveal } from "./motion/Reveal";
import { cn } from "@/lib/utils";

export function AppsShowcase({ apps }: { apps: EnrichedApp[] }) {
  return (
    <section id="apps" className="relative py-28 md:py-40">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">
            <span className="h-px w-6 bg-gold-500/60" /> The Portfolio
          </p>
          <h2 className="mt-5 text-display-lg font-medium text-balance text-ink-900">
            {apps.length} apps in production.{" "}
            <span className="font-display italic text-ink-500">
              Each one solving a real, often unsexy, business problem.
            </span>
          </h2>
        </Reveal>

        <div className="mt-24 space-y-32 md:mt-32 md:space-y-40">
          {apps.map((app, i) => (
            <AppDetailRow key={app.slug} app={app} index={i} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AppDetailRow({
  app,
  index,
  reverse,
}: {
  app: EnrichedApp;
  index: number;
  reverse: boolean;
}) {
  return (
    <article
      id={app.slug}
      className="scroll-mt-32 grid items-center gap-12 md:gap-20 lg:grid-cols-2"
    >
      <div className={cn("space-y-6", reverse && "lg:order-2")}>
        <Reveal>
          <div className="flex items-center gap-3">
            <span
              className={`font-mono text-xs uppercase tracking-widest ${
                index % 2 === 0 ? "text-gold-600" : "text-navy-600"
              }`}
            >
              0{index + 1}
            </span>
            <span
              className={`h-px flex-1 max-w-12 ${
                index % 2 === 0 ? "bg-gold-500/40" : "bg-navy-500/40"
              }`}
            />
            <span className="text-xs uppercase tracking-[0.18em] text-ink-500">
              {app.category}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="text-display-lg font-medium text-balance text-ink-900">
            {app.name}
          </h3>
        </Reveal>

        <Reveal delay={0.15}>
          <p
            className={`font-display text-xl italic md:text-2xl ${
              index % 2 === 0 ? "text-gold-600" : "text-navy-600"
            }`}
          >
            {app.tagline}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-[17px] leading-relaxed text-ink-700">
            {app.longDescription}
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <ul className="space-y-3 pt-2">
            {app.features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-3 text-ink-700"
              >
                <span
                  className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                    index % 2 === 0 ? "bg-gold-500" : "bg-navy-600"
                  }`}
                />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <Link href={app.demoUrl} className="group btn-primary">
              <Play className="h-3.5 w-3.5 fill-current" />
              Try the demo
            </Link>
            <Link href={`/apps/${app.slug}`} className="group btn-secondary">
              Read more
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>

      <div className={cn(reverse && "lg:order-1")}>
        <AppMockup app={app} media={app.media} index={index} />
      </div>
    </article>
  );
}
