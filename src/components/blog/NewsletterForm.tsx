"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

interface NewsletterFormProps {
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
  source?: string;
}

export function NewsletterForm({
  className = "",
  inputClassName = "",
  buttonClassName = "",
  source = "blog",
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, source }),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.success) {
        setStatus("success");
        setMessage(data.message || "Thank you for subscribing to engineering updates!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data?.error || "Subscription failed. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network connection error. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="p-4 rounded-2xl bg-[#23251D] border border-[#C8F169]/50 flex items-start gap-3">
        <CheckCircle2 className="w-5 h-5 text-[#C8F169] shrink-0 mt-0.5" />
        <div className="flex-1">
          <p className="text-sm font-semibold text-[#F2F0E6]">You&apos;re subscribed!</p>
          <p className="text-xs text-[#A7A997] mt-0.5">{message}</p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="text-xs font-mono-label text-[#C8F169] hover:underline mt-2 cursor-pointer"
          >
            Subscribe another email
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-2.5 ${className}`}>
        <input
          type="email"
          required
          disabled={status === "loading"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="developer@example.com"
          className={`flex-1 px-4 py-3 rounded-xl bg-[#191B15] border border-[#34362D] text-[#F2F0E6] placeholder-[#A7A997]/60 text-sm focus:border-[#C8F169] focus:outline-none transition-colors disabled:opacity-50 ${inputClassName}`}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={`touch-target px-6 py-3 rounded-xl bg-[#C8F169] text-[#0E0F0C] font-mono-label font-bold text-xs hover:bg-[#D8F788] transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed ${buttonClassName}`}
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              <span>Subscribing...</span>
            </>
          ) : (
            <>
              <span>Subscribe</span>
              <Send className="w-3.5 h-3.5 stroke-[2.5]" />
            </>
          )}
        </button>
      </form>

      {status === "error" && (
        <div className="flex items-center gap-2 text-xs font-mono-label text-[#FF7B72] pt-1">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{message}</span>
        </div>
      )}
    </div>
  );
}
