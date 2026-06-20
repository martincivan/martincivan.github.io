import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts } from '../utils/posts';

export async function GET(context: APIContext) {
  const posts = await getPosts('en');
  return rss({
    title: 'Martin Civáň — Blog',
    description: 'Notes on platform engineering, DevOps and applied AI.',
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.description,
      link: `/blog/${p.id}/`,
      categories: p.data.tags,
    })),
  });
}
