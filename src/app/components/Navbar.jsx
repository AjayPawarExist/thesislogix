"use client";
import Link from "next/link";
import { FaPhoneAlt, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
    const [Menuopen, setMenuopen] = useState(false);
    return (
        <>
            {/* contact part */}
            <div className="flex flex-col sm:flex-row justify-between items-center text-white h-auto sm:h-9 bg-gradient-to-r from-gray-950 to-blue-900 w-full py-2 sm:py-0 px-5">
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


            <div className="bg-gradient-to-r from-[#eeeeee] to-[#dddddd] py-4">
                <div className="flex justify-between items-center max-w-[1320px] mx-auto">
                    {/* Logo */}
                    <div className="ml-6 sm:ml-11">
                        <Image src="/logo.png" width={200} height={100} alt="Logo" className="sm:w-[190px] sm:h-[60px]" />
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
                            } absolute top-[8rem] left-0 w-full bg-gray-700 sm:static sm:flex sm:w-auto sm:bg-transparent sm:gap-10 text-lg`}
                    >
                        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-9 p-5 sm:p-0 md:text-nowrap">
                            <Link href="/">Home</Link>
                            <Link href="/about">About Us</Link>

                            {/* Dropdown Menu */}
                            <div className="group relative">
                                <Link href="/services">Services</Link>
                                <div
                                    className={`${Menuopen ? 'block' : 'hidden'
                                        } group-hover:block absolute top-full left-0 bg-slate-500 px-5 sm:px-10 text-white py-5 shadow-lg`}
                                >
                                    <h1 className="font-semibold">RESEARCH SERVICES</h1>
                                    <p className="mt-3">TOPIC MAKING SERVICE</p>
                                    <p>THESIS WRITING</p>
                                    <p>THESIS ANALYSIS AND SUMMARY</p>
                                    <p>SYNOPSIS/RESEARCH OUTLINE</p>
                                    <p>QUESTIONNAIRE</p>
                                </div>
                            </div>

                            <Link href="/faqs">FAQs</Link>
                        </div>

                        {/* Subscribe Button */}
                        <div className="hidden flex justify-center mt-5 sm:mt-0 sm:block">
                            <button className="border bg-[#de4278] px-6 sm:px-6 py-3 sm:py-4 rounded-md hover:bg-[#b52154] text-white font-semibold">
                                SUBSCRIBE NOW
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}