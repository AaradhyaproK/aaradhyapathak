"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Mail, Phone, Copy, Check, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function ContactBlock() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section aria-labelledby="contact-cta-heading" className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-[32px] sm:rounded-[40px] bg-[#C8F169] text-[#0E0F0C] p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl shadow-[#C8F169]/10">
        {/* Decorative corner background element */}
        <div
          aria-hidden="true"
          className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-[#0E0F0C]/5 pointer-events-none"
        />

        <div className="relative z-10 max-w-3xl">
          <span className="font-mono-label font-bold text-xs tracking-widest uppercase opacity-85">
            Availability: {siteConfig.statusText}
          </span>

          <h2
            id="contact-cta-heading"
            className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[0.92] mt-3"
          >
            Let&apos;s talk.
          </h2>

          <p className="mt-4 text-base sm:text-xl font-medium leading-relaxed opacity-90 max-w-2xl">
            Looking for a dedicated Full Stack Web Developer &amp; QA Tester to build your next client project, AI platform, or scale your engineering team? I&apos;m ready to contribute.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href={`mailto:${siteConfig.corporateEmail}`}
              className="touch-target px-6 py-3.5 rounded-full bg-[#0E0F0C] text-[#F2F0E6] font-mono-label font-bold text-xs hover:bg-[#191B15] transition-all hover:scale-105 active:scale-95 shadow-md flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#C8F169]" />
              <span>Email: {siteConfig.corporateEmail}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="touch-target px-5 py-3.5 rounded-full bg-[#0E0F0C]/10 border border-[#0E0F0C]/25 text-[#0E0F0C] font-mono-label font-bold text-xs hover:bg-[#0E0F0C]/15 transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
              aria-label="Copy corporate email address to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#0E0F0C] stroke-[2.5]" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#0E0F0C]" />
                  <span>Copy: {siteConfig.corporateEmail}</span>
                </>
              )}
            </button>

            <Link
              href="/contact"
              className="touch-target px-5 py-3.5 rounded-full bg-transparent border border-[#0E0F0C]/30 text-[#0E0F0C] font-mono-label font-semibold text-xs hover:bg-[#0E0F0C]/10 transition-all flex items-center gap-1.5"
            >
              <span>Contact Page</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Direct Details & Profiles */}
          <div className="mt-10 pt-8 border-t border-[#0E0F0C]/15 flex flex-col md:flex-row md:items-center justify-between gap-6 text-xs font-mono-label font-semibold">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
              <a
                href={`mailto:${siteConfig.corporateEmail}`}
                className="flex items-center gap-1.5 hover:underline touch-target"
              >
                <Mail className="w-3.5 h-3.5 text-[#0E0F0C]" />
                <span>{siteConfig.corporateEmail}</span>
              </a>
              <span className="hidden sm:inline opacity-40">•</span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-1.5 hover:underline touch-target"
              >
                <Mail className="w-3.5 h-3.5 opacity-75" />
                <span>{siteConfig.email}</span>
              </a>
              <span className="hidden sm:inline opacity-40">•</span>
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-1.5 hover:underline touch-target"
              >
                <Phone className="w-3.5 h-3.5 opacity-75" />
                <span>{siteConfig.phone}</span>
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity touch-target flex items-center gap-1"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity touch-target flex items-center gap-1"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={siteConfig.social.linktree}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity touch-target"
                aria-label="Linktree Links"
              >
                <span>Linktree</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
