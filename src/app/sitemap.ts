import type { MetadataRoute } from 'next'

const pages = [
  '/',
  '/aboutus',
  '/book',
  '/contact',
  '/implementation',
  '/pattern',
  '/plagiarism',
  '/publication',
  '/question',
  '/rewriting',
  '/synopsis',
  '/thesisanalysis',
  '/thesiswriting',
  '/topicmakings',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return pages.map((url) => ({
    url,
    lastModified,
  }))
}
