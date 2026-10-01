import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return siteConfig.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = siteConfig.projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study by Aaradhya Pathak`,
    description: `${project.tagline}. Problem: ${project.problem.slice(0, 120)}...`,
    alternates: {
      canonical: `${siteConfig.url}/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} — Case Study`,
      description: project.tagline,
      url: `${siteConfig.url}/projects/${project.slug}`,
      type: "article",
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const projectIndex = siteConfig.projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = siteConfig.projects[projectIndex];
  const prevProject =
    projectIndex > 0 ? siteConfig.projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < siteConfig.projects.length - 1
      ? siteConfig.projects[projectIndex + 1]
      : null;

  return (
    <div className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <Link href="/projects" className="hover:text-[#F2F0E6] transition-colors">
              Projects
            </Link>
          </li>
          <li>/</li>
          <li className="text-[#C8F169] truncate max-w-[200px]">
            {project.title}
          </li>
        </ol>
      </nav>

      {/* Case Study Header */}
      <header className="mb-12 border-b border-[#34362D] pb-12">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3.5 py-1 rounded-full bg-[#191B15] border border-[#34362D] font-mono-label text-xs text-[#C8F169]">
            {project.subtitle}
          </span>
          <span className="px-3.5 py-1 rounded-full bg-[#23251D] border border-[#34362D] font-mono-label text-xs text-[#F2F0E6]">
            Role: {project.role}
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-[#F2F0E6] leading-[0.95]">
          {project.title}
        </h1>

        <p className="mt-4 text-xl sm:text-2xl text-[#A7A997] font-medium leading-relaxed max-w-3xl">
          {project.tagline}
        </p>

        {/* Big Number Metrics Banner */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 rounded-2xl bg-[#191B15] border border-[#34362D]">
          <div>
            <span className="font-display text-4xl sm:text-5xl font-extrabold text-[#C8F169] tracking-tight">
              {project.stat}
            </span>
            <p className="font-mono-label text-xs sm:text-sm text-[#F2F0E6] font-bold mt-1">
              {project.statLabel}
            </p>
          </div>
          <div className="sm:border-l sm:border-[#34362D] sm:pl-6">
            <span className="font-display text-4xl sm:text-5xl font-extrabold text-[#F2F0E6] tracking-tight">
              {project.secondaryStat}
            </span>
            <p className="font-mono-label text-xs sm:text-sm text-[#A7A997] font-bold mt-1">
              {project.secondaryStatLabel}
            </p>
          </div>
        </div>

        {/* Action Links */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-target px-6 py-3 rounded-full bg-[#C8F169] text-[#0E0F0C] font-mono-label font-bold text-xs hover:bg-[#D8F788] transition-all hover:scale-105 active:scale-95 shadow-md flex items-center gap-2"
          >
            <span>Launch Live Demo</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="touch-target px-6 py-3 rounded-full bg-[#191B15] border border-[#34362D] text-[#F2F0E6] font-mono-label font-semibold text-xs hover:border-[#C8F169] hover:text-[#C8F169] transition-all flex items-center gap-2"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source Repository</span>
            </a>
          )}
        </div>
      </header>

      {/* Case Study Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Narrative (8 cols) */}
        <div className="lg:col-span-8 space-y-12">
          {/* Section: Problem */}
          <section aria-labelledby="problem-heading">
            <h2
              id="problem-heading"
              className="font-display text-2xl font-bold text-[#F2F0E6] mb-4 flex items-center gap-2"
            >
              <Cpu className="w-5 h-5 text-[#C8F169]" />
              <span>The Problem &amp; Opportunity</span>
            </h2>
            <p className="text-base sm:text-lg text-[#A7A997] leading-relaxed">
              {project.problem}
            </p>
          </section>

          {/* Section: Solution */}
          <section aria-labelledby="solution-heading">
            <h2
              id="solution-heading"
              className="font-display text-2xl font-bold text-[#F2F0E6] mb-4 flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-[#C8F169]" />
              <span>The Solution &amp; Engineering</span>
            </h2>
            <p className="text-base sm:text-lg text-[#A7A997] leading-relaxed">
              {project.solution}
            </p>
          </section>

          {/* Section: Measurable Outcomes */}
          <section aria-labelledby="outcomes-heading">
            <h2
              id="outcomes-heading"
              className="font-display text-2xl font-bold text-[#F2F0E6] mb-4 flex items-center gap-2"
            >
              <Layers className="w-5 h-5 text-[#C8F169]" />
              <span>Key Highlights &amp; Results</span>
            </h2>
            <ul className="space-y-3">
              {project.highlights.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-base text-[#F2F0E6] leading-relaxed bg-[#191B15] border border-[#34362D] rounded-xl p-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#C8F169] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Sidebar Info (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#191B15] border border-[#34362D] rounded-2xl p-6 space-y-6 sticky top-28">
            <div>
              <h3 className="font-mono-label text-xs text-[#A7A997] uppercase tracking-wider mb-2">
                Engineering Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-[#23251D] border border-[#34362D] text-xs font-mono-label text-[#F2F0E6]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#34362D]">
              <h3 className="font-mono-label text-xs text-[#A7A997] uppercase tracking-wider mb-2">
                My Role
              </h3>
              <p className="text-sm font-semibold text-[#F2F0E6]">
                {project.role}
              </p>
            </div>

            <div className="pt-4 border-t border-[#34362D]">
              <h3 className="font-mono-label text-xs text-[#A7A997] uppercase tracking-wider mb-2">
                Project Category
              </h3>
              <p className="text-sm text-[#A7A997]">
                {project.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Prev / Next Navigation */}
      <footer className="mt-16 pt-8 border-t border-[#34362D] flex items-center justify-between gap-4">
        {prevProject ? (
          <Link
            href={`/projects/${prevProject.slug}`}
            className="flex items-center gap-2 text-sm font-mono-label text-[#A7A997] hover:text-[#C8F169] transition-colors touch-target"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous:</span>
            <span className="font-bold text-[#F2F0E6] truncate max-w-[150px]">
              {prevProject.title}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {nextProject ? (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="flex items-center gap-2 text-sm font-mono-label text-[#A7A997] hover:text-[#C8F169] transition-colors touch-target ml-auto"
          >
            <span className="hidden sm:inline">Next:</span>
            <span className="font-bold text-[#F2F0E6] truncate max-w-[150px]">
              {nextProject.title}
            </span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        ) : (
          <div />
        )}
      </footer>
    </div>
  );
}
