import "server-only";
import fs from "node:fs";
import path from "node:path";
import { apps as baseApps, type App } from "./apps";

export type AppMedia = {
  screenshotSrc: string | null;
  screenshotAlt: string;
  videoSrc: string | null;
};

export type EnrichedApp = App & { media: AppMedia };

const PUBLIC_DIR = path.join(process.cwd(), "public");

const IMAGE_EXTENSIONS = [".png", ".webp", ".jpg", ".jpeg"] as const;
const VIDEO_EXTENSIONS = [".mp4", ".webm"] as const;

function findFirstExisting(dir: string, base: string, exts: readonly string[]) {
  for (const ext of exts) {
    const rel = path.join(dir, base + ext);
    const abs = path.join(PUBLIC_DIR, rel);
    if (fs.existsSync(abs)) return "/" + rel.replace(/\\/g, "/");
  }
  return null;
}

function resolveMedia(app: App): AppMedia {
  const dir = path.join("apps", app.slug);
  return {
    screenshotSrc: findFirstExisting(dir, "hero", IMAGE_EXTENSIONS),
    screenshotAlt: `${app.name} — product screenshot`,
    videoSrc: findFirstExisting(dir, "hero", VIDEO_EXTENSIONS),
  };
}

export function getApps(): EnrichedApp[] {
  return baseApps.map((app) => ({ ...app, media: resolveMedia(app) }));
}

export function getAppBySlug(slug: string): EnrichedApp | undefined {
  const app = baseApps.find((a) => a.slug === slug);
  if (!app) return undefined;
  return { ...app, media: resolveMedia(app) };
}
