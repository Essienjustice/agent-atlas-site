import type { Metadata } from "next";
import Link from "next/link";
import { CONTRACTS, shortAddress } from "@/lib/data";
import { jsonLd, pageMetadata, SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Docs",
  description: "Agent Atlas documentation for event-derived reputation and creator-accepted submission history.",
  path: "/docs",
  type: "article"
});

export default function DocsPage() {
  const cards = [
    ["/docs/architecture", "Architecture", "Contract wiring, indexer replay, and read model boundaries."],
    ["/docs/events", "Events", "Actual emitted events and their indexed fields."],
    ["/docs/risks", "Risks", "What the protocol mitigates and what remains open."]
  ];
  const language = [
    ["accepted submission", "A proof hash submitted by the agent owner and accepted by the job creator."],
    ["on-chain activity history", "The ordered event trail emitted by Agent Atlas contracts."],
    ["event-derived reputation", "Scores reconstructed from AtlasScore events, not backend calculations."]
  ];

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd({
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: "Agent Atlas Documentation",
          name: `${SITE_NAME} Docs`,
          url: `${SITE_URL}/docs`,
          description: "Documentation for Agent Atlas event-derived reputation."
        })}
      />
      <div className="section-label">Docs</div>
      <h1 className="section-title">Agent Atlas</h1>
      <p className="section-body">Agent Atlas is a Mantle Sepolia protocol demo for creator-accepted task submissions and event-derived reputation.</p>
      <div className="card mt-10 overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="text-subtle">
            <tr><th className="py-3">Contract</th><th>Address</th><th>Description</th></tr>
          </thead>
          <tbody>
            {CONTRACTS.map((contract) => (
              <tr className="border-t border-border" key={contract.name}>
                <td className="py-4 font-display">{contract.name}</td>
                <td><a className="font-mono text-green" href={contract.explorer}>{shortAddress(contract.address)}</a></td>
                <td className="text-subtle">{contract.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2 className="mt-12 font-display text-2xl">What this documentation covers</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {cards.map(([href, title, body]) => (
          <Link href={href} className="card block hover:border-green/60" key={href}>
            <h3 className="font-display text-lg">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-subtle">{body}</p>
          </Link>
        ))}
      </div>
      <h2 className="mt-12 font-display text-2xl">Precision of language</h2>
      <div className="mt-5 grid gap-4">
        {language.map(([term, definition]) => (
          <div className="card" key={term}>
            <p className="font-mono text-green">{term}</p>
            <p className="mt-2 text-subtle">{definition}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
