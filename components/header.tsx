"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import Logo from "@/components/logo";
import DeskNav from "@/components/deskNav";
import MobileNav from "@/components/mobileNav";
import { cn } from "@/lib/utils";

function Header() {
  const [scrolled1, setScrolled1] = useState<boolean>(false);
  const [scrolled2, setScrolled2] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 20 ? setScrolled1(true) : setScrolled1(false);
      window.scrollY > 200 ? setScrolled2(true) : setScrolled2(false);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "z-40  flex sticky top-0 h-24 items-center sm:px-6 px-4 justify-between transition-all duration-500 w-full",
        scrolled1 && "bg-transparent backdrop-blur-md border-b",
        scrolled2 && "h-[4.5rem]"
      )}
    >
      <div className="flex items-center justify-between w-full">
        <Link href="/">
          <Logo />
        </Link>
        <DeskNav />
        <MobileNav />
      </div>
    </header>
  );
}

export default Header;
