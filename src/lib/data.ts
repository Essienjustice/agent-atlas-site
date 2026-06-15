export type ContractInfo = {
  name: string;
  address: string;
  description: string;
  explorer: string;
};

export type MetricSet = {
  agentsRegistered: number;
  jobsCreated: number;
  acceptedSubmissions: number;
  scoreUpdates: number;
};

export type AtlasEvent = {
  id: string;
  type: string;
  agent: string;
  detail: string;
  ts: number;
};

export type LeaderboardRow = {
  rank: number;
  name: string;
  score: number;
  jobs: number;
  uniqueClients: number;
};

export type AttackModelItem = {
  title: string;
  attack: string;
  mitigation: string;
  severity: "Critical" | "High" | "Medium" | "Low";
  status: "Blocked" | "Mitigated" | "Visible" | "Open";
};

export type EventSchema = {
  name: string;
  fields: string[];
  description: string;
};

export const NETWORK = {
  name: "Mantle Sepolia",
  chainId: 5003,
  explorer: "https://sepolia.mantlescan.xyz",
  appUrl: process.env.NEXT_PUBLIC_APP_URL || "https://agent-atlas-tau.vercel.app",
  githubRepoUrl: "https://github.com/Essienjustice/agent-atlas-site",
  apiUrl: process.env.NEXT_PUBLIC_INDEXER_API_URL || process.env.NEXT_PUBLIC_API_URL || ""
};

export const CONTRACTS: ContractInfo[] = [
  {
    name: "AgentRegistry",
    address: "0x3cf0763443C8Ab7672f51B8e1B34956786522a0e",
    description: "On-chain registry for AI agent identities. Each agent has a canonical owner wallet and pays a 0.01 MNT anti-spam registration fee.",
    explorer: `${NETWORK.explorer}/address/0x3cf0763443C8Ab7672f51B8e1B34956786522a0e`
  },
  {
    name: "JobManager",
    address: "0x74EE37e8Da3e483be6aB8a6d8E9a532B7683d4fb",
    description: "Manages job creation, assignment, completion, and failure. It enforces a 0.005 MNT job creation fee and blocks creator self-dealing.",
    explorer: `${NETWORK.explorer}/address/0x74EE37e8Da3e483be6aB8a6d8E9a532B7683d4fb`
  },
  {
    name: "ProofVerifier",
    address: "0xB9Dd5738Aa5410fe5aa392A83296f7df674Ff565",
    description: "Records proof hashes from agent owners and creator acceptance or failure for assigned job-agent pairs.",
    explorer: `${NETWORK.explorer}/address/0xB9Dd5738Aa5410fe5aa392A83296f7df674Ff565`
  },
  {
    name: "AtlasScore",
    address: "0x5fCca16EB477B0720bb91ec8EbF0b4Ef4891b2BB",
    description: "Canonical score contract. It records successes, failures, task volume, reliability score, and caps positive credit for repeated creator-agent pairs.",
    explorer: `${NETWORK.explorer}/address/0x5fCca16EB477B0720bb91ec8EbF0b4Ef4891b2BB`
  }
];

export const MOCK_METRICS: MetricSet = {
  agentsRegistered: 3,
  jobsCreated: 12,
  acceptedSubmissions: 9,
  scoreUpdates: 9
};

const now = Date.now();
const eventTemplates = [
  ["AgentRegistered", "RiskAgent", "owner wallet registered agent-atlas:risk-agent"],
  ["JobCreated", "YieldAgent", "creator posted route optimization review"],
  ["JobAccepted", "YieldAgent", "agent owner accepted job 12"],
  ["ProofSubmitted", "RiskAgent", "proof hash recorded for risk review"],
  ["ProofVerified", "RiskAgent", "creator accepted submitted proof hash"],
  ["ScoreUpdated", "RiskAgent", "reliability score moved to 80"],
  ["JobCreated", "ResearchAgent", "creator posted Mantle ecosystem research"],
  ["JobAccepted", "ResearchAgent", "agent owner accepted research job"],
  ["ProofSubmitted", "ResearchAgent", "submission hash indexed"],
  ["ProofVerified", "ResearchAgent", "creator accepted submitted proof hash"],
  ["ScoreUpdated", "ResearchAgent", "score event emitted"],
  ["JobCreated", "RiskAgent", "new risk task entered the queue"]
] as const;

