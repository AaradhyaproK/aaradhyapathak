import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  FileText,
  MapPin,
  Sparkles,
  Trophy,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Users,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "About Aaradhya Pathak — Founder @ SNAB & Full Stack Engineer",
  description:
    "Biography, background, startup ventures (FileZenith, UseFeeKit), Google Gemini Student Ambassador leadership, and technical credentials of Aaradhya Pathak.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl mb-14">
        <span className="font-mono-label text-xs text-[#C8F169] tracking-widest uppercase">
          About Me
        </span>
        <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-[#F2F0E6] mt-2">
          Builder. Co-Founder. Full Stack Engineer.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#A7A997] leading-relaxed">
          I&apos;m Aaradhya Pathak — co-founder of SNAB Innovations, Google Gemini Student Ambassador, and Computer Engineering scholar with an 8.2 CGPA. I design and build production web applications, privacy-first developer tools, and AI platforms.
        </p>
      </div>

      {/* Quick Bio Card with Portrait */}
      <div className="rounded-[28px] bg-[#191B15] border border-[#34362D] p-6 sm:p-10 mb-14 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Portrait Frame */}
          <div className="md:col-span-4 flex flex-col items-center sm:items-start gap-4">
            <div className="relative w-full max-w-[280px] aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#34362D] bg-[#23251D] group shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F0C] via-transparent to-transparent z-10 opacity-70" />
              <Image
                src={siteConfig.author.avatar}
                alt={siteConfig.author.name}
                fill
                priority
                sizes="(max-width: 768px) 280px, 320px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 right-3 z-20">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0E0F0C]/90 backdrop-blur-md border border-[#34362D] text-[11px] font-mono-label text-[#C8F169]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8F169] animate-pulse" />
                  Co-Founder @ SNAB
                </span>
              </div>
            </div>

            {/* Quick Profile Links */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#23251D] border border-[#34362D] text-[#A7A997] hover:text-[#C8F169] hover:border-[#C8F169]/40 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#23251D] border border-[#34362D] text-[#A7A997] hover:text-[#C8F169] hover:border-[#C8F169]/40 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${siteConfig.corporateEmail}`}
                className="p-2.5 rounded-xl bg-[#23251D] border border-[#34362D] text-[#A7A997] hover:text-[#C8F169] hover:border-[#C8F169]/40 transition-colors"
                aria-label="Email Aaradhya"
              >
                <MailIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Bio Details */}
          <div className="md:col-span-8 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#34362D] pb-5">
              <div className="space-y-1">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F2F0E6]">
                  Aaradhya Pathak
                </h2>
                <p className="font-mono-label text-xs text-[#C8F169]">
                  Full Stack Web Developer &bull; Founder @ SNAB Innovations
                </p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target px-4 py-2 rounded-full bg-[#C8F169] text-[#0E0F0C] font-mono-label font-bold text-xs hover:bg-[#D8F788] transition-all flex items-center gap-2"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Resume PDF</span>
                </a>
              </div>
            </div>

            <div className="space-y-4 text-base text-[#A7A997] leading-relaxed">
              <p>
                Proficient in the MERN stack (MongoDB, Express.js, React.js, Node.js), PHP, and Java, combined with a disciplined grounding in Data Structures and Algorithms (DSA) and Object-Oriented Programming (OOP).
              </p>
              <p>
                As the founder of <strong className="text-[#F2F0E6]">SNAB Innovations</strong>, I launched <strong className="text-[#F2F0E6]">FileZenith (filezenith.com)</strong> — an all-in-one browser file studio offering 50+ free tools for PDF, images, and documents that run 100% serverless client-side for maximum privacy — and <strong className="text-[#F2F0E6]">UseFeeKit (usefeekit.com)</strong> for streamlined billing.
              </p>
              <p>
                In November 2025, I was selected by Google India as a <strong className="text-[#C8F169]">Google Gemini Student Ambassador</strong>, leading a 6-month leadership program hosting AI prompt battles, technical workshops, and educating 150+ students on generative AI applications.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#34362D]">
              <div className="flex items-center gap-2 text-sm text-[#F2F0E6]">
                <MapPin className="w-4 h-4 text-[#C8F169]" />
                <span>{siteConfig.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#F2F0E6]">
                <GraduationCap className="w-4 h-4 text-[#C8F169]" />
                <span>CGPA 8.2 (Comp Engg)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#F2F0E6]">
                <Trophy className="w-4 h-4 text-[#C8F169]" />
                <span>AIR 64 (NEC 2025 @ IIT-B)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Startup Ventures Section */}
      <section className="mb-14" aria-labelledby="ventures-heading">
        <h2 id="ventures-heading" className="font-display text-2xl sm:text-3xl font-bold text-[#F2F0E6] mb-6">
          Ventures &amp; Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {siteConfig.ventures.map((v) => (
            <div
              key={v.name}
              className="rounded-2xl bg-[#191B15] border border-[#34362D] p-6 hover:border-[#C8F169]/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono-label text-xs text-[#C8F169]">
                    {v.role}
                  </span>
                  <a
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#A7A997] hover:text-[#C8F169] transition-colors touch-target"
                    aria-label={`Visit ${v.name}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <h3 className="font-display text-xl font-bold text-[#F2F0E6]">
                  {v.name}
                </h3>
                <p className="text-sm text-[#A7A997] mt-2 leading-relaxed">
                  {v.description}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-[#34362D]/60">
                <a
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono-label text-[#C8F169] hover:underline"
                >
                  {v.url.replace("https://", "")} &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="mb-14" aria-labelledby="skills-matrix-heading">
        <h2 id="skills-matrix-heading" className="font-display text-2xl sm:text-3xl font-bold text-[#F2F0E6] mb-6">
          Technical Capabilities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="rounded-2xl bg-[#191B15] border border-[#34362D] p-5 space-y-3">
            <h3 className="font-mono-label text-xs text-[#C8F169] uppercase tracking-wider">
              Front-End
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Vite"].map((s) => (
                <span key={s} className="px-2.5 py-1 rounded bg-[#23251D] text-xs font-mono-label text-[#F2F0E6]">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-[#191B15] border border-[#34362D] p-5 space-y-3">
            <h3 className="font-mono-label text-xs text-[#C8F169] uppercase tracking-wider">
              Back-End &amp; APIs
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {["Node.js", "Express.js", "PHP", "Java", "Python", "REST APIs"].map((s) => (
                <span key={s} className="px-2.5 py-1 rounded bg-[#23251D] text-xs font-mono-label text-[#F2F0E6]">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-[#191B15] border border-[#34362D] p-5 space-y-3">
            <h3 className="font-mono-label text-xs text-[#C8F169] uppercase tracking-wider">
              Databases &amp; Cloud
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {["MongoDB", "SQL / MySQL", "Firebase", "Cloudinary", "Netlify", "Vercel"].map((s) => (
                <span key={s} className="px-2.5 py-1 rounded bg-[#23251D] text-xs font-mono-label text-[#F2F0E6]">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-[#191B15] border border-[#34362D] p-5 space-y-3">
            <h3 className="font-mono-label text-xs text-[#C8F169] uppercase tracking-wider">
              AI &amp; Algorithms
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {["Gemini API", "AssemblyAI", "OpenCV", "DSA in Java", "OOP Architecture"].map((s) => (
                <span key={s} className="px-2.5 py-1 rounded bg-[#23251D] text-xs font-mono-label text-[#F2F0E6]">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-[#191B15] border border-[#34362D] p-5 space-y-3 sm:col-span-2">
            <h3 className="font-mono-label text-xs text-[#C8F169] uppercase tracking-wider">
              Testing &amp; Developer Tools
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {["Manual & Automated QA", "Postman", "Git / GitHub", "Technical SEO", "System Optimization"].map((s) => (
                <span key={s} className="px-2.5 py-1 rounded bg-[#23251D] text-xs font-mono-label text-[#F2F0E6]">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <div className="rounded-2xl bg-[#C8F169] text-[#0E0F0C] p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold">
            Interested in collaborating or hiring?
          </h2>
          <p className="mt-1 text-sm font-medium opacity-90">
            I&apos;m available for freelance development, full-stack roles, and AI engineering.
          </p>
        </div>
        <Link
          href="/contact"
          className="touch-target px-6 py-3 rounded-full bg-[#0E0F0C] text-[#F2F0E6] font-mono-label font-bold text-xs hover:bg-[#191B15] transition-all self-start sm:self-auto shrink-0"
        >
          Contact Me &rarr;
        </Link>
      </div>
    </div>
  );
}
