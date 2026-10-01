"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "@/components/ui/Icons";
import { Mail, Copy, Check, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopyEmail = (email: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(email);
      setCopiedEmail(email);
      setTimeout(() => setCopiedEmail(null), 2500);
    }
  };

  const handleOpenCookieSettings = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-cookie-settings"));
    }
  };

  return (
    <footer
      className="mt-auto border-t border-[#34362D] bg-[#12130E] text-[#A7A997] pt-16 sm:pt-20 pb-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      aria-label="Site Footer"
    >
      {/* Subtle Background Glow behind footer */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-48 bg-gradient-to-b from-[#C8F169]/5 via-transparent to-transparent pointer-events-none"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#34362D]/70">
          {/* Brand & Direct Inquiries Column (Spans 5 on Desktop) */}
          <div className="md:col-span-5 space-y-6">
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F2F0E6] hover:opacity-95 transition-opacity"
              >
                <span>{siteConfig.name}</span>
                <span className="text-[#C8F169]">.</span>
              </Link>
              <p className="text-sm text-[#A7A997] leading-relaxed mt-2.5 max-w-sm">
                Full Stack Web Developer &amp; Co-Founder @ SNAB Innovations. Architecting high-performance web systems, AI workflows, and search-optimized platforms.
              </p>
            </div>

            {/* Direct Inquiries & Email Cards */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono-label">
                <span className="w-2 h-2 rounded-full bg-[#C8F169] animate-pulse" />
                <span className="text-[#C8F169] font-bold">Direct Inquiries &amp; Hiring</span>
                <span className="text-[#A7A997]">— Replies in &lt; 24h</span>
              </div>

              <div className="space-y-2 max-w-sm">
                {/* Corporate SNAB Email Card */}
                <div className="group flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl bg-[#191B15] border border-[#34362D] hover:border-[#C8F169]/60 transition-colors">
                  <a
                    href={`mailto:${siteConfig.corporateEmail}`}
                    className="flex items-center gap-2 text-xs font-mono-label text-[#F2F0E6] hover:text-[#C8F169] transition-colors truncate"
                    title={`Send email to ${siteConfig.corporateEmail}`}
                  >
                    <Mail className="w-3.5 h-3.5 text-[#C8F169] shrink-0" />
                    <span className="truncate">{siteConfig.corporateEmail}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#A7A997] group-hover:text-[#C8F169] shrink-0" />
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopyEmail(siteConfig.corporateEmail)}
                    aria-label={`Copy corporate email ${siteConfig.corporateEmail}`}
                    className="p-1.5 rounded-lg hover:bg-[#23251D] text-[#A7A997] hover:text-[#C8F169] transition-colors cursor-pointer shrink-0"
                    title="Copy email address"
                  >
                    {copiedEmail === siteConfig.corporateEmail ? (
                      <Check className="w-3.5 h-3.5 text-[#C8F169] stroke-[2.5]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Direct Personal Email Card */}
                <div className="group flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl bg-[#191B15] border border-[#34362D] hover:border-[#C8F169]/60 transition-colors">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-2 text-xs font-mono-label text-[#A7A997] hover:text-[#F2F0E6] transition-colors truncate"
                    title={`Send email to ${siteConfig.email}`}
                  >
                    <Mail className="w-3.5 h-3.5 text-[#A7A997] group-hover:text-[#C8F169] shrink-0" />
                    <span className="truncate">{siteConfig.email}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#A7A997] group-hover:text-[#C8F169] shrink-0" />
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopyEmail(siteConfig.email)}
                    aria-label={`Copy personal email ${siteConfig.email}`}
                    className="p-1.5 rounded-lg hover:bg-[#23251D] text-[#A7A997] hover:text-[#C8F169] transition-colors cursor-pointer shrink-0"
                    title="Copy email address"
                  >
                    {copiedEmail === siteConfig.email ? (
                      <Check className="w-3.5 h-3.5 text-[#C8F169] stroke-[2.5]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#191B15] border border-[#34362D] flex items-center justify-center text-[#F2F0E6] hover:text-[#C8F169] hover:border-[#C8F169] active:scale-95 transition-all touch-target"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#191B15] border border-[#34362D] flex items-center justify-center text-[#F2F0E6] hover:text-[#C8F169] hover:border-[#C8F169] active:scale-95 transition-all touch-target"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#191B15] border border-[#34362D] flex items-center justify-center text-[#F2F0E6] hover:text-[#C8F169] hover:border-[#C8F169] active:scale-95 transition-all touch-target"
                aria-label="Twitter Profile"
              >
                <TwitterXIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.linktree}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 px-4 rounded-xl bg-[#191B15] border border-[#34362D] flex items-center justify-center text-xs font-mono-label text-[#A7A997] hover:text-[#F2F0E6] hover:border-[#C8F169] active:scale-95 transition-all touch-target"
                aria-label="Linktree Profile"
              >
                <span>Linktree</span>
              </a>
            </div>
          </div>

          {/* Links Section: 3 Neat Columns on Tablet/Desktop, 2 Organized Columns on Mobile */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-6 pt-2 md:pt-0">
            {/* Column 1: Navigation */}
            <div className="space-y-3.5">
              <p className="font-mono-label text-xs text-[#C8F169] tracking-wider uppercase font-semibold">
                // Navigation
              </p>
              <ul className="space-y-2.5 text-sm">
                {siteConfig.navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#A7A997] hover:text-[#F2F0E6] hover:translate-x-1 inline-block transition-all py-0.5"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href={siteConfig.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#A7A997] hover:text-[#C8F169] hover:translate-x-1 inline-flex items-center gap-1 transition-all py-0.5"
                  >
                    <span>Resume</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Ventures & Platforms */}
            <div className="space-y-3.5">
              <p className="font-mono-label text-xs text-[#C8F169] tracking-wider uppercase font-semibold">
                // Ventures
              </p>
              <ul className="space-y-2.5 text-sm">
                {siteConfig.ventures.map((venture) => (
                  <li key={venture.name}>
                    <a
                      href={venture.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#A7A997] hover:text-[#F2F0E6] hover:translate-x-1 inline-flex items-center gap-1 transition-all py-0.5"
                    >
                      <span>{venture.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-60" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Legal & Governance */}
            <div className="space-y-3.5 col-span-2 sm:col-span-1">
              <p className="font-mono-label text-xs text-[#C8F169] tracking-wider uppercase font-semibold">
                // Compliance
              </p>
              <ul className="space-y-2.5 text-sm">
                {siteConfig.legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#A7A997] hover:text-[#F2F0E6] hover:translate-x-1 inline-block transition-all py-0.5"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    type="button"
                    onClick={handleOpenCookieSettings}
                    className="text-left text-[#A7A997] hover:text-[#C8F169] transition-colors py-0.5 text-sm cursor-pointer"
                  >
                    Privacy Settings
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Designer Signature Watermark & Glowing Name Shadow */}
        <div className="relative pt-12 sm:pt-16 pb-4 overflow-hidden select-none pointer-events-none flex flex-col items-center justify-center">
          {/* Ambient Lime Spotlight behind the name */}
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 max-w-3xl h-24 sm:h-32 bg-gradient-to-r from-[#C8F169]/15 via-[#C8F169]/25 to-[#C8F169]/15 blur-3xl rounded-full"
          />

          {/* Designer Big Name with Multi-Layered Drop Shadow & Gradient */}
          <div className="relative w-full text-center">
            <span
              className="block font-display font-black text-[12vw] sm:text-[13vw] tracking-tighter uppercase leading-[0.88] text-transparent bg-clip-text bg-gradient-to-b from-[#F2F0E6]/30 via-[#F2F0E6]/10 to-transparent transition-all"
              style={{
                filter: "drop-shadow(0 12px 28px rgba(200, 241, 105, 0.16)) drop-shadow(0 0 45px rgba(200, 241, 105, 0.08))",
              }}
            >
              Aaradhya Pathak
            </span>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Timezone & Engineering Signature */}
        <div className="pt-6 border-t border-[#34362D]/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono-label text-[#A7A997]/80 text-center sm:text-left">
          <p>© {currentYear} Aaradhya Pathak. All rights reserved.</p>
          <div className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8F169] animate-pulse" />
            <span>Nashik, India • IST (UTC +5:30)</span>
          </div>
          <p className="text-[#A7A997]/60">Built with Next.js 16 &amp; Night Bento Design</p>
        </div>
      </div>
    </footer>
  );
}
