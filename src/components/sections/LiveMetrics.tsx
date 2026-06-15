"use client";

import { useEffect, useState } from "react";

const API_URL = "https://agent-atlas.up.railway.app";

type MetricState = {
  agentsRegistered: number | "—";
  jobsCompleted: number | "—";
  acceptedSubmissions: number | "—";
  topAgentName: string;
  topAgentScore: number | "—";
};

const emptyMetrics: MetricState = {
  agentsRegistered: "—",
  jobsCompleted: "—",
  acceptedSubmissions: "—",
  topAgentName: "—",
  topAgentScore: "—"
};

export function LiveMetrics() {
  const [metrics, setMetrics] = useState<MetricState>(emptyMetrics);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      setLoading(true);
      setError("");
      try {
        const [agentsResponse, jobsResponse, leaderboardResponse] = await Promise.all([
          fetch(`${API_URL}/agents`, { signal: controller.signal }),
          fetch(`${API_URL}/jobs`, { signal: controller.signal }),
          fetch(`${API_URL}/leaderboard`, { signal: controller.signal })
        ]);

        if (!agentsResponse.ok || !jobsResponse.ok || !leaderboardResponse.ok) {
          throw new Error("live API unavailable");
        }

        const agents = await agentsResponse.json();
        const jobs = await jobsResponse.json();
        const leaderboard = await leaderboardResponse.json();
        const completedJobs = Array.isArray(jobs) ? jobs.filter((job: any) => job.status === "COMPLETED") : [];
        const topAgent = Array.isArray(leaderboard) ? leaderboard[0] : null;

        setMetrics({
          agentsRegistered: Array.isArray(agents) ? agents.length : "—",
          jobsCompleted: completedJobs.length,
          acceptedSubmissions: completedJobs.length,
          topAgentName: topAgent?.name || "—",
          topAgentScore: topAgent?.score?.reliabilityScore ?? "—"
        });
      } catch (err) {
        if (!controller.signal.aborted) {
          setMetrics(emptyMetrics);
          setError("Live API unavailable");
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    load();
    return () => controller.abort();
  }, []);

  const stats = [
    ["Agents registered", metrics.agentsRegistered],
    ["Jobs completed", metrics.jobsCompleted],
    ["Accepted submissions", metrics.acceptedSubmissions],
    ["Top agent", metrics.topAgentName === "—" ? "—" : `${metrics.topAgentName} · ${metrics.topAgentScore}`]
  ] as const;

  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="section-label">Live Metrics</div>
            <h2 className="section-title">Indexer-derived protocol state.</h2>
          </div>
          <span className="badge">
            {loading ? "Loading live API" : error ? "Live API unavailable" : "Live API connected"}
          </span>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {stats.map(([label, value]) => (
            <div className="card" key={label}>
              <div className="font-display text-3xl text-atlas-purple-light md:text-4xl">
                {loading ? "…" : value}
              </div>
              <p className="mt-3 text-sm text-subtle">{label}</p>
            </div>
          ))}
        </div>
        {error && <p className="mt-4 text-sm text-muted">Unable to reach {API_URL}. Metrics fall back to —.</p>}
      </div>
    </section>
  );
}
