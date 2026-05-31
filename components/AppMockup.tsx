"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { type App } from "@/lib/apps";
import { type AppMedia } from "@/lib/apps.server";

export function AppMockup({
  app,
  media,
  index = 0,
  priority = false,
}: {
  app: App;
  media?: AppMedia;
  index?: number;
  priority?: boolean;
}) {
  const tone =
    app.accent === "gold"
      ? "from-gold-300/40 to-gold-500/10"
      : app.accent === "blue"
      ? "from-blue-300/30 to-blue-500/10"
      : "from-slate-300/30 to-slate-500/10";

  const hasVideo = !!media?.videoSrc;
  const hasImage = !!media?.screenshotSrc;

  return (
    <div className="relative">
      {/* Outer glow */}
      <div
        className={`absolute -inset-8 rounded-[2rem] bg-gradient-to-br ${tone} opacity-70 blur-3xl`}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative overflow-hidden rounded-2xl border border-ink-900/[0.10] bg-white shadow-[0_40px_80px_-30px_rgba(10,14,26,0.25),0_4px_12px_-4px_rgba(10,14,26,0.08)]"
      >
        {/* Browser chrome */}
        <div className="flex items-center justify-between border-b border-ink-900/[0.06] bg-slate-50 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-ink-900/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-900/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-900/10" />
          </div>
          <div className="rounded-md bg-white px-3 py-1 text-[11px] font-mono text-ink-500 ring-1 ring-inset ring-ink-900/[0.06]">
            {app.slug}.smartbusinessai.co.uk
          </div>
          <div className="h-2.5 w-2.5" />
        </div>

        {/* Content surface */}
        <div className="relative aspect-[16/10] overflow-hidden bg-white">
          {hasVideo ? (
            <video
              src={media!.videoSrc!}
              poster={media!.screenshotSrc ?? undefined}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
              aria-label={media!.screenshotAlt}
            />
          ) : hasImage ? (
            <Image
              src={media!.screenshotSrc!}
              alt={media!.screenshotAlt}
              fill
              priority={priority}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          ) : (
            <PlaceholderUI tone={tone} index={index} />
          )}
        </div>
      </motion.div>
    </div>
  );
}

function PlaceholderUI({ tone, index }: { tone: string; index: number }) {
  return (
    <>
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
      <div
        className={`absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gradient-to-br ${tone} opacity-50 blur-3xl`}
        aria-hidden="true"
      />

      <div className="relative grid h-full grid-cols-[180px_1fr] gap-px bg-ink-900/[0.05]">
        {/* Sidebar */}
        <div className="bg-slate-50 p-4">
          <div className="mb-4 h-2 w-12 rounded-full bg-ink-900/15" />
          <div className="space-y-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`h-6 rounded-md ${
                  i === index % 5
                    ? "bg-gold-200/60 border border-gold-400/40"
                    : "bg-white"
                }`}
              />
            ))}
          </div>
          <div className="mt-6 space-y-1.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-1.5 w-full rounded-full bg-ink-900/[0.08]" />
            ))}
          </div>
        </div>

        {/* Main */}
        <div className="bg-white p-5">
          <div className="mb-3 flex items-center justify-between">
            <div className="h-3 w-24 rounded-full bg-ink-900/15" />
            <div className="flex gap-1.5">
              <div className="h-5 w-12 rounded-md bg-ink-900/[0.06]" />
              <div className="h-5 w-12 rounded-md bg-gold-300/60" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="rounded-lg border border-ink-900/[0.08] bg-slate-50 p-3"
              >
                <div className="mb-2 h-1.5 w-8 rounded-full bg-ink-900/15" />
                <div className="h-4 w-12 rounded-full bg-ink-900/[0.10]" />
              </div>
            ))}
          </div>

          <div className="mt-3 rounded-lg border border-ink-900/[0.08] bg-slate-50 p-3">
            <div className="mb-2 flex items-center gap-2">
              <div className="h-1.5 w-12 rounded-full bg-gold-500/60" />
              <div className="h-1.5 w-20 rounded-full bg-ink-900/[0.10]" />
            </div>
            <div className="flex items-end gap-1">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-sm ${
                    i % 3 === index % 3
                      ? "bg-gradient-to-t from-gold-500 to-gold-300"
                      : "bg-ink-900/[0.12]"
                  }`}
                  style={{ height: `${20 + ((i * 7 + index * 11) % 32)}px` }}
                />
              ))}
            </div>
          </div>

          <div className="mt-3 flex gap-2">
            <div className="h-6 flex-1 rounded-md bg-ink-900/[0.06]" />
            <div className="h-6 w-20 rounded-md bg-gold-300/60" />
          </div>
        </div>
      </div>
    </>
  );
}
