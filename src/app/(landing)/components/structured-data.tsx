import { memo } from "react";

export const LandingPageStructuredData = memo(() => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Olova UI",
    "url": "https://olova.net",
    "logo": "https://olova.net/logo.svg",
    "description": "Modern React component library with 50+ free, open-source components built with React, TypeScript, Tailwind CSS, and Framer Motion",
    "sameAs": [
      "https://github.com/olova.net",
      "https://www.linkedin.com/in/codernazmulhossain/",
      "https://discord.gg/whEJ7K8de",
      "https://www.facebook.com/codervai"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "url": "https://discord.gg/whEJ7K8de"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Olova UI",
    "url": "https://olova.net",
    "description": "Build stunning web applications with Olova UI's modern React components. 50+ free, open-source components built with React, TypeScript, Tailwind CSS & Framer Motion",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://olova.net/docs?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Olova UI",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "ratingCount": "1000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "description": "Modern React component library with 50+ free, open-source components built with React, TypeScript, Tailwind CSS, and Framer Motion. Lightning-fast, fully responsive, and accessible.",
    "featureList": [
      "50+ Pre-built Components",
      "TypeScript Support",
      "Tailwind CSS Integration",
      "Framer Motion Animations",
      "Fully Responsive",
      "Accessible Components",
      "Zero Dependencies",
      "Well Documented"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://olova.net/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Documentation",
        "item": "https://olova.net/docs"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Components",
        "item": "https://olova.net/docs/components"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Olova UI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Olova UI is a modern React component library with 50+ free, open-source components built with React, TypeScript, Tailwind CSS, and Framer Motion. It's designed to help developers build stunning web applications quickly."
        }
      },
      {
        "@type": "Question",
        "name": "Is Olova UI free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Olova UI is completely free and open-source under the MIT License. You can use it in personal and commercial projects without any cost."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies does Olova UI use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Olova UI is built with React, TypeScript, Tailwind CSS, and Framer Motion, providing a modern, type-safe, and performant component library."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
});
LandingPageStructuredData.displayName = "LandingPageStructuredData";
