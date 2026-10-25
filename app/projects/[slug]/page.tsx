
import { notFound } from "next/navigation";
import { SiteHeader } from "../../components/SiteHeader";
import { projects } from "../../lib/projects";

import { ElectronicsToolBench } from "../../components/projects/ElectronicsToolBench";
import { RoboticPet } from "../../components/projects/RoboticPet";
import { PhoneCharger } from "../../components/projects/PhoneCharger";
import { CDiagonalSums } from "../../components/projects/CDiagonalSums";
import { KanjiOnyomiGame } from "../../components/projects/KanjiOnyomiGame";
import { CClientServer } from "../../components/projects/CClientServer";
import { CacheSimulator } from "../../components/projects/CacheSimulator";
import { ProjectLayout } from "../../components/projects/ProjectLayout";

const projectPages = {
  "electronics-tool-bench": ElectronicsToolBench,
  "robotic-pet": RoboticPet,
  "usbc-phone-charger": PhoneCharger,
  "c-diagonal-sums": CDiagonalSums,
  "kanji-onyomi-game": KanjiOnyomiGame,
  "c-client-server": CClientServer,
  "cache-simulator": CacheSimulator,
} as const;

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  return {
    title: project?.title ?? "Project",
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const ProjectContent =
    projectPages[slug as keyof typeof projectPages];

  if (!ProjectContent) notFound();

  return (
    <div className="page-frame">
      <SiteHeader />

      <ProjectLayout project={project}>
        <ProjectContent />
      </ProjectLayout>
    </div>
  );
}
