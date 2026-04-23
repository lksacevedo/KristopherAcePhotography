import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string().optional(),
    cover: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/portfolio' }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    caption: z.string().optional(),
    category: z.enum(['landscape', 'astro', 'travel', 'cityscape', 'portrait', 'other']).default('other'),
    order: z.number().default(100),
  }),
});

const gallery = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/gallery' }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    caption: z.string().optional(),
    date: z.coerce.date(),
  }),
});

const albums = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/albums' }),
  schema: z.object({
    title: z.string(),
    location: z.string(),
    // [longitude, latitude] — Mapbox convention
    coordinates: z.tuple([z.number(), z.number()]),
    cover: z.string(),
    images: z.array(z.object({
      src: z.string(),
      caption: z.string().optional(),
    })).default([]),
    date: z.coerce.date(),
    excerpt: z.string().optional(),
  }),
});

export const collections = { blog, portfolio, gallery, albums };
