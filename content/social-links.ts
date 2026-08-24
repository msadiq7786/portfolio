import { config } from "@/config/config";
import { SocialProfile } from "@/types/social-links";

export const SOCIAL = {
  mail: {
    title: "Email",
    handle: "mohammedsadiq68005",
    href: config.socials.email,
  },
  github: {
    title: "GitHub",
    handle: "msadiq7786",
    href: config.socials.github,
  },
  linkedin: {
    title: "LinkedIn",
    handle: "mhsadiq",
    href: config.socials.linkedin,
  },
  whatsapp: {
    title: "Whatsapp",
    handle: "say 👋",
    href: config.socials.whatsapp,
  },
} satisfies Record<string, SocialProfile>;

export type SocialName = keyof typeof SOCIAL;

export type SocialLink = SocialProfile & { name: SocialName };

export const SOCIAL_LINKS: SocialLink[] = (
  Object.entries(SOCIAL) as [SocialName, SocialProfile][]
).map(([name, profile]) => ({ name, ...profile }));
