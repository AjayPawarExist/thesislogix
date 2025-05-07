import { siteConfig } from "@/config/site";
import Script from "next/script";

export default function SchemaOrg() {
  return (
    <Script
      id="ld-json"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "ThesisLogix",
          url: siteConfig.url,
          logo: `${siteConfig.url}/logo.png`,
          sameAs: [
            "https://twitter.com/thesislogix",
            "https://www.linkedin.com/company/thesislogix"
          ],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-XXXXXXXXXX",
            contactType: "Customer Support",
            areaServed: "IN",
            availableLanguage: "English"
          }
        }),
      }}
    />
  );
}
