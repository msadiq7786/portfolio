import ResumePreview from "@/components/resume-preview";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Resume",
  description:
    "View and download the resume of Mohammed Sadiq, a full stack web developer skilled in React, Next.js, TypeScript, frontend development, backend APIs, and freelance web projects.",
  pageKeywords: [
    "Mohammed Sadiq resume",
    "full stack developer resume",
    "React developer resume",
    "web developer CV",
  ],
});

function Page() {
  return (
    <section aria-labelledby="resume-heading">
      <div className="flex items-center justify-between mb-4">
        <h1
          id="resume-heading"
          className="font-medium text-2xl tracking-tighter font-mono"
        >
          📄Resume
        </h1>
        <a
          href="/resume.pdf"
          download="Mohammed_Sadiq.pdf"
          aria-label="Download Mohammed Sadiq full stack web developer resume as a PDF"
        >
          <Button variant="ghost" type="button">
            <Download aria-hidden="true" />
            <span>Download</span>
          </Button>
        </a>
      </div>
      <p className="sr-only">
        Mohammed Sadiq's resume highlights full stack web development
        experience, React and Next.js projects, technical skills, education,
        certifications, and freelance website development work.
      </p>
      <ResumePreview />
    </section>
  );
}

export default Page;
