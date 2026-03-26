import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectOverview from "@/components/project/ProjectOverview";
import ProjectStickyNav from "@/components/project/ProjectStickyNav";
import ProjectFloatingBadge from "@/components/project/ProjectFloatingBadge";
import ProjectAmenities from "@/components/project/ProjectAmenities";
import ProjectDetails from "@/components/project/ProjectDetails";
import ProjectRera from "@/components/project/ProjectRera";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectHero project={project} />
      <ProjectOverview project={project} />
      <ProjectStickyNav />
      <ProjectFloatingBadge />
      <ProjectAmenities project={project} />
      <ProjectDetails project={project} />
      <ProjectRera project={project} />
    </>
  );
}
