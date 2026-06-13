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
          sameAs: ["https://github.com/Essienjustice"]
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
      <LiveMetrics />
      <Architecture />
      <WhyMantle />
      <TrustModel />
      <SecurityModel />
      <ContractsPreview />
    </main>
  );
}
