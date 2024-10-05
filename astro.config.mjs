// @ts-check
import { defineConfig } from "astro/config";

import { siteUrl } from "./site-setting";

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  integrations: [],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "src/styles/tool" as *;`,
        },
      },
    },
  },
  // compressHTML: false,
  // prefetch: {
  //   prefetchAll: true
  // }
});
