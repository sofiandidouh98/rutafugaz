// Vercel Routing Middleware (Edge): redirige la portada al idioma del visitante según su país.
// - Usa la cabecera x-vercel-ip-country que añade Vercel en cada petición.
// - Países hispanohablantes se quedan en "/" (español, idioma por defecto).
// - Países desconocidos o sin idioma propio → inglés.
// - Si el usuario eligió idioma en el selector (cookie rf_lang), se respeta su elección.
// - Los bots no se redirigen, para que Google indexe la versión española de "/".

export const config = {
  matcher: ['/'],
};

const SUPPORTED = ['es', 'en', 'fr', 'de', 'it', 'pt'];

const COUNTRY_LANG = {
  // Español
  ES: 'es', MX: 'es', AR: 'es', CO: 'es', CL: 'es', PE: 'es', VE: 'es', EC: 'es', GT: 'es', CU: 'es',
  BO: 'es', DO: 'es', HN: 'es', PY: 'es', SV: 'es', NI: 'es', CR: 'es', PA: 'es', UY: 'es', PR: 'es',
  GQ: 'es', AD: 'es',
  // Francés
  FR: 'fr', BE: 'fr', LU: 'fr', MC: 'fr', SN: 'fr', CI: 'fr', CM: 'fr', ML: 'fr', BF: 'fr', NE: 'fr',
  TD: 'fr', GN: 'fr', BJ: 'fr', TG: 'fr', CD: 'fr', CG: 'fr', GA: 'fr', MG: 'fr', HT: 'fr', MA: 'fr',
  DZ: 'fr', TN: 'fr', RE: 'fr', GP: 'fr', MQ: 'fr', GF: 'fr', PF: 'fr', NC: 'fr',
  // Alemán
  DE: 'de', AT: 'de', CH: 'de', LI: 'de',
  // Italiano
  IT: 'it', SM: 'it', VA: 'it',
  // Portugués
  PT: 'pt', BR: 'pt', AO: 'pt', MZ: 'pt', CV: 'pt', GW: 'pt', ST: 'pt', TL: 'pt',
};

const BOT_UA = /bot|crawler|spider|crawling|slurp|mediapartners|facebookexternalhit|embedly|pinterest|whatsapp|telegram|lighthouse|headless/i;

function getCookie(request, name) {
  const cookie = request.headers.get('cookie') || '';
  const match = cookie.match(new RegExp('(?:^|;\\s*)' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[1]) : null;
}

export default function middleware(request) {
  const ua = request.headers.get('user-agent') || '';
  if (BOT_UA.test(ua)) return;

  const chosen = getCookie(request, 'rf_lang');
  let lang;
  if (chosen && SUPPORTED.includes(chosen)) {
    lang = chosen;
  } else {
    const country = (request.headers.get('x-vercel-ip-country') || '').toUpperCase();
    lang = COUNTRY_LANG[country] || 'en';
  }

  if (lang === 'es') return;

  const url = new URL(request.url);
  url.pathname = `/${lang}/`;
  return new Response(null, {
    status: 307,
    headers: {
      Location: url.toString(),
      'Cache-Control': 'private, no-store',
      Vary: 'Cookie, User-Agent',
    },
  });
}
