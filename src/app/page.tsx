import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { SkillsRibbon } from "@/components/home/SkillsRibbon";
import { BentoGrid } from "@/components/home/BentoGrid";
import { WinsSection } from "@/components/home/WinsSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { TerminalNotes } from "@/components/home/TerminalNotes";
import { ContactBlock } from "@/components/home/ContactBlock";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Rotated Skills Ribbon */}
      <SkillsRibbon />

      {/* 3. Bento Grid of Big Numbers */}
      <BentoGrid />

      {/* 4. Wins & Achievements */}
      <WinsSection />

      {/* 5. Experience & Leadership */}
      <ExperienceSection />

      {/* 6. Blog List (~/notes Terminal Style) */}
      <TerminalNotes />

      {/* 7. Full-Width Lime Contact Block */}
      <ContactBlock />
    </div>
  );
}
