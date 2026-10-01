import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
  type Post,
} from "@/lib/posts";
import { formatDate, calculateReadingTime } from "@/lib/utils";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { BlogShareButtons } from "@/components/blog/BlogShareButtons";
import { MdxRenderer } from "@/components/mdx/MdxRenderer";
import { NewsletterForm } from "@/components/blog/NewsletterForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { AdSlot } from "@/components/ads/AdSlot";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  User,
  Tag,
  AlertCircle,
  Share2,
  Sparkles,
  Send,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "@/components/ui/Icons";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} — Aaradhya Pathak`,
    description: post.description,
    authors: [{ name: post.author, url: siteConfig.url }],
    alternates: {
      canonical: `${siteConfig.url}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: [post.author],
      tags: post.tags,
      url: `${siteConfig.url}/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const relatedPosts = getRelatedPosts(post, 2);
  const readingTime = calculateReadingTime(post.content || "");

  return (
    <article className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Google Rich Snippet Structured Data (JSON-LD) */}
      <JsonLd type="blogPost" post={post} />
      <JsonLd
        type="breadcrumbs"
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Blog", url: `${siteConfig.url}/blog` },
          {
            name: post.category,
            url: `${siteConfig.url}/blog/category/${encodeURIComponent(post.category.toLowerCase())}`,
          },
          { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` },
        ]}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center gap-2 text-xs font-mono-label text-[#A7A997]">
          <li>
            <Link href="/" className="hover:text-[#F2F0E6] transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/blog" className="hover:text-[#F2F0E6] transition-colors">
              Blog
            </Link>
          </li>
          <li>/</li>
          <li className="text-[#C8F169] truncate max-w-[200px]">
            {post.title}
          </li>
        </ol>
      </nav>

      {/* Post Header */}
      <header className="mb-12 border-b border-[#34362D] pb-10">
        <div className="flex flex-wrap items-center gap-2.5 mb-4">
          <Link
            href={`/blog/category/${encodeURIComponent(post.category.toLowerCase())}`}
            className="px-3 py-1 rounded-full bg-[#191B15] border border-[#34362D] font-mono-label text-xs text-[#C8F169] hover:bg-[#23251D] transition-colors"
          >
            {post.category}
          </Link>
          {post.draft && (
            <span className="px-3 py-1 rounded-full bg-[#FFBD2E]/20 text-[#FFBD2E] font-mono-label text-xs font-bold">
              DRAFT PREVIEW
            </span>
          )}
        </div>

        <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F2F0E6] leading-[1.02]">
          {post.title}
        </h1>

        <p className="mt-5 text-lg sm:text-xl text-[#A7A997] font-medium leading-relaxed max-w-3xl">
          {post.description}
        </p>

        {/* Metadata bar */}
        <div className="mt-8 flex flex-wrap items-center gap-6 text-xs font-mono-label text-[#A7A997] pt-6 border-t border-[#34362D]/60">
          <div className="flex items-center gap-2">
            <User className="w-3.5 h-3.5 text-[#C8F169]" />
            <span className="text-[#F2F0E6] font-semibold">{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-[#C8F169]" />
            <span>Published {formatDate(post.date)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#C8F169]" />
            <span>Updated {formatDate(post.updated)}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>&bull;</span>
            <span>{readingTime}</span>
          </div>
        </div>

        {/* Affiliate Disclosure Flag */}
        {post.affiliate && (
          <aside className="mt-6 rounded-xl bg-[#23251D] border border-[#34362D] p-3.5 text-xs text-[#A7A997] flex items-center gap-2.5">
            <AlertCircle className="w-4 h-4 text-[#C8F169] shrink-0" />
            <span>
              <strong>Affiliate Disclosure:</strong> This post may contain sponsored recommendations tagged with rel=&quot;sponsored nofollow&quot;. See our{" "}
              <Link href="/affiliate-disclosure" className="text-[#C8F169] underline">
                disclosure policy
              </Link>.
            </span>
          </aside>
        )}

        {/* Featured WebP Cover Image */}
        {post.cover?.image && (
          <div className="mt-8 relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#34362D] bg-[#191B15] shadow-2xl">
            <Image
              src={post.cover.image}
              alt={post.cover.alt || post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>
        )}
      </header>

      {/* Post Grid (Content + Sidebar ToC) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Content Area (8 cols) */}
        <div className="lg:col-span-8 min-w-0">
          <MdxRenderer code={post.content} />

          {/* AdSense In-Article Monetization Unit */}
          <AdSlot
            slotId="blog-content-bottom"
            format="rectangle"
            minHeight={250}
            className="my-8"
          />

          {/* Tags */}
          <div className="mt-12 pt-6 border-t border-[#34362D] flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono-label text-[#A7A997] mr-2">Tags:</span>
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${encodeURIComponent(tag.toLowerCase())}`}
                className="px-3 py-1 rounded-lg bg-[#191B15] border border-[#34362D] text-xs font-mono-label text-[#A7A997] hover:text-[#C8F169] hover:border-[#C8F169] transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>

          {/* Author Box (E-E-A-T) */}
          <section
            aria-labelledby="author-box-heading"
            className="mt-12 rounded-2xl bg-[#191B15] border border-[#34362D] p-6 sm:p-8 space-y-4"
          >
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#C8F169] shrink-0 bg-[#23251D]">
                <Image
                  src={siteConfig.author.avatar}
                  alt={siteConfig.author.name}
                  width={56}
                  height={56}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h3 id="author-box-heading" className="font-display font-bold text-xl text-[#F2F0E6]">
                  {siteConfig.author.name}
                </h3>
                <p className="font-mono-label text-xs text-[#C8F169]">
                  {siteConfig.author.role} &bull; Founder @ SNAB
                </p>
              </div>
            </div>
            <p className="text-sm text-[#A7A997] leading-relaxed">
              {siteConfig.author.bio} Third-year Computer Engineering scholar at GCOERC Nashik (CGPA 8.2).
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono-label text-[#A7A997] hover:text-[#C8F169] flex items-center gap-1"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span>•</span>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono-label text-[#A7A997] hover:text-[#C8F169] flex items-center gap-1"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </section>

          {/* Newsletter Signup in Post */}
          <div className="mt-12 rounded-2xl bg-[#23251D] border border-[#34362D] p-6 sm:p-8 space-y-3">
            <span className="font-mono-label text-xs text-[#C8F169] uppercase tracking-wider block">
              Subscribe For Updates
            </span>
            <h3 className="font-display font-bold text-xl text-[#F2F0E6]">
              Enjoyed this technical breakdown?
            </h3>
            <p className="text-sm text-[#A7A997]">
              Join developers getting weekly insights on full-stack web platforms, AI tools, and production engineering.
            </p>
            <div className="pt-2">
              <NewsletterForm source={`post-${post.slug}`} />
            </div>
          </div>
        </div>

        {/* Sticky Desktop & Tablet Sidebar (4 cols) */}
        <aside className="lg:col-span-4 min-w-0">
          <div className="sticky top-24 max-h-[calc(100vh-6.5rem)] overflow-y-auto no-scrollbar space-y-6 pr-0.5">
            {/* Table of Contents with Live Scroll Progress */}
            {post.toc && post.toc.length > 0 && (
              <TableOfContents toc={post.toc} />
            )}

            {/* Quick Share Buttons */}
            <BlogShareButtons title={post.title} slug={post.slug} />

            {/* AdSense Sticky Sidebar Unit */}
            <AdSlot
              slotId="blog-sidebar-sticky"
              format="vertical"
              minHeight={250}
            />

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="p-5 rounded-2xl bg-[#191B15] border border-[#34362D] space-y-3.5 shadow-lg">
                <h4 className="font-mono-label text-xs text-[#C8F169] uppercase tracking-wider font-bold">
                  // Related Notes
                </h4>
                <div className="space-y-3 divide-y divide-[#34362D]/60">
                  {relatedPosts.map((r) => (
                    <div key={r.slug} className="pt-3 first:pt-0">
                      <Link
                        href={`/blog/${r.slug}`}
                        className="font-display font-bold text-sm text-[#F2F0E6] hover:text-[#C8F169] transition-colors block line-clamp-2"
                      >
                        {r.title}
                      </Link>
                      <span className="text-[11px] font-mono-label text-[#A7A997] mt-1 block">
                        {r.category}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Direct Work With Me Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#191B15] to-[#23251D] border border-[#34362D] space-y-3 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-mono-label">
                <span className="w-2 h-2 rounded-full bg-[#C8F169] animate-pulse" />
                <span className="text-[#C8F169] font-bold">Available For Projects</span>
              </div>
              <p className="text-xs text-[#A7A997] leading-relaxed">
                Co-Founder of SNAB Innovations. Engineering custom full-stack web platforms, AI architectures, and workflow tooling.
              </p>
              <Link
                href="/contact"
                className="w-full py-2.5 px-4 rounded-xl bg-[#C8F169] text-[#0E0F0C] font-mono-label font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-[#D8F788] active:scale-95 transition-all shadow-sm"
              >
                <span>Let&apos;s Connect</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </Link>
            </div>
          </div>
        </aside>
      </div>

      {/* Prev / Next Article Navigation */}
      <footer className="mt-16 pt-8 border-t border-[#34362D] flex items-center justify-between gap-4">
        {prevPost ? (
          <Link
            href={`/blog/${prevPost.slug}`}
            className="flex items-center gap-2 text-sm font-mono-label text-[#A7A997] hover:text-[#C8F169] transition-colors touch-target"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous:</span>
            <span className="font-bold text-[#F2F0E6] truncate max-w-[150px]">
              {prevPost.title}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {nextPost ? (
          <Link
            href={`/blog/${nextPost.slug}`}
            className="flex items-center gap-2 text-sm font-mono-label text-[#A7A997] hover:text-[#C8F169] transition-colors touch-target ml-auto"
          >
            <span className="hidden sm:inline">Next:</span>
            <span className="font-bold text-[#F2F0E6] truncate max-w-[150px]">
              {nextPost.title}
            </span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        ) : (
          <div />
        )}
      </footer>
    </article>
  );
}
