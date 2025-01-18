import React from "react";
import Image from 'next/image'
export default function page() {
  return (
    <>

      {/* Questionnaire section start  */}
      <div className="flex justify-center ">
        <div className="h-[270px] w-full bg-gradient-to-b from-blue-950 to-gray-600 text-center py-20">
          <span className="text-4xl lg:text-5xl text-white">
            Questionnaire
            <p className="text-lg md:text-xl text-white py-2">
              Home &gt; Services &gt; Questionnaire
            </p>
          </span>
        </div>
      </div>
      {/* image of questionnaire  */}
      <div className='w-full flex justify-center pt-5'>
        <Image src="/Questionnaire.jpg" alt="error" width={400} height={100} className='w-[70%] h-[400px]' />
      </div>

      {/* content section start  */}
      <div className="px-4 sm:px-12 md:px-24 py-6 text-justify">
        <div className="h-auto w-full  bg-gray-100 shadow-lg shadow-blue-200 px-6 md:px-10 rounded-lg py-8">
          <h1 className="text-lg sm:text-2xl font-bold">
            What is a Questionnaire, and How is it used in research?
          </h1>
          <p className="py-4">
            Be it government, a for-profit organisation, or maybe a
            not-for-profit organisation, data collection is of paramount
            importance for all to urge insights on the target market and
            therefore the current and future prospects of an organisation.
          </p>
          <p className="py-2">
            You need to ask inquiries to get answers, and a questionnaire helps
            you with that.
          </p>
          <p className="py-2">
            A questionnaire is a research tool consisting of a group of
            standardized inquiries to gather statistically useful information on
            a given subject from one or more respondents. It can include written
            or oral questions.
          </p>
          <p className="py-2">
            To make it simple, consider a questionnaire to be a written
            interview consisting of standardized questions which may be answered
            face-to-face, over the telephone, through the post, or maybe online.
          </p>
        </div>

        {/* purpose of questionnaire  */}
        <div className="h-auto w-full  bg-gray-100 shadow-lg shadow-blue-200 px-6 md:px-10 rounded-lg mt-4 py-8">
          <h1 className="text-lg md:text-xl font-bold py-2">
            Purpose of Questionnaire
          </h1>
          <p className="py-2">
            The main purpose of a questionnaire is to extract data from the
            respondents. It’s a comparatively inexpensive, quick, and efficient
            way of collecting great deal of data even when the researcher isn’t
            present to gather those responses firsthand. However, it’s important
            to note that a questionnaire isn’t the method of analyzing the
            responses. The method of analyzing responses is called surveying.
          </p>
          <h1 className="text-lg md:text-xl font-bold">
            Is Questionnaire just another word for “Survey”?
          </h1>
          <p className="py-2">
            While the two terms seem synonymous, they aren’t quite the same. A
            questionnaire may be a set of questions created for the aim of
            gathering information; that information might not be used for a
            survey. However, all surveys do require questionnaires.
          </p>
        </div>

        <div className="h-auto w-full  bg-gray-100 shadow-lg shadow-blue-200 px-6 md:px-10 rounded-lg mt-4 py-8">
          <h1 className="text-lg md:text-xl font-bold py-4">
            Why are questionnaires effective in research?
          </h1>
          <p className="py-2">
            Questionnaires are popular research methods because they provide a
            quick, efficient and cheap means of gathering large amounts of data
            from sizeable sample volumes.
          </p>
          <h1 className="text-lg md:text-xl font-bold py-4">
            Types of Questionnaires in research
          </h1>
          <ul className="list-disc pl-5 space-y-2">
            <li>Postal: Paper surveys sent through the mail.</li>
            <li>In-house: Conducted face-to-face at homes or workplaces.</li>
            <li>Telephone: Conducted via phone calls.</li>
            <li>Electronic: Presented via email or online platforms.</li>
          </ul>
        </div>

        <div className="h-auto w-full  bg-gray-100 shadow-lg shadow-blue-200 px-6 md:px-10 rounded-lg mt-4 py-8">
          <h1 className="text-lg md:text-xl font-bold">
            Main considerations in designing a questionnaire
          </h1>
          <p className="py-2">
            Once the choice has been made to use a specific format, the
            subsequent questions should be considered:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>What exactly can we want to measure?</li>
            <li>To whom will we ask questions?</li>
            <li>Will the respondent willingly answer this question?</li>
            <li>Are the respondents mainly illiterate?</li>
            <li>Are ethical issues involved in this question?</li>
          </ul>
        </div>

        <div className="h-auto w-full  bg-gray-100 shadow-lg shadow-blue-200 px-6 md:px-10 rounded-lg mt-4 py-8 mb-20">
          <h1 className="text-lg md:text-xl font-bold">
            Contents of Questions
          </h1>
          <p className="py-2">
            Survey inquiries may concern facts, opinions, attitudes, or
            respondents’ knowledge on certain topics. Questions generally fall
            into two categories: factual and subjective.
          </p>
          <h1 className="text-lg md:text-xl font-bold py-4">
            Pros and Cons of using questionnaires in research
          </h1>
          <p className="font-bold py-2">PROS:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Practicality</li>
            <li>Cost-efficiency</li>
            <li>Speed</li>
            <li>Scalability</li>
          </ul>
          <p className="font-bold py-2">CONS:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Answer dishonesty</li>
            <li>Question skipping</li>
            <li>Interpretation difficulties</li>
            <li>Survey fatigue</li>
          </ul>
        </div>
      </div>
    </>
  );
}
