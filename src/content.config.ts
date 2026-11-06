import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().max(60).optional(),
    subtitle: z.string().optional(),
    description: z.string().max(300),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    series: z.string().optional(),
    seriesPart: z.number().int().positive().optional(),
    relatedWork: z.string().optional(),
    // Syndicated copy. The canonical URL is always this site.
    mediumUrl: z.url().optional(),
  }),
});

export const collections = { blog };
