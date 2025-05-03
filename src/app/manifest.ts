import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ThesisLogix - Professional Academic Research Services",
    short_name: "ThesisLogix",
    description:
      "Expert academic research services including thesis writing, plagiarism checking, implementation, and more for researchers and students.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1e3a8a",
    icons: [
      {
        src: "/icons/icon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/icons/icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        src: "/icons/icon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/icons/icon-128x128.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: "/icons/icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        src: "/icons/icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
      },
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-384x384.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    orientation: "portrait",
    categories: ["education", "research", "academic"],
    screenshots: [
      {
        src: "/screenshots/home-screen.png",
        sizes: "1280x720",
        type: "image/png",
        label: "Home Screen of ThesisLogix",
      },
      {
        src: "/screenshots/services-screen.png",
        sizes: "1280x720",
        type: "image/png",
        label: "Services Offered by ThesisLogix",
      },
    ],
    prefer_related_applications: false,
    related_applications: [],
    shortcuts: [
      {
        name: "Contact Us",
        url: "/contact",
        description: "Reach out to our team",
      },
      {
        name: "Our Services",
        url: "/services",
        description: "View our academic services",
      },
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
    id: "thesislogix",
  }
}
