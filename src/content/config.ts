import { defineCollection, z } from 'astro:content';

export const collections = {
	education: defineCollection({
		type: 'content',
		schema: z.object({
			institution: z.string(),
			major: z.string(),
			minor: z.string().optional(),
			startDate: z.string(),
			endDate: z.string().optional(),
		}),
	}),
	experience: defineCollection({
		type: 'content',
		schema: z.object({
			employer: z.string(),
			title: z.string(),
			startDate: z.string(),
			endDate: z.string().optional(),
		}),
	}),
	projects: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			tech: z.array(z.string()).default([]),
			startDate: z.string(),
			endDate: z.string().optional(),
		}),
	}),
}
