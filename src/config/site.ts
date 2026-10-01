/**
 * Site Configuration
 * Single source of truth for all personal details, URLs, navigation, and SEO constants.
 * Updated with corporate email hello@snab.co.in, interviewxpert.in, and commercial client ventures.
 */

export const siteConfig = {
  name: "Aaradhya Pathak",
  shortName: "Aaradhya",
  title: "Aaradhya Pathak — Co-Founder @ SNAB & Full Stack Web Developer",
  tagline: "Co-Founder @ SNAB Innovations • Full Stack Web Developer • Google Gemini Student Ambassador",
  description:
    "Co-Founder of SNAB Innovations. Architect of FileZenith, FeeKit, and InterviewXpert serving commercial clients. Full Stack Developer & QA Tester in MERN, PHP, Java, and AI systems. B.E. Computer Engineering scholar (CGPA 8.2).",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://aaradhyadev.vercel.app"),
  email: "aaradhya1774@gmail.com",
  corporateEmail: "hello@snab.co.in",
  phone: "+91 9511779317",
  location: "Nashik, Maharashtra, India",
  locale: "en-IN",
  openToWork: true,
  statusText: "Connect",
  formspreeUrl: "https://formspree.io/f/movdbzab",
  resumeUrl:
    "https://res.cloudinary.com/dsyow3tjq/image/upload/v1779368047/resume_aaradhya_2026_main__Copy__po2dq3.pdf",

  // Verified Social & Profile Links
  social: {
    github: "https://github.com/AaradhyaproK",
    linkedin: "https://www.linkedin.com/in/aaradhyapathak17",
    linktree: "https://linktr.ee/aaradhyapathak17",
    twitter: "https://x.com/aaradhyapathak17",
  },

  // Author & E-E-A-T Profile
  author: {
    name: "Aaradhya Pathak",
    role: "Co-Founder @ SNAB, Full Stack Web Developer & QA Tester",
    bio: "Co-Founder of SNAB Innovations, operating privacy-first browser tools like FileZenith, automated billing toolkit FeeKit, and AI interview platform InterviewXpert serving commercial clients. Google Gemini Student Ambassador and Computer Engineering scholar (CGPA 8.2) at GCOERC Nashik. All India Rank 64 at IIT Bombay NEC 2025.",
    avatar: "/images/aaradhyacover-img.png",
    education: {
      degree: "Bachelor of Engineering (B.E.) in Computer Engineering",
      institution: "Guru Gobind Singh College of Engineering & Research Centre (GGSF), Nashik",
      university: "Savitribai Phule Pune University (SPPU)",
      status: "2022 – 2026",
      sgpa: "8.2",
      cgpa: "8.2",
    },
  },

  // Core Startup Ventures & Products (Serving Commercial Clients)
  ventures: [
    {
      name: "SNAB Innovations",
      role: "Founder & Lead Architect",
      url: "https://snab.co.in",
      period: "2024 – Present",
      description:
        "Software engineering firm and venture studio in Nashik, India, building intelligent platforms, privacy-first browser tools, workflow automation, and serving commercial clients.",
    },
    {
      name: "FileZenith",
      role: "Creator & Product Lead",
      url: "https://filezenith.com",
      description:
        "100% private in-browser file and PDF studio with 50+ free tools. Serves commercial and global users with zero server file uploads.",
    },
    {
      name: "FeeKit",
      role: "Creator & Engineer",
      url: "https://usefeekit.com",
      description:
        "Smart fee collection, automated billing, and invoice reconciliation SaaS serving commercial clients, freelancers, and educational institutions.",
    },
    {
      name: "InterviewXpert",
      role: "Architect & Co-Founder",
      url: "https://interviewxpert.in",
      description:
        "AI interview assessment and candidate screening platform serving commercial placement firms with real-time speech AI (AssemblyAI) and Google Gemini multimodal evaluation.",
    },
  ],

  // Blog System & Niche
  blog: {
    niche: "AI tools and web development for freelancers and students",
    postsPerPage: 10,
    newsletter: {
      heading: "Engineering Notes & AI Insights",
      subheading:
        "Technical breakdowns on full-stack architecture, Gemini & AI integrations, and real-world commercial software delivery.",
      provider: "resend",
    },
  },

  // Navigation Links
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  // Footer Links
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  ],

  // Skills
  skills: [
    "Java",
    "Python",
    "JavaScript",
    "C++",
    "PHP",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "Firebase",
    "Gemini API",
    "AssemblyAI",
    "REST APIs",
    "Git",
    "Postman",
    "DSA",
    "OOP",
  ],

  // Verified Work Experience & Founder Timeline
  experience: [
    {
      company: "SNAB Innovations",
      role: "Founder & Lead Engineer",
      period: "2024 – Present",
      location: "Nashik, Maharashtra",
      type: "Venture / Founder",
      description:
        "Directing software engineering firm operating FileZenith (50+ browser tools), FeeKit, and InterviewXpert platforms serving commercial clients.",
      highlights: [
        "Architected FileZenith (filezenith.com) — a zero-server upload client-side file utility studio handling PDF, image, and compression workflows.",
        "Launched FeeKit (usefeekit.com) for frictionless automated invoicing and commercial billing.",
        "Built and scaled InterviewXpert (interviewxpert.in) serving commercial placement clients with real-time AI speech and candidate assessments.",
      ],
    },
    {
      company: "Chittaranjan Info Solutions Pvt. Ltd.",
      role: "Web Designer & SEO, PHP Developer",
      period: "Sep 2025 – Present",
      location: "Nashik, Maharashtra",
      type: "Full Time",
      description:
        "Delivering robust full-stack solutions, client website architectures, and high-impact SEO optimizations.",
      highlights: [
        "Spearheaded development and performance testing of PayTrackPro payroll workflow platform in PHP.",
        "Engineered dynamic server-side applications and optimized relational database queries.",
        "Maintained cross-browser responsiveness and executed comprehensive QA testing across multiple client websites.",
        "Implemented technical SEO audits and structured data schemas to significantly improve organic traffic and search rank.",
      ],
    },
    {
      company: "Google India",
      role: "Google Gemini Student Ambassador",
      period: "Nov 2025 – Present",
      location: "Remote",
      type: "Leadership Program",
      description:
        "Selected by Google to drive adoption of generative AI across campus and engineer practical AI use cases.",
      highlights: [
        "Selected for a competitive 6-month leadership program representing Google to foster generative AI adoption.",
        "Organized and hosted technical workshops, prompt battles, and AI seminars educating 150+ students.",
        "Built and managed a vibrant campus community for AI enthusiasts, fostering hands-on peer engineering.",
        "Served as direct liaison reporting student AI feedback, edge cases, and feature requests to the Google Gemini team.",
      ],
    },
    {
      company: "Manasvi Tech Solutions",
      role: "Junior Web Developer Intern",
      period: "Jan 2025 – Mar 2025",
      location: "Nashik, Maharashtra",
      type: "Internship",
      description: "Contributed to dynamic CMS architectures and administrative dashboards.",
      highlights: [
        "Contributed to 'PixelFlow' dynamic content and photo management admin panel.",
        "Applied core full-stack workflows to optimize database-to-frontend content synchronization.",
        "Assisted in debugging, feature testing, and API integration for smooth production deployments.",
      ],
    },
  ],

  // Verified Volunteering & Roles
  volunteering: [
    {
      role: "Team Lead",
      org: "National Entrepreneurship Challenge (NEC 2025), IIT Bombay",
      detail: "Led team to All India Rank 64 out of 4,000+ national competing engineering teams.",
    },
    {
      role: "AI Prompting Event Head",
      org: "Tech Guru Mega Festival (GCOERC)",
      detail: "Spearheaded university-wide prompt engineering competition from ideation to live evaluation.",
    },
    {
      role: "Design Head",
      org: "Innovation & Entrepreneurship Development Cell (IEDC)",
      detail: "Directed visual branding, technical promotions, and built the official IEDC website.",
    },
    {
      role: "Art & Design Coordinator",
      org: "Computer Engineering Student Association (COSA)",
      detail: "Spearheaded creative direction, visual assets, and student tech portal development.",
    },
    {
      role: "Active Volunteer",
      org: "Google Developer Group (GDG) Nashik",
      detail: "Fostered community engagement, tech meetups, and developer knowledge sharing.",
    },
  ],

  // Verified Wins & Milestones
  wins: [
    {
      id: "nec-2025",
      badge: "All India Rank 64",
      title: "National Entrepreneurship Challenge 2025",
      org: "IIT Bombay",
      detail:
        "Finalist and ranked #64 across 4,000+ top engineering and university teams across India.",
    },
    {
      id: "yi-project",
      badge: "1st Place Winner",
      title: "YI Project Competition",
      org: "Young Indians",
      detail:
        "Secured 1st rank with sponsorship and successfully commercialized the underlying platform.",
    },
    {
      id: "startup-arena",
      badge: "2nd Prize & Zonal Qualifier",
      title: "Startup Arena 2.0 (Eureka!)",
      org: "E-Cell, IIT Bombay & IEDC GCOERC",
      detail:
        "Awarded 2nd Prize for AI Judiciary Recommendation system; advanced to Eureka! Zonal rounds at IIT Bombay.",
    },
    {
      id: "gfg-dsa",
      badge: "DSA Recognition",
      title: "GeeksforGeeks Problem Solving Award",
      org: "GeeksforGeeks",
      detail:
        "Recognized for advanced algorithmic problem solving and data structures proficiency.",
    },
    {
      id: "academic-cgpa",
      badge: "CGPA 8.2",
      title: "Academic Excellence in Computer Engineering",
      org: "GCOERC (SPPU Pune)",
      detail: "Consistent high academic standing in Computer Engineering.",
    },
  ],

  // Verified Projects & Commercial Ventures
  projects: [
    {
      slug: "interviewxpert",
      title: "InterviewXpert",
      subtitle: "AI Interview Assessment & Candidate Screening Platform",
      tagline: "Automated candidate evaluations with speech AI and intelligent scoring",
      stat: "3x",
      statLabel: "Faster Recruitment",
      secondaryStat: "100",
      secondaryStatLabel: "Concurrent Interviews Daily",
      role: "Architect & Co-Founder",
      problem:
        "Technical recruitment teams spent 40+ hours per week conducting repetitive initial screening interviews, causing massive hiring bottlenecks and subjective scoring criteria.",
      solution:
        "Engineered an automated AI assessment platform combining Gemini multimodal APIs with AssemblyAI for real-time speech analysis, candidate response evaluation, and rubric scoring. Built for commercial recruitment firms.",
      highlights: [
        "Accelerated client recruitment workflows by 3x",
        "Seamlessly processed 100 concurrent interviews daily with zero queue latency",
        "Serving commercial clients with pay-per-interview enterprise licensing",
        "Awarded Top 10 recognition at a national GenAI Hackathon",
      ],
      stack: [
        "Gemini API",
        "AssemblyAI",
        "React.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Cloudinary",
        "Firebase",
      ],
      liveUrl: "https://interviewxpert.in",
      githubUrl: "https://github.com/AaradhyaproK/interviewxpert-opencv.git",
      featured: true,
      order: 1,
    },
    {
      slug: "filezenith",
      title: "FileZenith",
      subtitle: "100% Private In-Browser File & PDF Studio",
      tagline: "50+ file tools processing documents client-side with zero server uploads",
      stat: "50+",
      statLabel: "In-Browser Tools",
      secondaryStat: "0 KB",
      secondaryStatLabel: "Server Uploads (100% Private)",
      role: "Founder & Lead Architect",
      problem:
        "Users and enterprises are forced to upload sensitive contracts, tax files, and records to third-party cloud servers for everyday conversions, compromising data privacy.",
      solution:
        "Engineered an all-in-one browser file studio running PDF manipulation, image conversions, compression, and background removals entirely client-side using WebAssembly and Canvas APIs without server uploads.",
      highlights: [
        "Over 50+ free file tools available directly in the user's browser",
        "Serving commercial users and global professionals with complete data privacy",
        "Sub-second client-side conversions with zero upload bandwidth latency",
      ],
      stack: ["React.js", "WebAssembly", "Canvas API", "Tailwind CSS", "TypeScript", "Vercel"],
      liveUrl: "https://filezenith.com",
      githubUrl: "https://github.com/AaradhyaproK",
      featured: true,
      order: 2,
    },
    {
      slug: "feekit",
      title: "FeeKit",
      subtitle: "Smart Fee Collection & Automated Billing SaaS",
      tagline: "Automated billing, invoicing, and payment reconciliation for modern businesses",
      stat: "Instant",
      statLabel: "Invoice Dispatch",
      secondaryStat: "100%",
      secondaryStatLabel: "Automated Reconciliation",
      role: "Founder & Lead Engineer",
      problem:
        "Freelancers, agencies, and educational institutions struggle with manual invoice creation, tracking client receivables, and delayed reconciliation.",
      solution:
        "Engineered FeeKit to automate branded invoice generation, digital payment link dispatch, automated reminder sequences, and real-time reconciliation.",
      highlights: [
        "Serving commercial clients, agencies, and institutions with automated billing",
        "Automated PDF invoice generation and instant payment tracking",
        "Clean, distraction-free dashboard for real-time receivable monitoring",
      ],
      stack: ["React.js", "Node.js", "Express", "Tailwind CSS", "REST APIs"],
      liveUrl: "https://usefeekit.com",
      githubUrl: "https://github.com/AaradhyaproK",
      featured: true,
      order: 3,
    },
    {
      slug: "digital-notary",
      title: "NotaryXpert",
      subtitle: "Automated Legal Notary & Document Management SaaS",
      tagline: "End-to-end digital notary workflow with biometric & photo verification",
      stat: "90%",
      statLabel: "Drafting Time Saved",
      secondaryStat: "100%",
      secondaryStatLabel: "Paperless Audit Trail",
      role: "Lead Full Stack Developer",
      problem:
        "Traditional legal notary documentation was bogged down by manual drafting, physical registers, and high vulnerability to disputed identities.",
      solution:
        "Developed a specialized workflow for advocates and notaries to generate dynamic affidavits, capture webcam photos, store digital thumb impressions, and maintain an encrypted cloud vault.",
      highlights: [
        "Serving commercial clients, legal advocates, and notary practitioners",
        "Dynamic form generator producing print-ready, stamp-accurate legal PDF layouts instantly",
        "Integrated webcam photo capture and IoT fingerprint / thumb impression storage",
      ],
      stack: [
        "React.js",
        "HTML Templates",
        "Canvas API",
        "PHP / MySQL",
        "Cloud Vault",
        "IoT Scanner Integration",
      ],
      liveUrl: "https://notery.interviewxpert.in/",
      githubUrl: "https://github.com/AaradhyaproK",
      featured: true,
      order: 4,
    },
    {
      slug: "smart-lawyer",
      title: "Smart Lawyer Recommendation System",
      subtitle: "AI Location-Intelligence Legal Platform",
      tagline: "Connecting citizens to verified legal practitioners with algorithmic matching",
      stat: "350+",
      statLabel: "Live Lawyers",
      secondaryStat: "Rank 2",
      secondaryStatLabel: "Startup Arena & Eureka!",
      role: "Full Stack MERN Developer",
      problem:
        "Citizens struggled to locate verified, specialized legal counsel transparently, while advocates lacked an encrypted, geo-intelligent consultation portal.",
      solution:
        "Built a full-stack legal directory and recommendation engine with multi-parameter filtering (case specialty, location, reviews), AI case summarization, encrypted consultations, and multilingual translation.",
      highlights: [
        "350+ live verified lawyer profiles indexed across diverse legal specializations",
        "Runner-up at Startup Arena 2.0 and selected for Eureka! 2025 Zonals at IIT Bombay",
        "Integrated AI case-law analysis, encrypted chat channels, and Google Translator API",
      ],
      stack: [
        "React.js",
        "Firebase",
        "Node.js",
        "Express",
        "REST APIs",
        "Multilingual API",
        "Tailwind CSS",
      ],
      liveUrl: "https://ai-in-judiciary.vercel.app/",
      githubUrl: "https://github.com/AaradhyaproK/AI-In-judiciary-Updated.git",
      featured: false,
      order: 5,
    },
    {
      slug: "tech-guru",
      title: "Tech Guru Event Registration",
      subtitle: "High-Traffic Event Management Platform",
      tagline: "Robust registration, ticketing, and check-in portal for mega events",
      stat: "4,000+",
      statLabel: "Registrations",
      secondaryStat: "99.9%",
      secondaryStatLabel: "Uptime Under Peak Load",
      role: "Full Stack Web Developer",
      problem:
        "Institutional symposiums frequently experienced crashed portals and lost attendee records during peak registration surges.",
      solution:
        "Architected an ultra-lightweight registration engine with client-side validation, JSON data streaming, automated QR pass issuance, and high-concurrency database transactions.",
      highlights: [
        "Processed and managed over 4,000 active student and faculty registrations",
        "Maintained 99.9% uptime during simultaneous flash registration rushes",
        "Automated digital confirmation pass generation and check-in verification",
      ],
      stack: ["JavaScript", "JSON Streaming", "PHP", "SQL", "Bootstrap", "REST APIs"],
      liveUrl: "https://techgurugcoerc.netlify.app/",
      githubUrl: "https://github.com/AaradhyaproK",
      featured: false,
      order: 6,
    },
    {
      slug: "result-analyzer",
      title: "SPPU Bulk Result Analyzer",
      subtitle: "Automated University Academic Analytics Tool",
      tagline: "Parsing thousands of university PDF result ledgers in seconds",
      stat: "1,000s",
      statLabel: "PDF Pages Parsed",
      secondaryStat: "1-Click",
      secondaryStatLabel: "Excel Report Export",
      role: "Python & Automation Engineer",
      problem:
        "Faculty members spent dozens of manual hours hand-calculating class pointers, toppers, and pass/fail distributions from massive university PDF result ledgers.",
      solution:
        "Created an automated analytical engine that ingests bulk university PDF ledgers, extracts student marks, computes pointers, identifies toppers, and visualizes grade distributions.",
      highlights: [
        "Parses multi-megabyte university result PDFs in seconds using PyPDF and client-side pdf.js",
        "Automated topper extraction, pass/fail segregation, and average SGPA distribution charts",
        "Instant one-click tabular data export to Microsoft Excel for institutional reporting",
      ],
      stack: ["Python", "PyPDF", "Matplotlib", "JavaScript", "HTML5", "CSS3", "pdf.js"],
      liveUrl: "https://resultgcoerc.netlify.app/",
      githubUrl: "https://github.com/AaradhyaproK/resultanalyzer.git",
      featured: false,
      order: 7,
    },
    {
      slug: "iedc-portal",
      title: "IEDC Official Innovation Portal",
      subtitle: "University Incubation Cell Website",
      tagline: "Showcasing student startups, entrepreneurship challenges, and patents",
      stat: "100%",
      statLabel: "Responsive Design",
      secondaryStat: "Fast",
      secondaryStatLabel: "Vite + Tailwind Architecture",
      role: "Lead Frontend Developer & Designer",
      problem:
        "The campus innovation cell needed a modern, engaging digital presence to showcase startup cohorts, roadmaps, and event announcements.",
      solution:
        "Designed and implemented the official IEDC website with interactive initiative showcases, event countdowns, and student entrepreneurship resources.",
      highlights: [
        "Built responsive, mobile-first interface using React, Vite, and Tailwind CSS",
        "Elevated student engagement for campus startup incubators and Eureka zonals",
      ],
      stack: ["React.js", "Vite", "Tailwind CSS", "Netlify"],
      liveUrl: "https://iedcgcoerc.netlify.app/",
      githubUrl: "https://github.com/AaradhyaproK",
      featured: false,
      order: 8,
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
