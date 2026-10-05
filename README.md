# RutaFugaz | Blog de Micro-Aventuras, Furgonetas Camper & Turismo Rural

Este proyecto es una plataforma completa, ultra-rápida y optimizada para **Google AdSense, Core Web Vitals 100/100, Google Discover y Pinterest**.

---

## 🚀 Arquitectura del Proyecto

* **Framework:** Astro v7 (Generación estática pura, 0 KB JavaScript innecesario).
* **Estilos:** Tailwind CSS v4 + Plugin `@tailwindcss/typography` para artículos de lectura fluida.
* **SEO & Rich Snippets:** Integración automática de `@astrojs/sitemap`, meta-etiquetas OpenGraph y Schema JSON-LD (`WebSite` y `BlogPosting`).
* **Monetización:** Componentes listos para `Google AdSense`, `Mediavine` y `Ezoic`:
  * `<AdBanner />`: Banner horizontal / Leaderboard debajo del encabezado.
  * `<InContentAd />`: Anuncios entre párrafos con reserva de altura para CLS = 0.
  * `<StickyFooterAd />`: Barra publicitaria anclada al pie en móviles con botón de cierre.
  * `public/ads.txt`: Archivo IAB estándar preconfigurado.
* **Cumplimiento Legal E-E-A-T:**
  * Páginas obligatorias para AdSense: `/aviso-legal`, `/politica-de-privacidad`, `/politica-de-cookies`, `/sobre-nosotros` y `/contacto`.

---

## 🛠️ Comandos de Desarrollo

```bash
# Entrar al directorio
cd nomada-camper

# Iniciar servidor local de desarrollo
npm run dev

# Compilar para producción (genera la carpeta dist/ lista para subir)
npm run build

# Previsualizar el build de producción en local
npm run preview
```

---

## 💰 Cómo Activar la Publicidad Real (Google AdSense)

1. Abre el archivo `src/config/site.ts`.
2. Actualiza `adSenseClientId` con tu ID de editor de AdSense (ej. `ca-pub-1234567890123456`).
3. Cambia `showPlaceholders: false` y activa `enableAutoAds: true` si quieres que Google inserte anuncios automáticos adicionales.
4. En el archivo `public/ads.txt`, sustituye `pub-XXXXXXXXXXXXXXXX` con tu identificador.

---

## 🌐 Dónde Alojarlo Gratis con 0 € de Coste Fijo

Este blog puede publicarse de forma gratuita con rendimiento mundial en:
* **Cloudflare Pages:** Ancho de banda ilimitado gratis.
* **Vercel:** Despliegue en 1 clic desde GitHub (`git push`).
* **Netlify:** Soporte nativo para Astro.
