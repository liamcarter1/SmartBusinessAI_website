import Link from "next/link";
import { Logo } from "./ui/Logo";
import { site } from "@/lib/site";
import { apps } from "@/lib/apps";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-ink-900/[0.08] bg-white py-16">
      <div className="container-page">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo size="footer" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink-600">
              {site.description}
            </p>
            <Link
              href={`mailto:${site.email}`}
              className="mt-6 inline-block text-sm font-medium text-gold-700 hover:text-gold-600 transition-colors cursor-pointer"
            >
              {site.email}
            </Link>
          </div>

          <FooterCol
            title="Apps"
            items={apps.slice(0, 6).map((a) => ({
              label: a.name,
              href: `/apps/${a.slug}`,
            }))}
          />

          <FooterCol
            title="Studio"
            items={[
              { label: "About", href: "/#studio" },
              { label: "Insights", href: "/#insights" },
              { label: "Contact", href: "/#contact" },
            ]}
          />

          <FooterCol
            title="Legal"
            items={[
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
            ]}
          />
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-ink-900/[0.08] pt-8 text-xs text-ink-500 md:flex-row md:items-center">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="font-mono uppercase tracking-widest">
            {site.domain}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-500">
        {title}
      </h4>
      <ul className="mt-5 space-y-3">
        {items.map((i) => (
          <li key={i.href + i.label}>
            <Link
              href={i.href}
              className="text-sm text-ink-700 transition-colors duration-200 hover:text-gold-600 cursor-pointer"
            >
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
