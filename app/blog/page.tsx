import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CursorAura } from "@/components/CursorAura";
import { posts } from "@/lib/posts";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Insights",
  description: "Writing from the build floor of Smart Business AI.",
};

export default function BlogIndex() {
  return (
    <>
      <CursorAura />
      <Nav />
      <main className="pt-36 pb-28 md:pt-44">
        <div className="container-page">
          <p className="eyebrow">
            <span className="h-px w-6 bg-gold-300/60" /> Insights
          </p>
          <h1 className="mt-5 text-display-xl font-medium text-balance text-slate-50">
            Notes from the{" "}
            <span className="font-display italic text-gold-shine">
              build floor.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Long-form thinking on applied AI, agentic tooling, and shipping
            intelligent software for real businesses.
          </p>

          <div className="mt-16 divide-y divide-white/[0.06]">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group grid gap-4 py-10 md:grid-cols-[180px_1fr_auto] md:items-baseline md:gap-12 cursor-pointer"
              >
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <time dateTime={p.date}>
                    {new Date(p.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                  <span className="h-1 w-1 rounded-full bg-slate-600" />
                  <span className="font-mono uppercase tracking-widest text-gold-300/80">
                    {p.category}
                  </span>
                </div>
                <div>
                  <h2 className="font-display text-3xl text-slate-50 transition-colors duration-300 group-hover:text-gold-100">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-slate-400">{p.excerpt}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-slate-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-300" />
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
