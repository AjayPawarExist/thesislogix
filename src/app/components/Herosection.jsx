import Image from "next/image"

export default function Herosection() {
  return (
    <>
    <div className="flex justify-around">
      {/* {herosection right} */}
        <div className=" ml-[10rem] mt-[11rem]">
            <h1 className="text-6xl font-semibold">
                <span className="text-blue-950">WelCome </span> 
              to Thesis <br/>
                 Logix
            </h1>
            <p className="mt-7 text-[1.3rem] text-gray-600 w-[38rem] ml-3">
            ThesisLogix: Transforming Ideas into Impactful Research.
            </p>
            <button className="border bg-gradient-to-r from-blue-500 to-gray-900 h-11  w-[9rem] mt-8 rounded-lg text-white">Learn More</button>
        </div>

        {/* left image */}
        <div className="mt-7 ">
            <Image src="/hero2.jpg" alt="" width={400} height={400} className="rounded-2xl"></Image>
        </div>
    </div>
    </>
  )
}
