import React from 'react'
import Link from 'next/link'
export default function Contact() {
  return (
    <>
      <div className="w-full py-8 bg-white text-black text-center">
        {/* Wrapper for Title and Subtitle */}
        <div className="max-w-2xl mx-auto">
          <h1 className="font-semibold tracking-wide text-3xl sm:text-3xl md:text-4xl lg:5xl">
            Get Started
          </h1>
          <p className=" py-3 tracking-wide text-slate-500 text-sm sm:text-base md:text-lg lg:text-xl ">
            Contact us for personalized assistance today.
          </p>
        </div>

        {/* Button for Contact Us */}
        <Link href="/contact">
          <button className="bg-blue-950 text-white font-light  mt-5 py-2 px-5  hover:bg-slate-700 text-xs sm:text-sm md:text-base lg:text-lg">
            Contact Us
          </button>
        </Link>
      </div>

    </>
  )
}
