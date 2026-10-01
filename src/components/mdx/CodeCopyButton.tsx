"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CodeCopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Code copied to clipboard" : "Copy code to clipboard"}
      className="p-1.5 rounded-lg bg-[#23251D] border border-[#34362D] text-[#A7A997] hover:text-[#C8F169] hover:border-[#C8F169] transition-all cursor-pointer"
    >
      {copied ? (
        <Check className="w-3.5 h-3.5 text-[#C8F169] stroke-[2.5]" />
      ) : (
        <Copy className="w-3.5 h-3.5" />
      )}
    </button>
  );
}
