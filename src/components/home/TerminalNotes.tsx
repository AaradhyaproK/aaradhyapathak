import React from "react";
import Link from "next/link";
import { ArrowUpRight, Terminal, Clock, Tag } from "lucide-react";

// Initial sample posts displayed in the terminal window until Velite content is hooked in Phase 4
const sampleNotes = [
  {
    slug: "ai-tools-for-freelancers-guide",
    title: "The 2026 AI Developer Toolkit: How I Build Production Web Apps at 5x Velocity",
    date: "Jan 2026",
    readingTime: "6 min read",
    tag: "AI & Engineering",
    description: "Autonomous agent workflows, zero-server browser utilities (FileZenith), and automated QA verification.",
  },
  {
    slug: "nextjs-15-seo-architecture",
    title: "Next.js 15 Technical SEO Architecture: 100 Lighthouse & Zero-CLS Monetization",
    date: "Feb 2026",
    readingTime: "8 min read",
    tag: "Next.js & SEO",
    description: "Server-side JSON-LD, CLS-safe ad slots, dynamic OG images, and crawler optimization.",
  },
  {
    slug: "building-ai-interview-platform-with-gemini",
    title: "Architecting an AI Interview Assessment Engine with Gemini & AssemblyAI",
    date: "Sep 2025",
    readingTime: "6 min read",
    tag: "AI Architecture",
    description: "Lessons from processing 100 concurrent interviews daily with sub-second speech analysis.",
  },
  {
    slug: "student-developer-roadmap",
    title: "Student Developer to Startup Founder: AIR 64 at IIT Bombay & Commercial Clients",
    date: "Mar 2026",
    readingTime: "7 min read",
    tag: "Founder & Career",
    description: "Balancing an 8.2 CGPA while founding SNAB Innovations and commercializing FileZenith.",
  },
];

export function TerminalNotes() {
  return (
    <section aria-labelledby="notes-heading" className="py-16 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <span className="font-mono-label text-xs text-[#C8F169] tracking-widest uppercase">
            Technical Blog & Engineering Notes
          </span>
          <h2
            id="notes-heading"
            className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F2F0E6] mt-1"
          >
            Insights From The Trenches.
          </h2>
        </div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-mono-label text-[#A7A997] hover:text-[#C8F169] transition-colors touch-target self-start md:self-auto"
        >
          <span>All Notes & Articles</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Terminal Window Container */}
      <div className="rounded-[24px] border border-[#34362D] bg-[#191B15] overflow-hidden shadow-2xl">
        {/* Terminal Title Bar */}
        <div className="px-5 py-3.5 bg-[#23251D] border-b border-[#34362D] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block opacity-80" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block opacity-80" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block opacity-80" />
          </div>
          <div className="flex items-center gap-2 font-mono-label text-xs text-[#A7A997]">
            <Terminal className="w-3.5 h-3.5 text-[#C8F169]" />
            <span>aaradhya@portfolio: ~/notes</span>
          </div>
          <div className="w-12 text-right">
            <span className="text-[10px] font-mono-label text-[#A7A997]/70">zsh</span>
          </div>
        </div>

        {/* Terminal Content Body */}
        <div className="p-5 sm:p-7 space-y-5">
          <div className="font-mono-label text-xs sm:text-sm text-[#A7A997] flex items-center gap-2">
            <span className="text-[#C8F169] font-bold">$</span>
            <span className="text-[#F2F0E6]">ls -la --sort=date ./engineering-notes/</span>
          </div>

          <div className="divide-y divide-[#34362D]/70">
            {sampleNotes.map((note) => (
              <article key={note.slug} className="py-4 first:pt-1 last:pb-1 group">
                <Link
                  href={`/blog/${note.slug}`}
                  className="block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8F169] rounded-xl p-2 -mx-2 transition-colors hover:bg-[#23251D]/60"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-[#F2F0E6] group-hover:text-[#C8F169] transition-colors">
                      {note.title}
                    </h3>
                    <div className="flex items-center gap-3 shrink-0 text-xs font-mono-label text-[#A7A997]">
                      <span className="flex items-center gap-1">
                        <Tag className="w-3 h-3 text-[#C8F169]" />
                        {note.tag}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {note.readingTime}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[#A7A997] mt-1.5 line-clamp-1">
                    {note.description}
                  </p>
                </Link>
              </article>
            ))}
          </div>

          <div className="pt-2 flex items-center justify-between text-xs font-mono-label text-[#A7A997]">
            <span className="text-[#C8F169]">4 notes indexed • 0 errors</span>
            <Link
              href="/blog"
              className="text-[#C8F169] hover:underline flex items-center gap-1 touch-target"
            >
              <span>cd /blog</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
