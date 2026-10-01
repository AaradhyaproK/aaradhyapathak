"use client";

import React, { useState } from "react";
import { Copy, Check, Share2 } from "lucide-react";
import { TwitterXIcon, LinkedinIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/config/site";

interface BlogShareButtonsProps {
  title: string;
  slug: string;
}

export function BlogShareButtons({ title, slug }: BlogShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const currentUrl =
    typeof window !== "undefined"
      ? window.location.href
      : `${siteConfig.url}/blog/${slug}`;

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    title
  )}&url=${encodeURIComponent(currentUrl)}&via=aaradhyapathak17`;

  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    currentUrl
  )}`;

  return (
    <div className="p-5 rounded-2xl bg-[#191B15] border border-[#34362D] space-y-3 shadow-lg">
      <h4 className="font-mono-label text-xs text-[#C8F169] uppercase tracking-wider font-bold flex items-center gap-1.5">
        <Share2 className="w-3.5 h-3.5" />
        <span>Share Note</span>
      </h4>
      <div className="flex items-center gap-2">
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 px-3 rounded-xl bg-[#23251D] border border-[#34362D] hover:border-[#C8F169] hover:text-[#C8F169] text-xs font-mono-label text-[#A7A997] flex items-center justify-center gap-1.5 transition-all active:scale-95"
          aria-label="Share on X"
        >
          <TwitterXIcon className="w-3.5 h-3.5" />
          <span>Post</span>
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 px-3 rounded-xl bg-[#23251D] border border-[#34362D] hover:border-[#C8F169] hover:text-[#C8F169] text-xs font-mono-label text-[#A7A997] flex items-center justify-center gap-1.5 transition-all active:scale-95"
          aria-label="Share on LinkedIn"
        >
          <LinkedinIcon className="w-3.5 h-3.5" />
          <span>LinkedIn</span>
        </a>
        <button
          type="button"
          onClick={handleCopy}
          className="w-9 h-9 rounded-xl bg-[#23251D] border border-[#34362D] hover:border-[#C8F169] text-[#A7A997] hover:text-[#C8F169] flex items-center justify-center transition-all cursor-pointer shrink-0 active:scale-95"
          aria-label="Copy link to clipboard"
          title="Copy Link"
        >
          {copied ? (
            <Check className="w-4 h-4 text-[#C8F169] stroke-[2.5]" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
}
