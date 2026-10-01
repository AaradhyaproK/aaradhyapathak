import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: `General, technical, and professional disclaimer for ${siteConfig.name}.`,
  alternates: {
    canonical: `${siteConfig.url}/disclaimer`,
  },
};

export default function DisclaimerPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-10 border-b border-[#34362D] pb-8">
        <span className="font-mono-label text-xs text-[#C8F169] uppercase tracking-widest">
          Disclaimer
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-[#F2F0E6] mt-2">
          Website &amp; Technical Disclaimer
        </h1>
        <p className="font-mono-label text-xs text-[#A7A997] mt-3">
          Last updated: October 2026 &bull; [PLACEHOLDER: Review with local legal counsel]
        </p>
      </div>

      <div className="space-y-8 text-[#A7A997] leading-relaxed text-base">
        <section>
          <h2 className="font-display text-2xl font-bold text-[#F2F0E6] mb-3">
            1. General Disclaimer
          </h2>
          <p>
            The information provided by Aaradhya Pathak on {siteConfig.url} is for general informational and educational purposes only. All information on the site is provided in good faith; however, we make no representation or warranty of any kind regarding accuracy, adequacy, validity, reliability, availability, or completeness.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-[#F2F0E6] mb-3">
            2. Professional &amp; Engineering Advice
          </h2>
          <p>
            The site cannot and does not contain legal, financial, or certified security advice. The software architectures, code snippets, and tutorials are provided for instructional purposes. Before adopting code in production environments, you should conduct thorough testing and security audits.
          </p>
        </section>
      </div>
    </div>
  );
}
