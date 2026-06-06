import { site } from "./site";
import { type App } from "./apps";
import { type PostMeta } from "./posts.server";

const baseUrl = site.url;

export type JsonLdSchema = Record<string, unknown>;

export function organizationSchema(): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    alternateName: site.shortName,
    url: baseUrl,
    logo: `${baseUrl}/smartbusinessAI_logo-removebg-preview.png`,
    description: site.description,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
    },
    areaServed: "Worldwide",
    knowsAbout: [
      "Applied AI",
      "Agentic AI Tooling",
      "AI for Manufacturing",
      "CNC Programming Assistants",
      "Root Cause Analysis",
      "Engineering Software",
      "Product Requirements Documents",
      "AI Application Development",
    ],
  };
}

export function websiteSchema(): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: baseUrl,
    description: site.description,
    publisher: {
      "@type": "Organization",
      name: site.name,
    },
  };
}

export function softwareApplicationSchema(app: App, screenshotUrl?: string | null): JsonLdSchema {
  const url = `${baseUrl}/apps/${app.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: app.name,
    description: app.longDescription,
    abstract: app.tagline,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: app.category,
    url,
    sameAs: app.externalUrl?.startsWith("http") ? app.externalUrl : undefined,
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    featureList: app.features,
    image: screenshotUrl ? `${baseUrl}${screenshotUrl}` : undefined,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: baseUrl,
    },
  };
}

export function blogPostingSchema(
  post: PostMeta,
  bodyExcerpt?: string,
): JsonLdSchema {
  const url = `${baseUrl}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    articleBody: bodyExcerpt,
    datePublished: post.date,
    dateModified: post.date,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    articleSection: post.category,
    author: {
      "@type": "Organization",
      name: site.name,
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/smartbusinessAI_logo-removebg-preview.png`,
      },
    },
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[],
): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
