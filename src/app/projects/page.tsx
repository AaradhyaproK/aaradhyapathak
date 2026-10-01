import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Projects & Ventures — Full Stack AI, SaaS & Web Systems",
  description:
    "Explore case studies of software platforms, AI architectures, and startup ventures engineered by Aaradhya Pathak, including FileZenith, InterviewXpert, and NotaryXpert.",
  alternates: {
    canonical: `${siteConfig.url}/projects`,
  },
};

export default function ProjectsPage() {
  const projects = siteConfig.projects;

  return (
    <div className="pt-32 pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="max-w-3xl mb-14">
        <span className="font-mono-label text-xs text-[#C8F169] tracking-widest uppercase">
          Portfolio & Case Studies
        </span>
        <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-[#F2F0E6] mt-2">
          Systems Built For Measurable Impact.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#A7A997] leading-relaxed">
          From zero-server upload private utility studios to high-concurrency event platforms and commercial AI interview scoring engines. Every project represents tangible engineering and real-world metrics.
        </p>
      </div>

      {/* Ventures Callout Banner */}
      <div className="mb-14 rounded-2xl bg-[#191B15] border border-[#34362D] p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="font-mono-label text-xs text-[#C8F169] tracking-wider uppercase flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Venture Studio</span>
          </span>
          <h2 className="font-display text-2xl font-bold text-[#F2F0E6] mt-1">
            SNAB Innovations
          </h2>
          <p className="text-sm text-[#A7A997] mt-1 max-w-xl">
            Software engineering firm co-founded by Aaradhya Pathak in Nashik, operating FileZenith (50+ in-browser tools), UseFeeKit, and custom enterprise platforms.
          </p>
        </div>
        <a
          href="https://snab.co.in"
          target="_blank"
          rel="noopener noreferrer"
          className="touch-target px-5 py-2.5 rounded-full bg-[#C8F169] text-[#0E0F0C] font-mono-label font-bold text-xs hover:bg-[#D8F788] transition-all self-start md:self-auto flex items-center gap-2"
        >
          <span>Visit snab.co.in</span>
          <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
        </a>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="bg-[#191B15] border border-[#34362D] rounded-[28px] p-6 sm:p-8 flex flex-col justify-between hover:border-[#C8F169]/60 hover:-translate-y-1 transition-all duration-300 group shadow-lg"
          >
            <div>
              {/* Card Top Row */}
              <div className="flex items-center justify-between gap-2 sm:gap-4">
                <span className="px-3 py-1 rounded-full bg-[#23251D] border border-[#34362D] font-mono-label text-[11px] sm:text-xs text-[#C8F169] font-medium truncate max-w-[190px] sm:max-w-xs">
                  {project.subtitle}
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#23251D] border border-[#34362D] flex items-center justify-center text-[#A7A997] hover:text-[#C8F169] hover:border-[#C8F169] transition-colors touch-target"
                    aria-label={`Open live demo for ${project.title}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-[#23251D] border border-[#34362D] flex items-center justify-center text-[#A7A997] hover:text-[#C8F169] hover:border-[#C8F169] transition-colors touch-target"
                      aria-label={`Open GitHub repository for ${project.title}`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Big Stat Highlight */}
              <div className="mt-8">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-[#C8F169] tracking-tight">
                  {project.stat}
                </span>
                <p className="font-mono-label text-xs text-[#F2F0E6] font-bold mt-1">
                  {project.statLabel}
                </p>
                <p className="text-xs text-[#A7A997] mt-0.5">
                  {project.secondaryStat} {project.secondaryStatLabel}
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-[#F2F0E6] mt-6 group-hover:text-[#C8F169] transition-colors">
                <Link href={`/projects/${project.slug}`}>
                  {project.title}
                </Link>
              </h2>
              <p className="text-sm text-[#A7A997] mt-2 line-clamp-3 leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Bottom Tech & Case Study Link */}
            <div className="mt-8 pt-6 border-t border-[#34362D]/60 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {project.stack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-[#23251D] text-[11px] font-mono-label text-[#A7A997]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={`/projects/${project.slug}`}
                className="text-xs font-mono-label font-bold text-[#C8F169] hover:underline flex items-center gap-1 touch-target"
              >
                <span>Read Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
