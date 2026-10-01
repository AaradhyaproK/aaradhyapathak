import { describe, it, expect } from "vitest";
import { formatDate, calculateReadingTime, slugify, cn } from "../utils";

describe("Utility Functions", () => {
  it("formats dates accurately", () => {
    const formatted = formatDate("2025-09-15");
    expect(formatted).toBe("Sep 15, 2025");
  });

  it("calculates estimated reading time correctly", () => {
    const shortText = "Word ".repeat(100);
    expect(calculateReadingTime(shortText)).toBe("1 min read");

    const longerText = "Word ".repeat(450);
    expect(calculateReadingTime(longerText)).toBe("3 min read");
  });

  it("generates clean, URL-safe slugs", () => {
    expect(slugify("Hello World! This Is Next.js 15")).toBe(
      "hello-world-this-is-nextjs-15"
    );
    expect(slugify("  AI Tools & Freelancing in 2026 -- ")).toBe(
      "ai-tools-freelancing-in-2026"
    );
  });

  it("merges class names with tailwind-merge correctly", () => {
    expect(cn("px-4 py-2", "px-6")).toBe("py-2 px-6");
    expect(cn("text-red-500", false && "text-blue-500", "font-bold")).toBe(
      "text-red-500 font-bold"
    );
  });
});
