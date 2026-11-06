// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://kolumstack.best",
  trailingSlash: "never",
  build: { format: "file" },
  integrations: [mdx(), sitemap({ filter: (page) => !page.includes("/404") })],
  markdown: {
    // Code is highlighted at build time; no client JS. Colours follow the site theme via CSS vars.
    shikiConfig: { themes: { light: "github-light", dark: "github-dark" }, defaultColor: false },
  },
  vite: { plugins: [tailwindcss()] },
});
