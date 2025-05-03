"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "ThesisLogix transformed my research journey. Their expert guidance helped me develop a compelling thesis that earned high praise from my committee.",
      author: "Dr. Priya Sharma",
      role: "PhD in Economics",
      avatar: "PS",
    },
    {
      quote:
        "The team at ThesisLogix provided exceptional support throughout my dissertation process. Their attention to detail and methodological expertise were invaluable.",
      author: "Dr. Rahul Mehta",
      role: "PhD in Computer Science",
      avatar: "RM",
    },
    {
      quote:
        "I was struggling with my research methodology until I found ThesisLogix. Their consultants helped me refine my approach and develop a robust framework.",
      author: "Ananya Patel",
      role: "PhD Candidate, Psychology",
      avatar: "AP",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setDirection(1)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, testimonials.length])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
    }),
  }

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-30">
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

      <div className="container relative z-10 px-2 md:px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">What Our Clients Say</h2>
          <p className="text-lg text-slate-600">
            Hear from scholars who have successfully completed their research journey with our support.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden">
            <CardContent className="relative p-8 md:p-12 min-h-[300px] flex flex-col">
              <div className="text-blue-600 mb-8">
                <Quote className="h-12 w-12 opacity-20" />
              </div>

              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex-grow"
                >
                  <p className="text-xl md:text-2xl text-slate-700 italic mb-8">{testimonials[currentIndex].quote}</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <Avatar className="h-12 w-12 border-2 border-blue-100">
                      <AvatarFallback className="bg-blue-700 text-white">
                        {testimonials[currentIndex].avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonials[currentIndex].author}</p>
                      <p className="text-sm text-slate-500">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full h-10 w-10 border-slate-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  <ChevronLeft className="h-5 w-5" />
                  <span className="sr-only">Previous</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full h-10 w-10 border-slate-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  <ChevronRight className="h-5 w-5" />
                  <span className="sr-only">Next</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-blue-600 w-6" : "bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
