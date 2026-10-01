import React from "react";
import { siteConfig } from "@/config/site";

export function SkillsRibbon() {
  // Duplicate skills list for seamless infinite loop
  const skillsList = [...siteConfig.skills, ...siteConfig.skills];

  return (
    <div className="w-full max-w-full overflow-hidden py-2">
      <div
        className="relative my-10 sm:my-16 overflow-hidden py-4 -rotate-1 sm:-rotate-2 select-none w-[105%] -ml-[2.5%]"
        aria-label="Core Engineering Skills Marquee"
      >
        <div className="bg-[#C8F169] text-[#0E0F0C] py-3 sm:py-3.5 shadow-xl shadow-[#C8F169]/10">
          <div className="animate-marquee items-center gap-6 sm:gap-8 font-mono-label font-extrabold text-xs sm:text-sm tracking-wider uppercase">
            {skillsList.map((skill, index) => (
              <div key={`${skill}-${index}`} className="flex items-center gap-6 sm:gap-8">
                <span className="whitespace-nowrap hover:scale-110 transition-transform">
                  {skill}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0E0F0C]/60" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
