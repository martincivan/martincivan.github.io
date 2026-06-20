import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

const isPublished = (p: Post) => import.meta.env.PROD ? !p.data.draft : true;

/** All non-draft posts for a locale, newest first. */
export async function getPosts(lang: 'en' | 'sk' = 'en'): Promise<Post[]> {
  const posts = await getCollection('blog', isPublished);
  return posts
    .filter((p) => p.data.lang === lang)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

const WPM = 220;
export function readingTime(body: string | undefined): number {
  const words = (body ?? '').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WPM));
}

export function formatDate(date: Date, locale = 'en-GB'): string {
  return date.toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' });
}
