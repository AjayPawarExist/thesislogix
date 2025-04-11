import Script from 'next/script';

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${process.env.NEXT_PUBLIC_BASE_URL}/#organization`,
      "name": "ThesisLogixx",
      "url": `${process.env.NEXT_PUBLIC_BASE_URL}`,
      "logo": {
        "@type": "ImageObject",
        "@id": `${process.env.NEXT_PUBLIC_BASE_URL}/#logo`,
        "url": `${process.env.NEXT_PUBLIC_BASE_URL}/logo.png`,
        "width": 600,
        "height": 600,
        "caption": "ThesisLogixx",
        "contentUrl": `${process.env.NEXT_PUBLIC_BASE_URL}/logo.png`,
        "encodingFormat": "image/png"
      },
      "image": { "@id": `${process.env.NEXT_PUBLIC_BASE_URL}/#logo` },
      "description": "Empowering research scholars to achieve academic excellence.",
      "foundingDate": "2005",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "C-409, Sagar Landmark, Ayodhya Bypass Road",
        "addressLocality": "Bhopal",
        "postalCode": "462010",
        "addressCountry": "India"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "email": "info@thesislogix.com",
          "url": `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
          "telephone": "+91 9691815989",
          "availableLanguage": ["English", "Hindi"]
        }
      ],
      "brand": {
        "@type": "Brand",
        "name": "ThesisLogixx",
        "logo": { "@id": `${process.env.NEXT_PUBLIC_BASE_URL}/#logo` }
      }
    },
    {
      "@type": "WebSite",
      "@id": `${process.env.NEXT_PUBLIC_BASE_URL}/#website`,
      "url": `${process.env.NEXT_PUBLIC_BASE_URL}`,
      "name": "ThesisLogixx",
      "description": "Empowering research scholars to achieve academic excellence.",
      "publisher": { "@id": `${process.env.NEXT_PUBLIC_BASE_URL}/#organization` },
      "copyrightHolder": { "@id": `${process.env.NEXT_PUBLIC_BASE_URL}/#organization` },
      "copyrightYear": "2023",
      "inLanguage": "en-US",
      "keywords": "ThesisLogixx, research assistance, thesis writing, PhD research, academic excellence, research consultancy",
      "potentialAction": [{
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${process.env.NEXT_PUBLIC_BASE_URL}/search?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }]
    },
    {
      "@type": "WebPage",
      "@id": `${process.env.NEXT_PUBLIC_BASE_URL}/#webpage`,
      "url": `${process.env.NEXT_PUBLIC_BASE_URL}`,
      "name": "ThesisLogixx – Empowering Research Scholars",
      "isPartOf": { "@id": `${process.env.NEXT_PUBLIC_BASE_URL}/#website` },
      "about": { "@id": `${process.env.NEXT_PUBLIC_BASE_URL}/#organization` }
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${process.env.NEXT_PUBLIC_BASE_URL}/#breadcrumb`,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": `${process.env.NEXT_PUBLIC_BASE_URL}`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About Us",
          "item": `${process.env.NEXT_PUBLIC_BASE_URL}/aboutus`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Contact",
          "item": `${process.env.NEXT_PUBLIC_BASE_URL}/contact`
        }
      ]
    },
    {
      "@type": "SiteNavigationElement",
      "@id": `${process.env.NEXT_PUBLIC_BASE_URL}/#navigation`,
      "name": "Main Navigation",
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "SiteNavigationElement",
              "name": "About",
              "url": `${process.env.NEXT_PUBLIC_BASE_URL}/aboutus`
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "SiteNavigationElement",
              "name": "Contact",
              "url": `${process.env.NEXT_PUBLIC_BASE_URL}/contact`
            }
          }
        ]
      }
    }
  ]
};

export default function SchemaMarkup() {
  return (
    <Script
      id="schema-markup"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
