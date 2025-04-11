import React from 'react'
import Image from 'next/image'
export default function page() {
  return (
    <>
      <div className='flex flex-center '>
        {/* <!-- Thesis Analysis Section --> */}
        <div className="bg-gradient-to-r from-blue-950 to-gray-600 w-full text-center py-20">
          <span className="text-2xl lg:text-5xl text-white">
            THESIS ANALYSIS AND SUMMARY
          </span>
          <p className="text-md md:text-xl text-white py-2">
            Home &gt; Services &gt; Thesis Analysis and Summary
          </p>
        </div>
      </div>

      {/* image section of analysis/summary */}
      {/* <div className='w-full flex justify-center pt-5'>
        <Image src="/analysis.jpg" alt="error" width={400} height={100} className='w-[70%] h-[400px]' />
      </div> */}
      <div className="flex justify-center pt-5">
        <Image
          src="/analysis.jpg"
          alt="Data analysis illustration"
          width={400}
          height={100}
          className="w-[70%] h-auto max-h-[400px] sm:w-full md:w-[80%]"
        />
      </div>

      {/* <!-- Main Content Section --> */}
      <div className="px-6 sm:px-12 md:px-24 py-6 text-justify">
        <div className="h-auto w-full  bg-gray-100 shadow-lg shadow-blue-200 px-10 py-5 rounded-lg">

          {/* <!-- Heading --> */}
          <h1 className="font-bold text-2xl pb-4">THESIS ANALYSIS AND SUMMARY</h1>

          {/* <!-- Thesis Description Paragraph --> */}
          <ul className='list-disc'>
            <li className="py-2">
              Data analysis involves the judgment of results from the collected primary and secondary data through the use of applicable statistical tools and methods, as well as the understanding of outcomes.
            </li>
            <li className='py-2'>
              Many research students may find this task extremely problematic, as they may not have the knowledge of advanced statistical techniques and tests. Thus, it becomes difficult to handle a large amount of research data, as well as to filter, structure, and analyze it with precision.
            </li>
            <li className="py-2">
              At such moments, the PG and PhD data analysis service India of PhD Box may come in handy. With the help of our PG and PhD Data Analysis services, our clients receive satisfactory analysis for reliable research reports.
            </li>
            <li className='py-2'>
              Our mentors also guide researchers in justifying the tools that have been adopted for their research, helping them during their thesis defense sessions.
            </li>
            <li className="py-2">
              Thesis writing is a critical process in a PG and PhD program. If you need specific assistance in analyzing and summarizing a thesis, feel free to share the title or a brief overview of the thesis, including its main argument, themes, or key sections you&apos;d like to focus on.
            </li>
          </ul>
        </div>

        {/* <!-- Data Analysis Services Section --> */}
        <div className="h-auto w-full  bg-gray-100 shadow-lg shadow-blue-200 px-10 py-5 rounded-lg mb-20">
          <h1 className="font-bold text-2xl py-2">We Conduct the Following Tests Under Our Data Analysis Services:</h1>
          <ul className="list-disc pl-5">
            <li>Descriptive statistics (mean, median, mode, standard deviation, variance)</li>
            <li>Relational statistics (correlation, multiple correlation)</li>
            <li>Inferential tests for the difference of means (Z-test)</li>
            <li>Inferential parametric tests for significance (F-test, t-test, ANOVA, regression)</li>
            <li>Inferential nonparametric tests for significance (chi-square)</li>
          </ul>

          <p className="py-4">
            Our team provide essential PG and PhD Thesis Writing Assistance, guiding researchers from the beginning of the thesis design in an organized manner. Even beginner researchers who find it difficult to start their work can rely on IPS Thesis Services for PG and PhD Thesis Writing Assistance. We also have native PG and PhD Thesis Writers who guide you to write every word with precision while following all style rules and formatting standards provided by your university.
          </p>
        </div>
      </div>

    </>
  )
}
