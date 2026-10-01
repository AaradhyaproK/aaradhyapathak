"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "@/components/ui/Icons";

const NAV_ITEMS = [
  { label: "Home", href: "/", num: "01" },
  { label: "Projects", href: "/projects", num: "02" },
  { label: "Blog", href: "/blog", num: "03" },
  { label: "About", href: "/about", num: "04" },
  { label: "Contact", href: "/contact", num: "05" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-3 sm:pt-4 md:pt-6 transition-all duration-300"
        aria-label="Site Header"
      >
        <div
          className={cn(
            "w-full max-w-5xl rounded-full transition-all duration-300",
            "glass-panel border border-[#34362D] px-4 py-2 sm:px-6 sm:py-2.5",
            scrolled ? "shadow-2xl shadow-black/80 bg-[#191B15]/95" : "bg-[#191B15]/85"
          )}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-1.5 font-display text-xl sm:text-2xl font-extrabold tracking-tight text-[#F2F0E6] hover:opacity-90 transition-opacity touch-target"
              aria-label={`${siteConfig.name} - Home`}
            >
              <span>Aaradhya</span>
              <span className="text-[#C8F169]">.</span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              aria-label="Main Navigation"
              className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium"
            >
              {NAV_ITEMS.map((link) => {
                const isActive =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-3.5 py-1.5 rounded-full transition-all duration-200 touch-target",
                      isActive
                        ? "bg-[#23251D] text-[#C8F169] border border-[#34362D] font-semibold"
                        : "text-[#A7A997] hover:text-[#F2F0E6] hover:bg-[#23251D]/60"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action: Desktop Connect Button & Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2">
              {siteConfig.openToWork && (
                <Link
                  href="/contact"
                  className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8F169] text-[#0E0F0C] font-mono-label font-bold text-xs hover:bg-[#D8F788] transition-transform active:scale-95 shadow-sm touch-target"
                  aria-label="Connect with Aaradhya Pathak"
                >
                  <span className="w-2 h-2 rounded-full bg-[#0E0F0C] animate-pulse" />
                  <span>Connect</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </Link>
              )}

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden touch-target text-[#F2F0E6] p-2 rounded-full hover:bg-[#23251D] active:scale-90 border border-[#34362D]/60 focus:border-[#C8F169] transition-all"
                aria-expanded={mobileMenuOpen}
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5 text-[#F2F0E6]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* High-End Full-Screen Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-[100] bg-[#0E0F0C] text-[#F2F0E6] flex flex-col justify-between overflow-y-auto px-6 py-6 animate-fadeIn"
        >
          {/* Subtle Ambient Lime Spotlights */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-80 h-80 bg-[#C8F169]/10 rounded-full blur-3xl pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 w-64 h-64 bg-[#C8F169]/5 rounded-full blur-3xl pointer-events-none"
          />

          {/* Top Bar: Brand & Close Button */}
          <div className="relative z-10 flex items-center justify-between pb-6 border-b border-[#34362D]/60">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-1.5 font-display text-2xl font-extrabold tracking-tight text-[#F2F0E6]"
            >
              <span>Aaradhya</span>
              <span className="text-[#C8F169]">.</span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-11 h-11 rounded-full bg-[#191B15] border border-[#34362D] flex items-center justify-center text-[#F2F0E6] hover:text-[#C8F169] hover:border-[#C8F169] active:scale-95 transition-all shadow-md touch-target"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links List */}
          <div className="relative z-10 my-auto py-8">
            <p className="font-mono-label text-xs uppercase tracking-widest text-[#C8F169] mb-4">
              // NAVIGATION
            </p>
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "group flex items-center justify-between py-3.5 px-4 rounded-2xl transition-all duration-200 touch-target",
                      isActive
                        ? "bg-[#191B15] text-[#C8F169] border border-[#34362D] font-bold"
                        : "text-[#A7A997] hover:text-[#F2F0E6] hover:bg-[#191B15]/60"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono-label text-xs text-[#A7A997]/70 group-hover:text-[#C8F169] transition-colors">
                        {item.num}
                      </span>
                      <span className="font-display text-2xl font-semibold tracking-tight">
                        {item.label}
                      </span>
                    </div>

                    <ArrowUpRight
                      className={cn(
                        "w-5 h-5 transition-transform duration-200",
                        isActive
                          ? "text-[#C8F169] opacity-100 translate-x-0"
                          : "opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      )}
                    />
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Bottom Actions & Socials */}
          <div className="relative z-10 pt-6 border-t border-[#34362D]/60 space-y-4">
            {/* Status Strip */}
            <div className="flex items-center justify-between text-xs font-mono-label text-[#A7A997]">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C8F169] animate-pulse" />
                <span className="text-[#F2F0E6]">Co-Founder @ SNAB</span>
              </span>
              <span className="text-[#C8F169]">Open to Work</span>
            </div>

            {/* Main Action CTA */}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 px-6 rounded-2xl bg-[#C8F169] text-[#0E0F0C] font-mono-label font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#D8F788] active:scale-[0.98] transition-all shadow-lg shadow-[#C8F169]/15 touch-target"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>

            {/* Quick Contact & Socials Bar */}
            <div className="flex items-center justify-between pt-2">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-xs font-mono-label text-[#A7A997] hover:text-[#C8F169] transition-colors touch-target"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{siteConfig.email}</span>
              </a>

              <div className="flex items-center gap-2">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#191B15] border border-[#34362D] flex items-center justify-center text-[#A7A997] hover:text-[#F2F0E6] hover:border-[#C8F169] transition-colors touch-target"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#191B15] border border-[#34362D] flex items-center justify-center text-[#A7A997] hover:text-[#F2F0E6] hover:border-[#C8F169] transition-colors touch-target"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#191B15] border border-[#34362D] flex items-center justify-center text-[#A7A997] hover:text-[#F2F0E6] hover:border-[#C8F169] transition-colors touch-target"
                  aria-label="X Profile"
                >
                  <TwitterXIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
