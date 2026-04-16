import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    type: z.enum(["software-project", "publication"]),
    role: z.enum(["first-author", "contributing"]).optional(),
    tags: z.array(z.string()).optional(),
    link: z.string().optional(),
    github: z.string().optional(),
  }),
});

export const collections = { projects };
