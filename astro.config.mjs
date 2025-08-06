// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import db from "@astrojs/db";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://localhost:4321',
  vite: {
    plugins: [
      tailwindcss()
    ],
    optimizeDeps: {
      include: ['react', 'react-dom', 'lucide-react'],
    },
  },

  integrations: [
    react(),
    db(),
    sitemap(),
    partytown({
      config: {
        forward: ['dataLayer.push', 'gtag', 'fbq', 'Calendly'],
      },
    })
  ],
  //output: 'hybrid'
  //adapter: null,
});