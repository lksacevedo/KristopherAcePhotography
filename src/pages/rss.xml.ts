import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog', p => !p.data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: 'KristopherAce Photography — Journal',
    description: 'Field notes on landscape and astrophotography.',
    site: context.site ?? 'https://kristopheracephotography.co',
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.excerpt ?? '',
      link: `/blog/${post.id.replace(/\.(md|mdx)$/, '')}/`,
    })),
  });
}
