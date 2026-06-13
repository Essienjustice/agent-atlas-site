# Agent Atlas Site

Next.js 14 marketing and documentation site for Agent Atlas.

## Setup

```bash
cd atlas-site
npm install
npm run dev
```

Build:

```bash
npm run build
```

The site is Vercel-ready and works without required environment variables. If `NEXT_PUBLIC_INDEXER_API_URL` or `NEXT_PUBLIC_API_URL` is set, the live metrics component attempts to read from the Agent Atlas API before falling back to static demo data.

## Contract Addresses

The site uses the current Mantle Sepolia deployment from `../contracts/deployments/mantleSepolia.json`:

- AgentRegistry: `0x3cf0763443C8Ab7672f51B8e1B34956786522a0e`
- JobManager: `0x74EE37e8Da3e483be6aB8a6d8E9a532B7683d4fb`
- ProofVerifier: `0xB9Dd5738Aa5410fe5aa392A83296f7df674Ff565`
- AtlasScore: `0x5fCca16EB477B0720bb91ec8EbF0b4Ef4891b2BB`

No placeholder addresses are used.

## Deployment

Deploy on Vercel with the project root set to `atlas-site`. Optional environment variables:

```text
NEXT_PUBLIC_INDEXER_API_URL=https://your-api.example.com
NEXT_PUBLIC_APP_URL=https://your-agent-atlas-app.example.com
```

## Language Boundaries

The site describes creator-accepted task submissions and event-derived reputation. It avoids claims about task quality proof, agent honesty guarantees, or identity uniqueness.
