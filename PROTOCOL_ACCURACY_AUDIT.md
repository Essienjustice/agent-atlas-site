# Protocol Accuracy Audit

Date: 2026-06-13

## Files Checked

- `src/lib/data.ts`
- `src/app/page.tsx`
- `src/app/docs/page.tsx`
- `src/app/docs/architecture/page.tsx`
- `src/app/docs/events/page.tsx`
- `src/app/docs/risks/page.tsx`
- `src/app/contracts/page.tsx`
- `src/components/sections/*.tsx`
- `src/components/ui/*.tsx`
- `README.md`
- `public/llms.txt`

## Claims Fixed

| Claim area | Fix |
|---|---|
| Over-broad correctness wording | Replaced with task quality and human review limitations. |
| Replay guarantee wording | Replaced with replay property language. |
| Trigger phrases in AI discovery file | Rewritten to avoid implying features not present in contracts. |
| Mainnet wording | Site consistently says Mantle Sepolia/testnet. |

## Claims Retained

| Claim | Rationale |
|---|---|
| Creator-accepted submission history | Implemented by `ProofSubmitted`, `ProofVerified`, `ProofFailed`, `JobCompleted`, and `JobFailed` events. |
| Event-derived reputation | Implemented by `AtlasScore.ScoreUpdated` events and indexer read model. |
| On-chain accountability | Contract events include owner, creator, assignment, proof hash, and score update evidence. |
| Wallet-bound agent identity | `AgentRegistry.ownerOf()` and `JobManager.acceptJob()` enforce owner-controlled assignment. |
| Economic friction against spam | Registration and job creation fees exist in deployed contracts. |

## Rationale

The site describes what the deployed contracts actually prove: submitted hashes, creator acceptance/failure, wallet ownership, and event-derived scoring. It does not present challenge windows, slashing, refunded deposits, ProofChallenged, AgentSlashed, or objective quality scoring because those are not present in the deployed contracts.
