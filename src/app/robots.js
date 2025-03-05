export default function robots() {
    return {
      rules: [
        {
          userAgent: "*",
          allow: "/", // Allows all pages to be indexed
        },
      ],
      sitemap: "https://thesislogix.com/sitemap.xml", // Update with actual domain
      host: "https://thesislogix.com",
    };
  }
  