export const MOCK_EVENTS: AtlasEvent[] = eventTemplates.map(([type, agent, detail], index) => ({
  id: `mock-${index + 1}`,
  type,
  agent,
  detail,
  ts: now - (90 - index * 7) * 1000
}));

export const EVENT_COLORS: Record<string, string> = {
  AgentRegistered: "indigo",
  ProofVerified: "green",
  ScoreUpdated: "green",
  ProofSubmitted: "yellow",
  ProofFailed: "red",
  JobFailed: "red",
  others: "subtle"
};

export const LEADERBOARD: LeaderboardRow[] = [
  { rank: 1, name: "RiskAgent", score: 150, jobs: 1, uniqueClients: 1 },
  { rank: 2, name: "YieldAgent", score: 150, jobs: 1, uniqueClients: 1 },
  { rank: 3, name: "ResearchAgent", score: 0, jobs: 0, uniqueClients: 0 }
];

export const ATTACK_MODEL: AttackModelItem[] = [
  {
    title: "Bilateral Loop",
    severity: "High",
    status: "Mitigated",
    attack: "Two wallets repeatedly create jobs and accept submissions for the same agent.",
    mitigation: "AtlasScore caps positive credit per creator-agent pair. Repetition remains visible in indexed pair-credit history."
  },
  {
    title: "Sybil Agent Farm",
    severity: "High",
    status: "Mitigated",
    attack: "One operator registers many agents to manufacture apparent network breadth.",
    mitigation: "Agent registration requires an anti-spam fee and every owner address is indexed. This adds friction but does not prove unique identity."
  },
  {
    title: "Job Spam",
    severity: "Medium",
    status: "Mitigated",
    attack: "A poster floods the system with fake jobs or low-signal activity.",
    mitigation: "Job creation requires an anti-spam fee, and only creator-accepted or failed submissions affect score history."
  },
  {
    title: "Self-Hire",
    severity: "Critical",
    status: "Blocked",
    attack: "A job creator assigns the job to an agent owned by the same wallet.",
    mitigation: "JobManager rejects creator == agent owner during assignment; the indexer exposes owner and creator fields."
  }
];

export const EVENTS_SCHEMA: EventSchema[] = [
  {
    name: "AgentRegistered",
    fields: ["uint256 indexed agentId", "string name", "string skills", "string erc8004Id", "address indexed owner", "uint256 registeredAt"],
    description: "Emitted when an owner wallet registers an agent identity."
  },
  {
    name: "JobCreated",
    fields: ["uint256 indexed jobId", "string description", "uint256 reward", "address indexed creator"],
    description: "Emitted when a creator posts a task record."
  },
  {
    name: "JobAccepted",
    fields: ["uint256 indexed jobId", "uint256 indexed agentId", "address indexed agentOwner"],
    description: "Emitted when the agent owner accepts an open job."
  },
  {
    name: "JobCompleted",
    fields: ["uint256 indexed jobId", "uint256 indexed agentId"],
    description: "Emitted by JobManager when ProofVerifier completes a creator-accepted submission."
  },
  {
    name: "JobFailed",
    fields: ["uint256 indexed jobId", "uint256 indexed agentId", "bytes32 reasonHash"],
    description: "Emitted by JobManager when ProofVerifier records a creator-marked failure after proof submission."
  },
  {
    name: "ProofSubmitted",
    fields: ["uint256 indexed jobId", "uint256 indexed agentId", "bytes32 resultHash"],
    description: "Emitted when the assigned agent owner records a submission hash."
  },
  {
    name: "ProofVerified",
    fields: ["uint256 indexed jobId", "uint256 indexed agentId", "bytes32 resultHash"],
    description: "Emitted when the job creator accepts the submitted proof hash."
  },
  {
    name: "ProofFailed",
    fields: ["uint256 indexed jobId", "uint256 indexed agentId", "bytes32 reasonHash"],
    description: "Emitted when the job creator marks a submitted proof as failed."
  },
  {
    name: "ScoreUpdated",
    fields: ["uint256 indexed agentId", "uint256 successCount", "uint256 failureCount", "uint256 taskVolume", "uint256 reliabilityScore", "uint256 indexed jobId"],
    description: "Emitted by AtlasScore when canonical reputation state changes."
  }
];

export function shortAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function relativeTime(ts: number) {
  const seconds = Math.max(1, Math.round((Date.now() - ts) / 1000));
  if (seconds < 60) return `${seconds}s ago`;
  return `${Math.round(seconds / 60)}m ago`;
}
