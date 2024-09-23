import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import icon from 'astro-icon';
import metaTags from "astro-meta-tags";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: cloudflare(),
  integrations: [sitemap(), icon(), metaTags()],
  scopedStyleStrategy: 'class',
  vite: {
    ssr: {
      external: ['@jam-comments/server-utilities', 'node-fetch']
    }
  }
});