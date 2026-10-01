import { defineConfig, defineCollection, s } from "velite";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";

const posts = defineCollection({
  name: "Post",
  pattern: "posts/**/*.mdx",
  schema: s
    .object({
      title: s.string().max(120),
      description: s.string().min(100).max(180),
      slug: s.slug("posts"),
      date: s.isodate(),
      updated: s.isodate(),
      category: s.string(),
      tags: s.array(s.string()),
      cover: s.object({
        image: s.string(),
        alt: s.string(),
      }),
      author: s.string().default("Aaradhya Pathak"),
      faq: s
        .array(
          s.object({
            question: s.string(),
            answer: s.string(),
          })
        )
        .optional(),
      draft: s.boolean().default(false),
      affiliate: s.boolean().default(false),
      content: s.mdx(),
      toc: s.toc(),
      metadata: s.metadata(),
    })
    .transform((data) => ({
      ...data,
      permalink: `/blog/${data.slug}`,
    })),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { posts },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark-dimmed",
          keepBackground: false,
        },
      ],
    ],
  },
});
