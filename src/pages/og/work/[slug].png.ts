import type { APIRoute, GetStaticPaths } from "astro";
import { work, type CaseStudy } from "@/data/work";
import { ogPng, pngResponse } from "@/lib/og";

export const getStaticPaths = (() => work.map((w) => ({ params: { slug: w.slug }, props: { w } }))) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const { w } = props as { w: CaseStudy };
  return pngResponse(await ogPng({ kicker: `Case study · ${w.org}`, title: w.title }));
};
