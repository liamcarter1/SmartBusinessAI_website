import Link from "next/link";
import Image from "next/image";
import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="mt-12 text-display-lg font-medium text-balance text-ink-900"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="mt-14 text-3xl font-medium tracking-tight text-ink-900 md:text-4xl"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-10 text-2xl font-medium tracking-tight text-ink-900"
      {...props}
    />
  ),
  p: (props) => (
    <p className="mt-6 text-[17px] leading-[1.75] text-ink-700" {...props} />
  ),
  a: ({ href = "#", children, ...props }) => (
    <Link
      href={href}
      className="text-gold-700 underline decoration-gold-500/40 underline-offset-4 transition-colors hover:text-gold-600 hover:decoration-gold-500/80"
      {...props}
    >
      {children}
    </Link>
  ),
  ul: (props) => (
    <ul
      className="mt-6 space-y-2 pl-6 text-[17px] text-ink-700 marker:text-gold-600"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="mt-6 list-decimal space-y-2 pl-6 text-[17px] text-ink-700 marker:text-gold-600"
      {...props}
    />
  ),
  li: (props) => <li className="leading-[1.75]" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mt-8 border-l-2 border-gold-500/60 pl-6 font-display text-xl italic text-ink-800"
      {...props}
    />
  ),
  hr: () => <hr className="my-12 border-ink-900/[0.10]" />,
  code: (props) => (
    <code
      className="rounded-md border border-ink-900/[0.08] bg-slate-50 px-1.5 py-0.5 font-mono text-[0.9em] text-gold-800"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="mt-6 overflow-x-auto rounded-xl border border-ink-900/[0.08] bg-slate-50 p-5 font-mono text-sm leading-relaxed text-ink-800"
      {...props}
    />
  ),
  img: ({ src = "", alt = "" }) => (
    <span className="mt-8 block overflow-hidden rounded-xl border border-ink-900/[0.08]">
      <Image
        src={src as string}
        alt={alt as string}
        width={1600}
        height={900}
        className="h-auto w-full"
      />
    </span>
  ),
  strong: (props) => (
    <strong className="font-semibold text-ink-900" {...props} />
  ),
  em: (props) => <em className="italic text-ink-800" {...props} />,
};
