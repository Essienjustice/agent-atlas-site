import type { Metadata } from "next";
import { EVENT_COLORS, EVENTS_SCHEMA } from "@/lib/data";
import { jsonLd, pageMetadata, SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Events",
  description: "Actual Agent Atlas contract events used for event-sourced reputation.",
  path: "/docs/events",
  type: "article"
});

export default function EventsDocsPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd({
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: "Agent Atlas Events",
          name: `${SITE_NAME} Events`,
          url: `${SITE_URL}/docs/events`,
          description: "Event schema for Agent Atlas contracts."
        })}
      />
      <div className="section-label">Events</div>
      <h1 className="section-title">On-chain events</h1>
      <p className="section-body">Agent Atlas uses contract events as the source for replayable application state.</p>
      <div className="mt-8 rounded-lg border border-indigo/40 bg-indigo/10 p-5 text-subtle">Replay property: state can be reconstructed from the current deployment block by applying events in block/log order.</div>
      <div className="mt-8 grid gap-5">
        {EVENTS_SCHEMA.map((event) => (
          <section className="card" key={event.name}>
            <div className="mb-4 flex items-center justify-between gap-4">
              <h2 className="font-display text-2xl">{event.name}</h2>
              <span className="badge">{EVENT_COLORS[event.name] || EVENT_COLORS.others}</span>
            </div>
            <p className="text-subtle">{event.description}</p>
            <pre className="mt-4 overflow-x-auto rounded-md bg-base p-4 font-mono text-xs text-green">{event.fields.join("\n")}</pre>
          </section>
        ))}
      </div>
      <section className="card mt-8">
        <h2 className="font-display text-2xl">Indexer processing order</h2>
        <ol className="mt-5 list-decimal space-y-3 pl-5 text-subtle">
          <li>Fetch new blocks since the last cursor.</li>
          <li>Decode events from configured contract addresses.</li>
          <li>Sort decoded logs by block number and log index.</li>
          <li>Check processed event IDs for idempotency.</li>
          <li>Open a SQLite transaction, insert the event, and apply state mutation atomically.</li>
          <li>Commit or rollback on failure, then advance cursor only after successful application.</li>
        </ol>
      </section>
    </div>
  );
}
