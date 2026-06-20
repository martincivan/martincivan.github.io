import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts } from '../../utils/posts';

export async function GET(context: APIContext) {
  const posts = await getPosts('sk');
  return rss({
    title: 'Martin Civáň — Blog',
    description: 'Poznámky o platform engineeringu, DevOps a aplikovanej AI.',
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.description,
      link: `/sk/blog/${p.id}/`,
      categories: p.data.tags,
    })),
  });
}
