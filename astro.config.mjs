import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import netlify from '@astrojs/netlify';

export default defineConfig({
  vite: {
    define: {
      "import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN": JSON.stringify(
        process.env.VITE_MICROCMS_SERVICE_DOMAIN
      ),
      "import.meta.env.VITE_MICROCMS_API_KEY": JSON.stringify(
        process.env.VITE_MICROCMS_API_KEY
      ),
    },
  },
  integrations: [react()],
  output: "server",
  adapter: netlify(),
});