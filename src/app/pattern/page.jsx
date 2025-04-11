// pages/services.js

import {
  FaRegLightbulb,
  FaRegClipboard,
  FaChartLine,
  FaDatabase,
} from "react-icons/fa";

export default function Patten() {
  return (
    <>
      <title>
        Patterns in Thesislogix | Research Structuring and Methodology
      </title>
      <meta
        name="description"
        content="Explore the patterns and methodologies used in Thesislogix for effective thesis writing and research."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <main>
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-blue-950 to-gray-600 w-full text-center py-20">
          <div className="text-center">
            <h1 className="text-2xl text-white sm:text-5xl font-semibold leading-tight tracking-wide">
              PATTERN SERVICE
            </h1>
            <p className="mt-4 text-white text-md sm:text-xl font-light">
              home &gt; Services &gt; Pattern Service
            </p>
          </div>
        </div>

        {/* Main Content Section */}
        <section className="py-8 px-4 sm:px-6 md:px-8 lg:px-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-6">
            What are the Patterns in Thesislogix?
          </h2>
          <p className=" sm:text-xl md:text-2xl text-gray-700 mb-8 ">
            Thesislogix offers various research patterns to ensure thesis
            quality, organization, and thorough analysis. These patterns
            include:
          </p>

          {/* Card Container */}

          <div className="max-w-[1320px] mx-auto grid lg:grid-cols-2 md:grid-col-2 gap-12  px-4">
            <div className="bg-slate-100 border-2 border-blue-400 shadow-lg hover:scale-105 rounded-md p-6">
              <div className="flex items-center justify-center h-24">
                <FaRegLightbulb className="h-16 w-16 text-blue-500" />
              </div>
              <h1 className="text-black text-3xl font-bold text-center pt-4 py-4">
                Introduction Pattern
              </h1>
              <p className="text-gray-500 text-center px-2">
                A strong introduction is essential for setting the stage for
                your research. This pattern ensures a well-organized and
                engaging start to your thesis, allowing your reader to
                understand the core objective of your research.
              </p>
            </div>

            {/* Card 2: Literature Review Methodology */}
            <div className="bg-slate-100 border-2 border-blue-400 shadow-lg hover:scale-105 rounded-md p-6">
              <div className="flex items-center justify-center h-24">
                <FaRegClipboard className="h-16 w-16 text-blue-500" />
              </div>
              <h1 className="text-black text-3xl font-bold text-center pt-4 py-4">
                Literature Review Methodology
              </h1>
              <p className="text-gray-500 text-center px-2">
                A well-researched literature review strengthens the foundation
                of your research. This pattern helps structure your review to
                highlight relevant studies, gaps in the literature, and identify
                the framework that supports your work.
              </p>
            </div>

            {/* Card 3: Research Design & Methodology Pattern */}
            <div className="bg-slate-100 border-2 border-blue-400 shadow-lg hover:scale-105 rounded-md p-6">
              <div className="flex items-center justify-center h-24">
                <FaChartLine className="h-16 w-16 text-blue-500" />
              </div>
              <h1 className="text-black text-3xl font-bold text-center pt-4 py-4">
                Research Design & Methodology Pattern
              </h1>
              <p className="text-gray-500 text-center px-2">
                A solid methodology is crucial for achieving valid and reliable
                results. This pattern helps you develop a research design that
                aligns with your research questions, ensuring that the methods
                used are appropriate and ethical.
              </p>
            </div>

            {/* Card 4: Data Analysis Techniques */}
            <div className="bg-slate-100 border-2 border-blue-400 shadow-lg hover:scale-105 rounded-md p-6">
              <div className="flex items-center justify-center h-24">
                <FaDatabase className="h-16 w-16 text-blue-500" />
              </div>
              <h1 className="text-black text-3xl font-bold text-center pt-4 py-4">
                Data Analysis Techniques
              </h1>
              <p className="text-gray-500 text-center px-2">
                The right data analysis techniques are crucial for interpreting
                your research data effectively. This pattern guides you through
                various techniques for analyzing both qualitative and
                quantitative data, helping you draw meaningful conclusions.
              </p>
            </div>
          </div>

          {/* How It Helps Section with Box Shadow and Additional Paragraphs */}

          <h3 className="text-xl text-center sm:text-2xl md:text-3xl font-semibold text-gray-800  mt-10">
            How It Helps?
          </h3>
          <div className=" p-6 bg-gray-100 rounded-lg shadow-xl ">
            <p className="mt-4  text-slate-600">
              By following these patterns, students and researchers can ensure
              that their thesis is well-organized, consistent, and aligned with
              academic standards. These patterns guide the researcher in
              producing a structured, coherent, and well-supported thesis.
            </p>

            <p className="mt-4  text-gray-600">
              The use of clear patterns helps in creating a cohesive flow
              between different sections of the thesis. By following a set
              structure, you can ensure that each chapter and section is aligned
              with your research objectives, making your work easier to
              understand and follow for readers.
            </p>
          </div>
          <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-xl">
            <p className="mt-4  text-gray-600 ">
              These research patterns also enhance the clarity and rigor of your
              methodology. By adhering to established patterns, you reduce the
              chances of inconsistencies and errors, ensuring that your research
              methods are logically structured, transparent, and easy to
              replicate by others.
            </p>

            <p className="mt-4  text-gray-600">
              Furthermore, these patterns allow for better communication of your
              findings and analysis. By following the structured approach
              provided by Thesislogix, your conclusions will naturally flow from
              the data you present, allowing readers to see how you arrived at
              your final results.
            </p>

            <p className="mt-4  text-gray-600">
              Whether you are a student or a seasoned researcher, these patterns
              can save time and effort by providing a framework that ensures no
              aspect of your thesis is overlooked. You&apos;ll be able to focus on
              refining your research content while the structure takes care of
              itself.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
