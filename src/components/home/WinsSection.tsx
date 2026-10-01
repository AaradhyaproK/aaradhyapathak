import React from "react";
import { siteConfig } from "@/config/site";
import { Trophy, Award, Target, Star, GraduationCap } from "lucide-react";

export function WinsSection() {
  const getIcon = (id: string) => {
    switch (id) {
      case "nec-2025":
        return <Trophy className="w-5 h-5 text-[#C8F169]" />;
      case "yi-project":
        return <Award className="w-5 h-5 text-[#C8F169]" />;
      case "startup-arena":
        return <Target className="w-5 h-5 text-[#C8F169]" />;
      case "gfg-dsa":
        return <Star className="w-5 h-5 text-[#C8F169]" />;
      default:
        return <GraduationCap className="w-5 h-5 text-[#C8F169]" />;
    }
  };

  return (
    <section aria-labelledby="wins-heading" className="py-16 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-10">
        <span className="font-mono-label text-xs text-[#C8F169] tracking-widest uppercase">
          Recognitions & Milestones
        </span>
        <h2
          id="wins-heading"
          className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F2F0E6] mt-1"
        >
          Competitive Wins & Academic Standing.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {siteConfig.wins.map((win) => (
          <div
            key={win.id}
            className="bg-[#191B15] border border-[#34362D] rounded-[24px] p-6 hover:border-[#C8F169]/50 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#23251D] border border-[#34362D] flex items-center justify-center">
                  {getIcon(win.id)}
                </div>
                <span className="px-3 py-1 rounded-full bg-[#23251D] border border-[#34362D] font-mono-label text-xs text-[#C8F169] font-bold">
                  {win.badge}
                </span>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-[#F2F0E6] leading-snug">
                {win.title}
              </h3>
              <p className="font-mono-label text-xs text-[#A7A997] mt-1">
                {win.org}
              </p>
            </div>
            <p className="text-sm text-[#A7A997] mt-4 pt-4 border-t border-[#34362D]/60 leading-relaxed">
              {win.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
