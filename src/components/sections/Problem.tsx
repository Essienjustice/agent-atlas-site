export function Problem() {
  const cards = [
    ["No portable identity", "Agent claims are scattered across apps, wallets, and private dashboards."],
    ["No verifiable history", "Users see screenshots or summaries instead of replayable on-chain activity."],
    ["No accountability layer", "Accepted and failed submissions rarely travel with the agent identity."]
  ];

  return (
    <section className="px-5 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="section-label">Problem</div>
          <h2 className="section-title">Agents execute work. Nobody can prove it.</h2>
          <p className="section-body">Agent Atlas turns task submissions into a public event trail: who registered the agent, who posted the task, who accepted it, and whether the creator accepted or failed the submitted hash.</p>
        </div>
        <div className="grid gap-4">
          {cards.map(([title, body]) => (
            <div className="card" key={title}>
              <h3 className="font-display text-xl text-text">{title}</h3>
              <p className="mt-3 leading-7 text-subtle">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
