import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { AppsShowcase } from "@/components/AppsShowcase";
import { Studio } from "@/components/Studio";
import { Insights } from "@/components/Insights";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CursorAura } from "@/components/CursorAura";

export default function HomePage() {
  return (
    <>
      <CursorAura />
      <Nav />
      <main className="relative">
        <Hero />
        <Marquee />
        <AppsShowcase />
        <Studio />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
