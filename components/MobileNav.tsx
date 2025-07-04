"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { links } from "./Nav"; // Assuming links are exported from Nav

export default function MobileNav() {
  const pathName = usePathname();
  return (
    <nav>
      <Sheet>
        <SheetTrigger className="flex justify-center items-center">
          <CiMenuFries className="text-[32px] text-accent" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          {/* logo */}
          <div className="mt-32 mb-40 text-center text-2xl">
            <Link href="/">
              <h1 className="text-4xl font-semibold">
                Fahad<span className="text-accent">.</span>
              </h1>
            </Link>
          </div>
          {/* nav */}
          <nav className="flex flex-col items-center justify-center  gap-8">
            {links.map((link) => (
              <SheetClose asChild key={link.href}>
                <Link
                  href={link.href}
                  key={link.href}
                  className={`${
                    pathName === link.href &&
                    "text-accent border-b-2 border-accent"
                  } text-xl capitalize hover:text-accent transition-all`}
                >
                  {link.label}
                </Link>
              </SheetClose>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
