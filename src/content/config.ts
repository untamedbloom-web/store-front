import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        author: z.string(),
        image: image().optional(),
        tags: z.array(z.string()),
        featured: z.boolean().default(false),
    }),
});

export const collections = {
    posts: postsCollection,
};
