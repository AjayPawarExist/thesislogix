import { TbHandMove } from "react-icons/tb";
import { AiOutlineFileSearch } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa6";
import { TiThumbsOk } from "react-icons/ti";
import Image from 'next/image'

export default function Paperpublication() {
  return (
    <>
      <div className="flex flex-center ">
        <div className=" bg-gradient-to-b from-blue-950 to-gray-600 w-full text-center py-20">
          <span className="text-2xl sm:text-5xl text-white">
            PAPER PUBLICATION
          </span>
          <p className=" text-md sm:text-xl text-white py-2">
            home &gt; Services &gt; Paper Publication
          </p>
        </div>
      </div>

      {/* image of paper publishing */}
      <div className='w-full flex justify-center pt-5'>
        <Image src="/publication.jpg" alt="error" width={400} height={100} className="w-[70%] h-auto max-h-[400px] sm:w-full md:w-[80%]" />
      </div>

      <div className="px-6 sm:px-10 lg:px-24 py-6">
        <div className="bg-gray-100 shadow-lg shadow-blue-200 rounded-lg mt-8 p-6 sm:p-8 md:p-12">
          <h1 className="text-2xl py-2 font-semibold">
            PG and Phd Research Paper Writing Services & Publication Support
          </h1>
          <p className="  leading-relaxed text-gray-700">
            Whether you are looking for publication in a Scopus, SCI Indexed or
            ABDC journal, our team of researchers work with you and
            develop a manuscript which may be accepted for publication on the
            merit of its research. Under the research paper writing service, we
            offer review type research paper development, systematic literature
            review manuscript write-ups, empirical research paper writing and
            technical manuscripts development. Our team collaborates with you
            and develops research papers which carry novelty, accuracy of
            findings and adheres to journal publishing guidelines.
          </p>
          <p className="py-4 text-gray-700">
            At Thesis India, we understand the multifaceted challenges that
            researchers face, and we are here to offer unparalleled Research
            Paper Writing Services & Publication Support specifically within
            India for Pg and PhD scholars. Our service is founded upon the
            principle that the process of crafting and publishing a research
            paper is a meticulously orchestrated symphony of creativity,
            precision, and persistence. With our expert assistance, you are not
            merely availing a service – you are investing in a streamlined
            pathway to publication success. Our comprehensive research paper
            writing service begins with the very inception of your idea, guiding
            you through every nuance of its evolution. From selecting a
            compelling research question to sculpting a cohesive narrative, we
            offer meticulous guidance tailored to your research area within
            India. Our seasoned professionals wield a deep understanding of
            diverse academic domains, ensuring that your work is not only
            impactful but culturally relevant.
          </p>
        </div>
        <div className="bg-gray-100 shadow-lg shadow-blue-200 rounded-lg mt-8 p-4 sm:p-8 md:p-12">
          <h1 className="text-xl py-2 font-semibold">
            Journal Selection and Manuscript Submission
          </h1>
          <p className=" leading-relaxed text-gray-700">
            One of the cornerstones of successful publication is journal
            selection, it requires acumen and insight. Our experts, well-versed
            in the academic landscape of India and international journal
            publications, meticulously curate a list of journals that resonate
            with the essence of your research. We align your manuscript with the
            journals that offer the perfect platform for your contribution. Our
            proficiency extends to meticulously formatting and adhering to
            submission guidelines, ensuring a seamless journey from your desk to
            the editor's inbox. Let’s see this process up close.
          </p>
        </div>

        <h1 className="text-2xl text-center py-5 text-black"></h1>
        <div className="max-w-[1320px] mx-auto grid lg:grid-cols-2 md:grid-cols-2 gap-12 px-4">
          {/* Card 1 */}
          <div className="bg-slate-100 border-2 border-blue-400 shadow-lg hover:scale-105 rounded-md p-6">
            <div className="flex items-center justify-center h-24">
              <TbHandMove className="h-16 w-16 text-blue-500" />
            </div>
            <h1 className="text-black text-3xl font-bold text-center py-4">
              Ensuring Journal Relevance And Alignment
            </h1>
            <p className="text-gray-500 text-center pb-4 px-2 ">
              Solution: Our first step is meticulous journal selection. We
              collaborate with you to identify journals that resonate with the
              scope of your research, ensuring your work seamlessly aligns with
              their aims. This minimizes the risk of rejection due to
              misalignment and enhances the chances of your paper being deemed a
              valuable addition to the journal's portfolio.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-100 border-2 border-blue-400 shadow-lg hover:scale-105 rounded-md p-6">
            <div className="flex items-center justify-center h-24">
              <AiOutlineFileSearch className="h-16 w-16 text-blue-500" />
            </div>
            <h1 className="text-black text-3xl font-bold text-center py-4">
              Enhancing Writing Precision And Organization
            </h1>
            <p className="text-gray-500 text-center px-2">
              Solution: Our skilled editorial team meticulously refines your
              manuscript, addressing grammatical nuances, spelling errors, and
              enhancing overall clarity. With a focus on structural integrity,
              we ensure your paper's narrative flows seamlessly, captivating the
              reader's attention from introduction to conclusion.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-100 border-2 border-blue-400 shadow-lg hover:scale-105 rounded-md p-6">
            <div className="flex items-center justify-center h-24">
              <FaHandshake className="h-16 w-16 text-blue-500" />
            </div>
            <h1 className="text-black text-3xl font-bold text-center py-4">
              Novelty and Significance
            </h1>
            <p className="text-gray-500 text-center px-4">
              Solution: Collaboration is key to ensuring your work is innovative
              and impactful. We engage in comprehensive discussions,
              brainstorming sessions, and literature reviews to identify gaps
              that your research addresses. By leveraging our expertise and your
              insights, we create a narrative that showcases the novel
              contribution and significance of your work to the academic
              community.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-slate-100 border-2 border-blue-400 shadow-lg hover:scale-105 rounded-md p-6">
            <div className="flex items-center justify-center h-24">
              <TiThumbsOk className="h-16 w-16 text-blue-500" />
            </div>
            <h1 className="text-black text-3xl font-bold text-center py-4">
              Unwavering Quality
            </h1>
            <p className="text-gray-500 text-center px-4">
              Solution: Quality is our hallmark. Our experts meticulously review
              every facet of your paper, from originality to presentation. By
              adhering to rigorous standards of excellence, we ensure your
              manuscript exudes the caliber that journals demand, significantly
              reducing the likelihood of rejection based on perceived
              shortcomings.
            </p>
          </div>
        </div>

        <div className="bg-gray-100 shadow-lg shadow-blue-200 rounded-lg mt-8 p-4 sm:p-8 md:p-12">
          <h1 className="text-xl py-2 font-semibold">
            Research Paper Writing Service : Research and Write-ups
          </h1>
          <p className="leading-relaxed text-gray-700">
            A research paper, published in a reputed journal paves the surest
            way to academic as well as professional success for a research
            scholar. However, this path is not easy to progress, as it is strewn
            with challenges. Sometimes, you may be stuck at the writing stage,
            especially if it is your first paper. At other times, the paper may
            be rejected by publishers for faults that you are not aware of. As
            the task of writing and publishing a research paper takes years to
            accomplish, it is sensible to avail the help of professional guides
            providing journal paper publication support in India to ensure
            success in your first attempt.
          </p>
          <ul className="py-4">
            <li className="py-2 ">
              <b>Curating Target Journals for Your Field of Study</b> : <span className="text-gray-700">Drawing
                from our profound understanding of diverse fields of study, we
                meticulously curate a bespoke list of target journals that align
                with your research's thematic resonance. We place special emphasis
                on identifying prestigious impact factor journals, offering you a
                comprehensive panorama of platforms that can amplify the impact of
                your research.
              </span>
            </li>
            <li className="py-2">
              <b>Navigating Journal Guidelines</b> :<span className="text-gray-700"> Our meticulous team delves
                into the labyrinthine guidelines of your chosen journals, ensuring
                that each intricate requirement is diligently met. Through our
                editorial service, we guide your manuscript through the labyrinth,
                ensuring that every 'i' is dotted and every 't' is crossed.
              </span>
            </li>
            <li className="py-2">
              {" "}
              <b>Timely Submission </b>: <span className="text-gray-700">Our seasoned experts, attuned to the
                needs of different journal publications, strategically help you
                plan your research work. With meticulous precision, we assist you
                in charting a course that culminates in the timely submission of
                your paper, maximizing the chances of your research being
                spotlighted at the opportune moment.
              </span>
            </li>
            <li className="py-2">
              {" "}
              <b>Impressive Cover Letters and Abstracts </b>:<span className="text-gray-700"> Our skilled
                editors work alongside you to draft a cover letter that
                encapsulates the essence of your research, while the abstract
                serves as a perfect glimpse into your paper's depth.
              </span>
            </li>
            <li className="py-2">
              {" "}
              <b>Revisions </b>:<span className="text-gray-700"> The journey toward publication is not always
                linear, and sometimes, revisions are part of the process. In the
                event that your paper returns with comments for refinement, our
                adept team assists you in revising your manuscript according to
                the editors' suggestions.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
