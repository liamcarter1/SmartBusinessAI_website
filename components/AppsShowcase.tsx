"use client";

import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { type EnrichedApp } from "@/lib/apps.server";
import { AppMockup } from "./AppMockup";
import { Reveal, Stagger, StaggerItem } from "./motion/Reveal";
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

        {/* Bento grid summary */}
        <Stagger className="mt-16 grid gap-4 md:grid-cols-6">
          {apps.map((app, i) => (
            <StaggerItem
              key={app.slug}
              className={cn(
                "col-span-6",
                i % 5 === 0 || i % 5 === 4 ? "md:col-span-4" : "md:col-span-2"
              )}
            >
              <BentoCard app={app} index={i} />
            </StaggerItem>
          ))}
        </Stagger>

        {/* Detailed showcase rows */}
        <div className="mt-32 space-y-32 md:space-y-40">
          {apps.map((app, i) => (
            <AppDetailRow key={app.slug} app={app} index={i} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BentoCard({ app, index }: { app: EnrichedApp; index: number }) {
  const tone =
    app.accent === "gold"
      ? "from-gold-200/30 to-transparent"
      : app.accent === "blue"
      ? "from-blue-300/20 to-transparent"
      : "from-slate-300/20 to-transparent";

  return (
    <Link
      href={`/apps/${app.slug}`}
      className="glass-panel glass-panel-hover group block h-full p-6 cursor-pointer"
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${tone} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
        aria-hidden="true"
      />

      <div className="relative flex h-full flex-col">
        <div className="mb-6 flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-widest text-ink-500">
            0{index + 1}
          </span>
          <StatusPill status={app.status} />
        </div>

        <h3 className="font-display text-2xl text-ink-900 md:text-3xl">
          {app.name}
        </h3>
        <p className="mt-2 text-sm text-ink-500">{app.category}</p>

        <p className="mt-4 text-[15px] leading-relaxed text-ink-700">
          {app.tagline}
        </p>

        <div className="mt-auto flex items-center justify-between pt-8">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-ink-500 transition-colors duration-300 group-hover:text-gold-600">
            View product
          </span>
          <ArrowUpRight className="h-4 w-4 text-ink-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-600" />
        </div>
      </div>
    </Link>
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
            <span className="font-mono text-xs uppercase tracking-widest text-gold-600">
              0{index + 1}
            </span>
            <span className="h-px flex-1 max-w-12 bg-gold-500/40" />
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
          <p className="font-display text-xl italic text-gold-600 md:text-2xl">
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
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
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

function StatusPill({ status }: { status: string }) {
  const color =
    status === "Live"
      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
      : status === "Beta"
      ? "bg-gold-50 text-gold-700 border-gold-200"
      : "bg-slate-100 text-ink-600 border-ink-900/10";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider ${color}`}
    >
      <span className="h-1 w-1 rounded-full bg-current" />
      {status}
    </span>
  );
}
