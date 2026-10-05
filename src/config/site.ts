export const siteConfig = {
  name: 'RutaFugaz',
  title: 'RutaFugaz | Micro-Aventuras, Furgonetas Camper & Turismo Rural',
  description: 'Descubre rutas secretas de fin de semana, guías de camperización económica, normativa legal de pernocta y comparativas de equipamiento outdoor para viajar libre.',
  url: 'https://rutafugaz.es',
  author: 'Equipo RutaFugaz',
  locale: 'es_ES',
  categories: [
    {
      slug: 'rutas',
      name: 'Rutas & Escapadas',
      description: 'Itinerarios de 24h a 72h, cascadas, pueblos con encanto y parajes naturales.',
      badgeColor: 'bg-emerald-100 text-emerald-800'
    },
    {
      slug: 'camper',
      name: 'Guía Camper',
      description: 'Tutoriales de camperización low-cost, aislamiento, electricidad 12V y bricolaje.',
      badgeColor: 'bg-amber-100 text-amber-800'
    },
    {
      slug: 'pernocta',
      name: 'Pernocta & Normativa',
      description: 'Dónde dormir gratis y legal, leyes de acampada, cómo evitar sanciones.',
      badgeColor: 'bg-blue-100 text-blue-800'
    },
    {
      slug: 'equipamiento',
      name: 'Equipamiento Outdoor',
      description: 'Análisis de baterías portátiles, neveras 12V, hornillos y accesorios imprescindibles.',
      badgeColor: 'bg-purple-100 text-purple-800'
    }
  ],
  // Configuración de Monetización Publicitaria
  ads: {
    // Pon en true para ver marcadores visuales mientras desarrollas; en false muestra el código real
    showPlaceholders: false,
    // Tu ID de editor de Google AdSense (ejemplo: 'ca-pub-XXXXXXXXXXXXXXXX')
    adSenseClientId: 'ca-pub-XXXXXXXXXXXXXX',
    // Si usas Ezoic o Mediavine, puedes activar sus scripts aquí
    enableAutoAds: false,
  }
};
