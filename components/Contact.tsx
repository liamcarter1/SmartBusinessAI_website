"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, Send } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/site";
import { Reveal } from "./motion/Reveal";

type Status = "idle" | "submitting" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-t border-ink-900/[0.08] bg-slate-50 py-28 md:py-40"
    >
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-300/15 blur-[140px]"
        aria-hidden="true"
      />

      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-6 bg-gold-500/60" /> Get in touch
            </p>
            <h2 className="mt-5 text-display-lg font-medium text-balance text-ink-900">
              Let&apos;s build something{" "}
              <span className="font-display italic text-gold-shine">
                worth shipping.
              </span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-700">
              Whether you have a problem to solve, an app to commission, or
              you&apos;re curious about one of the products in the portfolio —
              the studio is open.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-10 space-y-4">
            <Link
              href={`mailto:${site.email}`}
              className="group flex items-center gap-4 rounded-2xl border border-ink-900/[0.08] bg-white p-5 shadow-[0_4px_12px_-6px_rgba(10,14,26,0.08)] transition-all duration-300 hover:border-gold-400/60 hover:shadow-[0_12px_24px_-8px_rgba(10,14,26,0.12)] cursor-pointer"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-700 text-gold-300 shadow-[0_4px_12px_-4px_rgba(20,40,69,0.4)]">
                <Mail className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-500">
                  Email
                </div>
                <div className="mt-0.5 text-ink-900 transition-colors group-hover:text-gold-700">
                  {site.email}
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-ink-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-600" />
            </Link>

            <div className="rounded-2xl border border-ink-900/[0.08] bg-white p-5 shadow-[0_4px_12px_-6px_rgba(10,14,26,0.06)]">
              <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-500">
                Studio
              </div>
              <div className="mt-0.5 text-ink-900">United Kingdom</div>
              <div className="mt-1 text-sm text-ink-600">
                Available worldwide — async-first.
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="glass-panel relative p-7 md:p-10"
          >
            <div className="grid gap-5">
              <Field
                label="Name"
                id="name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                required
              />
              <Field
                label="Email"
                id="email"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                required
              />
              <Field
                label="What are you building?"
                id="message"
                value={form.message}
                onChange={(v) => setForm({ ...form, message: v })}
                required
                textarea
              />
            </div>

            <div className="mt-8 flex items-center justify-between gap-4">
              <p className="text-xs text-ink-500">
                We reply within 1–2 working days.
              </p>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="group btn-primary disabled:cursor-not-allowed disabled:opacity-60"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {status === "sent" ? (
                    <motion.span
                      key="sent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="inline-flex items-center gap-2"
                    >
                      Sent — thank you
                    </motion.span>
                  ) : status === "submitting" ? (
                    <motion.span
                      key="sub"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="inline-flex items-center gap-2"
                    >
                      Sending…
                    </motion.span>
                  ) : (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="inline-flex items-center gap-2"
                    >
                      Send message
                      <Send className="h-3.5 w-3.5" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>

            {status === "error" && (
              <p className="mt-4 text-sm text-rose-600">
                Something went wrong — please email {site.email} directly.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  required,
  textarea,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const shared =
    "w-full rounded-xl border border-ink-900/[0.10] bg-white px-4 py-3 text-ink-900 placeholder-ink-400 shadow-[0_1px_2px_rgba(10,14,26,0.03)] transition-colors duration-200 focus:border-gold-500/60 focus:outline-none focus:ring-0";
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-[11px] font-medium uppercase tracking-[0.18em] text-ink-600"
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={id}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={5}
          className={shared}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={shared}
        />
      )}
    </div>
  );
}
