import { TECH_STACK } from "@/content/tech-stack";

import React from "react";
import Chip from "./ui/chip";

function TechStack() {
  return (
    <div className="not-prose mt-6 flex flex-wrap gap-2.5 font-mono">
      {TECH_STACK.map((tech) => (
        <a
          href={tech.href}
          key={tech.key}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Learn about ${tech.title}, part of Mohammed Sadiq's web development tech stack`}
        >
          <Chip className="rounded-sm flex items-center gap-1.5 hover:scale-105 transition-all duration-150">
            {React.cloneElement(
              tech.icon as React.ReactElement<{
                className?: string;
                "aria-hidden"?: "true";
              }>,
              {
                className: "h-5 w-5",
                "aria-hidden": "true",
              },
            )}
            <span>{tech.title}</span>
          </Chip>
        </a>
      ))}
    </div>
  );
}

export default TechStack;
