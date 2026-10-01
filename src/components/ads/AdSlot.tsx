"use client";

import React, { useEffect, useState } from "react";

interface AdSlotProps {
  slotId: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  minHeight?: number; // e.g. 250, 280, 600 to prevent CLS
  className?: string;
}

export function AdSlot({
  slotId,
  format = "auto",
  minHeight = 250,
  className = "",
}: AdSlotProps) {
  const [adLoaded, setAdLoaded] = useState(false);
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID;

  useEffect(() => {
    // Only proceed if AdSense ID is configured and consent granted
    if (!adsenseId) return;

    const hasConsent =
      typeof window !== "undefined" &&
      localStorage.getItem("cookie_consent_ad_storage") === "granted";

    if (!hasConsent) return;

    // Lazy load adsense script on first user interaction or idle
    const loadScript = () => {
      if (!document.getElementById("adsbygoogle-script")) {
        const script = document.createElement("script");
        script.id = "adsbygoogle-script";
        script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`;
        script.async = true;
        script.crossOrigin = "anonymous";
        document.head.appendChild(script);
      }

      try {
        // @ts-expect-error adsbygoogle is added by Google script
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        setAdLoaded(true);
      } catch (err) {
        console.error("AdSense push error:", err);
      }
    };

    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(loadScript);
    } else {
      setTimeout(loadScript, 2000);
    }
  }, [adsenseId]);

  // If no AdSense ID configured, render nothing (no empty gap or broken iframe)
  if (!adsenseId) {
    return null;
  }

  return (
    <div
      className={`my-8 w-full flex flex-col items-center justify-center ${className}`}
      aria-label="Advertisement"
    >
      <div
        className="w-full max-w-3xl rounded-2xl bg-[#191B15] border border-[#34362D]/60 p-4 flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ minHeight: `${minHeight}px` }}
      >
        <span className="font-mono-label text-[10px] text-[#A7A997]/70 uppercase tracking-widest mb-2">
          Advertisement
        </span>

        <ins
          className="adsbygoogle"
          style={{ display: "block", minHeight: `${minHeight - 35}px`, width: "100%" }}
          data-ad-client={adsenseId}
          data-ad-slot={slotId}
          data-ad-format={format}
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}
