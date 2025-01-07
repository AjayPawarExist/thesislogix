import React from 'react'

function page() {
  return (

    <>
    <div className="flex flex-col items-center">
            {/* Main Section - Gradient Background */}
            <section className="w-full bg-gradient-to-b from-blue-950 to-gray-600 text-center py-20">
              <h1 className="text-5xl font-semibold text-white">TOPIC MAKING SERVICE</h1>
              <p className="text-lg md:text-xl text-gray-300 mt-4">
                Home Services | TOPIC MAKING SERVICE
              </p>
            </section>
      
            {/* Card Container */}
            <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-6">
              <div className="bg-gray-100 shadow-lg shadow-blue-200 rounded-lg p-6 sm:p-8 md:p-12">
                <h2 className="text-2xl font-bold">TOPIC MAKING SERVICE</h2>
                <p className="mt-6 text-base md:text-lg leading-relaxed">
                  Choosing a relevant and unique topic according to your stream is the first step towards success. Our PhD
                  experts discuss with scholars about the recent trends in society then come up with an effective topic.
                  Some factors we consider before suggesting a topic are:
                </p>
      
                {/* Factors List */}
                <ul className="list-disc pl-6 mt-4 space-y-2">
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
              <div className="bg-gray-100 shadow-lg shadow-blue-200 rounded-lg mt-8 p-6 sm:p-8 md:p-12 mb-20">
                <p className="text-base md:text-lg leading-relaxed">
                  The researcher should have high-quality knowledge in the selected area. Our PhD thesis topic assistance
                  service can be availed separately or combined with our thesis writing or synopsis writing services. We
                  evaluate areas with significant research gaps to see if they align with the student's passion, available
                  resources, and capabilities. This ensures we suggest only the most relevant and contributory topics.
                </p>
              </div>
            </div>
          </div>



    </>
   
  )
}

export default page