import Link from "next/link";
import { SiteHeader } from "./components/SiteHeader";
import { PortalCard } from "./components/PortalCard";
import { MobileSocialLinks } from "./components/SocialLinks";

export default function HomePage() {
  return <div className="page-frame home-page">
    <SiteHeader home />
    <main className="home-layout">
      <section className="home-intro" aria-label="Introduction">
        <h1>Kai DeVito</h1>
        <nav className="home-quick-links" aria-label="Personal links">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact Me</Link>
        </nav>
      </section>
      <nav className="home-portals" aria-label="Portfolio sections">
        <PortalCard label="Projects" path="/projects" icon="projects" />
        <PortalCard label="Research" path="/research" icon="research" />
        <PortalCard label="Documents" path="/documents" icon="documents" />
      </nav>
      <MobileSocialLinks />
    </main>
  </div>;
}
