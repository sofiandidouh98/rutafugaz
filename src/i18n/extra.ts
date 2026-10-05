import type { Lang } from './ui';

// Textos del índice del blog, artículos relacionados y página 404
export const extraUi: Record<Lang, {
  blogTitle: string;
  blogHeading: string;
  blogDescription: string;
  blogNav: string;
  related: string;
  notFoundTitle: string;
  notFoundText: string;
  notFoundCta: string;
}> = {
  es: {
    blogTitle: 'Blog Camper: Rutas, Pernocta, Campings y Equipamiento',
    blogHeading: 'Todas las Guías del Blog',
    blogDescription: 'Todas nuestras guías sobre viajar en furgoneta camper y autocaravana: rutas por España, dónde dormir legalmente, campings, alquiler, camperización y equipamiento.',
    blogNav: 'Blog',
    related: 'Sigue leyendo',
    notFoundTitle: 'Página no encontrada',
    notFoundText: 'Parece que esta ruta no lleva a ninguna parte. La página que buscas no existe o ha cambiado de dirección.',
    notFoundCta: 'Volver a la portada',
  },
  en: {
    blogTitle: 'Campervan Blog: Routes, Overnight Stays, Campsites & Gear',
    blogHeading: 'All Our Guides',
    blogDescription: 'All our guides on campervan and motorhome travel: routes across Spain, where to sleep legally, campsites, rentals, van conversions and outdoor gear.',
    blogNav: 'Blog',
    related: 'Keep reading',
    notFoundTitle: 'Page not found',
    notFoundText: 'Looks like this road leads nowhere. The page you are looking for does not exist or has moved.',
    notFoundCta: 'Back to the home page',
  },
  fr: {
    blogTitle: 'Blog Van Aménagé : Itinéraires, Bivouac, Campings et Équipement',
    blogHeading: 'Tous Nos Guides',
    blogDescription: 'Tous nos guides pour voyager en van aménagé et camping-car : itinéraires en Espagne, où dormir légalement, campings, location, aménagement et équipement.',
    blogNav: 'Blog',
    related: 'À lire aussi',
    notFoundTitle: 'Page introuvable',
    notFoundText: 'Cette route ne mène nulle part. La page que vous cherchez n’existe pas ou a changé d’adresse.',
    notFoundCta: 'Retour à l’accueil',
  },
  de: {
    blogTitle: 'Camper-Blog: Routen, Übernachten, Campingplätze & Ausrüstung',
    blogHeading: 'Alle Ratgeber',
    blogDescription: 'Alle unsere Ratgeber zum Reisen mit Campervan und Wohnmobil: Routen durch Spanien, legal übernachten, Campingplätze, Miete, Ausbau und Ausrüstung.',
    blogNav: 'Blog',
    related: 'Weiterlesen',
    notFoundTitle: 'Seite nicht gefunden',
    notFoundText: 'Diese Straße führt leider nirgendwohin. Die gesuchte Seite existiert nicht oder ist umgezogen.',
    notFoundCta: 'Zur Startseite',
  },
  it: {
    blogTitle: 'Blog Camper: Itinerari, Sosta, Campeggi e Attrezzatura',
    blogHeading: 'Tutte le Nostre Guide',
    blogDescription: 'Tutte le nostre guide per viaggiare in camper e furgone: itinerari in Spagna, dove dormire legalmente, campeggi, noleggio, allestimento e attrezzatura.',
    blogNav: 'Blog',
    related: 'Continua a leggere',
    notFoundTitle: 'Pagina non trovata',
    notFoundText: 'Sembra che questa strada non porti da nessuna parte. La pagina che cerchi non esiste o è stata spostata.',
    notFoundCta: 'Torna alla home',
  },
  pt: {
    blogTitle: 'Blog Camper: Rotas, Pernoita, Parques de Campismo e Equipamento',
    blogHeading: 'Todos os Nossos Guias',
    blogDescription: 'Todos os nossos guias para viajar de carrinha camper e autocaravana: rotas por Espanha, onde dormir legalmente, campismo, aluguer, camperização e equipamento.',
    blogNav: 'Blog',
    related: 'Continua a ler',
    notFoundTitle: 'Página não encontrada',
    notFoundText: 'Parece que esta estrada não leva a lado nenhum. A página que procuras não existe ou mudou de endereço.',
    notFoundCta: 'Voltar à página inicial',
  },
};

/** Devuelve la misma imagen de Unsplash con otro ancho (para tarjetas más ligeras). */
export function resizeImage(url: string, width: number): string {
  return url.includes('images.unsplash.com') ? url.replace(/([?&])w=\d+/, `$1w=${width}`) : url;
}
