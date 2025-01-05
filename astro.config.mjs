import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import netlify from '@astrojs/netlify';

export default defineConfig({
  vite: {
    define: {
      'import.meta.env.MICROCMS_SERVICE_DOMAIN': 
        JSON.stringify(process.env.MICROCMS_SERVICE_DOMAIN),
      'import.meta.env.MICROCMS_API_KEY': 
        JSON.stringify(process.env.MICROCMS_API_KEY),
    },
  },

  output: 'server',
  adapter: netlify(),
});