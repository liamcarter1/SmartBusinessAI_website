import Link from "next/link";
import Image from "next/image";

export function Logo({
  className = "",
  size = "nav",
}: {
  className?: string;
  /** "nav" = h-14 / md:h-16, "footer" = h-20 / md:h-24 */
  size?: "nav" | "footer";
}) {
  const heightClass =
    size === "footer" ? "h-20 md:h-24" : "h-14 md:h-16";

  return (
    <Link
      href="/"
      aria-label="Smart Business AI — home"
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src="/smartbusinessAI_logo-removebg-preview.png"
        alt="Smart Business AI"
        width={640}
        height={340}
        priority={size === "nav"}
        className={`${heightClass} w-auto`}
      />
    </Link>
  );
}
