import { optional, z } from 'astro/zod';
import { defineCollection } from 'astro:content';

const translationCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    featured: z.boolean().optional(),
    layout: z.string().optional(),
    pubDate: z.string().optional(),
    heroImage: z.string().optional(),
    source: z.string().optional(),
    sourceText: z.string().optional(),
  }),
});

const blogCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    wip: z.boolean().optional(),
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    featured: z.boolean().optional(),
    layout: z.string().optional(),
    pubDate: z.string().optional(),
    heroImage: z.string().optional()
  }),
});


const extractosCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  'traducciones': translationCollection,
  'blog': blogCollection,
};