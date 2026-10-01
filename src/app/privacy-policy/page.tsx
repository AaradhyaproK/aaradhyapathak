import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}. Explains information collection, Google AdSense, cookies, and Consent Mode v2 compliance.`,
  alternates: {
    canonical: `${siteConfig.url}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose-dark">
      <div className="mb-10 border-b border-[#34362D] pb-8">
        <span className="font-mono-label text-xs text-[#C8F169] uppercase tracking-widest">
          Legal &amp; Transparency
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-[#F2F0E6] mt-2">
          Privacy Policy
        </h1>
        <p className="font-mono-label text-xs text-[#A7A997] mt-3">
          Last updated: October 2026 &bull; [PLACEHOLDER: Review with local legal counsel]
        </p>
      </div>

      <div className="space-y-8 text-[#A7A997] leading-relaxed text-base">
        <section>
          <h2 className="font-display text-2xl font-bold text-[#F2F0E6] mb-3">
            1. Overview
          </h2>
          <p>
            Welcome to {siteConfig.name}&apos;s website ({siteConfig.url}). We respect your personal privacy and are committed to protecting your personal data. This privacy policy describes the types of information we may collect from you or that you may provide when you visit this website and our practices for collecting, using, maintaining, and disclosing that information.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-[#F2F0E6] mb-3">
            2. Information We Collect
          </h2>
          <p>
            We collect information from and about users of our website in two ways:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              <strong>Directly from you:</strong> Information that you provide when filling out forms on our website (such as our contact form or newsletter subscription), including your name, email address, and message contents.
            </li>
            <li>
              <strong>Automatically through cookies &amp; analytics:</strong> As you navigate through and interact with our website, we may use automatic data collection technologies (e.g. Google Analytics 4) to collect certain information about your equipment, browsing actions, and patterns.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-[#F2F0E6] mb-3">
            3. Google AdSense &amp; Advertising Cookies
          </h2>
          <p>
            We may use Google AdSense and third-party advertising partners to serve advertisements when you visit our website. These companies may use cookies and web beacons to collect non-personally identifiable information about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.
          </p>
          <p className="mt-2">
            Google&apos;s use of advertising cookies enables it and its partners to serve ads to users based on their visit to this site and/or other sites on the Internet. Users may opt out of personalized advertising by visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C8F169] underline"
            >
              Google Ads Settings
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-[#F2F0E6] mb-3">
            4. Google Consent Mode v2 Compliance
          </h2>
          <p>
            In compliance with European Economic Area (EEA) and UK privacy requirements, we implement Google Consent Mode v2. Consent states for <code className="text-[#F2F0E6] bg-[#23251D] px-1 py-0.5 rounded">ad_storage</code>, <code className="text-[#F2F0E6] bg-[#23251D] px-1 py-0.5 rounded">analytics_storage</code>, <code className="text-[#F2F0E6] bg-[#23251D] px-1 py-0.5 rounded">ad_user_data</code>, and <code className="text-[#F2F0E6] bg-[#23251D] px-1 py-0.5 rounded">ad_personalization</code> default to denied until you provide affirmative consent through our Cookie Preferences banner.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-[#F2F0E6] mb-3">
            5. Contact Information
          </h2>
          <p>
            If you have any questions or comments about this Privacy Policy, please contact us at:{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-[#C8F169] underline">
              {siteConfig.email}
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
