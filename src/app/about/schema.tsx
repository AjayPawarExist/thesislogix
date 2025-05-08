import Script from "next/script";

export default function AboutPageSchema() {
  return (
    <Script id="about-page-schema" type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "url": "https://thesislogix.in/about",
        "name": "About ThesisLogix",
        "description": "Discover ThesisLogix – your trusted partner for academic research assistance, thesis support, and consultation.",
        "mainEntity": {
          "@type": "Organization",
          "name": "ThesisLogix",
          "url": "https://thesislogix.in",
          "logo": "https://thesislogix.in/logo.png", // replace with your logo URL
          "sameAs": [
            "https://www.youtube.com/@thesislogix",
            "https://www.facebook.com/thesislogix",
            "https://www.instagram.com/thesis_logix?utm_source=qr&igsh=MWZ6a20yejFhMHhsZw%3D%3D",
          ],
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "contactType": "Customer Support",
              "email": "info@thesislogix.in",
              "telephone": "+91-9691815989",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi"]
            }
          ]
        },
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
              "name": "About",
              "item": "https://thesislogix.in/about"
            }
          ]
        }
      })}
    </Script>
  );
}
