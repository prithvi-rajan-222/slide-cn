import { defineConfig, defineDocs, frontmatterSchema } from 'fumadocs-mdx/config';
import { z } from 'zod';

export const docs = defineDocs({
	dir: 'content/docs',
});

export const blog = defineDocs({
	dir: 'content/blog',
	docs: {
		schema: frontmatterSchema.extend({
			author: z.string(),
			date: z.string(),
			tags: z.array(z.string()).default([]),
			featured: z.boolean().default(false),
			canonical: z.string().optional(),
		}),
	},
});

export default defineConfig();
