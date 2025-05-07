import ContactForm from "@/components/contact/contact-form"
import ContactHero from "@/components/contact/contact-hero"
import ContactInfo from "@/components/contact/contact-info"
import ContactMap from "@/components/contact/contact-map"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Reach out to our academic experts for personalized research assistance, thesis support, and consultation. We're here to help with your academic journey.",
  keywords: "academic support contact, thesis help, research assistance, contact academic experts",
  openGraph: {
    title: "Contact ThesisLogix",
    description: "Get in touch with our team for personalized academic support and thesis guidance.",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <ContactHero />

      {/* Contact Content */}
      <section className="container px-2 md:px-4 mx-auto py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Side: Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-10 transform transition-all duration-300 hover:shadow-xl">
            <ContactForm />
          </div>

          {/* Right Side: Contact Info and Map */}
          <div className="space-y-8">
            <ContactInfo />
            <ContactMap />
          </div>
        </div>
      </section>
    </main>
  )
}
