import { z, defineCollection } from 'astro:content';

const translationCollection = defineCollection({
  type: 'content',
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

export const collections = {
  'traducciones': translationCollection,
};
