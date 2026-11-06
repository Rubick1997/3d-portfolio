import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { profile, site } from "@/data/profile";
import { getPosts, postUrl } from "@/lib/posts";

export const GET: APIRoute = async (ctx) => {
  const posts = await getPosts();
  return rss({
    title: `${profile.name}: Writing`,
    description: site.description,
    site: ctx.site!,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: postUrl(p),
      categories: p.data.tags,
    })),
    customData: "<language>en-us</language>",
    trailingSlash: false,
  });
};
