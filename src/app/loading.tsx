"use client"

import { useState, useEffect } from "react"
import { Loader2 } from 'lucide-react'

export default function Loading() {
  const [progress, setProgress] = useState(0)
  
  // Simulate loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 10
        return newProgress >= 100 ? 100 : newProgress
      })
    }, 400)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-950 z-50">
      <div className="w-full max-w-md px-8">
        {/* Simple logo */}
        <h1 className="text-2xl font-medium text-gray-800 dark:text-gray-200 text-center mb-8">
          ThesisLogix
        </h1>
        
        {/* Minimal loading spinner */}
        <div className="flex justify-center mb-6">
          <Loader2 className="h-8 w-8 text-gray-800 dark:text-gray-200 animate-spin" />
        </div>
        
        {/* Simple progress bar */}
        <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-1 mb-4 overflow-hidden">
          <div 
            className="bg-gray-800 dark:bg-gray-200 h-full rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        {/* Minimal loading text */}
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
          Loading your research
        </p>
      </div>
    </div>
  )
}
