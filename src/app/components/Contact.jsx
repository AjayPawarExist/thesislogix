import React from 'react'
import Link from 'next/link'

export default function Practices() {
  return (
    <>
      {/* Starting of contactUs home page */}

      <div className="w-full py-8 bg-white text-black text-center">
        {/* Wrapper for Title and Subtitle */}
        <div className="max-w-2xl mx-auto">
          <h1 className="font-bold tracking-wide text-3xl sm:text-4xl">
            Get Started
          </h1>
          <p className=" py-3 tracking-wide  text-slate-500 text-sm sm:text-xl ">
            Contact us for personalized assistance today.
          </p>
        </div>

        {/* Button for Contact Us */}
        <Link href='/contact'>
          <button className="bg-blue-950 text-white tracking-wider mt-5 py-3 px-6  hover:bg-slate-800 text-xs sm:text-sm">
            Contact Us
          </button>
        </Link>
      </div>
      
      {/* Ending of contactus home page */}
    </>
  )
}
