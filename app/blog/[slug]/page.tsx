import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { mdxComponents } from "@/components/mdx";
import { getPost, getPosts } from "@/lib/posts.server";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  const allPosts = await getPosts();
  const more = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <Nav />
      <main className="pt-36 pb-28 md:pt-44">
        <article className="container-page max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-ink-600 hover:text-gold-600 transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All insights
          </Link>

          <header className="mt-10">
            <div className="flex flex-wrap items-center gap-3 text-xs text-ink-500">
              <span className="font-mono uppercase tracking-widest text-gold-600">
                {post.category}
              </span>
              <span className="h-1 w-1 rounded-full bg-ink-400" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <span className="h-1 w-1 rounded-full bg-ink-400" />
              <span>{post.readingTime} read</span>
            </div>
            <h1 className="mt-6 text-display-lg font-medium text-balance text-ink-900">
              {post.title}
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-ink-700">
              {post.excerpt}
            </p>
          </header>

          <div className="hairline mt-12" />

          <div className="mt-2">
            <MDXRemote
              source={post.content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                },
              }}
            />
          </div>
        </article>

        {more.length > 0 && (
          <section className="container-page mt-32 max-w-3xl border-t border-ink-900/[0.08] pt-16">
            <h2 className="text-sm font-medium uppercase tracking-[0.18em] text-ink-600">
              Keep reading
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {more.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="glass-panel glass-panel-hover group block p-6 cursor-pointer"
                >
                  <span className="text-[11px] font-mono uppercase tracking-widest text-gold-600">
                    {p.category}
                  </span>
                  <h3 className="mt-3 font-display text-2xl text-ink-900 transition-colors group-hover:text-gold-700">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-600">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
