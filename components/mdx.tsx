import Link from "next/link";
import Image from "next/image";
import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="mt-12 text-display-lg font-medium text-balance text-slate-50"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="mt-14 text-3xl font-medium tracking-tight text-slate-50 md:text-4xl"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-10 text-2xl font-medium tracking-tight text-slate-100"
      {...props}
    />
  ),
  p: (props) => (
    <p className="mt-6 text-[17px] leading-[1.75] text-slate-300" {...props} />
  ),
  a: ({ href = "#", children, ...props }) => (
    <Link
      href={href}
      className="text-gold-300 underline decoration-gold-300/30 underline-offset-4 transition-colors hover:text-gold-200 hover:decoration-gold-300/60"
      {...props}
    >
      {children}
    </Link>
  ),
  ul: (props) => (
    <ul className="mt-6 space-y-2 pl-6 text-[17px] text-slate-300 marker:text-gold-300" {...props} />
  ),
  ol: (props) => (
    <ol className="mt-6 list-decimal space-y-2 pl-6 text-[17px] text-slate-300 marker:text-gold-300" {...props} />
  ),
  li: (props) => <li className="leading-[1.75]" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mt-8 border-l-2 border-gold-300/60 pl-6 font-display text-xl italic text-slate-200"
      {...props}
    />
  ),
  hr: () => <hr className="my-12 border-white/[0.08]" />,
  code: (props) => (
    <code
      className="rounded-md border border-white/[0.08] bg-white/[0.04] px-1.5 py-0.5 font-mono text-[0.9em] text-gold-200"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="mt-6 overflow-x-auto rounded-xl border border-white/[0.08] bg-ink-950/80 p-5 font-mono text-sm leading-relaxed text-slate-200"
      {...props}
    />
  ),
  img: ({ src = "", alt = "" }) => (
    <span className="mt-8 block overflow-hidden rounded-xl border border-white/[0.08]">
      <Image
        src={src as string}
        alt={alt as string}
        width={1600}
        height={900}
        className="h-auto w-full"
      />
    </span>
  ),
  strong: (props) => <strong className="font-semibold text-slate-100" {...props} />,
  em: (props) => <em className="italic text-slate-200" {...props} />,
};
