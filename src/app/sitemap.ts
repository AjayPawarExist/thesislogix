import type { MetadataRoute } from 'next'
  
 export default function sitemap(): MetadataRoute.Sitemap {
   return [
     { url: `${process.env.NEXT_PUBLIC_BASE_URL}/`, lastModified: new Date() },
     { url: `${process.env.NEXT_PUBLIC_BASE_URL}/aboutus`, lastModified: new Date() },
     { url: `${process.env.NEXT_PUBLIC_BASE_URL}/book`, lastModified: new Date() },
     { url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`, lastModified: new Date() },
     { url: `${process.env.NEXT_PUBLIC_BASE_URL}/implementation`, lastModified: new Date() },
     { url: `${process.env.NEXT_PUBLIC_BASE_URL}/pattern`, lastModified: new Date() },
     { url: `${process.env.NEXT_PUBLIC_BASE_URL}/plagiarism`, lastModified: new Date() },
     { url: `${process.env.NEXT_PUBLIC_BASE_URL}/publication`, lastModified: new Date() },
     { url: `${process.env.NEXT_PUBLIC_BASE_URL}/question`, lastModified: new Date() },
     { url: `${process.env.NEXT_PUBLIC_BASE_URL}/rewriting`, lastModified: new Date() },
     { url: `${process.env.NEXT_PUBLIC_BASE_URL}/synopsis`, lastModified: new Date() },
     { url: `${process.env.NEXT_PUBLIC_BASE_URL}/thesisanalysis`, lastModified: new Date() },
     { url: `${process.env.NEXT_PUBLIC_BASE_URL}/thesiswriting`, lastModified: new Date() },
     { url: `${process.env.NEXT_PUBLIC_BASE_URL}/topicmakings`, lastModified: new Date() },
   ]
 }