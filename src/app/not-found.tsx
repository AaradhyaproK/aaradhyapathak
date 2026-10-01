import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="pt-36 pb-28 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
      <span className="px-3.5 py-1.5 rounded-full bg-[#23251D] border border-[#34362D] font-mono-label text-xs text-[#C8F169] inline-block font-bold">
        Error 404 &bull; Page Not Found
      </span>

      <h1 className="font-display text-5xl sm:text-7xl font-extrabold tracking-tight text-[#F2F0E6]">
        Lost in the Bento?
      </h1>

      <p className="text-base sm:text-lg text-[#A7A997] max-w-md mx-auto leading-relaxed">
        The route you requested doesn&apos;t exist or was relocated. Let&apos;s get you back on track.
      </p>

      <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="touch-target px-6 py-3 rounded-full bg-[#C8F169] text-[#0E0F0C] font-mono-label font-bold text-xs hover:bg-[#D8F788] transition-all flex items-center gap-2"
        >
          <Home className="w-4 h-4 stroke-[2.5]" />
          <span>Back to Home</span>
        </Link>
        <Link
          href="/projects"
          className="touch-target px-6 py-3 rounded-full bg-[#191B15] border border-[#34362D] text-[#F2F0E6] font-mono-label text-xs hover:text-[#C8F169] hover:border-[#C8F169] transition-all flex items-center gap-2"
        >
          <Compass className="w-4 h-4" />
          <span>Explore Projects</span>
        </Link>
      </div>
    </div>
  );
}
