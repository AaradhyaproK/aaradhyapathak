"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import {
  X,
  Download,
  ExternalLink,
  FileText,
  Sparkles,
  GraduationCap,
  Briefcase,
  Award,
  Mail,
  Check,
  Copy,
  Layers,
} from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "summary">("preview");
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(siteConfig.resumeUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-dialog-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl h-[92vh] sm:h-[90vh] bg-[#12140F] border border-[#34362D] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-[#34362D] bg-[#191B15]/90 backdrop-blur shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-[#23251D] border border-[#34362D] flex items-center justify-center text-[#C8F169] shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h2
                  id="resume-dialog-title"
                  className="font-display font-bold text-sm sm:text-base text-[#F2F0E6] truncate"
                >
                  Aaradhya Pathak — Resume
                </h2>
                <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full text-[10px] font-mono-label font-bold bg-[#C8F169]/15 text-[#C8F169] border border-[#C8F169]/30">
                  2026 Edition
                </span>
              </div>
              <p className="font-mono-label text-[11px] text-[#A7A997] truncate">
                Full Stack Developer &bull; Co-Founder @ SNAB
              </p>
            </div>
          </div>

          {/* Action Controls */}
          <div className="flex items-center gap-2 shrink-0">
            {/* View Tab Switcher */}
            <div className="hidden sm:flex items-center bg-[#23251D] border border-[#34362D] rounded-lg p-0.5">
              <button
                type="button"
                onClick={() => setActiveTab("preview")}
                className={`px-3 py-1 rounded text-xs font-mono-label transition-colors ${
                  activeTab === "preview"
                    ? "bg-[#C8F169] text-[#0E0F0C] font-semibold shadow"
                    : "text-[#A7A997] hover:text-[#F2F0E6]"
                }`}
              >
                PDF View
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("summary")}
                className={`px-3 py-1 rounded text-xs font-mono-label transition-colors ${
                  activeTab === "summary"
                    ? "bg-[#C8F169] text-[#0E0F0C] font-semibold shadow"
                    : "text-[#A7A997] hover:text-[#F2F0E6]"
                }`}
              >
                Summary
              </button>
            </div>

            {/* Copy Link */}
            <button
              type="button"
              onClick={handleCopyLink}
              title="Copy Resume Link"
              aria-label="Copy Resume Link"
              className="p-2 rounded-lg bg-[#23251D] border border-[#34362D] text-[#A7A997] hover:text-[#C8F169] hover:border-[#C8F169]/50 transition-colors"
            >
              {copied ? (
                <Check className="w-4 h-4 text-[#C8F169]" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>

            {/* Direct Download Button */}
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Aaradhya_Pathak_Resume.pdf"
              className="px-3 py-1.5 rounded-lg bg-[#C8F169] text-[#0E0F0C] hover:bg-[#D8F788] text-xs font-mono-label font-bold flex items-center gap-1.5 transition-colors shadow-sm"
              title="Download Resume PDF"
            >
              <Download className="w-3.5 h-3.5 stroke-[2.5]" />
              <span className="hidden xs:inline">Download</span>
            </a>

            {/* Open in new tab button */}
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#23251D] border border-[#34362D] text-[#A7A997] hover:text-[#F2F0E6] hover:border-[#34362D]/80 transition-colors"
              title="Open PDF in new tab"
              aria-label="Open PDF in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg bg-[#23251D] border border-[#34362D] text-[#A7A997] hover:text-[#F2F0E6] hover:bg-[#34362D] transition-colors ml-1"
              title="Close modal (Esc)"
              aria-label="Close resume popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Tab Switcher */}
        <div className="sm:hidden flex items-center justify-around border-b border-[#34362D] bg-[#191B15] py-1.5 px-3">
          <button
            type="button"
            onClick={() => setActiveTab("preview")}
            className={`flex-1 py-1.5 text-center text-xs font-mono-label font-medium rounded ${
              activeTab === "preview"
                ? "bg-[#C8F169] text-[#0E0F0C] font-bold"
                : "text-[#A7A997]"
            }`}
          >
            PDF Preview
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("summary")}
            className={`flex-1 py-1.5 text-center text-xs font-mono-label font-medium rounded ${
              activeTab === "summary"
                ? "bg-[#C8F169] text-[#0E0F0C] font-bold"
                : "text-[#A7A997]"
            }`}
          >
            Interactive Summary
          </button>
        </div>

        {/* Modal Main Body */}
        <div className="flex-1 min-h-0 bg-[#0E0F0C] relative overflow-hidden">
          {activeTab === "preview" ? (
            <div className="w-full h-full flex flex-col">
              <div className="hidden xs:flex items-center justify-between px-4 py-2 bg-[#191B15]/60 border-b border-[#34362D]/50 text-[11px] font-mono-label text-[#A7A997]">
                <span>Loaded via Cloudinary High-Res Delivery</span>
                <span>Having trouble viewing? Switch to Summary or click Download</span>
              </div>
              <iframe
                src={`${siteConfig.resumeUrl}#toolbar=1`}
                className="w-full flex-1 border-0 bg-[#12140F]"
                title="Aaradhya Pathak's Official Resume"
              />
            </div>
          ) : (
            <div className="w-full h-full overflow-y-auto p-4 sm:p-8 space-y-6">
              {/* Highlight Banner */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#191B15] via-[#23251D] to-[#191B15] border border-[#34362D] space-y-3">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F2F0E6]">
                      Aaradhya Pathak
                    </h3>
                    <p className="font-mono-label text-xs sm:text-sm text-[#C8F169] mt-0.5">
                      Co-Founder @ SNAB Innovations &bull; Full Stack Web Developer &bull; QA Tester
                    </p>
                  </div>
                  <a
                    href={siteConfig.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-[#C8F169] text-[#0E0F0C] font-mono-label font-bold text-xs hover:bg-[#D8F788] transition-all flex items-center gap-2 shadow"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Official PDF</span>
                  </a>
                </div>
                <p className="text-sm text-[#A7A997] leading-relaxed">
                  B.E. Computer Engineering scholar (CGPA 8.2) with hands-on production experience architecting commercial web applications (FileZenith, FeeKit, InterviewXpert). Experienced in MERN, Next.js 15, PHP, Java, AI prompt engineering, and automated testing.
                </p>
              </div>

              {/* Grid Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Experience & Ventures */}
                <div className="p-5 rounded-2xl bg-[#191B15] border border-[#34362D] space-y-3">
                  <div className="flex items-center gap-2 text-[#C8F169] font-mono-label text-xs uppercase tracking-wider font-semibold">
                    <Briefcase className="w-4 h-4" />
                    <span>Ventures & Experience</span>
                  </div>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="border-l-2 border-[#C8F169] pl-3 py-0.5 space-y-1">
                      <div className="flex items-center justify-between text-[#F2F0E6] font-semibold">
                        <span>Co-Founder</span>
                        <span className="font-mono-label text-[11px] text-[#A7A997]">2024 &ndash; Present</span>
                      </div>
                      <p className="font-mono-label text-[11px] text-[#C8F169]">SNAB Innovations</p>
                      <p className="text-[#A7A997] text-xs">
                        Architected FileZenith (50+ browser file tools), FeeKit (billing & receipts), and InterviewXpert.
                      </p>
                    </div>

                    <div className="border-l-2 border-[#34362D] pl-3 py-0.5 space-y-1">
                      <div className="flex items-center justify-between text-[#F2F0E6] font-semibold">
                        <span>Google Gemini Student Ambassador</span>
                        <span className="font-mono-label text-[11px] text-[#A7A997]">Nov 2025 &ndash; Apr 2026</span>
                      </div>
                      <p className="font-mono-label text-[11px] text-[#C8F169]">Google India</p>
                      <p className="text-[#A7A997] text-xs">
                        Led 6-month leadership program, prompt battles, and educated 150+ students on generative AI.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Education & Achievements */}
                <div className="p-5 rounded-2xl bg-[#191B15] border border-[#34362D] space-y-3">
                  <div className="flex items-center gap-2 text-[#C8F169] font-mono-label text-xs uppercase tracking-wider font-semibold">
                    <GraduationCap className="w-4 h-4" />
                    <span>Education & Honors</span>
                  </div>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="border-l-2 border-[#C8F169] pl-3 py-0.5 space-y-1">
                      <div className="flex items-center justify-between text-[#F2F0E6] font-semibold">
                        <span>B.E. Computer Engineering</span>
                        <span className="font-mono-label text-[11px] text-[#A7A997]">2022 &ndash; 2026</span>
                      </div>
                      <p className="font-mono-label text-[11px] text-[#C8F169]">
                        Guru Gobind Singh College of Engineering &amp; Research Centre (GGSF), Nashik (SPPU) &bull; CGPA 8.2 / 10
                      </p>
                      <p className="text-[#A7A997] text-xs">
                        Top-tier academic track record, Data Structures &amp; Algorithms, Systems Engineering.
                      </p>
                    </div>

                    <div className="border-l-2 border-[#34362D] pl-3 py-0.5 space-y-1">
                      <div className="flex items-center justify-between text-[#F2F0E6] font-semibold">
                        <span>All India Rank 64</span>
                        <span className="font-mono-label text-[11px] text-[#A7A997]">Hackathon</span>
                      </div>
                      <p className="font-mono-label text-[11px] text-[#C8F169]">
                        Smart India Hackathon Internal Round
                      </p>
                      <p className="text-[#A7A997] text-xs">
                        Ranked 64 out of 4,000+ national competing engineering teams.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills Badge Matrix */}
              <div className="p-5 rounded-2xl bg-[#191B15] border border-[#34362D] space-y-3">
                <div className="flex items-center gap-2 text-[#C8F169] font-mono-label text-xs uppercase tracking-wider font-semibold">
                  <Layers className="w-4 h-4" />
                  <span>Verified Tech Stack</span>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    "React.js",
                    "Next.js 15 (App Router)",
                    "TypeScript",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "PHP",
                    "Java",
                    "Python",
                    "Tailwind CSS",
                    "RESTful APIs",
                    "Jest & Playwright QA",
                    "Google Gemini API",
                    "Technical SEO & Core Web Vitals",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-xs font-mono-label bg-[#23251D] text-[#F2F0E6] border border-[#34362D]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Contact Bar */}
              <div className="p-4 rounded-xl bg-[#23251D] border border-[#34362D] flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-2 text-xs font-mono-label text-[#A7A997]">
                  <Mail className="w-3.5 h-3.5 text-[#C8F169]" />
                  <span>Direct Inquiry:</span>
                  <a
                    href="mailto:hello@snab.co.in"
                    className="text-[#F2F0E6] hover:text-[#C8F169] underline underline-offset-2"
                  >
                    hello@snab.co.in
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono-label text-[#C8F169] hover:underline"
                  >
                    LinkedIn Profile &rarr;
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
