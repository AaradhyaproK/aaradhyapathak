import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { getAllPosts, getAllCategories } from "@/lib/posts";
import { BlogSearchList } from "@/components/blog/BlogSearchList";
import { NewsletterForm } from "@/components/blog/NewsletterForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Notes & Technical Blog — Aaradhya Pathak",
  description:
    "Technical deep-dives on full-stack web architectures, AI integrations (Gemini, AssemblyAI), performance optimization, and freelancing strategies.",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <div className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Search Engine Collection & Breadcrumbs Structured Data */}
      <JsonLd type="blogIndex" posts={posts} />
      <JsonLd
        type="breadcrumbs"
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Blog", url: `${siteConfig.url}/blog` },
        ]}
      />

      {/* Header */}
      <div className="max-w-3xl mb-12">
        <span className="font-mono-label text-xs text-[#C8F169] tracking-widest uppercase">
          Engineering Notes &bull; ~/notes
        </span>
        <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-[#F2F0E6] mt-2">
          Technical Writing &amp; Field Notes.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#A7A997] leading-relaxed">
          {siteConfig.blog.niche}. Documenting real architectural trade-offs, multimodal AI workflows, and Core Web Vitals blueprints.
        </p>
      </div>

      {/* Interactive Search & List */}
      <BlogSearchList posts={posts} categories={categories} />

      {/* Newsletter Signup at end of blog */}
      <div className="mt-16 rounded-[28px] bg-[#191B15] border border-[#34362D] p-8 sm:p-10 space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono-label text-[#C8F169] uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Technical Newsletter</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F2F0E6]">
          {siteConfig.blog.newsletter.heading}
        </h2>
        <p className="text-sm text-[#A7A997] max-w-2xl leading-relaxed">
          {siteConfig.blog.newsletter.subheading}
        </p>

        <div className="pt-2 max-w-md">
          <NewsletterForm
            source="blog-index"
            inputClassName="rounded-full bg-[#23251D]"
            buttonClassName="rounded-full px-6"
          />
        </div>
      </div>
    </div>
  );
}
