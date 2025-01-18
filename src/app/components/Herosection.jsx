import Image from 'next/image';
import Link from 'next/link' ;
export default function HeroSection() {
  return (
    // Satring of herosection 
    <div className="flex flex-col sm:flex-row items-center justify-around px-5 py-10">
      {/* Right Section: Text */}
      <div className="mt-8">
        <h1 className="text-3xl text-center sm:text-left sm:text-5xl font-semibold ">
          <span className="text-black sm:text-blue-950 text-3xl sm:text-6xl"> M</span>aster Your Data,<br /> Empower Your <br /> Research
        </h1>
        <p className=" text-lg pt-6 text-justify sm:text-left text-gray-600 sm:w-[28rem]">
          Unlock the power of your research data with PG and PhD Box India. We deliver precise analysis, reliable reports, and tailored mentoring for academic excellence.        </p>

        {/* button content start */}
        <div className='flex flex-col items-center sm:flex-row gap-5 mt-12  '>
          {/* button for jump on call  */}
          <button className=" bg-black hover:bg-slate-800 tracking-tightest rounded text-white w-40 sm:w-[150px] py-3 sm:px-6 sm:py-3">
            <a href="tel:+919691815989" >Jump On Call</a>
          </button>
          {/* button for learn more  */}
          <Link href='/aboutus'>
            <button className=" bg-gradient-to-r from-blue-500 to-gray-900 rounded text-white tracking-tightest w-48 sm:w-[150px] py-3 px-6 ">
              Learn More
            </button>
          </Link>
        </div>
        {/* button content close  */}
      </div>
      {/* Left Section: Image */}
      <div className="mt-8">
        <Image
          src="/hero2.avif"
          alt="Hero Image"
          width={400}
          height={400}
          className="rounded-2xl sm:w-[500px] sm:h-[500px]"
        />
      </div>
    </div>
  );
}