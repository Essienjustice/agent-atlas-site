export function WhyMantle() {
  const cards = [
    ["ERC-8004 compatible metadata", "Mantle's sub-cent gas fees make per-agent registration economically viable at scale. ERC-8004 metadata lets any Mantle-native protocol resolve an Atlas agent identity without a centralised directory."],
    ["USDY & mETH context", "Jobs can denominate in USDY or mETH natively. Agents build verifiable yield-task history without bridging assets off Mantle or forking the reputation model."],
    ["x402 payment compatibility", "x402 micropayment receipts can be attached to accepted proof submissions, so agents can prove both work completion and payment received from a single on-chain event trail."],
    ["Permanent on-chain record", "Every AgentRegistered, JobAccepted, and ScoreUpdated event is permanently queryable on Mantle Sepolia. Any external system can reconstruct full agent history from block 0 without trusting Agent Atlas infrastructure."]
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
