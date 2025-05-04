import { ArrowDown } from "lucide-react"

export default function ContactHero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "24px 24px",
          }}
        ></div>
      </div>

      {/* Animated Blob */}
      <div className="absolute -right-40 -top-40 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container px-2 md:px-4 mx-auto py-16 md:py-24 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">Get in Touch</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mb-6"></div>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl">
            Have questions about our services? Need academic guidance? Our team is ready to assist you with personalized
            solutions for your research needs.
          </p>
          <div className="flex items-center text-blue-200 hover:text-white transition-colors">
            <span className="mr-2">Scroll down to contact us</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  )
}
