import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Play, CheckCircle2 } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { AppMockup } from "@/components/AppMockup";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { apps } from "@/lib/apps";
import { getAppBySlug, getApps } from "@/lib/apps.server";

export function generateStaticParams() {
  return apps.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const app = getAppBySlug(params.slug);
  if (!app) return {};
  return {
    title: app.name,
    description: app.description,
    openGraph: {
      title: app.name,
      description: app.description,
      images: app.media.screenshotSrc ? [app.media.screenshotSrc] : undefined,
    },
  };
}

export default function AppDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const app = getAppBySlug(params.slug);
  if (!app) notFound();

  const allApps = getApps();
  const related = allApps.filter((a) => a.slug !== app.slug).slice(0, 3);
  const index = apps.findIndex((a) => a.slug === app.slug);

  return (
    <>
      <Nav />
      <main className="relative">
        {/* Hero */}
        <section className="relative isolate overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
          <div className="absolute inset-0 grid-bg" aria-hidden="true" />
          <div
            className="absolute left-1/2 top-[10%] h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-gold-300/20 blur-[120px]"
            aria-hidden="true"
          />

          <div className="container-page relative">
            <Reveal>
              <Link
                href="/#apps"
                className="inline-flex items-center gap-2 text-sm text-ink-600 hover:text-gold-600 transition-colors cursor-pointer"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                All apps
              </Link>
            </Reveal>

            <div className="mt-10 grid items-center gap-16 lg:grid-cols-[1.1fr_1.4fr] lg:gap-20">
              <div>
                <Reveal>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-widest text-gold-600">
                      0{index + 1} / 0{apps.length}
                    </span>
                    <span className="h-px flex-1 max-w-12 bg-gold-500/40" />
                    <StatusPill status={app.status} />
                  </div>
                </Reveal>

                <Reveal delay={0.1}>
                  <h1 className="mt-6 text-display-xl font-medium text-balance text-ink-900">
                    {app.name}
                  </h1>
                </Reveal>

                <Reveal delay={0.15}>
                  <p className="mt-6 font-display text-2xl italic text-gold-shine md:text-3xl">
                    {app.tagline}
                  </p>
                </Reveal>

                <Reveal delay={0.2}>
                  <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-500">
                    {app.category}
                  </p>
                </Reveal>

                <Reveal delay={0.25}>
                  <div className="mt-10 flex flex-wrap items-center gap-3">
                    <Link href={app.demoUrl} className="group btn-primary">
                      <Play className="h-3.5 w-3.5 fill-current" />
                      Try the demo
                    </Link>
                    <Link href={app.externalUrl} className="group btn-secondary">
                      Open app
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.2}>
                <AppMockup
                  app={app}
                  media={app.media}
                  index={index}
                  priority
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* About + Features */}
        <section className="relative border-t border-ink-900/[0.08] bg-slate-50 py-24 md:py-32">
          <div className="container-page grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
            <Reveal>
              <p className="eyebrow">
                <span className="h-px w-6 bg-gold-500/60" /> What it does
              </p>
              <h2 className="mt-5 text-display-lg font-medium text-balance text-ink-900">
                Built for the people doing the work.
              </h2>
            </Reveal>

            <div className="space-y-12">
              <Reveal delay={0.1}>
                <p className="text-xl leading-relaxed text-ink-800">
                  {app.longDescription}
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-ink-600">
                  Key capabilities
                </h3>
              </Reveal>

              <Stagger className="grid gap-px overflow-hidden rounded-2xl border border-ink-900/[0.08] bg-ink-900/[0.05] md:grid-cols-2">
                {app.features.map((f) => (
                  <StaggerItem key={f} className="bg-white p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                      <p className="text-[15px] leading-relaxed text-ink-800">
                        {f}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="relative py-16">
          <div className="container-page">
            <Reveal>
              <div className="glass-panel relative overflow-hidden p-10 md:p-14">
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-300/30 blur-3xl"
                  aria-hidden="true"
                />
                <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                  <div>
                    <h3 className="font-display text-3xl text-ink-900 md:text-4xl">
                      Want to see {app.name} in action?
                    </h3>
                    <p className="mt-2 text-ink-700">
                      Book a walkthrough or open the live app — both take a
                      minute.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/#contact" className="group btn-primary">
                      Book a walkthrough
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                    <Link href={app.externalUrl} className="group btn-secondary">
                      Open app
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Related apps */}
        <section className="relative border-t border-ink-900/[0.08] py-24 md:py-32">
          <div className="container-page">
            <Reveal className="flex items-end justify-between gap-6">
              <div>
                <p className="eyebrow">
                  <span className="h-px w-6 bg-gold-500/60" /> Also in the studio
                </p>
                <h2 className="mt-5 text-display-lg font-medium text-balance text-ink-900">
                  More from the portfolio.
                </h2>
              </div>
              <Link href="/#apps" className="group btn-ghost hidden md:inline-flex">
                All apps
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>

            <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
              {related.map((r) => (
                <StaggerItem key={r.slug}>
                  <Link
                    href={`/apps/${r.slug}`}
                    className="glass-panel glass-panel-hover group block h-full p-6 cursor-pointer"
                  >
                    <div className="mb-6 flex items-center justify-between">
                      <span className="text-xs font-medium uppercase tracking-[0.18em] text-ink-500">
                        {r.category}
                      </span>
                      <StatusPill status={r.status} />
                    </div>
                    <h3 className="font-display text-2xl text-ink-900">
                      {r.name}
                    </h3>
                    <p className="mt-3 text-sm text-ink-600">{r.tagline}</p>
                    <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.18em] text-ink-500 transition-colors group-hover:text-gold-600">
                      View product
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      </main>
      <Footer />
    </>
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
