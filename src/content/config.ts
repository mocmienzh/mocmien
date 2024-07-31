// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const coursesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    mainImg: z.string().optional(),
    subjects: z.number(),
    lessons: z.number(),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    mainImg: z.string().optional(),
    pubDate: z.date(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  courses: coursesCollection,
  blog: blogCollection,
};
