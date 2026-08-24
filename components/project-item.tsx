import React from "react";
import { IconTile } from "./ui/icon-tile";
import { FolderOpen } from "lucide-react";
import Chip from "./ui/chip";
import { Markdown } from "./markdown";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Project } from "@/types/project";
import { cn } from "@/lib/utils";

interface ProjectItemProps {
  className?: string;
  project: Project;
}
function ProjectItem({ project, className }: ProjectItemProps) {
  return (
    <div
      className={cn(
        "pb-4 border-b prose prose-zinc dark:prose-invert",
        className,
      )}
      aria-labelledby={`${project.id}-project-title`}
    >
      <div className="flex items-center justify-between mb-2">
        <Tooltip>
          <TooltipTrigger>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title}, a Mohammed Sadiq web development project`}
              className="flex items-center gap-2 text-xl"
            >
              {project.icon ? (
                React.cloneElement(
                  project.icon as React.ReactElement<{
                    className?: string;
                  }>,
                  {
                    className: "size-8 mr-1",
                  },
                )
              ) : (
                <IconTile className="size-8  mr-1">
                  {project.icon ? project.icon : <FolderOpen />}
                </IconTile>
              )}
              <span
                id={`${project.id}-project-title`}
                className="underline underline-offset-2"
              >
                {project.title}
              </span>
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Open project</p>
          </TooltipContent>
        </Tooltip>
      </div>

      {project.description && (
        <div className="prose-sm">
          <Markdown>{project.description}</Markdown>
        </div>
      )}
      <div className="flex flex-wrap gap-2 mt-2">
        {project.skills.map((skill, idx) => (
          <Chip key={idx} className="text-sm rounded-md capitalize">
            <span className="sr-only">{project.title} uses </span>
            {skill}
          </Chip>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
