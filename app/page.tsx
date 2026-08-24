import { Separator } from "@/components/ui/separator";
import Certificates from "@/components/certificates";
import GithubContribution from "@/components/github-contribution";
import Link from "next/link";
import TechStack from "@/components/tech-stack";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { config } from "@/config/config";

export const metadata: Metadata = createPageMetadata({
  title: "Mohammed Sadiq - Full Stack Developer from India",
  description:
    "Explore Mohammed Sadiq's full stack web developer portfolio, including React projects, Next.js web apps, certifications, technical skills, and freelance website development services.",
  pageKeywords: [
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Software Engineer",
    "India Developer",
    "Mysore Developer",
    "Freelance Developer India",
    "Portfolio",
  ],
});

export default function Page() {
  return (
    <section aria-labelledby="home-heading">
      <div>
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <h1
            id="home-heading"
            className="text-2xl tracking-tight font-mono font-medium"
          >
            Hey, I'm Mohammed Sadiq 👋
          </h1>

          {config.user.isAvailable && (
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-800 rounded-full"
              aria-label="Mohammed Sadiq is available for freelance web development projects"
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
                  aria-hidden="true"
                ></span>
                <span
                  className="relative inline-flex rounded-full h-2 w-2 bg-green-500"
                  aria-hidden="true"
                ></span>
              </span>
              Available for freelance
            </span>
          )}
        </div>

        <p className="prose prose-zinc dark:prose-invert">
          I’m a Full Stack Web Developer from India, passionate about building
          modern, thoughtful, and user-focused digital experiences. With a love
          for clean code and creative problem-solving, I’m always looking for
          ways to make the web a little better. I enjoy turning ideas into
          polished products that are both functional and beautiful. Check out my{" "}
          <Link href="/projects">Projects</Link> or connect with me on{" "}
          <a href={config.socials.github}>GitHub</a>
        </p>
      </div>

      <Separator className="my-8" />

      <div className="prose prose-zinc dark:prose-invert">
        <h2>💻 Professional Work</h2>
        <p>
          I specialize in building modern, user-friendly digital experiences and
          enjoy turning ideas into practical web applications. I recently
          completed my <strong>BCA at MIT Degree College, Mysore</strong>, where
          I developed a strong foundation in software development, web
          technologies, and problem-solving. During my journey, I completed a
          Full Stack Web Development Internship at{" "}
          <a
            href="https://ethnotech.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ethnotech Academy
          </a>
          , where I worked on building web applications and gained hands-on
          experience with frontend and backend technologies, databases, APIs,
          and real-world development workflows.
        </p>
        <p>
          For more details, check out my <Link href="/resume">resume</Link>.
        </p>
      </div>
      <Separator className="my-8" />

      <div
        className="prose prose-zinc dark:prose-invert"
        aria-labelledby="github-contributions-heading"
      >
        <h2 id="github-contributions-heading">⚡ GitHub Contributions</h2>
        <GithubContribution />
      </div>

      <Separator className="my-8" />

      <div className="prose prose-zinc dark:prose-invert">
        <h2>🏅 Certifications</h2>
        <Certificates />
      </div>

      <div>
        <div className="prose prose-zinc dark:prose-invert">
          <h2>🛠️ Tech Stack</h2>
        </div>
        <TechStack />
      </div>

      <Separator className="my-8" />

      <div className="prose prose-zinc dark:prose-invert">
        <h2>🤝 Freelance</h2>
        <p>
          I work as a <strong>freelance web developer</strong>, helping
          individuals and businesses turn ideas into modern, responsive, and
          user-friendly websites. I focus on clean design, reliable development,
          and solutions tailored to each project. Interested in working
          together? <Link href="/contact">Get in touch</Link>.
        </p>
      </div>

      <div className="prose prose-zinc dark:prose-invert">
        <p className="text-xs hidden lg:block" aria-hidden="true">
          Press ⌘+K to navigate with your keyboard.
        </p>
        <p className="sr-only">
          Use the command menu to navigate Mohammed Sadiq&lsquo;s portfolio
          pages, including projects, resume, and contact information.
        </p>
      </div>
    </section>
  );
}
