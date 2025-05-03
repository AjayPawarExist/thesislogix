"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Home, Mail, RefreshCw } from "lucide-react"
import { motion } from "framer-motion"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-grid-slate-700/[0.1] bg-[size:20px_20px]" />
      </div>

      {/* Animated circles */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />

      <div className="container max-w-4xl mx-auto z-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12">
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <div className="text-[10rem] font-bold text-blue-600/10">404</div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-5xl font-bold text-blue-600">
                  404
                </div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold text-slate-800 mb-4"
            >
              Page Not Found
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-slate-600 max-w-md mx-auto mb-8"
            >
              The page you&apos;re looking for doesn&apos;t exist or has been moved. Let us help you find your way back.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/">
                <Button size="lg" className="w-full sm:w-auto group">
                  <Home className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                  Return to Home
                </Button>
              </Link>

              <Link href="/#contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto group">
                  <Mail className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                  Contact Support
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="border-t border-slate-200 pt-6 mt-6"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center text-sm text-slate-500">
                <RefreshCw className="h-4 w-4 mr-2 animate-spin-slow" />
                <span>Still looking for something?</span>
              </div>

              <div className="flex gap-4">
                <Link
                  href="/services"
                  className="text-sm text-blue-600 hover:text-blue-800 transition-colors flex items-center"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Browse Services
                </Link>

                <Link
                  href="/aboutus"
                  className="text-sm text-blue-600 hover:text-blue-800 transition-colors flex items-center"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  About Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Add custom animation for the blob effect */}
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-spin-slow {
          animation: spin 4s linear infinite;
        }
      `}</style>
    </div>
  )
}
