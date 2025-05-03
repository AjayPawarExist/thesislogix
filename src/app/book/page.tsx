"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, CheckCircle, ArrowRight, Edit, Layout, BookMarked } from "lucide-react"

export default function BookPublishingPage() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const services = [
    {
      icon: <BookOpen className="h-10 w-10" />,
      title: "Dissertation-to-Book Conversion",
      description:
        "Expert transformation of your academic dissertation into a marketable book that appeals to a broader audience.",
    },
    {
      icon: <Edit className="h-10 w-10" />,
      title: "Editing and Proofreading",
      description:
        "Comprehensive editing services including developmental editing, copy-editing, and final proofreading.",
    },
    {
      icon: <Layout className="h-10 w-10" />,
      title: "Cover Design and Formatting",
      description:
        "Professional interior layout design and creative cover design that captures the essence of your work.",
    },
    {
      icon: <BookMarked className="h-10 w-10" />,
      title: "Publishing and Distribution",
      description: "Complete publishing services including ISBN assignment, online advertising, and print book sales.",
    },
  ]

  const whyChooseUs = [
    {
      title: "Expertise",
      description: "Industry professionals with years of experience in writing, editing, and publishing.",
    },
    {
      title: "Personalized Service",
      description: "Customized solutions to meet your specific needs and goals.",
    },
    {
      title: "Quality Assurance",
      description: "Rigorous review process to ensure your book meets the highest standards.",
    },
    {
      title: "Confidentiality",
      description: "Strict privacy maintained throughout the entire process.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-indigo-900 py-20 md:py-24">
        <div className="absolute inset-0 z-0 opacity-20">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="small-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
              </pattern>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <rect width="100" height="100" fill="url(#small-grid)" />
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container relative z-10 px-4 md:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">BOOK PUBLISHING</h1>
            <nav className="text-blue-200 text-sm md:text-base">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="mx-2">&gt;</span>
              <Link href="/services" className="hover:text-white transition-colors">
                Services
              </Link>
              <span className="mx-2">&gt;</span>
              <span className="text-white">Book Publishing</span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-blue-100 to-indigo-100 blur-xl opacity-70"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?key=book-publishing&width=1200&height=600"
                  alt="Book Publishing"
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Book Publishing Service Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-none shadow-xl overflow-hidden">
              <CardContent className="p-8 md:p-10">
                <div className="flex items-start gap-6">
                  <div className="hidden md:block">
                    <div className="rounded-full bg-blue-100 p-4 text-blue-700">
                      <BookOpen className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900">
                      Book Publishing Service
                    </h2>
                    <p className="text-slate-600">
                      Are you a PG and PhD scholar looking to transform your dissertation into a publishable book? Our
                      specialized &quot;book writing and publishing services&quot; for PG and PhD scholars are designed to help
                      you bring your academic research to a broader audience. From manuscript development to
                      publication, we offer comprehensive support tailored to your scholarly needs.
                    </p>
                    <p className="text-slate-600">
                      Ensuring your manuscript is polished and error-free is crucial for academic credibility.
                      Consequently, our editing services include developmental editing to refine your book&apos;s structure
                      and content, copy-editing for grammar and style, and proofreading for final error checks. We
                      adhere to academic standards and style guides, ensuring your book is of the highest quality.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Cost Effective Services Section */}
      <section className="py-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-none shadow-xl overflow-hidden">
              <CardContent className="p-8 md:p-10">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">
                      Cost Effective Services
                    </h2>
                    <p className="text-slate-600">
                      From the very beginning of preparation through the release of your book, we&apos;ve got you covered.
                      We&apos;ll talk to you in person and do some research on your book proposal ideas. After research,
                      we&apos;ll begin plotting, outlining, and developing new content based on your suggestions, with your
                      comments and advice appreciated throughout the process.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">
                      Best Use Of Software
                    </h2>
                    <p className="text-slate-600">
                    &apos;Thesis or Research Writing&apos; can be exhausting. Opting for &quot;Plagiarism Check &amp; Removal Services&quot;
                      helps you avoid these difficulties. We use tools like Turnitin to check and remove plagiarism,
                      providing multiple checks to ensure your research is plagiarism-free, along with a Turnitin
                      report.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">Attractive Design</h2>
                    <p className="text-slate-600">
                      We provide a print-on-demand publishing model. Our services include ISBN assignment, online
                      advertising via Google Books and Google Play, free author copies, interior layout design, creative
                      cover design, proofreading, content editing, and print book sales. With ThesisLogix, turning your
                      ideas into a published book is easy and affordable.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Services and Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-none shadow-xl overflow-hidden">
                <CardContent className="p-8 md:p-10">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-6 text-center">
                    Why Choose Us?
                  </h2>
                  <div className="space-y-4">
                    {whyChooseUs.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="rounded-full bg-blue-100 p-1 text-blue-700 flex-shrink-0 mt-1">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900">{item.title}:</h3>
                          <p className="text-slate-600">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Our Services */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-none shadow-xl overflow-hidden">
                <CardContent className="p-8 md:p-10">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-6 text-center">
                    Our Services
                  </h2>
                  <p className="text-slate-600 text-center mb-6">
                    Comprehensive services to transform your ideas into a published masterpiece, from conceptualization
                    to distribution.
                  </p>
                  <div className="space-y-4">
                    {services.map((service, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        <div className="rounded-full bg-blue-100 p-2 text-blue-700 flex-shrink-0">{service.icon}</div>
                        <div>
                          <h3 className="font-bold text-slate-900">{service.title}</h3>
                          <p className="text-sm text-slate-600">{service.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Publishing Process Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Book Publishing Process</h2>
            <p className="text-lg text-slate-600">
              Our streamlined publishing process ensures your academic work is transformed into a professional book that
              reaches your target audience.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform md:-translate-x-1/2"></div>

              {/* Process Steps */}
              {[
                {
                  title: "Manuscript Assessment",
                  description:
                    "We evaluate your dissertation or manuscript to determine the best approach for converting it into a publishable book.",
                },
                {
                  title: "Content Development",
                  description:
                    "Our experts work with you to adapt your academic content for a broader audience while maintaining scholarly integrity.",
                },
                {
                  title: "Editing & Design",
                  description:
                    "Comprehensive editing, formatting, and design services to create a professional and visually appealing book.",
                },
                {
                  title: "Publication",
                  description:
                    "We handle all aspects of the publication process, including ISBN assignment and distribution setup.",
                },
                {
                  title: "Marketing & Distribution",
                  description:
                    "Strategic marketing and distribution to ensure your book reaches your target audience and achieves visibility.",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Step Marker */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white transform -translate-x-1/2 flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>

                  {/* Content */}
                  <div className="ml-12 md:ml-0 md:w-1/2 p-6 bg-white rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-blue-700 mb-3">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-[10%] right-[10%] w-64 h-64 rounded-full bg-blue-400 mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute top-[40%] left-[10%] w-72 h-72 rounded-full bg-indigo-400 mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-[10%] right-[20%] w-80 h-80 rounded-full bg-purple-400 mix-blend-overlay filter blur-3xl"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Transform Your Research into a Published Book?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Contact us today to discuss how our book publishing services can help you share your academic work with a
              broader audience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50 rounded-full px-8 py-6 text-base shadow-lg hover:shadow-white/20 hover:shadow-xl transition-all"
              >
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-base"
              >
                <Link href="tel:+919691815989">Schedule a Consultation</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
