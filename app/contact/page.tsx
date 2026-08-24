import { Separator } from "@base-ui/react";
import { Mail } from "lucide-react";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

const email = "mohammedsadiq68005@gmail.com";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Mohammed Sadiq for freelance web development, responsive website design, React projects, Next.js applications, collaboration, and full stack development work.",
  pageKeywords: [
    "contact Mohammed Sadiq",
    "hire freelance web developer",
    "freelance React developer",
    "website development contact",
  ],
});

function Page() {
  return (
    <section aria-labelledby="contact-heading">
      <h1
        id="contact-heading"
        className="font-medium text-2xl tracking-tighter font-mono"
      >
        📧Contact
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Have a project in mind, want to collaborate, or just want to say
          hello? I&apos;d love to hear from you.
        </p>

        <p>
          Feel free to reach out to me via email. I&apos;ll get back to you as
          soon as possible.
        </p>

        <div className="mb-4 flex items-center">
          <Mail size={20} className="mr-2" aria-hidden="true" />
          <a
            href={`mailto:${email}`}
            className="text-sm underline underline-offset-4"
            aria-label="Email Mohammed Sadiq about freelance web development or collaboration"
          >
            {email}
          </a>
        </div>

        <Separator />
      </div>
    </section>
  );
}

export default Page;
