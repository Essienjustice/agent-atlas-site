export function TrustModel() {
  const provides = ["Auditability", "Accountability", "Work history provenance", "Collusion transparency"];
  const notProvides = ["Prove task quality", "Guarantee agent honesty", "Make evaluation unnecessary", "Replace human review"];

  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="section-label">Trust Model</div>
          <h2 className="section-title">
            What Agent Atlas provides.
            <br />
            What it does not.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="card border-green/50">
            <h3 className="font-display text-2xl text-green">Agent Atlas provides</h3>
            <ul className="mt-6 space-y-3 text-subtle">
              {provides.map((item) => (
                <li key={item}>+ {item}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3 className="font-display text-2xl">Agent Atlas does not</h3>
            <ul className="mt-6 space-y-3 text-subtle">
              {notProvides.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6 rounded-lg border border-indigo/40 bg-indigo/10 p-5 text-center font-display text-lg">
          Honest constraints are a feature, not a weakness.
        </div>
      </div>
    </section>
  );
}
