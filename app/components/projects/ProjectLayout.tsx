
import Link from "next/link";
import type { ReactNode } from "react";

import { Reveal } from "../Reveal";
import { projects } from "../../lib/projects";

type Project = (typeof projects)[number];

interface ProjectLayoutProps {
  project: Project;
  children: ReactNode;
}

export function ProjectLayout({
  project,
  children,
}: ProjectLayoutProps) {
  return (
    <main className="content-page project-detail">
      <Link href="/projects" className="back-link">
        ← All projects
      </Link>

      <Reveal>
        <p className="eyebrow">
          {project.category} / {project.status}
        </p>

        <h1>{project.title}</h1>

        <p className="lede">{project.summary}</p>

        <div className="project-tools-section">
          <h2>Tools & Technologies</h2>

          <div className="tag-cloud">
            {project.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal>
        <section className="showcase-section">
          <h2>Project Overview</h2>
          <p>{project.overview}</p>
        </section> 
      </Reveal>

      <article className="project-main-content">
        {children}
      </article>
    </main>
  );
}
