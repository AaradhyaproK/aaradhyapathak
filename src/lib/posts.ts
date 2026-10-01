import { posts } from "#site/content";

export interface Post {
  title: string;
  description: string;
  slug: string;
  date: string;
  updated: string;
  category: string;
  tags: string[];
  cover: {
    image: string;
    alt: string;
  };
  author: string;
  faq?: Array<{
    question: string;
    answer: string;
  }>;
  draft: boolean;
  affiliate: boolean;
  content: string;
  toc: Array<{
    title: string;
    url: string;
    items?: Array<{
      title: string;
      url: string;
    }>;
  }>;
  permalink: string;
}

/**
 * Returns all published posts sorted by date descending.
 * In development, includes drafts with a draft flag.
 */
export function getAllPosts(includeDrafts = process.env.NODE_ENV === "development"): Post[] {
  const all = (posts as unknown as Post[]) || [];
  return all
    .filter((post) => (includeDrafts ? true : !post.draft))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Returns all strictly published posts for sitemap and RSS
 */
export function getPublishedPosts(): Post[] {
  const all = (posts as unknown as Post[]) || [];
  return all
    .filter((post) => !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Gets a post by slug
 */
export function getPostBySlug(slug: string): Post | undefined {
  const all = (posts as unknown as Post[]) || [];
  return all.find((post) => post.slug === slug);
}

/**
 * Gets unique categories
 */
export function getAllCategories(): string[] {
  const published = getAllPosts();
  const categories = new Set(published.map((p) => p.category));
  return Array.from(categories);
}

/**
 * Gets unique tags
 */
export function getAllTags(): string[] {
  const published = getAllPosts();
  const tags = new Set(published.flatMap((p) => p.tags));
  return Array.from(tags);
}

/**
 * Gets related posts by shared category or tags
 */
export function getRelatedPosts(currentPost: Post, limit = 2): Post[] {
  const all = getAllPosts().filter((p) => p.slug !== currentPost.slug);
  return all
    .map((post) => {
      let score = 0;
      if (post.category === currentPost.category) score += 3;
      const sharedTags = post.tags.filter((t) => currentPost.tags.includes(t));
      score += sharedTags.length;
      return { post, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);
}
