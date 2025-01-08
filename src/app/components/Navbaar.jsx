"use client"
import Link from "next/link";
import { FaPhoneAlt, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  const [Menuopen, setMenuopen] = useState(false);

  return (
    <>
      {/* Contact Part */}
      <div className="hidden sm:flex flex-col sm:flex-row justify-between items-center text-white h-auto sm:h-9 bg-gradient-to-r from-gray-950 to-blue-900 w-full py-2 sm:py-0 px-5">
        {/* Left Section */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-10">
          <p className="flex gap-2 items-center text-sm">
            <FaPhoneAlt className="text-sm" />
            CALL ANYTIME: +91 96918 15989
          </p>
          <p className="flex gap-2 items-center text-sm">
            <IoMail />
            <span>info@thesislogix.in</span>
          </p>
        </div>

        {/* Right Section: Social Media Icons */}
        <div className="flex gap-5 mt-2 sm:mt-0 text-lg cursor-pointer">
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </div>
    


            <div className="border-b-2  py-4">
                <div className="flex justify-between items-center w-full mx-auto px-5">
                    {/* Logo */}
                    <div className="">
                        <Image src="/logo.png" width={200} height={100} alt="Logo" className="sm:w-[170px] sm:h-[50px]" />
                    </div>

                    {/* Hamburger Icon (Mobile View) */}
                    <div className="sm:hidden">
                        <button onClick={() => setMenuopen(!Menuopen)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-8 h-8 text-gray-700"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                    {/* Navbar Items */}
                    <div
                        className={`${Menuopen ? 'block' : 'hidden'
                            } absolute top-[5.5rem]  text-white sm:text-black left-0 w-full bg-gray-700 sm:static sm:flex sm:w-auto sm:bg-transparent sm:gap-10 text-lg`}
                    >
                        <div className="flex flex-col  sm:flex-row items-center gap-6 sm:gap-9 p-5 sm:p-0 md:text-nowrap sm:mr-[25rem]  ">
                            <Link href="/" className="hover:text-blue-500">Home</Link>
                            <Link href="/aboutus" className="hover:text-blue-500">About Us</Link>

                            {/* Dropdown Menu */}
                             {/* Dropdown Menu */}
                                <div className="group relative">
                                    <Link href="" className="hover:text-blue-500" >
                                        Services
                                    </Link>
                                <div className= "group-hover:block rounded hidden absolute top-full left-0   bg-gray-800 px-6 sm:px-10 text-white py-5 ">
                                    <div className="flex flex-col ">
                                    <h1 className="font-semibold text-red-500 whitespace-nowrap">RESEARCH SERVICES</h1>
                                    <Link href='/topicmakings' className="mt-3 items-center gap-3 hover:text-blue-600 text-[14px] flex"><IoIosArrowForward/>TOPIC MAKING SERVICE</Link>
                                    <Link href='/thesiswriting' className="mt-3 items-center gap-3 hover:text-blue-600 text-[14px] flex"><IoIosArrowForward />THESIS WRITING</Link>
                                    <Link href='/thesisanalysis' className="mt-3 items-center gap-3 hover:text-blue-600 text-[14px] flex"><IoIosArrowForward />THESIS ANALYSIS AND SUMMARY</Link>
                                    <Link href='/synopsis' className="mt-3 items-center gap-3 hover:text-blue-600 text-[14px] flex"><IoIosArrowForward />SYNOPSIS/RESEARCH OUTLINE</Link>
                                    <Link href='/question' className="mt-3 items-center gap-3 hover:text-blue-600 text-[14px] flex"><IoIosArrowForward />QUESTIONNAIRE</Link>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        {/* Subscribe Button */}
                        <div className="hidden  justify-center  sm:block">
                   <Link href="/contact">     
                       <button className="border bg-gradient-to-r from-gray-700 to-blue-500  px-5 py-3 rounded-md  text-white font-semibold">
                            Contact Us
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
          
          </div>
        
    
    
      </>
      )
      }
