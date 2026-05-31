export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
};

// Placeholder posts — replace or wire to a CMS / MDX folder
export const posts: Post[] = [
  {
    slug: "building-agentic-tooling-for-real-businesses",
    title: "Building agentic tooling that real businesses will actually use",
    excerpt:
      "Lessons from shipping AI products into manufacturing, engineering and operations — where reliability beats novelty every time.",
    date: "2026-04-12",
    readingTime: "6 min",
    category: "Product",
  },
  {
    slug: "from-prd-to-deployed-in-a-weekend",
    title: "From PRD to deployed app in a weekend",
    excerpt:
      "How a tightly scoped Product Requirements Document and a well-tuned CLAUDE.md collapses the gap between idea and live software.",
    date: "2026-03-18",
    readingTime: "8 min",
    category: "Engineering",
  },
  {
    slug: "ai-in-the-machine-shop",
    title: "AI in the machine shop: making CNC programming approachable",
    excerpt:
      "Why CNC programming is the perfect proving ground for domain-specific AI assistants, and what we learned from the M32 analyser.",
    date: "2026-02-04",
    readingTime: "5 min",
    category: "Manufacturing",
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
