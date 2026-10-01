"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { type Post } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import { Search, Tag, Calendar, ArrowUpRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogSearchListProps {
  posts: Post[];
  categories: string[];
}

export function BlogSearchList({ posts, categories }: BlogSearchListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.description.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesQuery;
    });
  }, [posts, selectedCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Search Input & Category Filters */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-[#A7A997] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search notes by keyword, framework, or topic..."
            className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-[#191B15] border border-[#34362D] text-[#F2F0E6] placeholder-[#A7A997]/60 text-sm focus:border-[#C8F169] focus:outline-none transition-colors"
          />
        </div>

        {/* Category Pills: Smooth Horizontal Scroll on Mobile, Wrapped on Desktop */}
        <div className="-mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1 sm:flex-wrap">
            <button
              type="button"
              onClick={() => setSelectedCategory("All")}
              className={cn(
                "flex-shrink-0 whitespace-nowrap px-4 py-2 rounded-full text-xs font-mono-label font-medium transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer",
                selectedCategory === "All"
                  ? "bg-[#C8F169] text-[#0E0F0C] font-bold shadow-md shadow-[#C8F169]/20 border border-[#C8F169]"
                  : "bg-[#191B15] border border-[#34362D] text-[#A7A997] hover:text-[#F2F0E6] hover:border-[#A7A997]/50"
              )}
            >
              <span>All Categories</span>
              <span
                className={cn(
                  "px-1.5 py-0.5 rounded-full text-[10px] font-mono leading-none",
                  selectedCategory === "All"
                    ? "bg-[#0E0F0C]/15 text-[#0E0F0C] font-bold"
                    : "bg-[#23251D] text-[#A7A997]"
                )}
              >
                {posts.length}
              </span>
            </button>

            {categories.map((cat) => {
              const count = posts.filter((p) => p.category === cat).length;
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "flex-shrink-0 whitespace-nowrap px-4 py-2 rounded-full text-xs font-mono-label font-medium transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer",
                    isSelected
                      ? "bg-[#C8F169] text-[#0E0F0C] font-bold shadow-md shadow-[#C8F169]/20 border border-[#C8F169]"
                      : "bg-[#191B15] border border-[#34362D] text-[#A7A997] hover:text-[#F2F0E6] hover:border-[#A7A997]/50"
                  )}
                >
                  <span>{cat}</span>
                  <span
                    className={cn(
                      "px-1.5 py-0.5 rounded-full text-[10px] font-mono leading-none",
                      isSelected
                        ? "bg-[#0E0F0C]/15 text-[#0E0F0C] font-bold"
                        : "bg-[#23251D] text-[#A7A997]"
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs font-mono-label text-[#A7A997] pb-2 border-b border-[#34362D]">
        <span>
          Showing {filteredPosts.length} of {posts.length} articles
        </span>
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            className="text-[#C8F169] hover:underline cursor-pointer"
          >
            Clear Search
          </button>
        )}
      </div>

      {/* Posts List */}
      {filteredPosts.length === 0 ? (
        <div className="rounded-2xl bg-[#191B15] border border-[#34362D] p-12 text-center space-y-3">
          <p className="text-base text-[#F2F0E6] font-medium">
            No engineering notes found matching your criteria.
          </p>
          <p className="text-sm text-[#A7A997]">
            Try a different search term or select another category above.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl bg-[#191B15] border border-[#34362D] p-5 sm:p-6 hover:border-[#C8F169]/50 transition-all group"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* WebP Cover Image */}
                {post.cover?.image && (
                  <Link
                    href={`/blog/${post.slug}`}
                    className="relative w-full md:w-72 aspect-[16/9] rounded-xl overflow-hidden shrink-0 border border-[#34362D] bg-[#23251D] group-hover:border-[#C8F169]/40 transition-colors block"
                  >
                    <Image
                      src={post.cover.image}
                      alt={post.cover.alt || post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 288px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                )}

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded bg-[#23251D] border border-[#34362D] text-[11px] font-mono-label text-[#C8F169]">
                          {post.category}
                        </span>
                        {post.draft && (
                          <span className="px-2 py-0.5 rounded bg-[#FFBD2E]/20 text-[#FFBD2E] text-[10px] font-mono-label font-bold">
                            DRAFT
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono-label text-[#A7A997]">
                        <Calendar className="w-3.5 h-3.5" />
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                      </div>
                    </div>

                    <h2 className="font-display text-xl sm:text-2xl font-bold text-[#F2F0E6] group-hover:text-[#C8F169] transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`} className="block">
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-sm sm:text-base text-[#A7A997] mt-2 line-clamp-2 leading-relaxed">
                      {post.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#34362D]/60 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-[#23251D] text-[11px] font-mono-label text-[#A7A997]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs font-mono-label font-bold text-[#C8F169] hover:underline flex items-center gap-1 touch-target ml-auto"
                    >
                      <span>Read Article</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
