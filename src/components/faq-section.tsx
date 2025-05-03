"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  // FAQ Data
  const faqs = [
    {
      question: "HOW TO FRAME PHD TOPIC?",
      answer:
        "While framing the topic, always be particular about the research ideas and also about the university and professional background. The topic should be new which means it should be previously attempted.",
    },
    {
      question: "WHAT IF UNIVERSITY REJECTS THE TOPIC?",
      answer:
        "ThesisLogix Services takes full responsibility of the consulting service offered and hence if the topic or proposal is rejected, we provide an additional set of topics after understanding the reason of refusal.",
    },
    {
      question: "IS THERE ANY SOFTWARE WHICH THE EXPERT WILL USE TO PROOFREAD MY DOCTORAL RESEARCH?",
      answer:
        "Our professionals prefer to do the proofreading manually because we can't rely on software. However, if you want us to use the tools, we will use the software.",
    },
    {
      question: "WHAT IS THE LENGTH PAGES OF MY THESIS?",
      answer:
        "Generally, the length of a PhD thesis varies from 100-150 pages; however, it could go up to 200-250 pages depending on the specialization.",
    },
  ]

  return (
    <section id="faqs" className="py-20 md:py-28 bg-white">
      <div className="container px-2 md:px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600">
            Find answers to your most pressing questions about our academic consulting services and processes.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-slate-50 transition-colors text-left font-medium text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0 text-slate-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
