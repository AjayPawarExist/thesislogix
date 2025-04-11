import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: '/', lastModified: new Date() },
    { url: '/aboutus', lastModified: new Date() },
    { url: '/book', lastModified: new Date() },
    { url: '/contact', lastModified: new Date() },
    { url: '/implementation', lastModified: new Date() },
    { url: '/pattern', lastModified: new Date() },
    { url: '/plagiarism', lastModified: new Date() },
    { url: '/publication', lastModified: new Date() },
    { url: '/question', lastModified: new Date() },
    { url: '/rewriting', lastModified: new Date() },
    { url: '/synopsis', lastModified: new Date() },
    { url: '/thesisanalysis', lastModified: new Date() },
    { url: '/thesiswriting', lastModified: new Date() },
    { url: '/topicmakings', lastModified: new Date() },
  ]
}