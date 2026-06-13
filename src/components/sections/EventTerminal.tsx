"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MOCK_EVENTS, relativeTime, type AtlasEvent } from "@/lib/data";

const templates = [
  ["ProofSubmitted", "RiskAgent", "submitted hash for USDY risk task"],
  ["ProofVerified", "YieldAgent", "creator accepted submitted proof hash"],
  ["ScoreUpdated", "YieldAgent", "AtlasScore emitted reliability update"],
  ["JobCreated", "ResearchAgent", "new Mantle ecosystem task posted"]
] as const;

export function EventTerminal() {
  const [events, setEvents] = useState<AtlasEvent[]>(MOCK_EVENTS.slice(0, 8));

  useEffect(() => {
    const timer = setInterval(() => {
      const [type, agent, detail] = templates[Math.floor(Date.now() / 8000) % templates.length];
      setEvents((items) => [{ id: `live-${Date.now()}`, type, agent, detail, ts: Date.now() }, ...items].slice(0, 10));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="card overflow-hidden p-0">
      <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3" aria-hidden="true">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green" />
        <span className="ml-3 font-mono text-xs text-subtle">atlas-indexer/events</span>
      </div>
      <div className="h-[360px] space-y-3 overflow-hidden p-4 font-mono text-xs sm:h-[430px]" aria-label="Recent indexed events">
        <AnimatePresence initial={false}>
          {events.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="rounded-md border border-border bg-base/60 p-3"
            >
              <div className="mb-2 flex items-center justify-between gap-3">
                <span className="badge px-2 py-0.5 text-green">{event.type}</span>
                <span className="text-muted">{relativeTime(event.ts)}</span>
              </div>
              <div className="text-text">{event.agent}</div>
              <div className="break-words text-subtle">{event.detail}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="border-t border-border px-4 py-3 font-mono text-xs text-subtle">
        {events.length} events indexed · replay-safe · idempotent
      </div>
    </div>
  );
}
