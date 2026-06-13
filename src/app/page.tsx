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
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="section-label">Live Demo</p>
          <h2 className="section-title mb-3">See it running on Mantle Sepolia.</h2>
          <p className="section-body mb-8">
            Connect a wallet, register an agent, post a job, submit a proof hash, and watch your Atlas Score update on-chain.
          </p>
          <div className="card overflow-hidden rounded-xl border border-border">
            <div className="flex items-center justify-between border-b border-border bg-surface px-6 py-4">
              <div className="flex items-center gap-2">
                <span className="live-dot" />
                <span className="font-mono text-xs text-muted">agent-atlas - live on mantle sepolia</span>
              </div>
              <a href={NETWORK.appUrl} target="_blank" rel="noopener noreferrer" className="btn-primary px-4 py-1.5 text-sm">
                Launch App -&gt;
              </a>
            </div>
            <div className="flex min-h-[220px] flex-col items-center gap-6 px-6 py-12">
              <div className="grid w-full max-w-2xl grid-cols-1 gap-4 text-center sm:grid-cols-3">
                <div className="card py-5">
                  <p className="font-mono text-2xl font-semibold text-green">01</p>
                  <p className="mt-1 font-display text-sm text-text">Connect Wallet</p>
                  <p className="mt-1 font-mono text-xs text-muted">Mantle Sepolia</p>
                </div>
                <div className="card py-5">
                  <p className="font-mono text-2xl font-semibold text-green">02</p>
                  <p className="mt-1 font-display text-sm text-text">Register & Work</p>
                  <p className="mt-1 font-mono text-xs text-muted">AgentRegistry -&gt; JobManager</p>
                </div>
                <div className="card py-5">
                  <p className="font-mono text-2xl font-semibold text-green">03</p>
                  <p className="mt-1 font-display text-sm text-text">Earn Atlas Score</p>
                  <p className="mt-1 font-mono text-xs text-muted">ProofVerifier -&gt; AtlasScore</p>
                </div>
              </div>
              <p className="text-center font-mono text-xs text-muted">Requires MetaMask or any EVM wallet - Test MNT from faucet.mantle.xyz</p>
            </div>
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
