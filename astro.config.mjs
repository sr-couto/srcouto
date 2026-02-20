import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://srcouto.pages.dev",
  image: {
    domains: ["res.cloudinary.com"],
    remotePatterns: [{ protocol: "https" }],
  },
  integrations: [
    mdx({
      remarkPlugins: [remarkReadingTime],
      // Astro defaults applied
    }),
    sitemap(),
    tailwind(),
    vue(),
    react(),
  ],
});
