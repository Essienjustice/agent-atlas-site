import Link from "next/link";
import { ATTACK_MODEL } from "@/lib/data";

export function SecurityModel() {
  return (
    <section id="security" className="border-y border-border bg-surface/40 px-5 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <div className="section-label">Attack Model</div>
          <h2 className="section-title">
            We designed this
            <br />
            as an attacker first.
          </h2>
          <div className="mt-8 flex gap-3">
            <span className="badge text-green">Blocked</span>
            <span className="badge text-indigo">Mitigated</span>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {ATTACK_MODEL.map((item) => (
            <div className="card" key={item.title}>
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="font-display text-xl">{item.title}</h3>
                <span className="badge">{item.status}</span>
              </div>
              <p className="text-sm leading-7 text-subtle">{item.attack}</p>
              <p className="mt-4 text-sm leading-7 text-text">{item.mitigation}</p>
              <p className="mt-4 font-mono text-xs text-green">{item.severity}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl">
        <Link href="/docs/risks" className="btn-ghost">
          Read full attack model
        </Link>
      </div>
    </section>
  );
}
