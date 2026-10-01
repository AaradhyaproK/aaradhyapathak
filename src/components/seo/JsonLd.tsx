import React from "react";
import { siteConfig } from "@/config/site";
import { type Post } from "@/lib/posts";

interface PersonWebSiteSchemaProps {
  type: "home";
}

interface ProfilePageSchemaProps {
  type: "about";
}

interface BlogPostingSchemaProps {
  type: "blogPost";
  post: Post;
}

interface BreadcrumbsSchemaProps {
  type: "breadcrumbs";
  items: Array<{ name: string; url: string }>;
}

interface FAQSchemaProps {
  type: "faq";
  faqs: Array<{ question: string; answer: string }>;
}

interface CollectionPageSchemaProps {
  type: "blogIndex";
  posts: Post[];
}

type JsonLdProps =
  | PersonWebSiteSchemaProps
  | ProfilePageSchemaProps
  | BlogPostingSchemaProps
  | BreadcrumbsSchemaProps
  | FAQSchemaProps
  | CollectionPageSchemaProps;

export function JsonLd(props: JsonLdProps) {
  let schemaData: Record<string, unknown> | null = null;

  switch (props.type) {
    case "home":
      schemaData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Person",
            "@id": `${siteConfig.url}/#person`,
            name: siteConfig.author.name,
            jobTitle: siteConfig.author.role,
            description: siteConfig.author.bio,
            url: siteConfig.url,
            email: siteConfig.email,
            telephone: siteConfig.phone,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Nashik",
              addressRegion: "Maharashtra",
              addressCountry: "IN",
            },
            alumniOf: {
              "@type": "EducationalOrganization",
              name: siteConfig.author.education.institution,
            },
            sameAs: [
              siteConfig.social.github,
              siteConfig.social.linkedin,
              siteConfig.social.twitter,
              siteConfig.social.linktree,
            ],
          },
          {
            "@type": "WebSite",
            "@id": `${siteConfig.url}/#website`,
            url: siteConfig.url,
            name: siteConfig.name,
            description: siteConfig.description,
            publisher: {
              "@id": `${siteConfig.url}/#person`,
            },
          },
        ],
      };
      break;

    case "about":
      schemaData = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        mainEntity: {
          "@type": "Person",
          name: siteConfig.author.name,
          jobTitle: siteConfig.author.role,
          description: siteConfig.author.bio,
          url: `${siteConfig.url}/about`,
          email: siteConfig.email,
          sameAs: [
            siteConfig.social.github,
            siteConfig.social.linkedin,
            siteConfig.social.twitter,
          ],
        },
      };
      break;

    case "blogPost":
      schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: props.post.title,
        description: props.post.description,
        datePublished: props.post.date,
        dateModified: props.post.updated || props.post.date,
        url: `${siteConfig.url}/blog/${props.post.slug}`,
        author: {
          "@type": "Person",
          name: props.post.author,
          url: siteConfig.url,
        },
        publisher: {
          "@type": "Person",
          name: siteConfig.name,
          url: siteConfig.url,
        },
        image: props.post.cover?.image
          ? `${siteConfig.url}${props.post.cover.image}`
          : undefined,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${siteConfig.url}/blog/${props.post.slug}`,
        },
      };
      break;

    case "breadcrumbs":
      schemaData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: props.items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      };
      break;

    case "faq":
      schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: props.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      };
      break;

    case "blogIndex":
      schemaData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Engineering Notes & Technical Blog",
        description: siteConfig.blog.niche,
        url: `${siteConfig.url}/blog`,
        hasPart: props.posts.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          url: `${siteConfig.url}/blog/${post.slug}`,
          datePublished: post.date,
        })),
      };
      break;
  }

  if (!schemaData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
