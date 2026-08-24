import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The requested Mohammed Sadiq portfolio page could not be found. Return home to explore full stack web development projects, resume, and contact details.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section aria-labelledby="not-found-heading" className="min-h-[55vh] py-10">
      <div className="border-b pb-8">
        <p className="mb-2 font-mono text-sm text-muted-foreground">
          404 - route went for coffee
        </p>
        <h1
          id="not-found-heading"
          className="font-mono text-2xl font-medium tracking-tighter sm:text-3xl"
        >
          Oops! This page is playing hide and seek.
        </h1>

        <div className="prose prose-zinc mt-4 dark:prose-invert">
          <p>
            You found a route that does not exist. Either the link is broken,
            the page is still warming up, or the URL tried to freestyle.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Spot a bug?{" "}
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-primary"
            >
              let me know on GitHub.
            </a>
            .
          </p>
        </div>

        <p className="sr-only">
          This is the Mohammed Sadiq portfolio 404 page. Use the links to visit
          the home, projects, resume, or contact pages.
        </p>
      </div>
    </section>
  );
}
