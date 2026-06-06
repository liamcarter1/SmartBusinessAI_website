import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
// Sender — must be a verified domain in Resend OR onboarding@resend.dev (for
// development / before domain verification). Override via FROM_EMAIL env var.
const FROM_EMAIL = process.env.FROM_EMAIL || "Smart Business AI <onboarding@resend.dev>";
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || site.email;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";
  const honeypot = typeof payload.company === "string" ? payload.company : "";

  // Honeypot — real users don't fill the hidden "company" field; bots usually do.
  // Return ok to avoid letting the bot know it tripped a filter.
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
  if (message.length > 5000) {
    return NextResponse.json({ error: "Message too long" }, { status: 400 });
  }

  // No API key configured — log and return ok so local dev keeps working.
  // In production this prevents silent data loss while you haven't set the key.
  if (!RESEND_API_KEY) {
    console.warn(
      "[contact] RESEND_API_KEY not set — submission was NOT emailed.",
      { name, email, messagePreview: message.slice(0, 100) },
    );
    return NextResponse.json({ ok: true });
  }

  const resend = new Resend(RESEND_API_KEY);

  const escaped = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    message: escapeHtml(message),
  };

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New enquiry from ${name} — ${site.name}`,
      text: [
        `New enquiry via ${site.domain}`,
        ``,
        `From:    ${name} <${email}>`,
        ``,
        `Message:`,
        message,
        ``,
        `--`,
        `Hit reply to respond directly to ${name}.`,
      ].join("\n"),
      html: `
        <!doctype html>
        <html>
          <body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#fafaf7;padding:24px;color:#0a0e1a;">
            <div style="max-width:560px;margin:0 auto;background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:32px;">
              <p style="font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#8C7029;margin:0 0 8px;">New enquiry</p>
              <h1 style="font-size:20px;margin:0 0 24px;color:#0a0e1a;">Via ${site.domain}</h1>
              <table style="width:100%;border-collapse:collapse;font-size:14px;">
                <tr>
                  <td style="padding:8px 0;color:#5b6884;width:80px;">From</td>
                  <td style="padding:8px 0;color:#0a0e1a;"><strong>${escaped.name}</strong> &lt;<a href="mailto:${escaped.email}" style="color:#1E3A5F;">${escaped.email}</a>&gt;</td>
                </tr>
              </table>
              <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;" />
              <div style="white-space:pre-wrap;line-height:1.6;font-size:15px;color:#172033;">${escaped.message}</div>
              <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;" />
              <p style="font-size:12px;color:#8a8a8a;margin:0;">Hit reply to respond directly to ${escaped.name}.</p>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("[contact] resend error", error);
      return NextResponse.json({ error: "Send failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] unexpected error", err);
    return NextResponse.json({ error: "Send failed" }, { status: 502 });
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
