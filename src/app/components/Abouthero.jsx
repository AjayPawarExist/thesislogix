import Image from "next/image";

export default function AboutHero() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between py-10 px-6 sm:px-12 lg:px-20">
        {/* Left Section */}
        <div className="lg:w-[49rem] lg:text-left text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold">About ThesisLogix</h1>
          <div className="mt-6 sm:mt-10">
            <p className="text-sm sm:text-base">
              Welcome to ThesisLogix Services, a trusted leader in PhD research assistance since 2005. With a commitment to empowering doctoral scholars, we provide comprehensive research consultation services tailored to the unique needs of each candidate. Over the years, we have earned the trust of numerous scholars by delivering consistent, high-quality support throughout their academic journey.
            </p>
            <p className="mt-4 text-sm sm:text-base">
              At ThesisLogix, we understand the significance of groundbreaking research in advancing academic careers. Our mission is to help scholars excel by offering expert guidance at every stage of the research process. Whether you are at the initial stages of topic selection or require professional assistance with academic writing, proofreading, or editing, our dedicated team is here to support you.
            </p>
          </div>

          {/* Statistics Section */}
          <div className="flex flex-col sm:flex-row mt-8 sm:mt-10 gap-6 justify-center lg:justify-start">
            <div className="text-center sm:text-left">
              <h1 className="font-semibold text-3xl sm:text-4xl">100%</h1>
              <p className="mt-4 text-sm sm:text-base">
                We have successfully assisted numerous students in achieving their academic goals, ensuring their theses are well-structured and thoroughly researched.
              </p>
            </div>

            <div className="text-center sm:text-left">
              <h1 className="font-semibold text-3xl sm:text-4xl">15 Years</h1>
              <p className="mt-4 text-sm sm:text-base">
                Dr. Dixit brings over 15 years of experience in educational consulting, ensuring high-quality support for all clients.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="mt-10 lg:mt-0 flex justify-center">
          <Image
            src="/aboutpic.png"
            alt="About ThesisLogix"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </>
  );
}
