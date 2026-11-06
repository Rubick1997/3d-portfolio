import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;

export const getPosts = async () =>
  (await getCollection("blog")).sort((a, b) => b.data.date.getTime() - a.data.date.getTime() || (b.data.seriesPart ?? 0) - (a.data.seriesPart ?? 0));

export const readingTime = (p: Post) => `${Math.max(1, Math.round((p.body ?? "").split(/\s+/).length / 230))} min`;

export const fmtDate = (d: Date) => d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });

export const postUrl = (p: Post) => `/blog/${p.id}`;
