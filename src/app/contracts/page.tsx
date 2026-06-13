import type { Metadata } from "next";
import { CONTRACTS, NETWORK } from "@/lib/data";
import { jsonLd, pageMetadata, SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contracts",
  description: "Current Agent Atlas Mantle Sepolia contract deployment addresses and explorer links.",
  path: "/contracts"
});

export default function ContractsPage() {
  return (
    <main className="px-5 pb-24 pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: `${SITE_NAME} Contracts`,
          url: `${SITE_URL}/contracts`,
          applicationCategory: "DeveloperApplication",
          operatingSystem: "Web",
          description: "Mantle Sepolia deployment addresses for Agent Atlas."
        })}
      />
      <div className="mx-auto max-w-7xl">
        <div className="section-label">Contracts</div>
        <h1 className="section-title">Contracts</h1>
        <p className="section-body">Current Mantle Sepolia deployment. These addresses are loaded from the audited deployment artifact.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <span className="badge">{NETWORK.name}</span>
          <span className="badge">Chain ID {NETWORK.chainId}</span>
          <a className="badge text-green" href={NETWORK.explorer}>Explorer</a>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {CONTRACTS.map((contract) => (
            <a className="card block hover:border-green/60" href={contract.explorer} target="_blank" rel="noreferrer" key={contract.name}>
              <h2 className="font-display text-2xl">{contract.name}</h2>
              <p className="mt-4 break-all font-mono text-sm text-green">{contract.address}</p>
              <p className="mt-4 leading-7 text-subtle">{contract.description}</p>
            </a>
          ))}
        </div>
        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="mb-6 font-display text-xl font-semibold text-text">Connect to Mantle Sepolia</h2>
          <div className="card space-y-3 font-mono text-sm">
            {[
              ["Network name", "Mantle Sepolia", null],
              ["RPC URL", "https://rpc.sepolia.mantle.xyz", null],
              ["Chain ID", "5003", null],
              ["Currency", "MNT", null],
              ["Explorer", "sepolia.mantlescan.xyz", "https://sepolia.mantlescan.xyz"],
              ["Faucet", "faucet.mantle.xyz", "https://faucet.mantle.xyz"]
            ].map(([label, value, href]) => (
              <div key={label as string} className="flex justify-between border-b border-border pb-3 last:border-0 last:pb-0">
                <span className="text-muted">{label}</span>
                {href ? (
                  <a href={href as string} target="_blank" rel="noopener noreferrer" className="text-green/80 transition-colors hover:text-green">
                    {value} -&gt;
                  </a>
                ) : (
                  <span className="text-text">{value}</span>
                )}
              </div>
            ))}
          </div>
          <p className="mt-3 font-mono text-xs text-muted">Add manually to MetaMask or search &quot;Mantle Sepolia&quot; on chainlist.org</p>
        </div>
      </div>
    </main>
  );
}
