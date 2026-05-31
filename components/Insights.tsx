"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { type PostMeta } from "@/lib/posts.server";
import { Reveal, Stagger, StaggerItem } from "./motion/Reveal";

export function Insights({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) return null;

  return (
    <section
      id="insights"
      className="relative border-t border-ink-900/[0.08] py-28 md:py-40"
    >
      <div className="container-page">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="eyebrow">
              <span className="h-px w-6 bg-gold-500/60" /> Insights
            </p>
            <h2 className="mt-5 text-display-lg font-medium text-balance text-ink-900">
              Notes from the build floor.
            </h2>
          </div>
          <Link href="/blog" className="group btn-ghost">
            All writing
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <Stagger className="mt-16 grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <StaggerItem key={p.slug}>
              <Link
                href={`/blog/${p.slug}`}
                className="glass-panel glass-panel-hover group block h-full p-7 cursor-pointer"
              >
                <div className="flex items-center justify-between text-xs text-ink-500">
                  <span className="font-mono uppercase tracking-widest text-gold-600">
                    {p.category}
                  </span>
                  <time dateTime={p.date}>
                    {new Date(p.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                </div>

                <h3 className="mt-6 font-display text-2xl leading-tight text-ink-900 transition-colors duration-300 group-hover:text-gold-700">
                  {p.title}
                </h3>

                <p className="mt-3 text-[15px] leading-relaxed text-ink-600">
                  {p.excerpt}
                </p>

                <div className="mt-8 flex items-center justify-between text-xs text-ink-500">
                  <span>{p.readingTime} read</span>
                  <span className="inline-flex items-center gap-1 transition-colors duration-300 group-hover:text-gold-600">
                    Read
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
