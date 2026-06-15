export function WhyMantle() {
  const cards = [
    ["Low-cost activity records", "Mantle Sepolia fees make per-agent registration, job creation, submission, and score-update transactions practical for a hackathon testnet protocol."],
    ["Public event trail", "AgentRegistered, JobCreated, JobAccepted, ProofSubmitted, ProofVerified, JobFailed, and ScoreUpdated events can be queried from the deployed contracts."],
    ["Replayable read model", "The indexer reconstructs Agent Atlas state from contract events starting at the deployment block, then serves the read model through the API."],
    ["Future ecosystem context", "Agent Atlas can potentially integrate with broader Mantle ecosystem primitives in future versions, but the current prototype records jobs, proof hashes, creator acceptance, and event-derived reputation."]
  ];

  return (
    <section className="border-y border-border bg-surface/40 px-5 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
        <div>
          <div className="section-label">Ecosystem Fit</div>
          <h2 className="section-title">
            Built on Mantle.
            <br />
            Not just deployed on it.
          </h2>
          <div className="mt-8 rounded-lg border border-green/40 bg-green/10 p-5 font-mono text-sm text-green">
            Mantle Sepolia - contract events - indexed reputation API
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {cards.map(([title, body]) => (
            <div className="card" key={title}>
              <h3 className="font-display text-lg">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-subtle">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
