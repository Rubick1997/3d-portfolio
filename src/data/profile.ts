// Single source of truth for everything said about Rustam on the site.
// Every claim here must trace to the prep doc or résumé (prep doc wins on conflict).
// Do not add a phone number, job-pipeline details, Citi, or anything unconfirmed.

export const site = {
  url: "https://kolumstack.best",
  name: "Rustam Kolumbayev",
  title: "Rustam Kolumbayev, AI Product Engineer",
  description:
    "AI product engineer. I build AI features end to end, and make sure the AI is actually right. Senior engineer at Qloo, based in Seattle.",
} as const;

export const profile = {
  name: "Rustam Kolumbayev",
  role: "AI Product Engineer",
  positioning:
    "I build AI features end to end, from the data and the model to the screen people use, and I make sure the AI is actually right.",
  subline:
    "Senior engineer at Qloo, owning a consumer recommendations site, an enterprise analytics dashboard and the company website. Seattle.",
  now: "Building AI features at Qloo and grading frontier coding agents for Mercor.",
  shortBio:
    "I'm an AI product engineer with about six years of experience. I own features end to end, from the data and the backend to the screen the user actually touches, and more and more of that work involves AI.",
  longBio: [
    "I'm an AI product engineer with about six years of experience. My strength is the layer where people meet the system, especially AI.",
    "At Qloo I own three products end to end: a consumer recommendations site, an enterprise analytics dashboard and the company website.",
    "Through Mercor, I write coding tasks and rubrics that frontier labs use to train and grade coding agents, which taught me where agents fail and how they fake success.",
    "In my own pipelines, every sentence the model writes is fact-checked against real data before a user sees it.",
    "Before engineering, I earned a law degree. I write up my projects so other engineers can reuse them.",
  ],
  pillars: [
    "I build AI features end to end.",
    "I make sure the AI is actually right.",
    "I ship where the stakes are high, and I share what I learn.",
  ],
  cta: {
    heading: "Let's talk",
    body: "I'm looking for a product engineering role on a small, early team building agentic AI that does real work, close to customers. Based in Seattle; on-site, hybrid or remote.",
  },
  location: "Seattle, WA",
  worksFor: "Qloo",
  knowsAbout: [
    "AI product engineering",
    "LLM pipelines",
    "LLM evaluation",
    "AI user interfaces",
    "Product engineering",
    "React",
    "TypeScript",
    "Next.js",
    "Design systems",
  ],
} as const;

export const links = {
  email: "rustam.kolumbayev@gmail.com",
  linkedin: "https://www.linkedin.com/in/rustam-kolumbayev",
  github: "https://github.com/Rubick1997",
  medium: "https://medium.com/@vinch1910",
  // Flip once the files/cleanup exist (see brief §4 GitHub cleanup, §6 résumé).
  showGithub: false,
  resume: "/resume.pdf" as string | null,
} as const;

export type Principle = { title: string; body: string; proof: { label: string; href: string } };

export const principles: Principle[] = [
  {
    title: "Prototype, don't argue",
    body: "When a disagreement is about facts, a prototype settles it faster than a debate.",
    proof: { label: "Face-aware hero banners", href: "/work/face-aware-hero-banners" },
  },
  {
    title: "Precompute what you can list",
    body: "If you can list every input, generate and check the answers ahead of time.",
    proof: { label: "LLM output as a build artifact", href: "/work/llm-output-as-build-artifact" },
  },
  {
    title: "Verify before users see it",
    body: "Every sentence the model writes is fact-checked against real data before a user sees it. I verify the behavior, not just that it compiles.",
    proof: { label: "Mercor agent evaluation", href: "/work/mercor-agent-evaluation" },
  },
  {
    title: "Fix the system, not the page",
    body: "Fixing the shared palette and type scale fixed it everywhere at once.",
    proof: { label: "Analytics dashboard rebuild", href: "/work/analytics-dashboard-rebuild" },
  },
];

export type Role = {
  org: string;
  orgNote?: string;
  title: string;
  period: string;
  summary: string;
  bullets: string[];
  tags: string[];
  work?: string; // slug of a related case study
};

export const experience: Role[] = [
  {
    org: "Qloo",
    title: "Senior Software Engineer",
    period: "Feb 2025 – Present",
    summary: "I own a consumer recommendations site, an enterprise analytics dashboard and the company website, end to end.",
    bullets: [
      "Took an LLM personalization feature from a one-line idea to production in about two days: 31 s per request to an instant static file.",
      "Rebuilt the analytics dashboard's frontend architecture for 40% faster page load.",
      "Led SOC 2 Type II compliance.",
    ],
    tags: ["Next.js", "TypeScript", "React", "D3.js", "LLMs"],
    work: "llm-output-as-build-artifact",
  },
  {
    org: "Mercor",
    title: "AI Evaluation Contributor (part-time contract)",
    period: "2025 – Present",
    summary: "Codebase-grounded tasks and rubrics used to train and grade frontier coding agents.",
    bullets: [
      "Rubrics with 15–35 atomic criteria each, anchored to real repos at fixed commits and calibrated against agent baselines.",
      "Review benchmark artifacts for fairness, criterion atomicity and grading leakage before tasks ship.",
    ],
    tags: ["Agent evaluation", "Rubric design", "Python", "Docker"],
    work: "mercor-agent-evaluation",
  },
  {
    org: "Pyte",
    orgNote: "acquired by All Hands AI",
    title: "Software Engineer",
    period: "Dec 2022 – Feb 2025",
    summary: "The only frontend engineer on a privacy-preserving AI/ML collaboration platform. I built its first UI.",
    bullets: [
      "Designed and built ~30 screens; first usable version in about a month.",
      "A one-week Advertising Week New York demo led directly to onboarding five clients.",
      "Helped pass SOC 2. Cypress E2E automation cut deployment bugs by 20%.",
    ],
    tags: ["React", "TypeScript", "gRPC", "Cypress"],
    work: "pyte-secure-computation",
  },
  {
    org: "Jaxel",
    title: "Full Stack Engineer",
    period: "May 2021 – Dec 2022",
    summary: "Client dashboards and incident response for enterprise customers.",
    bullets: [
      "Built the SDG&E drone-inspection dashboard demo in about a week; we won the contract.",
      "Led the incident team for Starbucks: 60% fewer incidents, 35% lower MTTR, round-the-clock Seattle–India coverage.",
    ],
    tags: ["React", "Node.js", "Datadog", "PagerDuty"],
  },
  {
    org: "Fixinity",
    title: "Full Stack Developer",
    period: "Jul 2019 – May 2021",
    summary: "A location-based marketplace connecting users with local auto mechanics.",
    bullets: ["Onboarded 5,000+ users in 6 months; 30% fewer complaints."],
    tags: ["React", "React Native", "Firebase"],
  },
];

export const education = [
  { name: "Post Graduate Program in Cloud Computing", org: "UT Austin", year: "2023" },
  { name: "Full Stack bootcamp", org: "Nucamp", year: "2020" },
  { name: "CS50x", org: "Harvard", year: "2019" },
  { name: "Bachelor of Law", org: "KIMEP University", year: "2019" },
];
