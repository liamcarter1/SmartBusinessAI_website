# Smart Business AI — smartbusinessai.co.uk

Marketing site for the **Smart Business AI** applied-AI studio. Showcases the
portfolio of AI products, the studio positioning, insights, and a contact
flow.

Built with:

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** — design tokens in `tailwind.config.ts`
- **Framer Motion** — page reveals, stagger, nav, micro-interactions
- **Inter** (UI) + **Instrument Serif** (display) + **JetBrains Mono**

## Run locally

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy

The site is a stock Next.js app and deploys cleanly to **Vercel** with no
config — push to `main` and import the repo in the Vercel dashboard. Point
the `smartbusinessai.co.uk` domain at the Vercel project.

## Customising the content

### Apps

All app data lives in **`lib/apps.ts`**. Each entry drives both the bento
grid summary and the detailed showcase row below it. Swap `demoUrl`,
`externalUrl`, `screenshot` and `videoUrl` when ready.

To use real screenshots, drop the images into `public/apps/<slug>/hero.png`
and the existing paths will pick them up. Until then, the
`<AppMockup>` component renders an abstract placeholder.

### Blog / Insights

`lib/posts.ts` holds the post metadata. The route `/blog/[slug]` currently
renders placeholder body text — wire in MDX (`@next/mdx`) or a CMS
(Contentlayer, Sanity, Notion) when ready.

### Brand

- Colours, gradients and shadows: `tailwind.config.ts` + `app/globals.css`
- Logo: `components/ui/Logo.tsx`
- Site metadata (name, email, nav, social): `lib/site.ts`

### Contact form

The form posts to `/api/contact` which currently logs to the server. Wire
to **Resend**, **Postmark** or a webhook of your choice in
`app/api/contact/route.ts`.

## Design system

- **Palette:** deep navy ink (`#0A0E1A` family) + warm gold accent
  (`#DCBC5F` family). Used sparingly — gold is reserved for CTAs,
  eyebrows, accents and the display shine.
- **Type system:** clamp-based display sizes for fluid hero scale, italic
  serif for editorial impact, neutral Inter for everything else.
- **Motion:** in-view reveals with stagger on every section, magnetic
  cursor aura on desktop, smooth scroll. Respects
  `prefers-reduced-motion`.
- **Accessibility:** 4.5:1+ contrast on body text, visible focus rings,
  semantic landmarks, alt text on every meaningful image, touch targets
  ≥ 44px.
