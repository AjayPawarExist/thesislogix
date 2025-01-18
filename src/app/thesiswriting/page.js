import React from 'react'
import Image from 'next/image'
export default function page() {
  return (
    <><div className="bg-white text-black text-justify">
      {/* Hero Section */}
      <div className="flex justify-center">
        <div className="w-full h-[300px] bg-gradient-to-b from-blue-950 to-gray-600 text-center py-20">
          <h1 className="text-4xl lg:text-5xl text-white ">THESIS WRITING</h1>
          <p className="text-lg md:text-xl text-white mt-4">Home &gt; Services &gt; Thesis Writing</p>
        </div>
      </div>
      {/* image section of thesis writing  */}
      <div className='w-full flex justify-center pt-5'>
        <Image src="/thesiswriting.jpg" alt="error" width={400} height={100} className='w-[70%] h-[400px]' />
      </div>
      {/* Content Section */}
      <div className="px-6 sm:px-10 lg:px-24 py-10">
        {/* Thesis Writing Section */}
        <div className=" bg-gray-100 shadow-lg shadow-blue-200 rounded-lg p-6 lg:p-10 mb-20">
          <p className="mb-6 text-gray-700">
            Thesis writing is one of the main processes of PhD. Every chapter is well designed according to your taste
            and preference of scholars and as per the university guidelines.
          </p>
          <h2 className="text-xl lg:text-2xl font-semibold mb-4">Chapters include</h2>
          <ul className="list-disc pl-6 text-gray-800 space-y-2">
            <li>Introduction</li>
            <li>Literature Review</li>
            <li>Objective of the study</li>
            <li>Research Methodology</li>
            <li>Data collection and Analysis</li>
            <li>Conclusion / Findings / Suggestions</li>
            <li>References</li>
          </ul>
          <p className="mt-6 text-gray-700">
            Our team provide fundamental PhD Thesis Writing Assistance to researchers so they can start their work
            right from the beginning of the thesis design in an organized mode. Even a beginner researcher who finds it
            not easy to start his/her research work can look up to IPS Thesis Services for PhD Thesis Writing
            Assistance. We have native PhD Thesis Writers who guide you to write every word with precision while
            following all the style rules and formatting standards provided by your university.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
