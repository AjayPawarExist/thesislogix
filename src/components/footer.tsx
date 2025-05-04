"use client"

import { FaPhoneAlt, FaFacebook, FaInstagram, FaMapMarkerAlt, FaYoutube } from "react-icons/fa"
import { IoMail } from "react-icons/io5"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { siteConfig } from "@/config/site"

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact", href: "/contact" },
  ]

  const services = [
    { name: "Topic Making", href: "/topicmakings" },
    { name: "Thesis Writing", href: "/thesiswriting" },
    { name: "Thesis Analysis", href: "/thesisanalysis" },
    { name: "Synopsis/Research", href: "/synopsis" },
    { name: "Implementation", href: "/implementation" },
    { name: "Pattern", href: "/pattern" },
    { name: "Plagiarism Check", href: "/plagiarism" },
    { name: "Paper Publication", href: "/publication" },
    { name: "Book Publishing", href: "/book" },
    { name: "Questionnaire", href: "/question" },
    { name: "AI Content Rewriting", href: "/rewriting" },
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-blue-950 text-slate-200">
      <div className="container mx-auto py-16 px-2 md:px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 xl:gap-8">
          {/* About */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="font-bold text-white">TL</span>
              </div>
              <h3 className="text-xl font-bold text-white">ThesisLogix</h3>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              Professional research assistance for PG and PhD scholars. We deliver precise analysis, reliable reports,
              and tailored mentoring for academic excellence.
            </p>
            <div className="flex gap-3">
              <Link
                href={siteConfig.links.facebook}
                className="bg-slate-800 hover:bg-blue-700 text-white p-2.5 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={18} />
              </Link>
              <Link
                href={siteConfig.links.youtube}
                className="bg-slate-800 hover:bg-blue-700 text-white p-2.5 rounded-full transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube size={18} />
              </Link>
              <Link
                href={siteConfig.links.instagram}
                className="bg-slate-800 hover:bg-blue-700 text-white p-2.5 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-6 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-600"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-semibold text-white mb-6 relative">
              Services
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-600"></span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
              {services.map((service, index) => (
                <div key={index}>
                  <Link
                    href={service.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-6 relative">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-600"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="text-blue-400 mt-1 flex-shrink-0" />
                <Link
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  {siteConfig.contact.phone}
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <IoMail className="text-blue-400 mt-1 flex-shrink-0" />
                <Link
                  href="mailto:info@thesislogix.in"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  {siteConfig.contact.email}
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-400 mt-1 flex-shrink-0" />
                <Link href="https://maps.app.goo.gl/D31Wba2jDoDNYPTB7" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <span>{siteConfig.contact.address}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-slate-800" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} ThesisLogix. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-sm text-slate-500 hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-slate-500 hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="text-sm text-slate-500 hover:text-blue-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
