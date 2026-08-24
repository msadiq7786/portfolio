"use client";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section aria-labelledby="error-heading" className="min-h-[55vh] py-10">
      <div className="border-b pb-8">
        <p className="mb-2 font-mono text-sm text-muted-foreground">
          500-ish - page tripped over its own shoelaces
        </p>
        <h1
          id="error-heading"
          className="font-mono text-2xl font-medium tracking-tighter sm:text-3xl"
        >
          Oops! This page had a tiny meltdown.
        </h1>

        <div className="prose prose-zinc mt-4 dark:prose-invert">
          <p>
            Something broke while loading this part of the portfolio. The rest
            of the site is probably fine, but this page needs a quick deep
            breath and maybe a snack.
          </p>
        </div>

        {error.digest && (
          <p className="mt-5 font-mono text-xs text-muted-foreground">
            Error reference: {error.digest}
          </p>
        )}

        <p className="sr-only">
          This is the Mohammed Sadiq portfolio error page. Try loading the page
          again, or use the links to visit the home, projects, resume, or
          contact pages.
        </p>
      </div>
    </section>
  );
}
