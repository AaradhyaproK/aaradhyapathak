import React from "react";
import { siteConfig } from "@/config/site";
import { Briefcase, Users, Calendar, CheckCircle2 } from "lucide-react";

export function ExperienceSection() {
  return (
    <section aria-labelledby="experience-heading" className="py-16 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Col: Professional Experience (7 cols) */}
        <div className="lg:col-span-7">
          <div className="mb-8">
            <span className="font-mono-label text-xs text-[#C8F169] tracking-widest uppercase">
              Track Record
            </span>
            <h2
              id="experience-heading"
              className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F2F0E6] mt-1"
            >
              Work Experience.
            </h2>
          </div>

          <div className="space-y-6">
            {siteConfig.experience.map((exp, index) => (
              <div
                key={`${exp.company}-${index}`}
                className="bg-[#191B15] border border-[#34362D] rounded-[24px] p-6 sm:p-7 hover:border-[#34362D] transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="font-display text-xl font-bold text-[#F2F0E6]">
                    {exp.role}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#23251D] border border-[#34362D] font-mono-label text-xs text-[#C8F169]">
                    <Calendar className="w-3 h-3" />
                    <span>{exp.period}</span>
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-[#A7A997] font-mono-label mb-4">
                  <Briefcase className="w-4 h-4 text-[#C8F169]" />
                  <span className="text-[#F2F0E6] font-medium">{exp.company}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                </div>

                <ul className="space-y-2 mt-4">
                  {exp.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#A7A997] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#C8F169] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right Col: Leadership & Campus Impact (5 cols) */}
        <div className="lg:col-span-5">
          <div className="mb-8">
            <span className="font-mono-label text-xs text-[#C8F169] tracking-widest uppercase">
              Community & Initiative
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F2F0E6] mt-1">
              Leadership.
            </h2>
          </div>

          <div className="bg-[#191B15] border border-[#34362D] rounded-[24px] p-6 sm:p-7 space-y-6">
            <p className="text-sm text-[#A7A997] leading-relaxed">
              Driving student adoption of generative AI, mentoring developer cohorts, and leading competitive campus initiatives.
            </p>

            <div className="space-y-4 pt-2">
              {siteConfig.volunteering.map((item, index) => (
                <div
                  key={`${item.role}-${index}`}
                  className="p-4 rounded-xl bg-[#23251D] border border-[#34362D]/70 space-y-1"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display font-bold text-sm text-[#F2F0E6]">
                      {item.role}
                    </span>
                    <Users className="w-3.5 h-3.5 text-[#C8F169]" />
                  </div>
                  <p className="font-mono-label text-xs text-[#C8F169]">
                    {item.org}
                  </p>
                  <p className="text-xs text-[#A7A997] pt-1 leading-normal">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
