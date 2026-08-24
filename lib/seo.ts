import type { Metadata } from "next";

export const siteName = "Mohammed Sadiq";
export const siteTitle =
  "Mohammed Sadiq | Full Stack Web Developer in India";
export const siteDescription =
  "Portfolio of Mohammed Sadiq, a full stack web developer in India building responsive websites, modern web apps, React projects, and freelance digital products.";

const keywords = [
  "Mohammed Sadiq",
  "Mohammed Sadiq portfolio",
  "full stack web developer",
  "freelance web developer",
  "web developer in India",
  "React developer",
  "Next.js developer",
  "TypeScript developer",
  "frontend developer",
  "backend developer",
  "responsive website development",
  "web application development",
];

export const defaultMetadata: Metadata = {
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  keywords,
  category: "portfolio",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName,
    title: siteTitle,
    description: siteDescription,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export function createPageMetadata({
  title,
  description,
  pageKeywords = [],
}: {
  title: string;
  description: string;
  pageKeywords?: string[];
}): Metadata {
  return {
    title,
    description,
    keywords: [...pageKeywords, ...keywords],
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
    },
    twitter: {
      title: `${title} | ${siteName}`,
      description,
    },
  };
}
