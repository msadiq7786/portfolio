import ProjectItem from "@/components/project-item";
import { PROJECTS } from "@/content/projects";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Projects",
  description:
    "Browse full stack web development projects by Mohammed Sadiq, including React, Next.js, TypeScript, and modern responsive web applications.",
  pageKeywords: [
    "web development projects",
    "React projects",
    "Next.js projects",
    "TypeScript projects",
  ],
});

function Page() {
  return (
    <section aria-labelledby="projects-heading">
      <h1
        id="projects-heading"
        className="font-medium text-2xl mb-4 tracking-tighter font-mono"
      >
        📁Projects
      </h1>
      <p className="sr-only">
        Selected web application projects by Mohammed Sadiq, showing full stack
        development skills across React, Next.js, TypeScript, and responsive UI
        engineering.
      </p>
      {PROJECTS.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </section>
  );
}

export default Page;
