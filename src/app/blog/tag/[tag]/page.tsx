import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { getAllPosts, getAllTags } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import { ArrowLeft, ArrowUpRight, Calendar, Tag as TagIcon } from "lucide-react";

interface Props {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({
    tag: encodeURIComponent(tag.toLowerCase()),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  const posts = getAllPosts().filter((p) =>
    p.tags.some((t) => t.toLowerCase() === decoded.toLowerCase())
  );

  return {
    title: `#${decoded} Articles — Aaradhya Pathak`,
    description: `Engineering articles, tutorials, and notes tagged with #${decoded}.`,
    alternates: {
      canonical: `${siteConfig.url}/blog/tag/${tag}`,
    },
    // Noindex on tag pages with fewer than 3 posts as explicitly required by technical SEO specification
    robots: {
      index: posts.length >= 3,
      follow: true,
    },
  };
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  const posts = getAllPosts().filter((p) =>
    p.tags.some((t) => t.toLowerCase() === decoded.toLowerCase())
  );

  if (posts.length === 0) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-xs font-mono-label text-[#A7A997] hover:text-[#C8F169] transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to all notes</span>
      </Link>

      <div className="mb-12 border-b border-[#34362D] pb-8">
        <span className="font-mono-label text-xs text-[#C8F169] uppercase tracking-widest flex items-center gap-1.5">
          <TagIcon className="w-3.5 h-3.5" />
          <span>Tag Archive</span>
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#F2F0E6] mt-2">
          #{decoded}
        </h1>
        <p className="mt-2 text-sm text-[#A7A997] font-mono-label">
          {posts.length} {posts.length === 1 ? "article" : "articles"} tagged with #{decoded}
        </p>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-2xl bg-[#191B15] border border-[#34362D] p-6 sm:p-7 hover:border-[#C8F169]/50 transition-all group"
          >
            <div className="flex items-center justify-between gap-4 mb-2">
              <span className="text-xs font-mono-label text-[#A7A997] flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C8F169]" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </span>
              <span className="px-2.5 py-0.5 rounded bg-[#23251D] border border-[#34362D] text-[11px] font-mono-label text-[#C8F169]">
                {post.category}
              </span>
            </div>

            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#F2F0E6] group-hover:text-[#C8F169] transition-colors">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>

            <p className="text-sm text-[#A7A997] mt-2 line-clamp-2 leading-relaxed">
              {post.description}
            </p>

            <div className="mt-5 pt-4 border-t border-[#34362D]/60 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded bg-[#23251D] text-[11px] font-mono-label text-[#A7A997]"
                  >
                    #{t}
                  </span>
                ))}
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="text-xs font-mono-label font-bold text-[#C8F169] hover:underline flex items-center gap-1 touch-target"
              >
                <span>Read Article</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
