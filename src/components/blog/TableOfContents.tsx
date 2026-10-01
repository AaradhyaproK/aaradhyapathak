"use client";

import React, { useEffect, useState } from "react";
import { List, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface TocItem {
  title: string;
  url: string;
  items?: TocItem[];
}

interface TableOfContentsProps {
  toc: TocItem[];
}

export function TableOfContents({ toc }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [readingProgress, setReadingProgress] = useState<number>(0);

  // Active heading intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0% 0% -65% 0%" }
    );

    const headers = document.querySelectorAll("article h2, article h3");
    headers.forEach((header) => observer.observe(header));

    return () => observer.disconnect();
  }, []);

  // Live reading progress calculator
  useEffect(() => {
    const calculateProgress = () => {
      const article = document.querySelector("article");
      if (!article) return;

      const rect = article.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) {
        setReadingProgress(100);
        return;
      }

      const scrolled = Math.max(0, -rect.top);
      const percentage = Math.min(100, Math.round((scrolled / totalScrollable) * 100));
      setReadingProgress(percentage);
    };

    window.addEventListener("scroll", calculateProgress, { passive: true });
    calculateProgress();
    return () => window.removeEventListener("scroll", calculateProgress);
  }, []);

  if (!toc || toc.length === 0) return null;

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 95;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      window.history.pushState(null, "", `#${id}`);
      setActiveId(id);
    }
  };

  return (
    <nav
      aria-label="Table of Contents"
      className="p-5 rounded-2xl bg-[#191B15] border border-[#34362D] space-y-3.5 shadow-lg"
    >
      {/* Header & Reading Progress */}
      <div className="space-y-2 pb-3 border-b border-[#34362D]/70">
        <div className="flex items-center justify-between text-[#C8F169] font-mono-label text-xs font-bold uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <List className="w-4 h-4" />
            <span>Table of Contents</span>
          </div>
          <span className="text-[11px] text-[#A7A997] font-mono">{readingProgress}%</span>
        </div>

        {/* Progress bar track */}
        <div className="w-full h-1 bg-[#23251D] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#C8F169] rounded-full transition-all duration-150"
            style={{ width: `${readingProgress}%` }}
          />
        </div>
      </div>

      <ul className="space-y-1.5 text-xs max-h-[45vh] overflow-y-auto no-scrollbar pr-1">
        {toc.map((item) => {
          const id = item.url.replace("#", "");
          const isActive = activeId === id;

          return (
            <li key={item.url} className="space-y-1">
              <a
                href={item.url}
                onClick={(e) => handleSmoothScroll(e, item.url)}
                className={cn(
                  "py-1 px-2 rounded-lg transition-all flex items-center justify-between group",
                  isActive
                    ? "bg-[#23251D] text-[#C8F169] font-bold border border-[#34362D]"
                    : "text-[#A7A997] hover:text-[#F2F0E6] hover:bg-[#23251D]/40"
                )}
              >
                <div className="flex items-center gap-1.5 truncate">
                  <ChevronRight
                    className={cn(
                      "w-3 h-3 shrink-0 transition-transform",
                      isActive ? "text-[#C8F169] translate-x-0.5" : "text-[#A7A997]/40 group-hover:text-[#A7A997]"
                    )}
                  />
                  <span className="truncate">{item.title}</span>
                </div>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8F169] shrink-0 animate-pulse ml-2" />
                )}
              </a>

              {/* Sub-items (h3) */}
              {item.items && item.items.length > 0 && (
                <ul className="pl-4 space-y-1 border-l border-[#34362D]/60 ml-2">
                  {item.items.map((subItem) => {
                    const subId = subItem.url.replace("#", "");
                    const isSubActive = activeId === subId;

                    return (
                      <li key={subItem.url}>
                        <a
                          href={subItem.url}
                          onClick={(e) => handleSmoothScroll(e, subItem.url)}
                          className={cn(
                            "py-0.5 px-2 rounded block transition-all truncate text-[11px]",
                            isSubActive
                              ? "text-[#C8F169] font-semibold bg-[#23251D]/60"
                              : "text-[#A7A997]/70 hover:text-[#F2F0E6]"
                          )}
                        >
                          {subItem.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
