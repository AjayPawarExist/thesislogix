"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutSection() {
  const achievements = [
    "Trusted by 500+ research scholars",
    "15+ years of academic excellence",
    "Expert team of PhD consultants",
    "Customized research solutions",
    "Guaranteed plagiarism-free content",
    "Timely delivery on all projects",
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container px-2 md:px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="order-2 md:order-1"
>
  <div className="relative">
    {/* Glow background */}
    <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-blue-200 to-indigo-300 blur-xl opacity-60 z-0"></div>

    <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
      <Image
        src="/placeholder.svg?key=about-thesislogix"
        alt="About ThesisLogix"
        width={600}
        height={600}
        className="w-full h-auto"
      />
    </div>

    {/* Stats Cards */}
    <div className="grid grid-cols-2 gap-4 mt-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-xl p-6 shadow-lg"
      >
        <div className="text-4xl font-bold text-blue-800">100%</div>
        <p className="text-slate-800 mt-2">Success Rate</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-br from-amber-200 to-amber-300 rounded-xl p-6 shadow-lg"
      >
        <div className="text-4xl font-bold text-amber-700">15+</div>
        <p className="text-slate-800 mt-2">Years Experience</p>
      </motion.div>
    </div>
  </div>
</motion.div>


          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">About ThesisLogix</h2>

            <div className="space-y-6 text-slate-600">
              <p className="text-lg">
                Welcome to ThesisLogix Services, a trusted leader in PG and PhD research assistance since 2005. With a
                commitment to empowering research scholars, we provide comprehensive research consultation services
                tailored to the unique needs of each candidate.
              </p>

              <p className="text-lg">
                At ThesisLogix, we understand the significance of groundbreaking research in advancing academic careers.
                Our mission is to help scholars excel by offering expert guidance at every stage of the research
                process.
              </p>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
              >
                {achievements.map((achievement, index) => (
                  <motion.div key={index} variants={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>{achievement}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="pt-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-700 hover:bg-blue-800 text-white rounded-full px-8 py-6 text-base shadow-lg hover:shadow-blue-200/50 hover:shadow-xl transition-all"
                >
                  <Link href="/aboutus">Learn More About Us</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
