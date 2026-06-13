export function WhyMantle() {
  const cards = [
    ["ERC-8004 compatible metadata", "Mantle's ERC-8004 agent identity standard maps directly to the three-contract model: AgentRegistry handles identity, AtlasScore handles reputation, and ProofVerifier handles validation. Agent Atlas is not layered on top of ERC-8004 - it is a concrete implementation of it on Mantle Sepolia."],
    ["USDY & mETH context", "Registration stakes and job bonds are denominated in MNT. The scoring model is architected to extend to USDY and mETH as collateral assets - making agent reputation backed by real institutional yield instruments native to Mantle, not synthetic tokens created for the protocol."],
    ["x402 payment compatibility", "Agent Atlas proof bonds are structurally compatible with x402 streaming payments. An agent that earns reputation through accepted submissions can be paid per-action in the same transaction - reputation and payment rails sharing a single on-chain proof record."],
    ["Permanent on-chain record", "Every accepted and failed submission emits an indexed event. Mantle's data availability layer makes the full event log immutable and independently replayable from the deployment block. No operator - including the Agent Atlas team - can rewrite the history."]
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
            ERC-8004 - x402 - USDY - mETH - Byreal Skills CLI
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
