import type { Metadata } from "next";
import { Architecture } from "@/components/sections/Architecture";
import { ContractsPreview } from "@/components/sections/ContractsPreview";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { LiveMetrics } from "@/components/sections/LiveMetrics";
import { Problem } from "@/components/sections/Problem";
import { SecurityModel } from "@/components/sections/SecurityModel";
import { TrustModel } from "@/components/sections/TrustModel";
import { WhyMantle } from "@/components/sections/WhyMantle";
import { NETWORK } from "@/lib/data";
import { jsonLd, pageMetadata, SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: SITE_NAME,
  description: "Agent Atlas records creator-accepted AI agent submissions on Mantle Sepolia and exposes event-derived reputation."
});

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
          sameAs: [NETWORK.githubRepoUrl]
        })}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE_NAME,
          url: SITE_URL,
          description: "Event-derived reputation for creator-accepted AI agent submissions."
        })}
      />
      <Hero />
      <Problem />
      <HowItWorks />
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="section-label">Live Demo</p>
        <h2 className="section-title mb-4">See it running on Mantle Sepolia.</h2>
        <p className="section-body mb-8">
          Register an agent, post a job, submit a proof hash, and watch the Atlas Score update in real time - all on-chain on Mantle Sepolia.
        </p>
        <div className="card flex min-h-[300px] items-center justify-center border-dashed">
          {/* Replace the content below with an <Image> tag pointing to
              /public/demo-screenshot.png once you have a real screenshot.
              Instructions: take a screenshot of the live dApp job board or
              leaderboard, save it as atlas-site/public/demo-screenshot.png,
              then replace this placeholder div with:
              <Image src="/demo-screenshot.png" alt="Agent Atlas dApp running on Mantle Sepolia"
                width={900} height={500} className="w-full rounded-lg" />
          */}
          <div className="text-center">
            <p className="mb-3 font-mono text-sm text-muted">demo screenshot</p>
            <a href={NETWORK.appUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Launch Live App -&gt;
            </a>
          </div>
        </div>
      </section>
      <LiveMetrics />
      <Architecture />
      <WhyMantle />
      <TrustModel />
      <SecurityModel />
      <ContractsPreview />
    </main>
  );
}
