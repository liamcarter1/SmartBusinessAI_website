import Link from "next/link";
import { Logo } from "./ui/Logo";
import { site } from "@/lib/site";
import { apps } from "@/lib/apps";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/[0.06] py-16">
      <div className="container-page">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
              {site.description}
            </p>
            <Link
              href={`mailto:${site.email}`}
              className="mt-6 inline-block text-sm text-gold-300 hover:text-gold-200 transition-colors cursor-pointer"
            >
              {site.email}
            </Link>
          </div>

          <FooterCol
            title="Apps"
            items={apps.slice(0, 6).map((a) => ({ label: a.name, href: `#${a.slug}` }))}
          />

          <FooterCol
            title="Studio"
            items={[
              { label: "About", href: "#studio" },
              { label: "Insights", href: "#insights" },
              { label: "Contact", href: "#contact" },
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

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-8 text-xs text-slate-500 md:flex-row md:items-center">
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
      <h4 className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
        {title}
      </h4>
      <ul className="mt-5 space-y-3">
        {items.map((i) => (
          <li key={i.href + i.label}>
            <Link
              href={i.href}
              className="text-sm text-slate-300 transition-colors duration-200 hover:text-gold-300 cursor-pointer"
            >
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
