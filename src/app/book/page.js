import React from "react";
import Image from 'next/image'

export default function Bookwriting() {
  return (
    <>
      {/* <!-- Main Container --> */}
      <div className="flex flex-center">
        {/* <!-- Hero Section --> */}
        <div className="bg-gradient-to-b from-blue-950 to-gray-600 w-full text-center py-20">
          <h1 className="text-2xl sm:text-5xl text-white">
            BOOK PUBLISHING
          </h1>
          <p className="text-md sm:text-xl text-white py-2">
            home &gt; Services &gt; Book Publishing
          </p>
        </div>
      </div>

      {/* image section of book publishing  */}
      <div className='w-full flex justify-center pt-5'>
        <Image src="/book.jpg" alt="error" width={400} height={100} className="w-[70%] h-auto max-h-[400px] sm:w-full md:w-[80%]" />
      </div>

      {/* <!-- Content Section --> */}
      <div className="px-4 sm:px-10 lg:px-24 py-6">
        {/* <!-- Service Description --> */}
        <div className="bg-gray-100 shadow-lg shadow-blue-200 rounded-lg mt-8 p-6 sm:p-8 md:p-12 text-justify">
          <h1 className="text-2xl py-2 font-semibold">
            Book Publishing Service
          </h1>
          <p className="text-base  leading-relaxed">
            Are you a PG and PhD scholar looking to transform your dissertation
            into a publishable book? Our specialized “book writing and
            publishing services” for Pg and PhD scholars are designed to help
            you bring your academic research to a broader audience. From
            manuscript development to publication, we offer comprehensive
            support tailored to your scholarly needs.
          </p>
          <p className="text-base leading-relaxed py-4">
            Ensuring your manuscript is polished and error-free is crucial for
            academic credibility. Consequently, our editing services include
            developmental editing to refine your book’s structure and content,
            copy-editing for grammar and style, and proofreading for final error
            checks. We adhere to academic standards and style guides, ensuring
            your book is of the highest quality.
          </p>
        </div>

        {/* <!-- Cost Effective Services --> */}
        <div className="bg-gray-100 shadow-lg shadow-blue-200 rounded-lg mt-8 p-6 sm:p-8 md:p-12 text-justify">
          <h1 className="text-2xl pt-2 font-semibold">
            Cost Effective Services
          </h1>
          <p className="text-base leading-relaxed">
            From the very beginning of preparation through the release of your
            book, we’ve got you covered. We’ll talk to you in person and do some
            research on your book proposal ideas. After research, we’ll begin
            plotting, outlining, and developing new content based on your
            suggestions, with your comments and advice appreciated throughout
            the process.
          </p>

          <h1 className="text-2xl pt-4 font-semibold">Best Use Of Software</h1>
          <p className="text-base leading-relaxed ">
            ‘Thesis or Research Writing’ can be exhausting. Opting for
            “Plagiarism Check & Removal Services” helps you avoid these
            difficulties. We use tools like Turnitin to check and remove
            plagiarism, providing multiple checks to ensure your research is
            plagiarism-free, along with a Turnitin report.
          </p>

          <h1 className="text-2xl pt-4 font-semibold ">Attractive Design</h1>
          <p className="text-base leading-relaxed ">
            We provide a print-on-demand publishing model. Our services include
            ISBN assignment, online advertising via Google Books and Google
            Play, free author copies, interior layout design, creative cover
            design, proofreading, content editing, and print book sales. With
            Writing Tree, turning your ideas into a published book is easy and
            affordable.
          </p>
        </div>
      </div>

      {/* <!-- Features Section --> */}
      <div className="max-w-[1320px] mx-auto grid lg:grid-cols-2 gap-8 px-4 py-6 ">
        {/* <!-- Why Choose Us --> */}
        <div className="bg-slate-100 border-blue-400 shadow-lg px-8 py-6 rounded-lg ">
          <h1 className="text-black text-3xl font-bold text-center py-4">
            Why Choose Us?
          </h1>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <b>Expertise:</b> Industry professionals with years of experience
              in writing, editing, and publishing.
            </li>
            <li>
              <b>Personalized Service:</b> Customized solutions to meet your
              specific needs and goals.
            </li>
            <li>
              <b>Quality Assurance:</b> Rigorous review process to ensure your
              book meets the highest standards.
            </li>
            <li>
              <b>Confidentiality:</b> Strict privacy maintained throughout the
              entire process.
            </li>
          </ul>
        </div>

        {/* <!-- Our Services --> */}
        <div className="bg-slate-100 border-blue-400 shadow-lg px-8 py-6 rounded-lg">
          <h1 className="text-black text-3xl font-bold text-center py-4">
            Our Services
          </h1>
          <p className="text-base text-center leading-relaxed mb-4">
            Comprehensive services to transform your ideas into a published
            masterpiece, from conceptualization to distribution.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <b>Dissertation-to-Book Conversion</b>
            </li>
            <li>
              <b>Editing and Proofreading</b>
            </li>
            <li>
              <b>Cover Design and Formatting</b>
            </li>
            <li>
              <b>Publishing and Distribution</b>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
