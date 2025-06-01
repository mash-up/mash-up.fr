import { defineCollection, z } from '@nuxt/content'

export const collections = {
    events: defineCollection({
        type: 'page',
        source: '*/1.evenements/*.md',
        schema: z.object({
            date: z.date(),
        }),
    }),
    speakers: defineCollection({
        type: 'page',
        source: '*/2.speakers/*.md',
        schema: z.object({
            youtubeVideo: z.string(),
            linkedin: z.string(),
            events: z.array(z.string()),
        }),
    }),
    startups: defineCollection({
        type: 'page',
        source: '*/3.startups/*.md',
        schema: z.object({
            youtubeVideo: z.string(),
            img: z.boolean(),
            events: z.array(z.object({
                id: z.string(),
                award: z.string(),
            })),
        }),
    }),
    articles: defineCollection({
        type: 'page',
        source: '*/4.blog/*.md',
        schema: z.object({
            date: z.date(),
        }),
    }),
    pages: defineCollection({
        type: 'page',
        source: {
            include: '**',
            exclude: [
                '*/1.evenements/*.md',
                '*/2.speakers/*.md',
                '*/3.startups/*.md',
                '*/4.blog/*.md',
            ]
        }
    })
}