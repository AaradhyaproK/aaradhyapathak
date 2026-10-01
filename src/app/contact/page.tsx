"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  ArrowUpRight,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "@/components/ui/Icons";

export default function ContactPage() {
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
      navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) {
      // Spam honeypot triggered - silently fake success
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
            "Failed to deliver message via Formspree. Please reach out directly via email."
          );
        }
      }
    } catch {
      setSubmitError(
        "Network connection error. Please verify your connection or email me directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="max-w-2xl mb-12">
        <span className="font-mono-label text-xs text-[#C8F169] tracking-widest uppercase">
          Get In Touch
        </span>
        <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-[#F2F0E6] mt-2">
          Let&apos;s Build Something Impactful.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#A7A997] leading-relaxed">
          Whether you need a custom full-stack web platform, AI platform integration, technical SEO consultation, or have an open role, I&apos;d love to connect.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Information (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-[24px] bg-[#191B15] border border-[#34362D] p-6 sm:p-7 space-y-6">
            <h2 className="font-display text-xl font-bold text-[#F2F0E6]">
              Direct Contacts
            </h2>

            <div className="space-y-4">
              {/* Corporate Email */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#23251D] border border-[#34362D] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#C8F169]" />
                </div>
                <div>
                  <p className="text-xs font-mono-label text-[#C8F169] font-bold">Corporate Email (SNAB)</p>
                  <a
                    href={`mailto:${siteConfig.corporateEmail}`}
                    className="text-sm font-semibold text-[#F2F0E6] hover:text-[#C8F169] transition-colors break-all"
                  >
                    {siteConfig.corporateEmail}
                  </a>
                  <div className="mt-1">
                    <button
                      type="button"
                      onClick={() => {
                        if (typeof navigator !== "undefined" && navigator.clipboard) {
                          navigator.clipboard.writeText(siteConfig.corporateEmail);
                          setCopied(true);
                          setTimeout(() => setCopied(false), 2500);
                        }
                      }}
                      className="text-xs font-mono-label text-[#C8F169] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3 h-3 stroke-[3]" />
                          <span>Copied corporate email</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy {siteConfig.corporateEmail}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Personal Email */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#23251D] border border-[#34362D] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#A7A997]" />
                </div>
                <div>
                  <p className="text-xs font-mono-label text-[#A7A997]">Direct Email</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm font-semibold text-[#F2F0E6] hover:text-[#C8F169] transition-colors break-all"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#23251D] border border-[#34362D] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#C8F169]" />
                </div>
                <div>
                  <p className="text-xs font-mono-label text-[#A7A997]">Phone</p>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                    className="text-sm font-semibold text-[#F2F0E6] hover:text-[#C8F169] transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#23251D] border border-[#34362D] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#C8F169]" />
                </div>
                <div>
                  <p className="text-xs font-mono-label text-[#A7A997]">Location</p>
                  <p className="text-sm font-semibold text-[#F2F0E6]">
                    {siteConfig.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#34362D]">
              <p className="text-xs font-mono-label text-[#A7A997] mb-3">
                Connect on Networks
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#23251D] border border-[#34362D] flex items-center justify-center text-[#F2F0E6] hover:text-[#C8F169] hover:border-[#C8F169] transition-colors touch-target"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#23251D] border border-[#34362D] flex items-center justify-center text-[#F2F0E6] hover:text-[#C8F169] hover:border-[#C8F169] transition-colors touch-target"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#23251D] border border-[#34362D] flex items-center justify-center text-[#F2F0E6] hover:text-[#C8F169] hover:border-[#C8F169] transition-colors touch-target"
                  aria-label="Twitter Profile"
                >
                  <TwitterXIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.social.linktree}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 h-10 rounded-xl bg-[#23251D] border border-[#34362D] flex items-center justify-center text-xs font-mono-label text-[#F2F0E6] hover:text-[#C8F169] hover:border-[#C8F169] transition-colors touch-target"
                  aria-label="Linktree Links"
                >
                  Linktree
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="rounded-[24px] bg-[#191B15] border border-[#34362D] p-6 sm:p-8">
            <h2 className="font-display text-2xl font-bold text-[#F2F0E6] mb-2">
              Send a Message
            </h2>
            <p className="text-sm text-[#A7A997] mb-6">
              Typically replies within 24 hours.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-[#23251D] border border-[#C8F169]/40 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-[#C8F169] mx-auto" />
                <h3 className="font-display text-xl font-bold text-[#F2F0E6]">
                  Message Received!
                </h3>
                <p className="text-sm text-[#A7A997] max-w-md mx-auto">
                  Thank you for reaching out, {submittedSender.name || "friend"}. Your message has been routed to my inbox via Formspree. I will get back to you shortly at {submittedSender.email || siteConfig.email}.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormSubmitted(false);
                    setSubmitError(null);
                  }}
                  className="mt-4 px-5 py-2.5 rounded-full bg-[#34362D] text-xs font-mono-label text-[#F2F0E6] hover:bg-[#34362D]/80 transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {submitError && (
                  <div className="p-4 rounded-xl bg-[#FF5F56]/15 border border-[#FF5F56]/40 text-xs font-mono-label text-[#FF7B72] flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#FF5F56]" />
                    <div className="flex-1">
                      <p className="font-bold text-[#F2F0E6]">Message Delivery Issue</p>
                      <p className="mt-0.5 text-[#FF7B72]">{submitError}</p>
                      <p className="mt-2 text-[#A7A997]">
                        Direct alternative: please email me directly at{" "}
                        <a href={`mailto:${siteConfig.email}`} className="text-[#C8F169] underline">
                          {siteConfig.email}
                        </a>
                      </p>
                    </div>
                  </div>
                )}

                {/* Formspree honeypot anti-spam trap */}
                <input
                  type="text"
                  name="_gotcha"
                  aria-hidden="true"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono-label text-[#A7A997] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      disabled={isSubmitting}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-[#23251D] border border-[#34362D] text-[#F2F0E6] placeholder-[#A7A997]/50 text-sm focus:border-[#C8F169] focus:outline-none transition-colors disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono-label text-[#A7A997] mb-1.5">
                      Your Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      disabled={isSubmitting}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#23251D] border border-[#34362D] text-[#F2F0E6] placeholder-[#A7A997]/50 text-sm focus:border-[#C8F169] focus:outline-none transition-colors disabled:opacity-50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono-label text-[#A7A997] mb-1.5">
                    Subject / Topic *
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    disabled={isSubmitting}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Freelance Project / Hiring / Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-[#23251D] border border-[#34362D] text-[#F2F0E6] placeholder-[#A7A997]/50 text-sm focus:border-[#C8F169] focus:outline-none transition-colors disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono-label text-[#A7A997] mb-1.5">
                    Project Details or Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    disabled={isSubmitting}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your goals, timelines, or role expectations..."
                    className="w-full px-4 py-3 rounded-xl bg-[#23251D] border border-[#34362D] text-[#F2F0E6] placeholder-[#A7A997]/50 text-sm focus:border-[#C8F169] focus:outline-none transition-colors resize-none disabled:opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full touch-target py-3.5 px-6 rounded-full bg-[#C8F169] text-[#0E0F0C] font-mono-label font-bold text-xs hover:bg-[#D8F788] transition-all hover:scale-[1.01] active:scale-95 shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:hover:scale-100 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#0E0F0C]" />
                      <span>Sending Message to Formspree...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 stroke-[2.5]" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
