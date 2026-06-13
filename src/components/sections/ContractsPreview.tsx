import Link from "next/link";
import { CONTRACTS, shortAddress } from "@/lib/data";

export function ContractsPreview() {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="section-label">Contracts</div>
            <h2 className="section-title">Canonical deployment.</h2>
          </div>
          <Link href="/contracts" className="btn-ghost">
            View all contracts
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {CONTRACTS.map((contract) => (
            <a key={contract.name} href={contract.explorer} target="_blank" rel="noreferrer" className="card block transition hover:border-green/60">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-green" />
                <h3 className="font-display text-xl">{contract.name}</h3>
              </div>
              <p className="font-mono text-sm text-green">{shortAddress(contract.address)}</p>
              <p className="mt-4 leading-7 text-subtle">{contract.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
