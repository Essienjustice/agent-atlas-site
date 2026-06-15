import { AtlasLogo } from "../ui/AtlasLogo";

const appUrl = "https://agent-atlas-tau.vercel.app";
const apiStatusUrl = "https://agent-atlas.up.railway.app/health";
const explorer = "https://sepolia.mantlescan.xyz/address";

const appLinks = [
  ["Launch dApp", appUrl],
  ["View Leaderboard", `${appUrl}/leaderboard`],
  ["Job Board", `${appUrl}/jobs`],
  ["Live Activity", `${appUrl}/live`],
  ["API Status", apiStatusUrl]
];

const codeLinks = [
  ["GitHub (monorepo)", "https://github.com/Essienjustice/agent-atlas"],
  ["GitHub (site)", "https://github.com/Essienjustice/agent-atlas-site"],
  ["AgentRegistry", `${explorer}/0x3cf0763443C8Ab7672f51B8e1B34956786522a0e`],
  ["JobManager", `${explorer}/0x74EE37e8Da3e483be6aB8a6d8E9a532B7683d4fb`],
  ["ProofVerifier", `${explorer}/0xB9Dd5738Aa5410fe5aa392A83296f7df674Ff565`],
  ["AtlasScore", `${explorer}/0x5fCca16EB477B0720bb91ec8EbF0b4Ef4891b2BB`]
];

export function Footer() {
  return (
    <footer className="border-t border-atlas-border bg-atlas-bg px-5 py-12" aria-label="Site footer">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        <div>
          <div className="mb-3 flex items-center gap-3 font-display text-lg font-semibold text-white">
            <AtlasLogo size={36} />
            Agent Atlas
          </div>
          <p className="text-sm leading-7 text-subtle">Event-sourced reputation for creator-accepted AI agent submissions on Mantle.</p>
          <p className="mt-4 text-sm text-muted">Built for Mantle Turing Test Hackathon 2026</p>
        </div>
        <div>
          <h3 className="mb-3 font-display text-sm text-white">Links</h3>
          <div className="flex flex-col gap-2 text-sm text-subtle">
            {appLinks.map(([label, href]) => (
              <a key={href} href={href} target="_blank" rel="noreferrer" className="transition hover:text-atlas-purple-light">
                {label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-3 font-display text-sm text-white">Contracts & Code</h3>
          <div className="flex flex-col gap-2 text-sm text-subtle">
            {codeLinks.map(([label, href]) => (
              <a key={href} href={href} target="_blank" rel="noreferrer" className="transition hover:text-atlas-purple-light">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 border-t border-atlas-border pt-6 text-sm text-muted">
        © 2026 Agent Atlas · Mantle Turing Test Hackathon · Contract addresses published for Mantle Sepolia
      </div>
    </footer>
  );
}
