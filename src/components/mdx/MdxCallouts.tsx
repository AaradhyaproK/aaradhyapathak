import React from "react";
import { Info, AlertTriangle, Check, X, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export function Tip({ children }: { children: React.ReactNode }) {
  return (
    <aside
      className="my-6 rounded-2xl bg-[#191B15] border border-[#C8F169]/40 p-5 text-sm leading-relaxed"
      aria-label="Helpful Tip"
    >
      <div className="flex items-start gap-3">
        <div className="w-7 h-7 rounded-lg bg-[#C8F169]/20 flex items-center justify-center shrink-0 mt-0.5">
          <Info className="w-4 h-4 text-[#C8F169]" />
        </div>
        <div className="space-y-1">
          <span className="font-mono-label text-xs text-[#C8F169] font-bold uppercase tracking-wider block">
            Pro Tip
          </span>
          <div className="text-[#F2F0E6] text-sm [&>p]:m-0">{children}</div>
        </div>
      </div>
    </aside>
  );
}

export function Warning({ children }: { children: React.ReactNode }) {
  return (
    <aside
      className="my-6 rounded-2xl bg-[#191B15] border border-[#FF5F56]/40 p-5 text-sm leading-relaxed"
      aria-label="Important Warning"
    >
      <div className="flex items-start gap-3">
        <div className="w-7 h-7 rounded-lg bg-[#FF5F56]/20 flex items-center justify-center shrink-0 mt-0.5">
          <AlertTriangle className="w-4 h-4 text-[#FF5F56]" />
        </div>
        <div className="space-y-1">
          <span className="font-mono-label text-xs text-[#FF5F56] font-bold uppercase tracking-wider block">
            Caution
          </span>
          <div className="text-[#F2F0E6] text-sm [&>p]:m-0">{children}</div>
        </div>
      </div>
    </aside>
  );
}

interface ProsConsProps {
  pros: string[];
  cons: string[];
  title?: string;
}

export function ProsCons({ pros, cons, title = "Comparison Summary" }: ProsConsProps) {
  return (
    <div className="my-8 rounded-2xl bg-[#191B15] border border-[#34362D] p-6 space-y-4">
      {title && (
        <h4 className="font-display font-bold text-lg text-[#F2F0E6] border-b border-[#34362D] pb-3">
          {title}
        </h4>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Pros */}
        <div className="space-y-2">
          <span className="font-mono-label text-xs text-[#C8F169] font-bold uppercase tracking-wider block">
            Advantages
          </span>
          <ul className="space-y-2 text-sm text-[#F2F0E6]">
            {pros.map((p, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#C8F169] shrink-0 mt-0.5" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cons */}
        <div className="space-y-2">
          <span className="font-mono-label text-xs text-[#FF5F56] font-bold uppercase tracking-wider block">
            Trade-offs
          </span>
          <ul className="space-y-2 text-sm text-[#A7A997]">
            {cons.map((c, i) => (
              <li key={i} className="flex items-start gap-2">
                <X className="w-4 h-4 text-[#FF5F56] shrink-0 mt-0.5" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

interface AffiliateBoxProps {
  title: string;
  description: string;
  link: string;
  buttonText?: string;
}

export function AffiliateBox({
  title,
  description,
  link,
  buttonText = "View Service",
}: AffiliateBoxProps) {
  return (
    <div className="my-8 rounded-2xl bg-[#23251D] border border-[#C8F169]/40 p-6 space-y-3">
      <div className="flex items-center justify-between gap-3">
        <span className="px-2.5 py-0.5 rounded bg-[#C8F169]/15 text-[#C8F169] font-mono-label text-[11px] font-bold uppercase tracking-wider">
          Sponsored Recommendation
        </span>
        <span className="text-[11px] font-mono-label text-[#A7A997]">
          Affiliate Link (rel=&quot;sponsored nofollow&quot;)
        </span>
      </div>

      <h4 className="font-display font-bold text-xl text-[#F2F0E6]">
        {title}
      </h4>
      <p className="text-sm text-[#A7A997] leading-relaxed">
        {description}
      </p>

      <div className="pt-2 flex items-center justify-between flex-wrap gap-3">
        <a
          href={link}
          target="_blank"
          rel="sponsored nofollow noopener noreferrer"
          className="touch-target px-5 py-2.5 rounded-full bg-[#C8F169] text-[#0E0F0C] font-mono-label font-bold text-xs hover:bg-[#D8F788] transition-all flex items-center gap-1.5"
        >
          <span>{buttonText}</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
        <p className="text-[11px] text-[#A7A997] italic">
          We may earn a commission if you sign up, at no extra cost to you.
        </p>
      </div>
    </div>
  );
}
