"use client";

import React from "react";
import { useResumeModal } from "./ResumeModalContext";
import { FileText, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResumeButtonProps {
  className?: string;
  variant?: "hero" | "about" | "footer" | "custom";
  children?: React.ReactNode;
  "aria-label"?: string;
}

export function ResumeButton({
  className,
  variant = "hero",
  children,
  "aria-label": ariaLabel,
}: ResumeButtonProps) {
  const { openResumeModal } = useResumeModal();

  if (variant === "hero") {
    return (
      <button
        type="button"
        onClick={openResumeModal}
        className={cn(
          "touch-target px-6 py-3 rounded-full bg-[#191B15] text-[#F2F0E6] font-mono-label font-semibold text-xs border border-[#34362D] hover:border-[#C8F169] hover:text-[#C8F169] transition-all active:scale-95 flex items-center justify-center gap-2 text-center cursor-pointer",
          className
        )}
        aria-label={ariaLabel || "Open Aaradhya Pathak's Resume modal"}
      >
        <FileText className="w-4 h-4" />
        <span>{children || "View Resume"}</span>
      </button>
    );
  }

  if (variant === "about") {
    return (
      <button
        type="button"
        onClick={openResumeModal}
        className={cn(
          "touch-target px-4 py-2 rounded-full bg-[#C8F169] text-[#0E0F0C] font-mono-label font-bold text-xs hover:bg-[#D8F788] transition-all flex items-center gap-2 cursor-pointer shadow-sm active:scale-95",
          className
        )}
        aria-label={ariaLabel || "Open Aaradhya Pathak's Resume modal"}
      >
        <FileText className="w-3.5 h-3.5" />
        <span>{children || "Resume PDF"}</span>
      </button>
    );
  }

  if (variant === "footer") {
    return (
      <button
        type="button"
        onClick={openResumeModal}
        className={cn(
          "text-[#A7A997] hover:text-[#C8F169] hover:translate-x-1 inline-flex items-center gap-1 transition-all py-0.5 cursor-pointer text-sm font-sans bg-transparent border-none p-0 text-left",
          className
        )}
        aria-label={ariaLabel || "Open Aaradhya Pathak's Resume modal"}
      >
        <span>{children || "Resume"}</span>
        <ArrowUpRight className="w-3 h-3" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={openResumeModal}
      className={className}
      aria-label={ariaLabel || "Open Resume modal"}
    >
      {children}
    </button>
  );
}
