"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PhoneCall, Mail, MapPin, Send } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="container px-2 md:px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Get In Touch</h2>
          <p className="text-lg text-slate-600">
            Have questions about our services? Reach out to our team for personalized assistance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1 space-y-8"
          >
            <div className="bg-slate-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-blue-100 p-3 text-blue-700">
                  <PhoneCall className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                  <p className="text-slate-600 mb-2">Speak directly with our consultants</p>
                  <Link href="tel:+919691815989" className="text-blue-700 hover:underline">
                    +91 96918 15989
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-blue-100 p-3 text-blue-700">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                  <p className="text-slate-600 mb-2">Send us your queries anytime</p>
                  <Link href="mailto:info@thesislogix.com" className="text-blue-700 hover:underline">
                    info@thesislogix.com
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-blue-100 p-3 text-blue-700">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Office Hours</h3>
                  <p className="text-slate-600">Monday - Friday: 8am - 5pm</p>
                  <p className="text-slate-600">Saturday: 9am - 4pm</p>
                  <p className="text-slate-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8 hover:shadow-2xl transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="rounded-lg border-slate-200 focus:border-blue-500 focus:ring-blue-500 h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="rounded-lg border-slate-200 focus:border-blue-500 focus:ring-blue-500 h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                    Mobile Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="rounded-lg border-slate-200 focus:border-blue-500 focus:ring-blue-500 h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-700">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can we help you?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="rounded-lg border-slate-200 focus:border-blue-500 focus:ring-blue-500 h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[150px] rounded-lg border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white rounded-lg py-6 text-base shadow-lg hover:shadow-blue-200/50 hover:shadow-xl transition-all"
                >
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
