import { getCollection, type CollectionEntry } from 'astro:content';
import { defaultLang, homePath, langCodes, postLang, postPath, type Lang } from './ui';

export type Post = CollectionEntry<'blog'>;

export async function getPostsByLang(lang: Lang): Promise<Post[]> {
  const posts = await getCollection('blog');
  return posts
    .filter((p) => postLang(p.id) === lang)
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

/** Clave común entre un artículo y sus traducciones (el slug español). */
export function translationKeyOf(post: Post): string {
  return post.data.translationKey ?? post.id;
}

/** URL de cada versión idiomática de un artículo. */
export async function getPostAlternates(post: Post): Promise<Partial<Record<Lang, string>>> {
  const key = translationKeyOf(post);
  const posts = await getCollection('blog');
  const alternates: Partial<Record<Lang, string>> = {};
  for (const p of posts) {
    if (translationKeyOf(p) === key) alternates[postLang(p.id)] = postPath(p.id);
  }
  return alternates;
}

export function homeAlternates(): Partial<Record<Lang, string>> {
  return Object.fromEntries(langCodes.map((l) => [l, homePath(l)]));
}

export { defaultLang };
