"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/resume", label: "Resume" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathName = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, i) => (
        <Link
          key={i}
          href={link.href}
          className={` ${
            pathName === link.href && "text-accent border-b-2 border-accent"
          } capaitalize font-medium hover:text-accent transition-all`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
