"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck, X } from "lucide-react";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a consent choice
    const consent = localStorage.getItem("cookie_consent_choice");
    if (!consent) {
      // Delay showing banner slightly to prioritize initial LCP
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    // Listen for custom event from footer "Privacy settings" trigger
    const handleOpenSettings = () => {
      setVisible(true);
    };

    window.addEventListener("open-cookie-settings", handleOpenSettings);
    return () => window.removeEventListener("open-cookie-settings", handleOpenSettings);
  }, []);

  const updateConsent = (granted: boolean) => {
    const status = granted ? "granted" : "denied";

    localStorage.setItem("cookie_consent_choice", granted ? "accepted" : "declined");
    localStorage.setItem("cookie_consent_ad_storage", status);
    localStorage.setItem("cookie_consent_analytics_storage", status);

    // Update Google Consent Mode v2 if gtag is available
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag("consent", "update", {
        ad_storage: status,
        analytics_storage: status,
        ad_user_data: status,
        ad_personalization: status,
      });
    }

    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-50 rounded-2xl bg-[#191B15] border border-[#34362D] p-5 shadow-2xl shadow-black/80 animate-fadeIn"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 text-[#C8F169] font-mono-label text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          <span id="cookie-consent-title">Privacy Preferences</span>
        </div>
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="text-[#A7A997] hover:text-[#F2F0E6] p-1 rounded-lg touch-target"
          aria-label="Dismiss cookie notice"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p id="cookie-consent-description" className="text-xs text-[#A7A997] mt-2.5 leading-relaxed">
        We respect your privacy. We use cookies and analytics in accordance with Google Consent Mode v2 to analyze site performance and deliver non-intrusive technical content. Learn more in our{" "}
        <Link href="/privacy-policy" className="text-[#C8F169] underline">
          Privacy Policy
        </Link>.
      </p>

      <div className="mt-4 flex items-center justify-end gap-2.5">
        <button
          type="button"
          onClick={() => updateConsent(false)}
          className="touch-target px-3.5 py-1.5 rounded-full bg-[#23251D] border border-[#34362D] text-[#A7A997] hover:text-[#F2F0E6] text-xs font-mono-label font-medium transition-colors cursor-pointer"
        >
          Decline Optional
        </button>
        <button
          type="button"
          onClick={() => updateConsent(true)}
          className="touch-target px-4 py-1.5 rounded-full bg-[#C8F169] text-[#0E0F0C] text-xs font-mono-label font-bold hover:bg-[#D8F788] transition-all cursor-pointer shadow-sm"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
