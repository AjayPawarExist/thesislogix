"use client"

import { motion } from "framer-motion"

export default function TrustedBy() {
  const universities = [
    "Oxford University",
    "Cambridge University",
    "Harvard University",
    "Stanford University",
    "MIT",
    "Delhi University",
    "IIT Bombay",
  ]

  return (
    <section className="py-10 bg-white border-b border-slate-100">
      <div className="container mx-auto px-2 md:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="text-sm font-medium text-slate-500">TRUSTED BY SCHOLARS FROM</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-x-12 gap-y-6"
        >
          {universities.map((university, index) => (
            <div
              key={index}
              className="text-slate-400 font-medium text-sm md:text-base opacity-70 hover:opacity-100 transition-opacity"
            >
              {university}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
