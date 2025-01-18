import Image from "next/image";

export default function AboutHero() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center py-16 px-6 sm:px-12 lg:px-20 gap-12 sm:gap-20">
        {/* Left Section */}
        <div className="lg:w-[55%] text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl text-gray-900 font-semibold ">
            About ThesisLogix
          </h1>
          <div className="mt-8 sm:mt-12 text-gray-600 space-y-8 text-justify">
            {/* Paragraph 1 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-base sm:text-lg">
                Welcome to ThesisLogix Services, a trusted leader in PG and PhD research assistance since 2005. With a commitment to empowering research scholars, we provide comprehensive research consultation services tailored to the unique needs of each candidate. Over the years, we have earned the trust of numerous scholars by delivering consistent, high-quality support throughout their academic journey.
              </p>
            </div>

            {/* Paragraph 2 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-base sm:text-lg">
                At ThesisLogix, we understand the significance of groundbreaking research in advancing academic careers. Our mission is to help scholars excel by offering expert guidance at every stage of the research process. Whether you are at the initial stages of topic selection or require professional assistance with academic writing, proofreading, or editing, our dedicated team is here to support you.
              </p>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="flex flex-col sm:flex-row mt-12 gap-10 justify-center lg:justify-start">
            {/* Stat 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg text-center sm:text-left">
              <h1 className="text-4xl sm:text-5xl font-bold text-blue-600">100%</h1>
              <p className="mt-4 text-base sm:text-lg text-gray-700">
                We have successfully assisted numerous students in achieving their academic goals, ensuring their theses are well-structured and thoroughly researched.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl shadow-lg text-center sm:text-left ">
              <h1 className="text-4xl sm:text-5xl font-bold text-yellow-600">15 Years</h1>
              <p className="mt-4 text-base sm:text-lg text-gray-700">
                Our team brings over 15 years of experience in educational consulting, ensuring high-quality support for all clients.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[45%] flex justify-center lg:justify-end">
          <Image
            src="/meetingabout.webp"
            alt="About ThesisLogix"
            width={500}
            height={500}
            className="rounded-lg shadow-2xl border border-gray-200"
          />
        </div>
      </div>
    </>
  );
}
