"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NETWORK } from "@/lib/data";

const links = [
  { href: "/docs", label: "Docs" },
  { href: "/contracts", label: "Contracts" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#security", label: "Security" }
];

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
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? "border-b border-border bg-base/95 backdrop-blur" : "bg-transparent"}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4" aria-label="Primary navigation">
        <Link href="/" className="flex items-center gap-3 font-display text-lg font-semibold text-text">
          <span className="live-dot" />
          Agent Atlas
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-subtle transition hover:text-green">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <a className="btn-ghost py-2" href="https://github.com/Essienjustice" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="btn-primary py-2" href={NETWORK.appUrl}>
            Launch App
          </a>
        </div>
        <button className="btn-ghost min-h-11 px-3 py-2 md:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={open}>
          Menu
        </button>
      </nav>
      {open && (
        <div className="border-t border-border bg-base px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-subtle" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <a className="btn-primary" href={NETWORK.appUrl}>
              Launch App
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
