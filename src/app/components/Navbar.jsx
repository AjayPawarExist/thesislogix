import Link from "next/link";
import {FaPhoneAlt ,FaFacebook,FaTwitter,FaLinkedin } from "react-icons/fa";
import { IoMail  } from "react-icons/io5";
import Image from "next/image";

export default function Home() {
    return (
     <>
     {/* contact part */}
     <div className=" flex justify-between text-white h-9 bg-gradient-to-r bg-blue-900 from-gray-950 w-full  ">
        <div className="flex ml-10 gap-10 mt-1  ">
            <p className="flex gap-3 ">
               <FaPhoneAlt className="text-sm mt-1"/>
                CALL ANYTIME : +91 96918 15989
            </p>
            <p className="flex gap-3">
                <IoMail className="mt-1"/>
                info@thesislogix.in
            </p>
        </div>
        <div className="mt-1">
            <div className="flex gap-5 mr-16 mt-1 text-lg text-white cursor-pointer">
                    <FaFacebook/>
                    <FaTwitter/>
                    <FaLinkedin/> 
            </div>
        </div>
      </div>

      {/* Navbar part */}

      <div className="flex justify-between bg-gradient-to-r bg-[#dddddd] from-[#eeeeee]  items-center  py-6 ">
            <div className="ml-11 ">
             <Image src="/logo.png" width={200} height={100} alt=""/>
            </div>

            {/* navbar item */}

            <div className="flex  gap-9 text-lg">
            <Link href="">Home</Link> 
                    <Link href="">About us</Link>     
                         <Link href="">Servies</Link>
                            <Link href="">FAQS</Link>   
            </div>

            <div className="mr-14 flex flex-col justify-center  items-center ">
                <button className="border  bg-[#de4278] px-9 py-4 rounded-md  overflow-hidden hover:bg-[#b52154]">
                   <span className=" items-center justify-center  flex inset-px text-white font-semibold"> Subscribe Now</span>
                    {/* <span className="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-squre before:animate-disco before:bg-gradient-to-conic before:from-purple-700 before:via-red-700 before:to-amber-500"></span> */}
                </button>
            </div>
         </div>
     </>
    );
  }