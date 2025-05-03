"use client"

import { CheckCircle2, FileText, Search, BookOpen, PenTool, Award } from "lucide-react"
import { motion } from "framer-motion"

export default function ProcessSection() {
  const steps = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Topic Selection",
      description:
        "We help you identify relevant, impactful research topics aligned with current trends and your interests.",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Research Planning",
      description: "Develop a comprehensive research plan with clear methodology and timeline.",
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Literature Review",
      description: "Thorough analysis of existing research to establish context and identify gaps.",
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Writing & Editing",
      description: "Professional writing assistance with meticulous editing and formatting.",
    },
    {
      icon: <CheckCircle2 className="h-8 w-8" />,
      title: "Quality Assurance",
      description: "Rigorous quality checks to ensure academic integrity and excellence.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Final Delivery",
      description: "Timely delivery of polished, publication-ready research documents.",
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
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-[10%] right-[10%] w-64 h-64 rounded-full bg-blue-400 mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute top-[40%] left-[10%] w-72 h-72 rounded-full bg-indigo-400 mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[20%] w-80 h-80 rounded-full bg-purple-400 mix-blend-overlay filter blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10 px-2 md:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-900/50 text-blue-200 rounded-full text-sm font-medium mb-4">
            Our Methodology
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our Research Process</h2>
          <p className="text-lg text-blue-100">
            A systematic approach to ensure your academic success at every stage of your research journey.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={item} whileHover={{ y: -5 }} className="group">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:bg-gradient-to-br hover:from-blue-900/50 hover:to-indigo-900/50 transition-all duration-300 h-full">
                <div className="flex items-start gap-5">
                  <div className="rounded-full bg-blue-900/50 p-3 text-blue-300 flex-shrink-0 group-hover:bg-blue-800/70 group-hover:text-blue-200 transition-colors">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-100 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-300 group-hover:text-blue-200 transition-colors">{step.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
