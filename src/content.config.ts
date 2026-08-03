import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Projects live in `src/content/projects/*.md`.
// Add a new .md file there and it appears on the site automatically.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    /** Project name — shown as ./name */
    title: z.string(),
    /** One-liner shown under the title */
    description: z.string(),
    /** Sort order (ascending). Lower = higher on the page */
    order: z.number().default(99),
    /** Status dot colour */
    status: z.enum(['active', 'in-progress', 'archived']).default('active'),
    /** Tech tags, e.g. ['TypeScript', 'Astro'] */
    stack: z.array(z.string()).default([]),
    /** Optional repo & live URLs */
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
  }),
});

export const collections = { projects };
