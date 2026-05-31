import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { AppsShowcase } from "@/components/AppsShowcase";
import { Studio } from "@/components/Studio";
import { Insights } from "@/components/Insights";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CursorAura } from "@/components/CursorAura";
import { getApps } from "@/lib/apps.server";
import { getPosts } from "@/lib/posts.server";

export default async function HomePage() {
  const apps = getApps();
  const posts = await getPosts();

  return (
    <>
      <CursorAura />
      <Nav />
      <main className="relative">
        <Hero />
        <Marquee />
        <AppsShowcase apps={apps} />
        <Studio />
        <Insights posts={posts.slice(0, 3)} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
