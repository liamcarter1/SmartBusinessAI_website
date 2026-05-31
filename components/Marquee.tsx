export function Marquee() {
  const items = [
    "Applied AI",
    "Agentic Tooling",
    "Manufacturing Intelligence",
    "Engineering Calculators",
    "Product Strategy",
    "CNC Programming",
    "Root Cause Analysis",
    "Automated Deployment",
  ];

  return (
    <section
      aria-label="Capabilities"
      className="relative border-y border-ink-900/[0.08] bg-white py-8 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-white to-transparent"
        aria-hidden="true"
      />
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-8 inline-flex items-center gap-8 font-display text-2xl italic text-ink-500 md:text-3xl"
          >
            {item}
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold-500/70" />
          </span>
        ))}
      </div>
    </section>
  );
}
