import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowUpRight, ExternalLink, Sparkles, Shield, Zap, FileText } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function BentoGrid() {
  const projects = siteConfig.projects;
  const interviewXpert = projects.find((p) => p.slug === "interviewxpert") || projects[0];
  const fileZenith = projects.find((p) => p.slug === "filezenith") || projects[1];
  const feeKit = projects.find((p) => p.slug === "feekit") || projects[2];
  const notaryXpert = projects.find((p) => p.slug === "digital-notary") || projects[3];

  return (
    <section aria-labelledby="featured-work-heading" className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div>
          <span className="font-mono-label text-xs text-[#C8F169] tracking-widest uppercase">
            Ventures &amp; Commercial Client Platforms
          </span>
          <h2
            id="featured-work-heading"
            className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F2F0E6] mt-1"
          >
            Engineering Built Around Measurable Impact.
          </h2>
        </div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-mono-label text-[#A7A997] hover:text-[#C8F169] transition-colors touch-target self-start md:self-auto"
        >
          <span>All Case Studies ({projects.length})</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
        {/* Card 1: InterviewXpert (Col 7) */}
        <div className="md:col-span-7 bg-[#191B15] border border-[#34362D] rounded-[28px] p-6 sm:p-8 flex flex-col justify-between hover:border-[#C8F169]/60 hover:-translate-y-1 transition-all duration-300 group shadow-lg">
          <div>
            <div className="flex items-center justify-between gap-4">
              <span className="px-3 py-1 rounded-full bg-[#23251D] border border-[#34362D] font-mono-label text-xs text-[#C8F169] flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#C8F169]" />
                <span>Serving Commercial Clients</span>
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={interviewXpert.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#23251D] border border-[#34362D] flex items-center justify-center text-[#A7A997] hover:text-[#C8F169] hover:border-[#C8F169] transition-colors touch-target"
                  aria-label={`Open live platform for ${interviewXpert.title}`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                {interviewXpert.githubUrl && (
                  <a
                    href={interviewXpert.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#23251D] border border-[#34362D] flex items-center justify-center text-[#A7A997] hover:text-[#C8F169] hover:border-[#C8F169] transition-colors touch-target"
                    aria-label={`Open GitHub repository for ${interviewXpert.title}`}
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Giant Stat Display */}
            <div className="mt-8 flex items-baseline gap-4 flex-wrap">
              <span className="font-display text-5xl sm:text-7xl font-extrabold text-[#C8F169] tracking-tight">
                {interviewXpert.stat}
              </span>
              <div>
                <p className="font-mono-label text-xs sm:text-sm text-[#F2F0E6] font-bold">
                  {interviewXpert.statLabel}
                </p>
                <p className="text-xs text-[#A7A997]">
                  {interviewXpert.secondaryStat} {interviewXpert.secondaryStatLabel}
                </p>
              </div>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F2F0E6] mt-6">
              {interviewXpert.title}
            </h3>
            <p className="text-sm sm:text-base text-[#A7A997] mt-2 line-clamp-3 leading-relaxed">
              {interviewXpert.problem} Integrating Google Gemini multimodal models with AssemblyAI for sub-second speech transcription and scoring rubrics.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-[#34362D]/60 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {interviewXpert.stack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-[#23251D] text-[11px] font-mono-label text-[#A7A997]"
                >
                  {tech}
                </span>
              ))}
            </div>
            <Link
              href={`/projects/${interviewXpert.slug}`}
              className="text-xs font-mono-label font-bold text-[#C8F169] hover:underline flex items-center gap-1 touch-target"
            >
              <span>Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Card 2: FileZenith (Col 5) */}
        <div className="md:col-span-5 bg-[#191B15] border border-[#34362D] rounded-[28px] p-6 sm:p-8 flex flex-col justify-between hover:border-[#C8F169]/60 hover:-translate-y-1 transition-all duration-300 group shadow-lg">
          <div>
            <div className="flex items-center justify-between gap-4">
              <span className="px-3 py-1 rounded-full bg-[#23251D] border border-[#34362D] font-mono-label text-xs text-[#F2F0E6] flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#C8F169]" />
                <span>100% Private File Studio</span>
              </span>
              <a
                href={fileZenith.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#23251D] border border-[#34362D] flex items-center justify-center text-[#A7A997] hover:text-[#C8F169] hover:border-[#C8F169] transition-colors touch-target"
                aria-label={`Open live platform for ${fileZenith.title}`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-8">
              <span className="font-display text-5xl sm:text-6xl font-extrabold text-[#C8F169] tracking-tight">
                {fileZenith.stat}
              </span>
              <p className="font-mono-label text-xs sm:text-sm text-[#F2F0E6] font-bold mt-1">
                {fileZenith.statLabel}
              </p>
              <p className="text-xs text-[#A7A997] mt-0.5">
                Serving commercial clients with zero server file uploads
              </p>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F2F0E6] mt-6">
              {fileZenith.title}
            </h3>
            <p className="text-sm text-[#A7A997] mt-2 line-clamp-2 leading-relaxed">
              {fileZenith.solution}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-[#34362D]/60 flex items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {fileZenith.stack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-[#23251D] text-[11px] font-mono-label text-[#A7A997]"
                >
                  {tech}
                </span>
              ))}
            </div>
            <Link
              href={`/projects/${fileZenith.slug}`}
              className="text-xs font-mono-label font-bold text-[#C8F169] hover:underline flex items-center gap-1 touch-target"
            >
              <span>Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Card 3: FeeKit (Col 6) */}
        <div className="md:col-span-6 bg-[#191B15] border border-[#34362D] rounded-[28px] p-6 sm:p-8 flex flex-col justify-between hover:border-[#C8F169]/60 hover:-translate-y-1 transition-all duration-300 group shadow-lg">
          <div>
            <div className="flex items-center justify-between gap-4">
              <span className="px-3 py-1 rounded-full bg-[#23251D] border border-[#34362D] font-mono-label text-xs text-[#F2F0E6] flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-[#C8F169]" />
                <span>Automated Billing SaaS</span>
              </span>
              <a
                href={feeKit.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#23251D] border border-[#34362D] flex items-center justify-center text-[#A7A997] hover:text-[#C8F169] hover:border-[#C8F169] transition-colors touch-target"
                aria-label={`Open live demo for ${feeKit.title}`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-8">
              <span className="font-display text-5xl sm:text-6xl font-extrabold text-[#C8F169] tracking-tight">
                {feeKit.stat}
              </span>
              <p className="font-mono-label text-xs sm:text-sm text-[#F2F0E6] font-bold mt-1">
                {feeKit.statLabel}
              </p>
              <p className="text-xs text-[#A7A997] mt-0.5">
                Serving commercial clients &amp; agencies with automated reconciliation
              </p>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F2F0E6] mt-6">
              {feeKit.title}
            </h3>
            <p className="text-sm text-[#A7A997] mt-2 line-clamp-2 leading-relaxed">
              {feeKit.solution}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-[#34362D]/60 flex items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {feeKit.stack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-[#23251D] text-[11px] font-mono-label text-[#A7A997]"
                >
                  {tech}
                </span>
              ))}
            </div>
            <Link
              href={`/projects/${feeKit.slug}`}
              className="text-xs font-mono-label font-bold text-[#C8F169] hover:underline flex items-center gap-1 touch-target"
            >
              <span>Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Card 4: NotaryXpert (Col 6) - No 30k amount, Serving Commercial Clients */}
        <div className="md:col-span-6 bg-[#191B15] border border-[#34362D] rounded-[28px] p-6 sm:p-8 flex flex-col justify-between hover:border-[#C8F169]/60 hover:-translate-y-1 transition-all duration-300 group shadow-lg">
          <div>
            <div className="flex items-center justify-between gap-4">
              <span className="px-3 py-1 rounded-full bg-[#23251D] border border-[#34362D] font-mono-label text-xs text-[#F2F0E6] flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#C8F169]" />
                <span>Commercial Legal SaaS</span>
              </span>
              <a
                href={notaryXpert.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#23251D] border border-[#34362D] flex items-center justify-center text-[#A7A997] hover:text-[#C8F169] hover:border-[#C8F169] transition-colors touch-target"
                aria-label={`Open live platform for ${notaryXpert.title}`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-8">
              <span className="font-display text-5xl sm:text-6xl font-extrabold text-[#C8F169] tracking-tight">
                {notaryXpert.stat}
              </span>
              <p className="font-mono-label text-xs sm:text-sm text-[#F2F0E6] font-bold mt-1">
                {notaryXpert.statLabel}
              </p>
              <p className="text-xs text-[#A7A997] mt-0.5">
                Serving commercial clients &amp; advocates with {notaryXpert.secondaryStatLabel}
              </p>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F2F0E6] mt-6">
              {notaryXpert.title}
            </h3>
            <p className="text-sm text-[#A7A997] mt-2 line-clamp-2 leading-relaxed">
              {notaryXpert.solution}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-[#34362D]/60 flex items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {notaryXpert.stack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-[#23251D] text-[11px] font-mono-label text-[#A7A997]"
                >
                  {tech}
                </span>
              ))}
            </div>
            <Link
              href={`/projects/${notaryXpert.slug}`}
              className="text-xs font-mono-label font-bold text-[#C8F169] hover:underline flex items-center gap-1 touch-target"
            >
              <span>Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
