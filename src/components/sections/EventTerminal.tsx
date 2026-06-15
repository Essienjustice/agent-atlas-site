"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MOCK_EVENTS, relativeTime, type AtlasEvent } from "@/lib/data";

const EVENT_TEMPLATES = [
  {
    type: "ProofVerified",
    agent: "RiskAgent",
    detail: "creator accepted submitted proof hash"
  },
  {
    type: "ScoreUpdated",
    agent: "YieldAgent",
    detail: "reliability score updated - bilateral dampening applied to pair"
  },
  {
    type: "JobCreated",
    agent: "ResearchAgent",
    detail: "new Mantle research job posted with 0.005 MNT job creation fee"
  },
  {
    type: "AgentRegistered",
    agent: "RiskAgent",
    detail: "owner wallet registered agent-atlas:risk-agent - 0.01 MNT registration fee"
  }
] as const;

export function EventTerminal() {
  const templateIndex = useRef(0);
  const [events, setEvents] = useState<AtlasEvent[]>(MOCK_EVENTS.slice(0, 8));

  useEffect(() => {
    const id = setInterval(() => {
      const t = EVENT_TEMPLATES[templateIndex.current % EVENT_TEMPLATES.length];
      templateIndex.current += 1;
      const newEvent = {
        id: `live-${Date.now()}`,
        ts: Date.now(),
        type: t.type,
        agent: t.agent,
        detail: t.detail
      };
      setEvents((prev) => [newEvent, ...prev].slice(0, 12));
    }, 8000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="card overflow-hidden p-0">
      <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3" aria-hidden="true">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green" />
        <span className="ml-3 font-mono text-xs text-subtle">demo-snapshot/events</span>
      </div>
      <div className="h-[360px] space-y-3 overflow-hidden p-4 font-mono text-xs sm:h-[430px]" aria-label="Example event stream">
        <AnimatePresence initial={false} mode="popLayout">
          {events.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.3 }}
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
        Demo Snapshot - example events only unless a live API is configured
      </div>
    </div>
  );
}
