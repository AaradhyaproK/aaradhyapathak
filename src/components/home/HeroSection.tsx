import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowUpRight } from "lucide-react";
import { ResumeButton } from "@/components/resume/ResumeButton";

export function HeroSection() {
  return (
    <section
      aria-label="Introduction and Overview"
      className="relative pt-28 pb-14 sm:pt-36 sm:pb-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Subtle Ambient Glow */}
        <div
          aria-hidden="true"
          className="absolute -top-16 left-1/2 -translate-x-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-[#C8F169]/5 rounded-full blur-3xl pointer-events-none"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Main Hero Headline */}
            <h1 className="font-display text-[2.75rem] xs:text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-[0.92] sm:leading-[0.88] select-none break-words">
              <span className="block text-[#F2F0E6]">Aaradhya</span>
              <span className="block text-outline-hero mt-1 sm:mt-2">
                Pathak<span className="text-[#C8F169] text-stroke-none" style={{ WebkitTextStroke: "0px" }}>.</span>
              </span>
            </h1>

            {/* Subtitle & Role Summary */}
            <div className="mt-6 sm:mt-8 max-w-2xl">
              <p className="text-base sm:text-xl text-[#F2F0E6] font-medium leading-relaxed">
                Full Stack Web Developer &amp; QA Tester specializing in scalable web systems, PHP, and AI-driven platforms.
              </p>
              <p className="mt-2 text-sm sm:text-base text-[#A7A997] leading-relaxed">
                Co-Founder of SNAB Innovations, architecting FileZenith, FeeKit, and InterviewXpert serving commercial clients. Computer Engineering scholar (CGPA 8.2) at GCOERC Nashik.
              </p>
            </div>

            {/* Action Buttons Row: Stacks cleanly on narrow phones, wraps on tablets */}
            <div className="mt-8 sm:mt-10 flex flex-col xs:flex-row xs:flex-wrap items-stretch xs:items-center gap-2.5 sm:gap-3.5">
              <Link
                href="/projects"
                className="touch-target px-6 py-3 rounded-full bg-[#C8F169] text-[#0E0F0C] font-mono-label font-bold text-xs hover:bg-[#D8F788] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#C8F169]/15 flex items-center justify-center gap-2 text-center"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </Link>

              <ResumeButton variant="hero">
                View Resume
              </ResumeButton>

              <Link
                href="/contact"
                className="touch-target px-6 py-3 rounded-full bg-[#23251D] text-[#A7A997] font-mono-label text-xs border border-[#34362D] hover:text-[#F2F0E6] hover:bg-[#23251D]/80 transition-all flex items-center justify-center gap-2 text-center"
              >
                <span>Let&apos;s Connect</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Bento Portrait Card */}
          <div className="lg:col-span-5 relative mt-8 sm:mt-10 lg:mt-0 flex justify-center">
            {/* Ambient Lime Spotlight */}
            <div
              aria-hidden="true"
              className="absolute -inset-2 bg-gradient-to-tr from-[#C8F169]/20 via-[#C8F169]/5 to-transparent rounded-[32px] sm:rounded-[36px] blur-2xl pointer-events-none"
            />

            <div className="relative w-full max-w-[310px] xs:max-w-sm sm:max-w-md rounded-[24px] sm:rounded-[28px] bg-[#191B15] border border-[#34362D] p-3 sm:p-4 shadow-2xl group">
              {/* Inner Portrait Canvas */}
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#23251D] via-[#191B15] to-[#0E0F0C] flex items-end justify-center">
                {/* Soft Radial Ambient Spotlight behind shoulders */}
                <div
                  aria-hidden="true"
                  className="absolute top-12 left-1/2 -translate-x-1/2 w-44 sm:w-52 h-44 sm:h-52 bg-[#C8F169]/15 rounded-full blur-3xl pointer-events-none"
                />

                <Image
                  src={siteConfig.author.avatar}
                  alt="Aaradhya Pathak — Co-Founder @ SNAB Innovations"
                  fill
                  priority
                  sizes="(max-width: 640px) 310px, (max-width: 1024px) 420px, 460px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle base gradient fade */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#191B15] via-[#191B15]/70 to-transparent pointer-events-none"
                />
              </div>

              {/* Card Footer Info Strip */}
              <div className="mt-2.5 sm:mt-3 px-1.5 sm:px-2 py-1 flex items-center justify-between text-[11px] sm:text-xs font-mono-label">
                <span className="flex items-center gap-1.5 text-[#F2F0E6]">
                  <span className="w-2 h-2 rounded-full bg-[#C8F169] animate-pulse" />
                  <span>Co-Founder @ SNAB</span>
                </span>
                <span className="text-[#C8F169]/90 font-medium">Serving Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
