"use client"

import { RiCustomerService2Line } from "react-icons/ri"
import { AiFillEdit } from "react-icons/ai"
import { GiArchiveResearch } from "react-icons/gi"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ResearchServices() {
  const services = [
    {
      icon: <RiCustomerService2Line className="h-10 w-10" />,
      title: "TOPIC MAKING SERVICE",
      description: "Relevant Topic, Right Start – Expert-guided ideas rooted in trends for research success.",
      link: "/topicmakings",
    },
    {
      icon: <AiFillEdit className="h-10 w-10" />,
      title: "THESIS WRITING",
      description: "Tailored Thesis, Perfect Precision – Crafted to Match Your Vision and University Standards.",
      link: "/thesiswriting",
    },
    {
      icon: <GiArchiveResearch className="h-10 w-10" />,
      title: "SYNOPSIS/RESEARCH OUTLINE",
      description: "Our expert will ensure that it is easy to understand by the scholars.",
      link: "/synopsis",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-2 md:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Research Services</h2>
          <p className="text-lg text-slate-600">
            Comprehensive academic support services designed to elevate your research journey from concept to
            completion.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item} className="group">
              <Card className="relative h-full overflow-hidden rounded-2xl border-none shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

                <CardContent className="relative z-10 p-8 flex flex-col items-center text-center h-full">
                  <div className="rounded-full bg-white/20 p-4 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{service.icon}</div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-blue-100 mb-8 flex-grow">{service.description}</p>

                  <Button
                    asChild
                    variant="secondary"
                    className="mt-auto bg-white text-blue-700 hover:bg-blue-50 rounded-full group-hover:translate-y-0 translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <Link href={service.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button
            asChild
            size="lg"
            className="bg-blue-700 hover:bg-blue-800 text-white rounded-full px-8 py-6 text-base shadow-lg hover:shadow-blue-200/50 hover:shadow-xl transition-all"
          >
            <Link href="/services">View All Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
