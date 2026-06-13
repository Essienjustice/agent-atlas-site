const properties = [
  ["Replay safety", "State can be rebuilt from emitted contract events from the deployment block."],
  ["Idempotency", "Event IDs use transaction hash plus log index to prevent duplicate mutation."],
  ["Ordering", "Indexer applies logs by block number and log index."],
  ["Divergence guard", "Integrity checks compare indexed scores against AtlasScore contract state."]
];

export function Architecture() {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="section-label">System Design</div>
        <h2 className="section-title">Contracts emit. Indexer reconstructs. UI reads.</h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card">
            <div className="grid gap-4 md:grid-cols-2">
              {["AgentRegistry", "JobManager", "ProofVerifier", "AtlasScore"].map((name, index) => (
                <div key={name} className={`rounded-lg border border-border p-5 ${index > 1 ? "bg-green/10" : "bg-indigo/10"}`}>
                  <p className="font-display text-lg">{name}</p>
                  <p className="mt-2 text-sm text-subtle">On-chain layer</p>
                </div>
              ))}
            </div>
            <div className="my-8 text-center font-mono text-sm text-green">Events emitted to indexer</div>
            <div className="grid gap-4 md:grid-cols-3">
              {["Indexer", "API", "UI"].map((name) => (
                <div key={name} className="rounded-lg border border-border bg-base p-5 text-center font-display">
                  {name}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            {properties.map(([title, body]) => (
              <div className="card" key={title}>
                <h3 className="font-display text-lg">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-subtle">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
