import type { Metadata } from "next"
import AboutPageSchema from "./schema"
import AboutClient from "@/components/about/about-client"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover ThesisLogix – your trusted partner for academic research assistance, thesis support, and consultation. Learn about our mission, vision, and expert team dedicated to guiding students through their academic journey.",
  keywords: "about ThesisLogix, academic research assistance, thesis support, expert team, academic consultation",
  openGraph: {
    title: "About ThesisLogix",
    description:
      "Learn more about ThesisLogix and our commitment to providing high-quality academic research and thesis support services.",
    type: "website",
    url: "https://thesislogix.in/about",
    siteName: "ThesisLogix",
  },
}

export default function AboutPage() {
  return (
    <>
      <AboutPageSchema />
      <AboutClient />
    </>
  )
}
