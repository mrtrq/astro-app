import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://master--elaborate-daffodil-7aaf14.netlify.app/",
  integrations: [preact()]
});