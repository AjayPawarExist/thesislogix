"use client";
import Link from "next/link";
import { FaPhoneAlt, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Contact Bar */}
      <div className="hidden sm:flex justify-between items-center text-white bg-gradient-to-r from-gray-950 to-blue-900 py-2 px-5">
        {/* Left Section */}
        <div className="flex gap-10">
          <p className="flex items-center gap-2 text-sm">
            <FaPhoneAlt className="text-sm" /> CALL ANYTIME: +91 96918 15989
          </p>
          <p className="flex items-center gap-2 text-sm">
            <IoMail /> info@thesislogix.in
          </p>
        </div>

        {/* Right Section: Social Icons */}
        <div className="flex gap-5 text-lg cursor-pointer">
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </div>

      {/* Navbar */}
      <div className="border-b-2 py-4">
        <div className="flex justify-between items-center px-10">
          {/* Logo */}
          <Image src="/logo.png" width={200} height={100} alt="Logo" className="sm:w-[170px] sm:h-[50px]" />

          {/* Hamburger Icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Navbar Links */}
          <div
            className={`${menuOpen ? "block" : "hidden"} absolute sm:static top-[6rem] left-0 w-full sm:w-auto bg-gray-700 sm:bg-transparent sm:flex sm:gap-10 p-5 sm:p-0`}
          >
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 text-lg font-semibold text-white">
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>

              {/* Dropdown */}
              <div className="relative group">
                <Link href="/services" className="cursor-pointer">
                  Services
                </Link>
                <div className="hidden group-hover:block absolute top-full left-0 bg-gray-800 text-white px-5 py-3 shadow-lg">
                  <p className="hover:text-gray-400">Topic Making Service</p>
                  <p className="hover:text-gray-400">Thesis Writing</p>
                  <p className="hover:text-gray-400">Thesis Analysis and Summary</p>
                  <p className="hover:text-gray-400">Synopsis/Research Outline</p>
                  <p className="hover:text-gray-400">Questionnaire</p>
                </div>
              </div>

              <Link href="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

