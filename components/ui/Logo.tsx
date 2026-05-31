import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Smart Business AI — home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="relative inline-flex h-8 w-8 items-center justify-center">
        <svg
          viewBox="0 0 32 32"
          className="h-full w-full"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="logoGold" x1="0" y1="0" x2="32" y2="32">
              <stop offset="0%" stopColor="#F4E9C8" />
              <stop offset="50%" stopColor="#DCBC5F" />
              <stop offset="100%" stopColor="#8C7029" />
            </linearGradient>
          </defs>
          <rect
            x="1"
            y="1"
            width="30"
            height="30"
            rx="8"
            stroke="url(#logoGold)"
            strokeWidth="1.2"
          />
          <path
            d="M9 21V11h4.2c2 0 3.2 1 3.2 2.6 0 1.1-.6 1.9-1.6 2.3 1.3.3 2.1 1.2 2.1 2.5 0 1.7-1.3 2.6-3.4 2.6H9zm2.1-6h2c1 0 1.5-.4 1.5-1.1s-.5-1.1-1.5-1.1h-2V15zm0 4.2h2.3c1.1 0 1.7-.4 1.7-1.2s-.6-1.2-1.7-1.2h-2.3v2.4zM18.5 21l3.2-10h2.6l3.2 10h-2.2l-.6-2.1h-3.5l-.6 2.1h-2.1zm3.3-3.9h2.3L23 13.2l-1.2 3.9z"
            fill="url(#logoGold)"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-semibold tracking-tight text-slate-50">
          Smart Business <span className="text-gold-300">AI</span>
        </span>
        <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
          Applied AI Studio
        </span>
      </span>
    </Link>
  );
}
