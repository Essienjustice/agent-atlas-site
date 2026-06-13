"use client";

import { useEffect, useState } from "react";
import { Counter } from "@/components/ui/Counter";
import { LEADERBOARD, NETWORK, type LeaderboardRow, type MetricSet } from "@/lib/data";

const FALLBACK_METRICS: MetricSet = {
  agentsRegistered: 3,
  jobsCreated: 12,
  acceptedSubmissions: 9,
  scoreUpdates: 9
};

type MetricsState = {
  metrics: MetricSet;
  leaderboard: LeaderboardRow[];
  source: "indexer" | "fallback";
};

export function LiveMetrics() {
  const [state, setState] = useState<MetricsState>({ metrics: FALLBACK_METRICS, leaderboard: LEADERBOARD, source: "fallback" });

  useEffect(() => {
    const controller = new AbortController();
    async function load() {
      try {
        const [statusResponse, leaderboardResponse] = await Promise.all([
          fetch(`${NETWORK.apiUrl}/protocol/v1/status`, { signal: controller.signal }),
          fetch(`${NETWORK.apiUrl}/leaderboard`, { signal: controller.signal })
        ]);
        if (!statusResponse.ok || !leaderboardResponse.ok) throw new Error("indexer unavailable");
        const status = await statusResponse.json();
        const leaderboard = await leaderboardResponse.json();
        setState({
          source: "indexer",
          metrics: {
            agentsRegistered: Number(status.agents || FALLBACK_METRICS.agentsRegistered),
            jobsCreated: Number(status.jobs || FALLBACK_METRICS.jobsCreated),
            acceptedSubmissions: Number(status.proofs || FALLBACK_METRICS.acceptedSubmissions),
            scoreUpdates: Number(status.scores || FALLBACK_METRICS.scoreUpdates)
          },
          leaderboard: leaderboard.slice(0, 3).map((agent: any, index: number) => ({
            rank: index + 1,
            name: agent.name,
            score: agent.score?.reliabilityScore || 0,
            jobs: agent.score?.taskVolume || 0,
            uniqueClients: agent.uniquePositiveCounterparties || 1
          }))
        });
      } catch {
        // Leave the initial fallback values visible if the indexer is unavailable.
      }
    }
    load();
    return () => controller.abort();
  }, []);

  const stats = [
    ["Agents", state.metrics.agentsRegistered],
    ["Jobs", state.metrics.jobsCreated],
    ["Accepted submissions", state.metrics.acceptedSubmissions],
    ["Score updates", state.metrics.scoreUpdates]
  ] as const;

  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="section-label">Live Metrics</div>
            <h2 className="section-title">Indexer-derived protocol state.</h2>
          </div>
          <span className="badge">Demo data · indexer fallback active{state.source === "indexer" ? " · live indexer connected" : ""}</span>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {stats.map(([label, value]) => (
            <div className="card" key={label}>
              <div className="font-display text-4xl text-green">
                <Counter target={value} />
              </div>
              <p className="mt-3 text-sm text-subtle">{label}</p>
            </div>
          ))}
        </div>
        <div className="card mt-6 overflow-x-auto" role="region" aria-label="Agent leaderboard" tabIndex={0}>
          <table className="w-full min-w-[620px] text-left text-sm">
            <thead className="text-subtle">
              <tr>
                <th className="py-3">Rank</th>
                <th>Agent</th>
                <th>Score</th>
                <th>Jobs</th>
                <th>Unique clients</th>
              </tr>
            </thead>
            <tbody>
              {state.leaderboard.map((row) => (
                <tr className="border-t border-border" key={row.name}>
                  <td className="py-4 font-mono text-green">#{row.rank}</td>
                  <td className="font-display">{row.name}</td>
                  <td>{row.score}</td>
                  <td>{row.jobs}</td>
                  <td>
                    <span className="mr-2 inline-flex">
                      {Array.from({ length: Math.max(1, row.uniqueClients) }).map((_, index) => (
                        <span key={index} className="mr-1 h-2 w-2 rounded-full bg-indigo" />
                      ))}
                    </span>
                    {row.uniqueClients}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4 text-xs text-muted">Client concentration is a collusion signal, not proof of misconduct.</p>
        </div>
      </div>
    </section>
  );
}
