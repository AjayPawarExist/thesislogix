"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTAgNTEuNzZjMzYuMjEtMi4yNSA3Ny41Ny0zLjU4IDEyNi40MiAwQzE5MS4wMyA1Ni4yIDIzNi42OSA2NS4yOSAyODEuNDkgNjUuMjljNDUuMDkgMCA4My41LTEzLjI1IDEyOC4wNC0xMy4yNSA0My40IDAgODYuODIgMTMuMjUgMTI5LjQ3IDEzLjI1IDQzLjQgMCA4Ni44Mi0xMy4yNSAxMjkuNDctMTMuMjUgNDMuMzkgMCA4Ni44MiAxMy4yNSAxMjkuNDYgMTMuMjUgNDMuNDEgMCA4Ni44Mi0xMy4yNSAxMjkuNDctMTMuMjUgNDMuNCAwIDg2LjgyIDEzLjI1IDEyOS40NyAxMy4yNSA0My40IDAgODYuODItMTMuMjUgMTI5LjQ3LTEzLjI1IDQzLjQgMCA4Ni44MiAxMy4yNSAxMjkuNDcgMTMuMjUgNDMuMzkgMCA4Ni44Mi0xMy4yNSAxMjkuNDYtMTMuMjUgNDMuNDEgMCA4Ni44MiAxMy4yNSAxMjkuNDcgMTMuMjUgNDMuNCAwIDg2LjgyLTEzLjI1IDEyOS40Ny0xMy4yNSA0My40IDAgODYuODIgMTMuMjUgMTI5LjQ3IDEzLjI1IDQzLjM5IDAgODYuODItMTMuMjUgMTI5LjQ2LTEzLjI1IiBmaWxsLW9wYWNpdHk9Ii41Ii8+PHBhdGggZD0iTTAgNjUuNzFjMzYuMjEtMi4yNSA3Ny41Ny0zLjU4IDEyNi40MiAwQzE5MS4wMyA3MC4xNSAyMzYuNjkgNzkuMjQgMjgxLjQ5IDc5LjI0YzQ1LjA5IDAgODMuNS0xMy4yNSAxMjguMDQtMTMuMjUgNDMuNCAwIDg2LjgyIDEzLjI1IDEyOS40NyAxMy4yNSA0My40IDAgODYuODItMTMuMjUgMTI5LjQ3LTEzLjI1IDQzLjM5IDAgODYuODIgMTMuMjUgMTI5LjQ2IDEzLjI1IDQzLjQxIDAgODYuODItMTMuMjUgMTI5LjQ3LTEzLjI1IDQzLjQgMCA4Ni44MiAxMy4yNSAxMjkuNDcgMTMuMjUgNDMuNCAwIDg2LjgyLTEzLjI1IDEyOS40Ny0xMy4yNSA0My40IDAgODYuODIgMTMuMjUgMTI5LjQ3IDEzLjI1IDQzLjM5IDAgODYuODItMTMuMjUgMTI5LjQ2LTEzLjI1IDQzLjQxIDAgODYuODIgMTMuMjUgMTI5LjQ3IDEzLjI1IDQzLjQgMCA4Ni44Mi0xMy4yNSAxMjkuNDctMTMuMjUgNDMuNCAwIDg2LjgyIDEzLjI1IDEyOS40NyAxMy4yNSA0My4zOSAwIDg2LjgyLTEzLjI1IDEyOS40Ni0xMy4yNSIgZmlsbC1vcGFjaXR5PSIuNSIvPjxwYXRoIGQ9Ik0wIDc5LjY2YzM2LjIxLTIuMjUgNzcuNTctMy41OCAxMjYuNDIgMEMxOTEuMDMgODQuMSAyMzYuNjkgOTMuMTkgMjgxLjQ5IDkzLjE5YzQ1LjA5IDAgODMuNS0xMy4yNSAxMjguMDQtMTMuMjUgNDMuNCAwIDg2LjgyIDEzLjI1IDEyOS40NyAxMy4yNSA0My40IDAgODYuODItMTMuMjUgMTI5LjQ3LTEzLjI1IDQzLjM5IDAgODYuODIgMTMuMjUgMTI5LjQ2IDEzLjI1IDQzLjQxIDAgODYuODItMTMuMjUgMTI5LjQ3LTEzLjI1IDQzLjQgMCA4Ni44MiAxMy4yNSAxMjkuNDcgMTMuMjUgNDMuNCAwIDg2LjgyLTEzLjI1IDEyOS40Ny0xMy4yNSA0My40IDAgODYuODIgMTMuMjUgMTI5LjQ3IDEzLjI1IDQzLjM5IDAgODYuODItMTMuMjUgMTI5LjQ2LTEzLjI1IDQzLjQxIDAgODYuODIgMTMuMjUgMTI5LjQ3IDEzLjI1IDQzLjQgMCA4Ni44Mi0xMy4yNSAxMjkuNDctMTMuMjUgNDMuNCAwIDg2LjgyIDEzLjI1IDEyOS40NyAxMy4yNSA0My4zOSAwIDg2LjgyLTEzLjI1IDEyOS40Ni0xMy4yNSIgZmlsbC1vcGFjaXR5PSIuNSIvPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <div className="container relative z-10 px-2 md:px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Excel in Your Academic Journey?</h2>
          <p className="text-xl text-blue-100 mb-10">
            Join hundreds of successful scholars who have transformed their research with ThesisLogix.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50 rounded-full px-8 py-6 text-base shadow-lg hover:shadow-white/20 hover:shadow-xl transition-all"
            >
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-blue-700 hover:bg-blue-50 rounded-full px-8 py-6 text-base shadow-lg hover:shadow-white/20 hover:shadow-xl transition-all"
            >
              <Link href="tel:+919691815989">Schedule a Call</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
