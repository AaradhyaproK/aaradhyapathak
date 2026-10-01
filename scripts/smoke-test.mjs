/**
 * Smoke Test Script
 * Verifies all pages, routes, headers, and status codes on production build.
 */

const BASE_URL = process.env.TEST_URL || "http://localhost:3002";

const ROUTES_TO_TEST = [
  { path: "/", expectedTitle: "Aaradhya Pathak" },
  { path: "/projects", expectedTitle: "Projects" },
  { path: "/projects/filezenith", expectedTitle: "FileZenith" },
  { path: "/projects/interviewxpert", expectedTitle: "InterviewXpert" },
  { path: "/projects/feekit", expectedTitle: "FeeKit" },
  { path: "/blog", expectedTitle: "Engineering Notes" },
  { path: "/blog/building-ai-interview-platform-with-gemini", expectedTitle: "Architecting an AI Interview" },
  { path: "/blog/ai-tools-for-freelancers-guide", expectedTitle: "The 2026 AI Developer Toolkit" },
  { path: "/blog/nextjs-15-seo-architecture", expectedTitle: "Next.js 15 Technical SEO Architecture" },
  { path: "/blog/student-developer-roadmap", expectedTitle: "Student Developer to Startup Founder" },
  { path: "/about", expectedTitle: "About Aaradhya Pathak" },
  { path: "/contact", expectedTitle: "Build Something" },
  { path: "/privacy-policy", expectedTitle: "Privacy Policy" },
  { path: "/terms", expectedTitle: "Terms of Service" },
  { path: "/disclaimer", expectedTitle: "Disclaimer" },
  { path: "/affiliate-disclosure", expectedTitle: "Affiliate" },
  { path: "/sitemap.xml", expectedContent: "<urlset" },
  { path: "/robots.txt", expectedContent: "User-Agent: *" },
  { path: "/ads.txt", expectedContent: "google.com" },
  { path: "/rss.xml", expectedContent: "<rss version=\"2.0\"" },
  { path: "/images/blog/ai-interview-architecture-art.webp" },
  { path: "/images/blog/ai-freelance-tools-art.webp" },
  { path: "/images/blog/nextjs-seo-guide-art.webp" },
  { path: "/images/blog/student-developer-roadmap-art.webp" },
];

async function runSmokeTests() {
  console.log(`Starting smoke tests against ${BASE_URL}...`);
  let passed = 0;
  let failed = 0;

  for (const route of ROUTES_TO_TEST) {
    try {
      const res = await fetch(`${BASE_URL}${route.path}`);
      if (!res.ok) {
        console.error(`❌ [FAIL] ${route.path} returned status ${res.status}`);
        failed++;
        continue;
      }

      const text = await res.text();
      if (route.expectedTitle && !text.includes(route.expectedTitle)) {
        console.error(`❌ [FAIL] ${route.path} missing title substring: "${route.expectedTitle}"`);
        failed++;
        continue;
      }

      if (route.expectedContent && !text.includes(route.expectedContent)) {
        console.error(`❌ [FAIL] ${route.path} missing content substring: "${route.expectedContent}"`);
        failed++;
        continue;
      }

      console.log(`✓ [PASS] ${route.path} (${res.status} OK)`);
      passed++;
    } catch (err) {
      console.error(`❌ [FAIL] ${route.path} threw error:`, err.message);
      failed++;
    }
  }

  console.log(`\nSmoke Tests Complete: ${passed} passed, ${failed} failed.`);
  if (failed > 0) {
    process.exit(1);
  }
}

runSmokeTests();
