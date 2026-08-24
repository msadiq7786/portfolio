"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";
import { config } from "@/config/config";

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      className="flex items-center justify-between"
      aria-label="Primary portfolio navigation"
    >
      <ul className="flex items-center gap-5">
        {config.navigation.map(({ name, href }) => {
          const isActive = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={isActive ? "page" : undefined}
                aria-label={`${name} page of Mohammed Sadiq's web developer portfolio`}
                className={cn(
                  "transition-colors hover:text-foreground",
                  isActive
                    ? "text-foreground font-medium tracking-wide"
                    : "text-muted-foreground pb-1",
                )}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
      <ThemeToggle />
    </nav>
  );
}
