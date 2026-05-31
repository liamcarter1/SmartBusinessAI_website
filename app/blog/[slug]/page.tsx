import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CursorAura } from "@/components/CursorAura";
import { getPost, posts } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <>
      <CursorAura />
      <Nav />
      <main className="pt-36 pb-28 md:pt-44">
        <article className="container-page max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-gold-300 transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All insights
          </Link>

          <header className="mt-10">
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <span className="font-mono uppercase tracking-widest text-gold-300/80">
                {post.category}
              </span>
              <span className="h-1 w-1 rounded-full bg-slate-600" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <span className="h-1 w-1 rounded-full bg-slate-600" />
              <span>{post.readingTime} read</span>
            </div>
            <h1 className="mt-6 text-display-lg font-medium text-balance text-slate-50">
              {post.title}
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-slate-300">
              {post.excerpt}
            </p>
          </header>

          <div className="prose prose-invert mt-16 max-w-none text-slate-300">
            <p>
              This is a placeholder post body. Drop your real MDX content or
              CMS-driven markdown into the blog data layer to populate this
              page.
            </p>
            <p>
              The site is structured so insights, apps and the studio
              positioning all share the same design system — see{" "}
              <Link href="/" className="text-gold-300 hover:text-gold-200">
                the home page
              </Link>{" "}
              for the full picture.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
