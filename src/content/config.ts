import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    lang: z.enum(['id', 'en']),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
