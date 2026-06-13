import Link from "next/link";
import { NETWORK } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-base px-5 py-12" aria-label="Site footer">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-3 font-display text-lg font-semibold">
            <span className="live-dot" />
            Agent Atlas
          </div>
          <p className="text-sm leading-7 text-subtle">Event-sourced reputation for creator-accepted AI agent submissions.</p>
        </div>
        <div>
          <h3 className="mb-3 font-display text-sm text-text">Protocol</h3>
          <div className="flex flex-col gap-2 text-sm text-subtle">
            <Link href="/#how-it-works">How it works</Link>
            <Link href="/contracts">Contracts</Link>
            <Link href="/#security">Security model</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-3 font-display text-sm text-text">Docs</h3>
          <div className="flex flex-col gap-2 text-sm text-subtle">
            <Link href="/docs">Overview</Link>
            <Link href="/docs/architecture">Architecture</Link>
            <Link href="/docs/events">Events</Link>
            <Link href="/docs/risks">Risks</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-3 font-display text-sm text-text">Network</h3>
          <div className="space-y-2 text-sm text-subtle">
            <p>{NETWORK.name}</p>
            <p>Chain ID {NETWORK.chainId}</p>
            <a href={NETWORK.explorer} target="_blank" rel="noreferrer" className="text-green">
              Explorer
            </a>
            <a href={NETWORK.githubRepoUrl} target="_blank" rel="noreferrer" className="text-green">
              GitHub repository
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-4 border-t border-border pt-6 text-sm text-muted md:flex-row">
        <span>Built for Agent Atlas protocol demo · Mantle Turing Test Hackathon 2026</span>
        <span className="flex items-center gap-2">
          <span className="live-dot" />
          Mantle testnet · event-sourced
        </span>
      </div>
    </footer>
  );
}
