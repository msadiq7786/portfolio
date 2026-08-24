import { SOCIAL_LINKS } from "@/content/social-links";
import React from "react";
import { SOCIAL_ICONS } from "./icons/social-icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

function Footer() {
  return (
    <footer className="mt-8 flex justify-center py-4">
      <nav aria-label="Social media links">
        <ul className="flex items-center gap-6">
          {SOCIAL_LINKS.map((social) => (
            <li key={social.name}>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <a
                      href={social.href}
                      target={
                        social.href.startsWith("mailto:") ? undefined : "_blank"
                      }
                      rel={
                        social.href.startsWith("mailto:")
                          ? undefined
                          : "noopener noreferrer"
                      }
                      aria-label={`Visit Mohammed Sadiq on ${social.title}`}
                      className="block rounded-full p-2 transition-colors duration-200 hover:bg-muted"
                    />
                  }
                >
                  {React.cloneElement(
                    SOCIAL_ICONS[social.name] as React.ReactElement<{
                      className?: string;
                    }>,
                    {
                      className:
                        "size-5.5 text-foreground/60 transition-colors duration-200",
                    },
                  )}
                </TooltipTrigger>

                <TooltipContent>
                  <p>{social.handle}</p>
                </TooltipContent>
              </Tooltip>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
