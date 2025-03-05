export default function sitemap() {
    const baseUrl = "https://thesislogix.com"; // Replace with your actual domain
  
    // List of all static pages
    const staticPages = [
      "",
      "/about",
      "/services",
      "/contact",
      "/pricing",
      "/faq",
      "/blog",
    ];
  
    return staticPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date().toISOString(),
    }));
  }
  