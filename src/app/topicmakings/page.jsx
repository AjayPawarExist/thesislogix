import React from 'react'
import Image from 'next/image'
function page() {
  return (

    <>
      <div className="flex flex-col items-center">
        {/* Main Section - Gradient Background */}
        <div className="w-full bg-gradient-to-b from-blue-950 to-gray-600 text-center py-20">
          <h1 className="text-2xl lg:text-5xl font-semibold text-white">TOPIC MAKING SERVICE</h1>
          <p className="text-md md:text-xl text-white mt-4">
            Home &gt; Services &gt; Topic Making Service
          </p>
        </div>

        {/* image section of topic making service  */}
        <div className='w-full flex justify-center pt-5'>
          <Image src="/topicmaking.jpg" alt="error" width={400} height={100} className="w-[70%] h-auto max-h-[400px] sm:w-full md:w-[80%]" />
        </div>

        {/* Card Container */}
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-6">
          <div className="bg-gray-100 shadow-lg shadow-blue-200 rounded-lg p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl font-bold">TOPIC MAKING SERVICE</h2>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-justify">
              Choosing a relevant and unique topic according to your stream is the first step towards success. Our PG and PhD
              team discuss with scholars about the recent trends in society then come up with an effective topic.
              Some factors we consider before suggesting a topic are:
            </p>

            {/* Factors List */}
            <ul className="list-disc pl-6 mt-4 space-y-2 text-justify">
              <li>Interest of the researcher and their area</li>
              <li>Exclusivity of the topic to make the project unique</li>
              <li>Scope of exploring the topic and conducting original research</li>
              <li>Feasibility of covering the topic within a particular time frame</li>
              <li>Estimated costs involved in researching the topic</li>
              <li>Skills, subject understanding, and research capabilities of the researcher</li>
              <li>Likely contributions of research on the topic</li>
            </ul>
          </div>

          {/* Additional Info Section */}
          <div className="bg-gray-100 shadow-lg shadow-blue-200 rounded-lg mt-8 p-6 sm:p-8 md:p-12 mb-20 text-justify">
            <p className="text-base md:text-lg leading-relaxed">
              The researcher should have high-quality knowledge in the selected area. Our PG and PhD thesis topic assistance
              service can be availed separately or combined with our thesis writing or synopsis writing services. We
              evaluate areas with significant research gaps to see if they align with the student&apos;s passion, available
              resources, and capabilities. This ensures we suggest only the most relevant and contributory topics.
            </p>
          </div>
        </div>
      </div>



    </>

  )
}

export default page