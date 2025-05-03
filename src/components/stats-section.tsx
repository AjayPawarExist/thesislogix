"use client"

import { Users, BookOpen, Award, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const stats = [
    {
      value: "500+",
      label: "Scholars Assisted",
      icon: <Users className="h-6 w-6" />,
      description: "Helping researchers achieve academic excellence",
    },
    {
      value: "15+",
      label: "Years Experience",
      icon: <Clock className="h-6 w-6" />,
      description: "Trusted expertise in academic consulting",
    },
    {
      value: "100%",
      label: "Success Rate",
      icon: <Award className="h-6 w-6" />,
      description: "Committed to your research success",
    },
    {
      value: "50+",
      label: "Publications",
      icon: <BookOpen className="h-6 w-6" />,
      description: "Supporting scholarly contributions",
    },
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-2 md:px-4">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={item} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="relative flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="rounded-full bg-blue-50 p-4 text-blue-600 mb-4">{stat.icon}</div>
                <h3 className="text-4xl font-bold text-slate-900 mb-1">{stat.value}</h3>
                <p className="text-lg font-medium text-blue-600 mb-2">{stat.label}</p>
                <p className="text-sm text-slate-600">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
