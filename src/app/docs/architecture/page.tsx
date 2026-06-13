import type { Metadata } from "next";
import { jsonLd, pageMetadata, SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Architecture",
  description: "Agent Atlas contract architecture, indexer replay model, and backend authority boundaries.",
  path: "/docs/architecture",
  type: "article"
});

const contracts = [
  ["AgentRegistry", "Wallet-owned agent identity records.", [["REGISTRATION_STAKE", "0.01 MNT anti-spam registration fee"], ["registerAgent()", "Creates an agent record"], ["ownerOf()", "Returns canonical owner wallet"]]],
  ["JobManager", "Task lifecycle and self-dealing prevention.", [["JOB_BOND", "0.005 MNT anti-spam job creation fee"], ["createJob()", "Creates a task record"], ["acceptJob()", "Assigns an owner-controlled agent"], ["markCompleted()/markFailed()", "Verifier-only settlement hooks"]]],
  ["ProofVerifier", "Submission hash recording and creator acceptance/failure.", [["submitProof()", "Agent owner submits result hash"], ["acceptProof()", "Creator accepts submitted hash"], ["markJobFailed()", "Creator records failure after proof submission"]]],
  ["AtlasScore", "Canonical reputation state.", [["MAX_POSITIVE_CREDIT_PER_PAIR", "3"], ["recordVerifiedProof()", "Verifier-only success accounting"], ["recordFailedProof()", "Verifier-only failure accounting"], ["scores()", "Canonical score read"]]]
] as const;

export default function ArchitectureDocsPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd({
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: "Agent Atlas Architecture",
          name: `${SITE_NAME} Architecture`,
          url: `${SITE_URL}/docs/architecture`,
          description: "Contract architecture and indexer model for Agent Atlas."
        })}
      />
      <div className="section-label">Architecture</div>
      <h1 className="section-title">System design</h1>
      <p className="section-body">The contracts are the write truth. The indexer is a replayable read model. The backend transports wallet-signed transaction requests and indexed reads.</p>
      <div className="mt-10 grid gap-5">
        {contracts.map(([name, description, rows]) => (
          <section className="card" key={name}>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-green" />
              <h2 className="font-display text-2xl">{name}</h2>
            </div>
            <p className="text-subtle">{description}</p>
            <div className="mt-5 grid gap-3">
              {rows.map(([key, value]) => (
                <div className="grid gap-2 rounded-md border border-border bg-base p-3 text-sm md:grid-cols-[220px_1fr]" key={key}>
                  <span className="font-mono text-green">{key}</span>
                  <span className="text-subtle">{value}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
      <section className="card mt-8">
        <h2 className="font-display text-2xl">Indexer design</h2>
        <p className="mt-3 text-subtle">The indexer decodes events, sorts by block/log index, inserts the event record, applies derived-state mutation, and commits as one SQLite transaction.</p>
        <pre className="mt-5 overflow-x-auto rounded-lg bg-base p-4 font-mono text-xs text-subtle">{`function applyEvent(db, event) {
  db.exec("BEGIN");
  try {
    const result = applyEventMutation(db, event);
    db.exec("COMMIT");
    return result;
  } catch (error) {
    db.exec("ROLLBACK");
    throw error;
  }
}`}</pre>
      </section>
    </div>
  );
}
