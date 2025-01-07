"use client"; // Mark this file as a client component

import { useState } from "react";

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  // Toggle FAQ open/close
  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

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
      question:
        "IS THERE ANY SOFTWARE WHICH THE EXPERT WILL USE TO PROOFREAD MY DOCTORAL RESEARCH?",
      answer:
        "Our professionals prefer to do the proofreading manually because we can’t rely on software. However, if you want us to use the tools, we will use the software.",
    },
    {
      question: "WHAT IS THE LENGTH PAGES OF MY THESIS?",
      answer:
        "Generally, the length of a PhD thesis varies from 100-150 pages; however, it could go up to 200-250 pages depending on the specialization.",
    },

  ];

  return (
    <div className="w-full px-4 py-10 bg-white text-black">
      {/* Header Section */}
      <div className="w-full mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="text-sm md:text-base text-gray-500 mt-3">
          Find answers to your most pressing questions about our academic
          consulting services and processes.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="mt-10 w-full mx-auto space-y-6 px-40">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b last:border-none pb-4 transition-all duration-300"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center py-3 text-left text-lg font-semibold text-gray-900 hover:text-blue-900 focus:outline-none"
            >
              {faq.question}
              <span
                className={`transform transition-transform duration-300 ${
                  open === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            {/* Answer */}
            {open === index && (
              <div className="mt-2 text-sm md:text-base text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
