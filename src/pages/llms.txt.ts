import { links, profile, site } from "@/data/profile";
import { work } from "@/data/work";
import { getPosts, postUrl } from "@/lib/posts";

import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const posts = await getPosts();
  const body = [
    `# ${profile.name}`,
    "",
    `> ${profile.positioning} ${profile.subline}`,
    "",
    profile.shortBio,
    "",
    "## Case studies",
    ...work.map((w) => `- [${w.title}](${site.url}/work/${w.slug}): ${w.summary}`),
    "",
    "## Writing",
    ...posts.map((p) => `- [${p.data.title}](${site.url}${postUrl(p)}): ${p.data.description}`),
    "",
    "## Contact",
    `- Email: ${links.email}`,
    `- LinkedIn: ${links.linkedin}`,
    `- About: ${site.url}/about`,
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
