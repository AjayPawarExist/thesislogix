import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-center items-center sm:justify-between px-5 py-10 min-h-screen">
      {/* Right Section: Text */}
      <div className="mt-5 sm:mt-[8rem] text-center sm:text-left">
        <h1 className="text-4xl sm:text-5xl font-semibold">
          <span className="text-blue-950">Welcome </span> to Thesis <br /> Logix
        </h1>
        <p className="mt-5 sm:mt-7 text-[1rem] sm:text-[1.2rem] text-gray-600 sm:w-[28rem]">
          ThesisLogix: Transforming Ideas into Impactful Research.
        </p>
        <button className="border bg-gradient-to-r from-blue-500 to-gray-900 h-11 w-[9rem] mt-8 rounded-lg text-white">
          Learn More
        </button>
      </div>

      {/* Left Section: Image */}
      <div className="mt-5 sm:mt-7">
        <Image
          src="/hero2.avif"
          alt="Hero Image"
          width={400}
          height={400}
          className="rounded-2xl sm:w-[400px] sm:h-[400px]"
        />
      </div>
    </div>
  );
}