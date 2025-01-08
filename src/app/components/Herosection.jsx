import Image from 'next/image';

export default function HeroSection() {
    return (
        // Satring of herosection 
        <div className="flex flex-col sm:flex-row items-center justify-around px-5 py-16">
            {/* Right Section: Text */}
            <div className="mt-8">
                <h1 className="text-3xl sm:text-5xl font-semibold">
                    <span className="text-blue-950 text-6xl"> M</span>aster Your Data,<br /> Empower Your <br /> Research
                </h1>
                <p className=" text-lg pt-6 text-gray-600 sm:w-[28rem]">
                    Unlock the power of your research data with PhD Box India. We deliver precise analysis, reliable reports, and tailored mentoring for academic excellence.        </p>
                  {/* button for jump on call and learn more  */}
                <div className='flex flex-col items-center sm:flex-row gap-5 mt-12  '>

                    <button className=" bg-black hover:bg-slate-800 tracking-tightest rounded text-white w-40 sm:w-[150px] py-3 sm:px-6 sm:py-3">
                        <a href="tel:+919691815989" >Jump On Call</a>
                    </button>
                    <button className=" bg-gradient-to-r from-blue-500 to-gray-900 rounded text-white tracking-tightest w-48 sm:w-[150px] py-3 px-6 ">
                        Learn More
                    </button>
                </div>
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