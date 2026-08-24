"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Home,
  FolderKanban,
  FileText,
  Mail,
  Sun,
  Moon,
  Laptop,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

const navigation = [
  { name: "Home", href: "/", icon: Home, shortcut: "h" },
  { name: "Projects", href: "/projects", icon: FolderKanban, shortcut: "p" },
  { name: "Resume", href: "/resume", icon: FileText, shortcut: "r" },
  { name: "Contact", href: "/contact", icon: Mail, shortcut: "c" },
];

const themes = [
  { name: "Light", value: "light", icon: Sun },
  { name: "Dark", value: "dark", icon: Moon },
  { name: "System", value: "system", icon: Laptop },
];

export function CmdK() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const { setTheme } = useTheme();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      // Toggle palette with Cmd/Ctrl + K
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prevOpen) => !prevOpen);
        return;
      }

      // Only fire single-letter shortcuts when the palette is closed
      // and the user isn't typing in an input/textarea elsewhere.
      const target = e.target as HTMLElement;
      const isTyping =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable;

      if (!open && !isTyping && !e.metaKey && !e.ctrlKey && !e.altKey) {
        const match = navigation.find(
          (item) => item.shortcut.toLowerCase() === e.key.toLowerCase(),
        );
        if (match) {
          e.preventDefault();
          router.push(match.href);
        }
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, router]);

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput
        placeholder="Type a command or search..."
        aria-label="Search Mohammed Sadiq portfolio commands"
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Navigation">
          {navigation.map((item) => (
            <CommandItem
              key={item.href}
              value={item.name}
              onSelect={() => runCommand(() => router.push(item.href))}
            >
              <item.icon className="mr-2 h-4 w-4" />
              <span>{item.name}</span>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Theme">
          {themes.map((t) => (
            <CommandItem
              key={t.value}
              value={t.name}
              onSelect={() => runCommand(() => setTheme(t.value))}
            >
              <t.icon className="mr-2 h-4 w-4" />
              <span>{t.name}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
