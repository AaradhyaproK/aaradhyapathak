"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  Mail,
  Phone,
  Copy,
  Check,
  ArrowUpRight,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "@/components/ui/Icons";

export function ContactBlock() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submittedSender, setSubmittedSender] = useState({ name: "", email: "" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });

  const handleCopyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(siteConfig.corporateEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) {
      // Spam honeypot triggered - fake success
      setSubmittedSender({ name: formData.name, email: formData.email });
      setFormSubmitted(true);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const endpoint = siteConfig.formspreeUrl || "https://formspree.io/f/movdbzab";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmittedSender({ name: formData.name, email: formData.email });
        setFormSubmitted(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          honeypot: "",
        });
      } else {
        const data = await response.json().catch(() => null);
        if (data && Array.isArray(data.errors) && data.errors.length > 0) {
          setSubmitError(
            data.errors.map((err: { message: string }) => err.message).join(", ")
          );
        } else {
          setSubmitError(
            "Failed to send message. Please reach out directly to hello@snab.co.in."
          );
        }
      }
    } catch {
      setSubmitError(
        "Network connection error. Please verify your connection or email directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      aria-labelledby="contact-cta-heading"
      className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="relative rounded-[32px] sm:rounded-[40px] bg-[#C8F169] text-[#0E0F0C] p-6 sm:p-10 lg:p-14 overflow-hidden shadow-2xl shadow-[#C8F169]/10">
        {/* Decorative corner background element */}
        <div
          aria-hidden="true"
          className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#0E0F0C]/5 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#FFFFFF]/15 pointer-events-none blur-2xl"
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Heading, Bio & Direct Contacts (Spans 5 on Desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E0F0C]/10 text-[#0E0F0C] font-mono-label font-bold text-xs uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-[#0E0F0C] animate-pulse" />
                <span>Availability: {siteConfig.statusText}</span>
              </div>

              <h2
                id="contact-cta-heading"
                className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.92]"
              >
                Let&apos;s talk.
              </h2>

              <p className="mt-4 text-base sm:text-lg font-medium leading-relaxed opacity-90 max-w-md">
                Co-Founder of SNAB Innovations. Looking to build an AI platform, enterprise web system, or explore software consulting? Send a direct message or connect right away.
              </p>
            </div>

            {/* Quick Email & Phone Action Buttons */}
            <div className="space-y-2.5 pt-2">
              <a
                href={`mailto:${siteConfig.corporateEmail}`}
                className="w-full sm:w-auto px-5 py-3 rounded-full bg-[#0E0F0C] text-[#F2F0E6] font-mono-label font-bold text-xs hover:bg-[#191B15] transition-all active:scale-95 shadow-md flex items-center justify-center sm:justify-start gap-2"
              >
                <Mail className="w-4 h-4 text-[#C8F169]" />
                <span className="truncate">{siteConfig.corporateEmail}</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>

              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-4 py-2.5 rounded-full bg-[#0E0F0C]/10 border border-[#0E0F0C]/20 text-[#0E0F0C] font-mono-label font-bold text-xs hover:bg-[#0E0F0C]/15 transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer"
                  aria-label="Copy corporate email"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#0E0F0C] stroke-[2.5]" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#0E0F0C]" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  className="px-4 py-2.5 rounded-full bg-[#0E0F0C]/10 border border-[#0E0F0C]/20 text-[#0E0F0C] font-mono-label font-bold text-xs hover:bg-[#0E0F0C]/15 transition-all active:scale-95 flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{siteConfig.phone}</span>
                </a>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="pt-4 border-t border-[#0E0F0C]/15 flex items-center gap-3">
              <span className="text-xs font-mono-label font-bold opacity-75">Connect:</span>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#0E0F0C] text-[#C8F169] flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#0E0F0C] text-[#C8F169] flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#0E0F0C] text-[#C8F169] flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
                aria-label="X Profile"
              >
                <TwitterXIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.linktree}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 h-8 rounded-full bg-[#0E0F0C] text-[#C8F169] text-xs font-mono-label font-bold flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
                aria-label="Linktree Links"
              >
                Linktree
              </a>
            </div>
          </div>

          {/* Right Column: Direct Interactive Formspree Form (Spans 7 on Desktop) */}
          <div className="lg:col-span-7 w-full">
            <div className="rounded-[24px] sm:rounded-[28px] bg-[#0E0F0C] text-[#F2F0E6] p-6 sm:p-8 md:p-10 border border-[#34362D] shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-[#34362D]/60 mb-6">
                <div className="flex items-center gap-2 text-xs font-mono-label text-[#C8F169] font-bold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Send Direct Message</span>
                </div>
                <span className="text-[11px] font-mono-label text-[#A7A997]">Replies &lt; 24h</span>
              </div>

              {formSubmitted ? (
                <div className="py-8 text-center space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-[#C8F169]/15 border border-[#C8F169] flex items-center justify-center mx-auto text-[#C8F169]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#F2F0E6]">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-[#A7A997] max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#F2F0E6]">{submittedSender.name}</strong>. Your message has been routed to Aaradhya. A response will be sent to{" "}
                    <strong className="text-[#F2F0E6]">{submittedSender.email}</strong> shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#23251D] border border-[#34362D] text-xs font-mono-label text-[#F2F0E6] hover:text-[#C8F169] hover:border-[#C8F169] transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot anti-spam */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="hp_home">Don&apos;t fill this out</label>
                    <input
                      type="text"
                      id="hp_home"
                      name="honeypot"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    />
                  </div>

                  {submitError && (
                    <div className="p-3.5 rounded-xl bg-[#FF453A]/10 border border-[#FF453A]/30 text-xs text-[#FF453A] flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="home_name" className="text-xs font-mono-label text-[#A7A997] block">
                        Your Name <span className="text-[#C8F169]">*</span>
                      </label>
                      <input
                        type="text"
                        id="home_name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-[#191B15] border border-[#34362D] text-sm text-[#F2F0E6] placeholder-[#A7A997]/50 focus:border-[#C8F169] focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="home_email" className="text-xs font-mono-label text-[#A7A997] block">
                        Email Address <span className="text-[#C8F169]">*</span>
                      </label>
                      <input
                        type="email"
                        id="home_email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#191B15] border border-[#34362D] text-sm text-[#F2F0E6] placeholder-[#A7A997]/50 focus:border-[#C8F169] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="home_subject" className="text-xs font-mono-label text-[#A7A997] block">
                      Subject / Project Scope <span className="text-[#C8F169]">*</span>
                    </label>
                    <input
                      type="text"
                      id="home_subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Full Stack Web App / AI System Architecture"
                      className="w-full px-4 py-3 rounded-xl bg-[#191B15] border border-[#34362D] text-sm text-[#F2F0E6] placeholder-[#A7A997]/50 focus:border-[#C8F169] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="home_message" className="text-xs font-mono-label text-[#A7A997] block">
                      Message <span className="text-[#C8F169]">*</span>
                    </label>
                    <textarea
                      id="home_message"
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about your timeline, tech stack, or requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-[#191B15] border border-[#34362D] text-sm text-[#F2F0E6] placeholder-[#A7A997]/50 focus:border-[#C8F169] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#C8F169] text-[#0E0F0C] font-mono-label font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#D8F788] active:scale-[0.99] transition-all shadow-lg shadow-[#C8F169]/15 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 stroke-[2.5]" />
                        <span>Send Message Directly</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

