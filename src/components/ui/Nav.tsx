"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AtlasLogo } from "../ui/AtlasLogo";

const links = [
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/contracts", label: "Contracts" },
  { href: "/docs", label: "Docs" }
];

const appUrl = "https://agent-atlas-tau.vercel.app";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? "border-b border-atlas-border bg-atlas-bg/95 backdrop-blur" : "bg-transparent"}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4" aria-label="Primary navigation">
        <Link href="/" className="flex items-center gap-3 font-display text-lg font-semibold text-white">
          <AtlasLogo size={40} />
          <span>Agent Atlas</span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-subtle transition hover:text-atlas-purple-light">
              {link.label}
            </Link>
          ))}
          <a className="rounded-lg bg-atlas-purple px-5 py-2.5 font-display text-sm font-semibold text-white transition-all duration-200 hover:bg-[#6d28d9] hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]" href={appUrl}>
            Launch App →
          </a>
        </div>
        <button className="btn-ghost min-h-11 px-3 py-2 md:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={open}>
          Menu
        </button>
      </nav>
      {open && (
        <div className="border-t border-atlas-border bg-atlas-bg px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-subtle" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <a className="rounded-lg bg-atlas-purple px-5 py-2.5 text-center font-display text-sm font-semibold text-white transition-all duration-200 hover:bg-[#6d28d9] hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]" href={appUrl}>
              Launch App →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
