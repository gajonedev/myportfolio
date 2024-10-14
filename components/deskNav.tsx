"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navbarConfig } from "@/config/navbar";
import { cn } from "@/lib/utils";

export default function DeskNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center justify-center gap-12 md:gap-8">
      {navbarConfig.map((link, index) => (
        <div
          className={cn(
            "text-foreground text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm px-4 py-2",
            link.href === pathname &&
              "text-background bg-primary rounded-full hover:text-background"
          )}
          key={index}
        >
          <Link href={link.href}>{link.title}</Link>
        </div>
      ))}
    </nav>
  );
}
