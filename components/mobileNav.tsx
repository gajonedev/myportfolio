"use client";

import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet";
import Logo from "@/components/logo";
import { navbarConfig } from "@/config/navbar";
import { cn } from "@/lib/utils";
import SocialsLinks from "@/components/socialsLinks";

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="sm:hidden">
      <Sheet>
        <SheetTrigger>
          <AlignJustify size={30} />
        </SheetTrigger>
        <SheetContent className="flex flex-col items-center justify-between p-[3.3rem] ">
          <SheetHeader className="">
            <SheetClose asChild>
              <Link href="/">
                <Logo mobile className="text-4xl" />
              </Link>
            </SheetClose>
          </SheetHeader>
          <div className="flex flex-col gap-6 items-center">
            {navbarConfig.map((link, index) => (
              <div
                className={cn(
                  "text-foreground text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm px-4 py-2",
                  link.href === pathname &&
                    "text-background bg-primary rounded-full hover:text-background"
                )}
                key={index}
              >
                <SheetClose asChild>
                  <Link href={link.href}>{link.title}</Link>
                </SheetClose>
              </div>
            ))}
          </div>
          <SheetFooter>
            <SocialsLinks />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
