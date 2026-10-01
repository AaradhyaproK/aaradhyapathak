import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Affiliate & Advertising Disclosure",
  description: `Affiliate disclosure and sponsorship transparency statement for ${siteConfig.name}.`,
  alternates: {
    canonical: `${siteConfig.url}/affiliate-disclosure`,
  },
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-10 border-b border-[#34362D] pb-8">
        <span className="font-mono-label text-xs text-[#C8F169] uppercase tracking-widest">
          Transparency &amp; FTC Compliance
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-[#F2F0E6] mt-2">
          Affiliate &amp; Monetization Disclosure
        </h1>
        <p className="font-mono-label text-xs text-[#A7A997] mt-3">
          Last updated: October 2026 &bull; [PLACEHOLDER: Review with local legal counsel]
        </p>
      </div>

      <div className="space-y-8 text-[#A7A997] leading-relaxed text-base">
        <section>
          <h2 className="font-display text-2xl font-bold text-[#F2F0E6] mb-3">
            1. Affiliate Relationships &amp; FTC Disclosure
          </h2>
          <p>
            In compliance with the FTC guidelines and Google AdSense policies, please assume that some links on {siteConfig.url} are affiliate links. If you click on these links and make a purchase or sign up for a service, we may earn an affiliate commission at no additional cost to you.
          </p>
          <p className="mt-2">
            Every sponsored or affiliate link on this website is tagged with <code className="text-[#F2F0E6] bg-[#23251D] px-1 py-0.5 rounded">rel=&quot;sponsored nofollow&quot;</code> in accordance with Google Webmaster best practices.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-[#F2F0E6] mb-3">
            2. Editorial Integrity
          </h2>
          <p>
            We only recommend products, software services, cloud providers, and AI tooling that we have personally tested, evaluated, or actively use in our own engineering workflows. Editorial opinions, benchmarks, and architectural reviews are 100% independent and never influenced by advertiser compensation.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-[#F2F0E6] mb-3">
            3. Google AdSense &amp; Display Advertising
          </h2>
          <p>
            This website displays contextual banner advertisements provided by Google AdSense and qualified advertising networks. These ad slots are clearly marked with an &quot;Advertisement&quot; label and adhere to strict layout stability (CLS) constraints.
          </p>
        </section>
      </div>
    </div>
  );
}
