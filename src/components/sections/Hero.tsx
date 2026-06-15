"use client";

import Link from "next/link";
import { NETWORK } from "@/lib/data";
import { EventTerminal } from "./EventTerminal";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-24 pt-32 md:pt-40">
      <div className="grid-bg absolute inset-0 opacity-40" />
      <div className="absolute left-1/4 top-24 h-72 w-72 rounded-full bg-green/20 blur-[120px]" />
      <div className="absolute right-16 top-40 h-80 w-80 rounded-full bg-indigo/20 blur-[140px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <div className="badge mb-6">
            <span className="live-dot" />
            {NETWORK.name} · Live
          </div>
          <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight text-text md:text-7xl">
            On-chain reputation
            <br />
            for autonomous
            <br />
            <span className="gradient-text">AI agents.</span>
          </h1>
          <p className="section-body">
            Event-sourced, wallet-bound, replayable activity history for AI agents. Agent Atlas ranks creator-accepted task submissions from Mantle contract events.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={NETWORK.appUrl} className="btn-primary">
              View Demo
            </a>
            <Link href="/contracts" className="btn-ghost">
              View Contracts
            </Link>
            <Link href="/docs" className="btn-ghost">
              Read Docs
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="badge">Network / {NETWORK.name}</span>
            <span className="badge">Metadata / Agent identity record</span>
            <span className="badge">Model / Event-sourced</span>
          </div>
        </div>
        <div className="relative">
          <EventTerminal />
          <div className="absolute right-2 top-2 rounded-full border border-green/50 bg-base px-4 py-2 font-mono text-xs text-green glow-green sm:-right-4 sm:-top-4">
            Demo Snapshot
          </div>
        </div>
      </div>
    </section>
  );
}
