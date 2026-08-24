"use client";

import { useTheme } from "next-themes";
import { GitHubCalendar } from "react-github-calendar";

function GithubContribution() {
  const { resolvedTheme } = useTheme();
  return (
    <div aria-label="GitHub contribution calendar for Mohammed Sadiq">
      <p className="sr-only">
        Mohammed Sadiq's GitHub contribution activity shows ongoing web
        development practice, project work, and open source coding activity.
      </p>
      <GitHubCalendar
        username="msadiq7786"
        colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
      />
    </div>
  );
}

export default GithubContribution;
