import type { APIRoute, GetStaticPaths } from "astro";
import { getPosts, type Post } from "@/lib/posts";
import { ogPng, pngResponse } from "@/lib/og";

export const getStaticPaths = (async () => (await getPosts()).map((p) => ({ params: { slug: p.id }, props: { post: p } }))) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const { post } = props as { post: Post };
  const kicker = post.data.series ? `${post.data.series} · Part ${post.data.seriesPart}` : "Writing";
  const title = post.data.title.replace(/\s*\(Part \d of \d\)$/, "");
  return pngResponse(await ogPng({ kicker, title: title.length > 90 ? `${title.split(":")[0]}` : title }));
};
