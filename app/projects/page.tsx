import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { Reveal } from "../components/Reveal";
import { categories, projects } from "../lib/projects";
export const metadata = { title: "Projects" };
export default function ProjectsPage() {
  return <div className="page-frame"><SiteHeader />
    <main className="content-page"><Reveal><p className="eyebrow">02 / Projects</p><h1>Engineering in practice.</h1>
      </Reveal>
      {categories.map((cat, index) => <section className="category-section" key={cat} aria-labelledby={`cat-${index}`}>
        <Reveal><h2 id={`cat-${index}`} className="category-heading">{cat}</h2></Reveal>
        <div className="project-grid">{projects.filter(p => p.category === cat).map(p => <Reveal key={p.slug}>
          <Link className="project-card" href={`/projects/${p.slug}`}>
            <span className="project-status">{p.status}</span><h3>{p.title}</h3><p>{p.summary}</p>
            <span className="project-card-bottom">Explore project <span aria-hidden="true">↗</span></span>
          </Link>
        </Reveal>)}</div>
      </section>)}
    </main>
  </div>;
}
