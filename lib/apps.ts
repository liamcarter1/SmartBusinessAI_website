export type App = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: string;
  status: "Live" | "Beta" | "Coming Soon";
  features: string[];
  // Replace these with real URLs when ready
  demoUrl: string;
  externalUrl: string;
  // Drop screenshots into /public/apps/<slug>/ to wire up
  screenshot: string;
  videoUrl?: string;
  // Accent dot used in cards / detail rows
  accent: "gold" | "blue" | "neutral";
};

export const apps: App[] = [
  {
    slug: "rca-flow",
    name: "RCA Flow",
    tagline: "Root cause analysis, accelerated by AI.",
    description:
      "Structured root cause analysis with an AI co-pilot that surfaces hidden patterns, suggests probable causes and guides teams to durable fixes.",
    longDescription:
      "RCA Flow turns ad-hoc incident reviews into a repeatable, intelligence-augmented practice. Teams document failures inside a guided 5-Whys / Fishbone workflow while an embedded AI assistant cross-references symptoms, prior incidents and domain knowledge to propose likely causes — cutting investigation time and raising the quality of corrective actions.",
    category: "Operations · Quality",
    status: "Live",
    features: [
      "Guided 5-Whys and Fishbone canvases",
      "AI-generated cause hypotheses with confidence",
      "Cross-incident pattern detection",
      "Exportable corrective action reports",
    ],
    demoUrl: "https://rca-flow-liamcarter15.replit.app",
    externalUrl: "https://rca-flow-liamcarter15.replit.app",
    screenshot: "/apps/rca-flow/hero.png",
    accent: "gold",
  },
  {
    slug: "m32-cnc-analyser",
    name: "M32 Citizen CNC Program Analyser",
    tagline: "Read, write and check CNC programs with AI assistance.",
    description:
      "A CNC program assistant for Citizen M32 machines — analyse existing programs, suggest improvements, and translate engineering blueprints into production-ready code.",
    longDescription:
      "Built for machinists and programmers running Citizen M32 sliding-head lathes. Upload a CNC program or a blueprint and the analyser explains every block, flags potential collisions, suggests cycle-time improvements and helps draft new programs from scratch — reducing setup time and protecting tooling.",
    category: "Manufacturing · CNC",
    status: "Live",
    features: [
      "Line-by-line CNC program explanation",
      "Cycle-time and tool-path improvement suggestions",
      "Blueprint → program drafting assistant",
      "Citizen M32 specific G-code intelligence",
    ],
    demoUrl: "#",
    externalUrl: "#",
    screenshot: "/apps/m32-cnc-analyser/hero.png",
    accent: "blue",
  },
  {
    slug: "ship-it",
    name: "Ship It — App Builder",
    tagline: "From idea to deployed web app, agentically.",
    description:
      "An agentic AI tool that takes a single product idea and writes, packages and deploys a complete web application to Vercel — no scaffolding required.",
    longDescription:
      "Ship It compresses the entire 'first version' loop. Type the title of an app you want to exist; an autonomous agent designs the data model, generates the front-end, writes the API and pushes a live deployment to Vercel. Use it to validate ideas in minutes instead of weeks.",
    category: "AI Agents · DevTools",
    status: "Beta",
    features: [
      "End-to-end agentic build pipeline",
      "Automatic Vercel deployment",
      "Editable generated codebase",
      "Iterative refinement via natural language",
    ],
    demoUrl: "#",
    externalUrl: "#",
    screenshot: "/apps/ship-it/hero.png",
    accent: "gold",
  },
  {
    slug: "hydraulics-calculator",
    name: "Hydraulics Calculator",
    tagline: "Pressures, flows and orifice sizing — instantly.",
    description:
      "A precision calculator for hydraulic engineers and distributors. Compute pressures, flow rates, orifice sizing and more in a single, focused interface.",
    longDescription:
      "Replace tattered reference sheets with an interface engineers actually enjoy using. The Hydraulics Calculator covers the core formulas distributors and design engineers reach for daily — laid out for keyboard speed, with clear unit handling and a memory of recent calculations.",
    category: "Engineering · Tools",
    status: "Live",
    features: [
      "Pressure, flow, orifice and velocity calculations",
      "Imperial / metric unit handling",
      "Keyboard-first workflow",
      "Recent calculation history",
    ],
    demoUrl: "#",
    externalUrl: "#",
    screenshot: "/apps/hydraulics-calculator/hero.png",
    accent: "neutral",
  },
  {
    slug: "prd-builder",
    name: "PRD Builder",
    tagline: "Write a full software PRD — in minutes.",
    description:
      "Generates a complete Product Requirements Document and a paired CLAUDE.md planning file, ready to drive an entire application build.",
    longDescription:
      "PRD Builder interviews you about the product you want to build, then produces a rigorous Product Requirements Document alongside a tuned CLAUDE.md that gives downstream coding agents everything they need: goals, scope, data model, API contracts, milestones and edge cases.",
    category: "Product · AI",
    status: "Live",
    features: [
      "Guided PRD interview flow",
      "Generates paired CLAUDE.md planning file",
      "Exports to Markdown, Notion and Linear",
      "Tuned for agentic downstream builds",
    ],
    demoUrl: "#",
    externalUrl: "#",
    screenshot: "/apps/prd-builder/hero.png",
    accent: "blue",
  },
  {
    slug: "career-conversation",
    name: "Career Conversation",
    tagline: "A CV you can talk to.",
    description:
      "An interactive chatbot version of a CV — visitors ask questions about career history, projects and skills, and get grounded, conversational answers.",
    longDescription:
      "Career Conversation turns the static résumé into a dialogue. Trained on a structured career profile, it answers recruiter and collaborator questions in natural language — surfacing the most relevant experience for every question instead of forcing readers to skim a PDF.",
    category: "Personal · Chatbot",
    status: "Live",
    features: [
      "Grounded answers from a structured profile",
      "Suggested follow-up questions",
      "Embeddable on any personal site",
      "Conversation transcripts on request",
    ],
    demoUrl: "https://liam-digital-twin.vercel.app/",
    externalUrl: "https://liam-digital-twin.vercel.app/",
    screenshot: "/apps/career-conversation/hero.png",
    accent: "gold",
  },
];

export const getApp = (slug: string) => apps.find((a) => a.slug === slug);
