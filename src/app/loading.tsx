import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white z-50">
      <div className="relative">
        {/* Animated blobs in background */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 -left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/abstract-grid.png')] bg-center opacity-5"></div>

        {/* Main content container */}
        <div className="relative backdrop-blur-sm bg-white/30 p-8 rounded-2xl shadow-xl border border-white/20 w-[320px] sm:w-[380px] flex flex-col items-center">
          {/* Logo */}
          <div className="mb-6 relative">
            <div className="text-3xl font-serif font-bold text-primary relative z-10">ThesisLogix</div>
            <div className="absolute -bottom-2 left-0 right-0 h-3 bg-blue-100 rounded-full -z-10 transform -rotate-1"></div>
          </div>

          {/* Loading animation */}
          <div className="relative w-24 h-24 mb-6">
            <div className="absolute inset-0 rounded-full border-t-4 border-blue-500 animate-spin"></div>
            <div
              className="absolute inset-2 rounded-full border-t-4 border-indigo-500 animate-spin"
              style={{ animationDuration: "1.5s" }}
            ></div>
            <div
              className="absolute inset-4 rounded-full border-t-4 border-purple-500 animate-spin"
              style={{ animationDuration: "2s" }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="h-8 w-8 text-primary animate-spin" />
            </div>
          </div>

          {/* Loading text */}
          <h2 className="text-xl font-medium text-gray-800 mb-2">Loading your research journey</h2>
          <p className="text-gray-600 text-center text-sm mb-4">Preparing academic excellence...</p>

          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2 overflow-hidden">
            <div className="bg-primary h-full rounded-full animate-progress"></div>
          </div>

          {/* Loading tips */}
          <div className="text-xs text-gray-500 text-center mt-4 max-w-xs">
            <span className="animate-pulse inline-block">Did you know?</span> Quality research methodology is the
            foundation of academic success.
          </div>
        </div>
      </div>
    </div>
  )
}
