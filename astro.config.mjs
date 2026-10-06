// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.rutafugaz.site',
  trailingSlash: 'never',
  // Cloudflare Pages sirve /pagina.html en /pagina, sin redirecciones
  build: { format: 'file' },
  integrations: [
    sitemap({
      // Páginas sin valor para buscadores
      filter: (page) => !/\/(gracias-mapa|404)\/?$/.test(page),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
