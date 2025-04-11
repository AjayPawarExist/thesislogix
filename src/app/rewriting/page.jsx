import {
  FaRegLightbulb,
  FaEdit,
  FaRobot,
  FaRegCheckCircle,
} from "react-icons/fa";
import Image from 'next/image'

export default function Aicontent() {
  return (
    <>
      <title>AI Content Rewriting in Thesislogix</title>
      <meta
        name="description"
        content="Learn how AI-powered content rewriting in Thesislogix can help you improve your thesis quality, clarity, and structure."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <main>
       {/* Hero Section */}
  
        <div className="bg-gradient-to-b from-blue-950 to-gray-600 w-full text-center py-20">
          <div className="text-center">
            <h1 className="text-2xl text-white sm:text-5xl font-semibold leading-tight">
              AI CONTENT REWRITING
            </h1>
            <p className="mt-4 text-md md:text-xl text-white">
              home &gt; Services &gt; AI Content Rewriting
            </p>
          </div>
        </div>

        {/* image section of AI content rewriting*/}
        <div className='w-full flex justify-center pt-5'>
          <Image src="/rewriting.jpg" alt="error" width={400} height={100} className="w-[70%] h-auto max-h-[400px] sm:w-full md:w-[80%]" />
        </div>

        {/* Main Content Section */}
        <section className="mt-8 p-6 bg-white rounded-lg shadow-lg ">
          <section className="py-8 px-6 sm:px-6 md:px-8 lg:px-12 ">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-6">
              How AI Content Rewriting Helps
            </h2>
            <p className="text-base md:text-xl text-gray-700 mt-4">
              Thesislogix&apos;s AI content rewriting feature leverages the power of
              artificial intelligence to refine, improve, and rewrite your
              thesis content. This ensures clarity, coherence, and enhances the
              overall quality of your research.
            </p>
          </section>
          <div className="max-w-[1320px] mx-auto grid lg:grid-cols-2 md:grid-col-2 gap-12  px-4">
            <div className="bg-slate-100 border-2 border-blue-400 shadow-lg hover:scale-105 rounded-md p-6">
              <div className="flex items-center justify-center h-24">
                <FaRegLightbulb className="h-16 w-16 text-blue-500" />
              </div>
              <h1 className="text-black text-3xl font-bold text-center pt-4 py-4">
                Introduction Refinement
              </h1>
              <p className="text-gray-500 text-center px-2">
                With AI assistance, refine your introduction to make a powerful
                first impression. The AI improves clarity, engagement, and
                ensures that the core objectives of your research are clearly
                stated.
              </p>
            </div>

            <div className="bg-slate-100 border-2 border-blue-400 shadow-lg hover:scale-105 rounded-md p-6">
              <div className="flex items-center justify-center h-24">
                <FaEdit className="h-16 w-16 text-blue-500" />
              </div>
              <h1 className="text-black text-3xl font-bold text-center pt-4 py-4">
                Structure Optimization
              </h1>
              <p className="text-gray-500 text-center px-2">
                The AI helps reorganize your thesis content, ensuring logical
                flow, proper paragraph transitions, and clear section headings.
                This makes your thesis easier to read and follow for your
                audience.
              </p>
            </div>

            {/* Card 3: Enhanced Readability */}

            <div className="bg-slate-100 border-2 border-blue-400 shadow-lg hover:scale-105 rounded-md p-6">
              <div className="flex items-center justify-center h-24">
                <FaRobot className="h-16 w-16 text-blue-500" />
              </div>
              <h1 className="text-black text-3xl font-bold text-center pt-4 py-4">
                Enhanced Readability
              </h1>
              <p className="text-gray-500 text-center px-2">
                AI-powered rewriting helps simplify complex sentences, improve
                grammar, and remove redundancy, ensuring that your thesis is
                clear, concise, and professional.
              </p>
            </div>

            <div className="bg-slate-100 border-2 border-blue-400 shadow-lg hover:scale-105 rounded-md p-6">
              <div className="flex items-center justify-center h-24">
                <FaRegCheckCircle className="h-16 w-16 text-blue-500" />
              </div>
              <h1 className="text-black text-3xl font-bold text-center pt-4 py-4">
                Conclusion Strengthening
              </h1>
              <p className="text-gray-500 text-center px-2">
                The AI also helps to craft a strong conclusion by improving the
                final summary of your research and offering clear suggestions
                for future research directions, ensuring your thesis ends on a
                strong note.
              </p>
            </div>
          </div>

          {/* Help AI Section with Box Shadow */}
          <section className="mt-8 p-6 bg-gray-100 rounded-lg shadow-lg ">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
              Why use AI for content rewriting?
            </h3>
            <p className=" text-gray-700 mt-4">
              AI content rewriting isn&apos;t just about fixing grammar—it&apos;s a powerful tool
              for improving the clarity, structure, and overall quality of your thesis.
              By using AI-driven tools, you can ensure your writing flows seamlessly
              while upholding academic standards. These tools analyze your text and
              provide suggestions to enhance sentence structure, tone, and clarity,
              making your research more accessible and easier to understand for your
              readers.
            </p>

            <p className=" text-gray-700 mt-4">
              One of the key benefits of using AI for content rewriting is its
              ability to identify and eliminate redundancies, ensuring that your
              writing is concise and to the point. It also helps in transforming
              complex phrases into simpler, more readable language, which is
              essential for making your thesis more accessible to a broader
              audience.
            </p>
            <p className=" text-gray-700 mt-4">
              Additionally, AI tools can provide suggestions on the overall
              structure and organization of your thesis. By analyzing the
              content&apos;s flow, AI helps you reorder sections or paragraphs for
              better logical coherence, ensuring that your thesis presents a
              seamless narrative that guides the reader from one point to the
              next. This feature is especially helpful in improving the
              readability of your research.
            </p>
          </section>
          <section className="mt-8 p-6 bg-gray-100 rounded-lg shadow-2xl">
            <p className=" text-gray-700 mt-4">
              AI also helps you maintain consistency in writing style and
              terminology throughout your thesis, making it more professional
              and polished. It ensures that specific terms or concepts are used
              consistently, eliminating any potential confusion or
              inconsistencies.
            </p>
            <p className=" text-gray-700 mt-4">
              Finally, AI content rewriting saves you time. Instead of manually
              reviewing your entire thesis for clarity, grammar, and structure,
              you can focus on refining your ideas and analysis while AI handles
              the tedious task of improving your writing. This means you can
              submit a thesis that is well-organized, clear, and error-free in
              less time.
            </p>
            <p className=" text-gray-700 mt-4">
              With Thesislogix&apos;s AI content rewriting, your thesis becomes more
              than just a collection of ideas. It transforms into a polished,
              well-organized, and impactful piece of work that resonates with
              your audience and meets academic expectations. Embrace the power
              of AI and take your research writing to the next level.
            </p>
          </section>
        </section>
      </main>
    </>
  );
}
