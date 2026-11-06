// Case studies as decision records:
// Problem → Constraints → Approach → Key decision → Results → What I'd do differently → Stack → Related writing.
// Every figure comes from the prep doc unless noted (résumé). Fields left empty are
// gaps Rustam still has to fill. They are hidden when they're empty, so never pad them.

export type Metric = { value: string; label: string };

export type CaseStudy = {
  slug: string;
  title: string;
  org: string;
  kicker: string;
  summary: string;
  featured: boolean;
  metrics: Metric[];
  problem: string[];
  constraints: string[];
  approach: string[];
  decision?: { title: string; body: string[] };
  results: string[];
  failures?: string[]; // failure log / what went wrong
  differently: string[]; // "What I'd do differently". Rustam's words only
  lesson?: string;
  stack: string[];
  related: { title: string; href: string }[];
};

export const work: CaseStudy[] = [
  {
    slug: "llm-output-as-build-artifact",
    title: "Treating LLM output as a build artifact",
    org: "Qloo · company website",
    kicker: "LLM pipeline · cost & latency",
    summary:
      "Twelve interests give only 4,095 combinations, so I generated and fact-checked every answer ahead of time. Latency went from 31 seconds to instant, for about $121.",
    featured: true,
    metrics: [
      { value: "31 s → instant", label: "request latency" },
      { value: "4,095", label: "answers, all fact-checked" },
      { value: "~$121", label: "main run, ~3¢ per answer" },
      { value: "~2 days", label: "idea to production" },
    ],
    problem: [
      "A visitor picks any of 12 interests and gets a paragraph describing people who share them.",
      "In V1, each click made 11 data calls and 7 model calls. One request took 31 seconds.",
    ],
    constraints: [],
    approach: [
      "I noticed that 12 items give only 4,095 combinations. So I pre-generated every answer as a ~2 KB static file on a CDN. There's no model, API key or rate limit in the request path.",
      "On the frontend, every phrase is tagged to its source claim. Hovering a phrase shows the data behind it, so users can check the text.",
    ],
    decision: {
      title: "Split the writer and the checker",
      body: [
        "Using a frontier model for both writing and checking was projected at ~$490. To cut costs, I first tried a smaller writer. Only 25% of its claims survived the check, 52% after I capped claims at 20 words, and the paragraphs still weren't good enough to ship.",
        "So I split the roles. Claude Opus writes through the batch API at half price, and Jev, a small decision model, fact-checks every claim against evidence data. The Jev checks for the 4,077 combinations in the main run cost 42 cents.",
      ],
    },
    results: [
      "All 4,095 combinations shipped. The main run took ~53 minutes and cost ~$121, about 3 cents per combination and roughly a quarter of the original setup.",
      "Latency went from 31 seconds to instant.",
      "One-line idea to production in about two days. The CPO and CEO signed off.",
    ],
    failures: [
      "The main run finished 4,077 combinations. Of the last 18, 10 went through on retries. The other 8 kept failing because Jev flagged correct claims as overstated: the criteria never said that naming two signals together was allowed.",
      "I rewrote the criteria and raised the keep threshold from 0.5 to 0.6 for those 8. They finished for about $1.20 more.",
    ],
    differently: [
      "I didn't measure how much of the saving came from batching and how much from moving the checks to Jev. Next time I'd split those out.",
      "My test before the run was small: 3 claims, 2 paragraphs and 18 cross-checked claims. The run showed what it missed. Now I keep a set of known cases and rerun it after every change to the criteria.",
      "When a run stalls on the same few inputs, I'd check the criteria before the writer, and sooner.",
    ],
    lesson: "If you can list every input, generate and check the answers ahead of time.",
    stack: ["Claude Opus (Batch API)", "Jev", "Static files on CDN", "Next.js", "TypeScript"],
    related: [{ title: "Treat LLM Output as a Build Artifact: Batch APIs and Jev", href: "/blog/treat-llm-output-as-a-build-artifact" }],
  },
  {
    slug: "face-aware-hero-banners",
    title: "Face-aware hero banners for 2 million+ pages",
    org: "Qloo · consumer recommendations site",
    kicker: "On-device ML · SSR performance",
    summary:
      "A centered crop was cutting people's heads off. I find the focal point once on the server, with no GPU and no paid vision API, and one CSS value keeps it in view.",
    featured: true,
    metrics: [
      { value: "2M+", label: "entries in the People category" },
      { value: "0", label: "GPUs or paid vision APIs" },
      { value: "1.5 s", label: "analysis budget per batch of images" },
      { value: "3.5×", label: "widest banner aspect handled" },
    ],
    problem: [
      "If you open the Leonardo DiCaprio page, you expect to see Leonardo DiCaprio.",
      "People pages use wide hero banners built from uncontrolled sources like Wikimedia. A centered CSS crop on square portraits was literally cutting people's heads off, so the workaround had been to blur the banners.",
    ],
    constraints: [
      "Pages are server-rendered, so analysis can't slow them down or break them.",
      "No GPU and no paid vision API.",
      "We don't re-encode images.",
    ],
    approach: [
      "Detect a focal point once on the server with a chain of detectors in Node, using TensorFlow.js on WebAssembly: faces, then the main person's head, then saliency. A hero banner crops hard, so it only moves for a face or a person; a saliency guess keeps the default center. Logos get a separate method.",
      "On the client, a single CSS object-position value keeps the point in view, from narrow mobile up to a banner 3.5× wider than tall.",
      "For SSR safety: a ~30-day per-image cache, shared in-flight analysis, lazy-loaded ML libraries, and a 1.5-second budget per batch of images that falls back to the default crop.",
    ],
    decision: {
      title: "Prototype instead of debating",
      body: [
        "The CPO was skeptical. Their worries were that it would be slow, that it was an SEO risk, and that it would need an expensive Gemini setup.",
        "I built a prototype in about a day and showed the pages side by side. The CPO then asked me to apply it to other categories and to present it to the company.",
      ],
    },
    results: [
      "The blur is gone. Faces show across the whole People category of 2 million+ entries.",
      "Page load is unchanged, and we never re-encode a single image.",
    ],
    differently: [
      "The first visitor to a new image still gets the default crop. I'd warm the cache when images are ingested.",
      "One point per image can't serve two very different subjects at far-apart aspect ratios. I'd store a focal box, as the logo path already does.",
      "The detectors don't know which person the page is about. On a poster with two actors, the crop frames both.",
    ],
    stack: ["Node.js", "TensorFlow.js (WASM)", "Next.js SSR", "CSS object-position"],
    related: [
      { title: "Stop Cutting Heads Off Your Hero Images (Part 1 of 2)", href: "/blog/stop-cutting-heads-off-your-hero-images" },
      { title: "Finding the Focal Point: Faces, Then People, Then Saliency (Part 2 of 2)", href: "/blog/finding-the-focal-point" },
    ],
  },
  {
    slug: "analytics-dashboard-rebuild",
    title: "Rebuilding an enterprise analytics dashboard",
    org: "Qloo · analytics dashboard",
    kicker: "Frontend architecture · design system",
    summary:
      "The dashboard is where Fortune 100 clients see Qloo's ML results over 3.7B+ lifestyle entities. I rebuilt the frontend and the shared system under it.",
    featured: true,
    metrics: [
      { value: "−40%", label: "page load time" },
      { value: "+48%", label: "engagement after a collaboration fix" },
      { value: "−50%", label: "LLM API costs" },
      { value: "+25%", label: "dashboard adoption" },
    ],
    problem: [
      "The dashboard is where Fortune 100 clients see Qloo's ML results over 3.7B+ lifestyle entities.",
      "Before the rebuild, a new panel type could take a week just to reach dev.",
    ],
    constraints: [],
    approach: [
      "I rebuilt the frontend architecture, and moved from JavaScript to TypeScript.",
      "I built React + D3.js visualizations over REST and WebSockets.",
      "I made one panel component with a type prop, plus a shared design-token library used across all three of the products I own.",
      "I switched the written insights to batch prompting with ChatGPT and Claude.",
    ],
    decision: {
      title: "Fix the collaboration bug at the root",
      body: [
        "Real-time collaboration (shared cursors, comments, presence) through a third-party SDK had an initialization-timing bug.",
        "I moved initialization into one root provider. Engagement rose 48% after the fix.",
      ],
    },
    results: [
      "40% faster page load from the frontend architecture rebuild.",
      "+25% dashboard adoption from the new visualizations.",
      "30% fewer runtime bugs after the TypeScript migration, and 45% less time to fix production issues with Sentry.",
      "50% lower LLM API costs from batch prompting.",
      "A new panel now goes from start to production in about a week.",
    ],
    differently: [],
    stack: ["React", "TypeScript", "D3.js", "WebSockets", "Real-time collaboration SDK", "Sentry", "Design tokens"],
    related: [],
  },
  {
    slug: "pyte-secure-computation",
    title: "The first UI for secure computation, and a one-week Ad Week demo",
    org: "Pyte",
    kicker: "Zero-to-one UI · demo under deadline",
    summary:
      "Pyte was command-line only. As the only frontend engineer I built its first UI, then made it demoable on phones for Advertising Week New York in a week.",
    featured: true,
    metrics: [
      { value: "~30", label: "screens, designed and built" },
      { value: "~1 month", label: "to the first usable version" },
      { value: "1 week", label: "to a phone demo for 15K+ attendees" },
      { value: "5", label: "clients onboarded from the demo" },
    ],
    problem: [
      "Pyte was command-line only.",
      "Later, with one week to go before Advertising Week New York (15K+ attendees), the app was desktop-only.",
    ],
    constraints: ["I was the only frontend engineer.", "One week for the Ad Week demo."],
    approach: [
      "I designed and built ~30 screens from scratch: upload dataset → approve computation → run → results. Encrypted computation is visible in real time on AWS Nitro and Azure Confidential Containers.",
      "For Ad Week, I started by asking what a visitor needed to walk away believing: that secure computation is fast and simple. So I cut everything else.",
      "I generated a realistic ad-industry dataset per user and turned two-party approval into a QR scan.",
    ],
    decision: {
      title: "Swap the dense QR code for a short code",
      body: [
        "The dense QR code was slow to scan on real phones.",
        "We switched to a short code mapped to the dataset ID. A backend engineer built that lookup.",
      ],
    },
    results: [
      "The first usable version shipped in about a month. My demos helped win proof-of-concept contracts with Fortune 100 companies.",
      "The Ad Week demo shipped in a week and led directly to onboarding five clients and building MVPs for them.",
      "Cypress E2E automation cut deployment bugs by 20% (résumé).",
    ],
    differently: [
      "I tested the Ad Week demo alone.",
      "We ended up with two UIs for one engine.",
    ],
    stack: ["React", "TypeScript", "Redux Toolkit", "gRPC", "Cypress", "AWS Nitro", "Azure Confidential Containers"],
    related: [],
  },
  {
    slug: "mercor-agent-evaluation",
    title: "Evaluating frontier coding agents",
    org: "Mercor",
    kicker: "AI evaluation",
    summary:
      "I write codebase-grounded tasks and rubrics that frontier labs use to train and grade coding agents.",
    featured: false,
    metrics: [{ value: "15–35", label: "atomic criteria per rubric" }],
    problem: ["Coding agents can look successful without solving the problem."],
    constraints: ["Each task is anchored to a real repo at a fixed commit."],
    approach: [
      "I author tasks across architecture reasoning, root-cause analysis, code comprehension and PR impact assessment. Each one comes from live exploration of a real codebase, to resist memorization.",
      "Each rubric has 15–35 atomic criteria across functional correctness, robustness, reasoning quality, style and tool use. I calibrate tasks against agent baselines to target consistent difficulty.",
      "I audit fairness by reconstructing the file set the agent could actually see, and review benchmark artifacts for ambiguous prompts, hidden assumptions and grading leakage before tasks ship.",
    ],
    results: [
      "It taught me where agents fail and how they fake success, like passing a check without solving the problem.",
    ],
    differently: [],
    stack: ["Python", "Rubric design", "Agent evaluation", "Docker", "Git"],
    related: [],
  },
  {
    slug: "pyte-grpc-monorepo",
    title: "Design decision: the UI moves into the backend monorepo",
    org: "Pyte",
    kicker: "Design decision · type safety",
    summary:
      "A typed TypeScript client generated from the gRPC definitions meant a backend change that broke the UI failed before it reached the branch.",
    featured: false,
    metrics: [],
    problem: ["Backend changes could silently break UI types."],
    constraints: [],
    approach: [
      "I moved the UI into the backend monorepo and generated a typed TypeScript client from the gRPC definitions.",
      "A pre-commit hook plus CI built the whole app.",
    ],
    results: ["A backend change that broke UI types failed before reaching the branch."],
    differently: ["The monorepo couples builds. I'd revisit that as the team grows."],
    stack: ["gRPC", "TypeScript codegen", "CI", "Monorepo"],
    related: [],
  },
];

export const moreWork: { title: string; body: string }[] = [
  {
    title: "Snodgrass",
    body: "A prompt-testing tool for AI engineers with Claude and OpenAI integration: 50+ prompt variants per session, automated quality scoring and regression detection. Ranked in the top 10% of Y Combinator '24 applicants.",
  },
  {
    title: "API evaluation tool for sales engineers",
    body: "Started from a one-sentence CPO ask. V1's “AI buttons everywhere” were cut down to one workflow.",
  },
  {
    title: "SDG&E drone-inspection dashboard",
    body: "Reached a demo in about a week by trading drag-and-drop for an ordered list with multi-column sort. We won the contract; drag-and-drop came later.",
  },
  {
    title: "Accessibility on the consumer site",
    body: "Fixed contrast by aligning to the shared tokens, enlarged tap targets, verified with Lighthouse and Semrush. Accessibility problems often come from a system nobody follows.",
  },
  { title: "ReferrsMe", body: "Frontend for a referral-based job platform with 1,000+ active users and sub-2-second page loads." },
  { title: "Cloud Express", body: "A deployment UI that cut a 14-step provisioning workflow to 3 clicks, from 45 minutes to under 5." },
];

export const getWork = (slug: string) => work.find((w) => w.slug === slug);
