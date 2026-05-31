import Link from "next/link";
import Image from "next/image";

export function Logo({
  className = "",
  size = "nav",
}: {
  className?: string;
  /** "nav" = compact (h-10), "footer" = larger (h-14) */
  size?: "nav" | "footer";
}) {
  const heightClass = size === "footer" ? "h-14 md:h-16" : "h-10 md:h-11";

  return (
    <Link
      href="/"
      aria-label="Smart Business AI — home"
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src="/smartbusinessAI_logo.jpeg"
        alt="Smart Business AI"
        width={520}
        height={280}
        priority={size === "nav"}
        className={`${heightClass} w-auto`}
      />
    </Link>
  );
}
