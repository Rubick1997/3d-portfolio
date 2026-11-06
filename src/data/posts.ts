// Until the Phase 4 MDX migration, posts link out to Medium.
// After migration, `href` switches to /blog/<slug> and Medium becomes the syndicated copy.

export type PostRef = {
  title: string;
  date: string; // ISO, original Medium publish date
  readingTime: string;
  slug: string;
  mediumUrl: string;
  series?: string;
  relatedWork?: string;
};

export const posts: PostRef[] = [
  {
    title: "Designing for the User, Not Just the Servers: Stress-Testing a System Design Framework on a Product Problem",
    date: "2026-10-29",
    readingTime: "15 min",
    slug: "designing-for-the-user-not-just-the-servers",
    mediumUrl:
      "https://medium.com/@vinch1910/designing-for-the-user-not-just-the-servers-stress-testing-a-system-design-framework-on-a-product-e74927fa940e",
  },
  {
    title: "Finding the Focal Point: Faces, Then People, Then Saliency (Part 2 of 2)",
    date: "2026-10-16",
    readingTime: "10 min",
    slug: "finding-the-focal-point",
    mediumUrl:
      "https://medium.com/@vinch1910/finding-the-focal-point-faces-then-people-then-saliency-part-2-of-2-0bbd51804180",
    series: "Hero image framing",
    relatedWork: "tastedive-hero-banners",
  },
  {
    title: "Stop Cutting Heads Off Your Hero Images (Part 1 of 2)",
    date: "2026-10-16",
    readingTime: "9 min",
    slug: "stop-cutting-heads-off-your-hero-images",
    mediumUrl:
      "https://medium.com/@vinch1910/stop-cutting-heads-off-your-hero-images-part-1-of-2-58ec753affcc",
    series: "Hero image framing",
    relatedWork: "tastedive-hero-banners",
  },
  {
    title: "Treat LLM Output as a Build Artifact: Batch APIs and Jev",
    date: "2026-10-14",
    readingTime: "11 min",
    slug: "treat-llm-output-as-a-build-artifact",
    mediumUrl:
      "https://medium.com/@vinch1910/treat-llm-output-as-a-build-artifact-batch-apis-and-jev-2aa0029befbe",
    relatedWork: "taste-context",
  },
];

export const postHref = (p: PostRef) => p.mediumUrl;
