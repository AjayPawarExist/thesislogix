import Script from "next/script";

export default function ContactPageSchema() {
  return (
    <Script id="contact-page-schema" type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Us",
        "url": "https://thesislogix.in/contact",
        "description":
          "Reach out to our academic experts for personalized research assistance, thesis support, and consultation.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://thesislogix.in/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Contact",
              "item": "https://thesislogix.in/contact"
            }
          ]
        },
        "mainEntity": {
          "@type": "Organization",
          "name": "ThesisLogix",
          "url": "https://thesislogix.in",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Support",
            "email": "info@thesislogix.in",
            "telephone": "+91-9691815989",
            "areaServed": "IN",
            "availableLanguage": ["English", "Hindi"]
          }
        }
      })}
    </Script>
  );
}
