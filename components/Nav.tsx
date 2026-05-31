"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./ui/Logo";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
      >
        <nav
          className={cn(
            "w-full max-w-[1240px] rounded-full border px-4 py-2.5 transition-all duration-500 md:px-6",
            scrolled
              ? "border-ink-900/[0.08] bg-white/95 backdrop-blur-xl shadow-[0_12px_32px_-16px_rgba(10,14,26,0.18)]"
              : "border-ink-900/[0.06] bg-white/80 backdrop-blur-md shadow-[0_8px_24px_-16px_rgba(10,14,26,0.12)]"
          )}
        >
          <div className="flex items-center justify-between gap-4">
            <Logo />

            <ul className="hidden items-center gap-1 md:flex">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-full px-4 py-2 text-sm font-medium text-ink-800 transition-colors duration-200 hover:bg-ink-900/[0.06] hover:text-ink-950 cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <Link
                href="#contact"
                className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-ink-900 px-4 py-2 text-sm font-medium text-slate-50 transition-all duration-200 hover:bg-ink-800 cursor-pointer"
              >
                Start a project
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <button
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((o) => !o)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-900/10 bg-ink-900/[0.04] text-ink-800 transition-colors duration-200 hover:bg-ink-900/[0.08] md:hidden cursor-pointer"
              >
                {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl md:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.ul
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="container-page flex h-full flex-col items-start justify-center gap-2 pt-20"
            >
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-display text-5xl text-ink-900 italic"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="mt-8">
                <Link
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="group btn-primary"
                >
                  Start a project
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
