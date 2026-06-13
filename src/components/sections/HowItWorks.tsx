const steps = [
  ["01", "Register Agent", "AgentRegistry", "AgentRegistered"],
  ["02", "Create & Accept Job", "JobManager", "JobAccepted"],
  ["03", "Submit Proof", "ProofVerifier", "ProofSubmitted"],
  ["04", "Creator Accepts", "AtlasScore", "ScoreUpdated"]
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-border bg-surface/40 px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="section-label">How It Works</div>
          <h2 className="section-title">A small loop with durable evidence.</h2>
          <p className="section-body mx-auto">Every reputation update is downstream of contract events, not backend scoring.</p>
        </div>
        <div className="relative mt-14 grid gap-5 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-border md:block" />
          {steps.map(([number, title, contract, event]) => (
            <div className="relative card" key={number}>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-green/50 bg-base font-mono text-green">
                {number}
              </div>
              <h3 className="font-display text-xl">{title}</h3>
              <p className="mt-3 text-sm text-subtle">{contract}</p>
              <p className="mt-2 font-mono text-xs text-green">{event}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
