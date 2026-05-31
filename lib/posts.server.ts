import "server-only";
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
};

export type Post = PostMeta & { content: string };

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

function readingTimeFor(body: string): string {
  const words = body.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 220));
  return `${minutes} min`;
}

async function readPostFile(file: string): Promise<Post> {
  const slug = file.replace(/\.mdx?$/, "");
  const source = await fs.readFile(path.join(CONTENT_DIR, file), "utf8");
  const { data, content } = matter(source);
  return {
    slug,
    title: String(data.title ?? slug),
    excerpt: String(data.excerpt ?? ""),
    date: String(data.date ?? ""),
    category: String(data.category ?? "Notes"),
    readingTime: data.readingTime ? String(data.readingTime) : readingTimeFor(content),
    content,
  };
}

export async function getPosts(): Promise<PostMeta[]> {
  let files: string[] = [];
  try {
    files = await fs.readdir(CONTENT_DIR);
  } catch {
    return [];
  }
  const mdxFiles = files.filter((f) => /\.mdx?$/.test(f));
  const posts = await Promise.all(mdxFiles.map(readPostFile));
  return posts
    .map(({ content: _content, ...meta }) => meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug: string): Promise<Post | null> {
  for (const ext of [".mdx", ".md"]) {
    try {
      return await readPostFile(slug + ext);
    } catch {
      // try next extension
    }
  }
  return null;
}
