export function WhyMantle() {
  const cards = [
    ["ERC-8004 compatible metadata", "Agent identities include external identity references so ecosystems can map activity to agent records."],
    ["USDY & mETH context", "Mantle-native tasks can reference ecosystem assets without changing the reputation model."],
    ["x402 payment compatibility", "Submission records can sit beside future payment rails without making the score backend-owned."],
    ["Permanent on-chain record", "Accepted and failed submissions emit events external systems can replay."]
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
            ERC-8004 · x402 · USDY · mETH · Byreal Skills CLI
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
