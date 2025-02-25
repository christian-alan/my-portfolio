import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    author: z.string(),
    date: z.string(),
    category: z.string(),
    cover: z.object({
      src: image(),
      alt: z.string(),
    }),
  }),
});


const publicationsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    author: z.string(),
    date: z.string(),
    category: z.string(),
    cover: z.object({
      src: image(),
      alt: z.string(),
    }),
  }),
});


const microblogsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    author: z.string(),
    date: z.string(),
    category: z.string(),
    cover: z.object({
      src: image(),
      alt: z.string(),
    }),
  }),
});

export const collections = {
  'projects': projectsCollection,
  'publications': publicationsCollection,
  'microblogs': microblogsCollection,
}; 