import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service and conditions for using ${siteConfig.name}'s website and software tools.`,
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-10 border-b border-[#34362D] pb-8">
        <span className="font-mono-label text-xs text-[#C8F169] uppercase tracking-widest">
          Terms &amp; Conditions
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-[#F2F0E6] mt-2">
          Terms of Service
        </h1>
        <p className="font-mono-label text-xs text-[#A7A997] mt-3">
          Last updated: October 2026 &bull; [PLACEHOLDER: Review with local legal counsel]
        </p>
      </div>

      <div className="space-y-8 text-[#A7A997] leading-relaxed text-base">
        <section>
          <h2 className="font-display text-2xl font-bold text-[#F2F0E6] mb-3">
            1. Agreement to Terms
          </h2>
          <p>
            By accessing or using {siteConfig.url}, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not access the service.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-[#F2F0E6] mb-3">
            2. Intellectual Property Rights
          </h2>
          <p>
            Unless otherwise indicated, the website, source code, designs, and content published by Aaradhya Pathak are proprietary and protected by copyright and intellectual property laws.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-[#F2F0E6] mb-3">
            3. Disclaimer of Warranties
          </h2>
          <p>
            The content, tutorials, and tools provided on this website are provided &quot;as is&quot; without warranties of any kind, whether express or implied.
          </p>
        </section>
      </div>
    </div>
  );
}
