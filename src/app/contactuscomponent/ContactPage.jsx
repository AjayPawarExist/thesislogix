import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

import Link from 'next/link';

export default function ContactPage() {
    return (
        <>
            {/* Contact Page */}
            <div className="flex flex-col md:flex-row justify-around gap-20 bg-white text-black px-4 sm:px-20 py-20 mb-8">
                
                {/* Left Side: Contact Details */}
                <div className="w-full md:w-1/2">
                    {/* Title and Intro */}
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">Get in Touch</h1>
                    <p className="text-sm sm:text-base text-slate-700 tracking-wider mt-3 mb-6">
                        Reach out for personalized academic support.
                    </p>

                    {/* Contact Information */}
                    <div className="text-sm leading-relaxed text-slate-700 space-y-4">
                        {/* Email */}
                        <div className="flex items-center gap-3">
                            <MdMailOutline className="text-gray-500" />
                            <a href="mailto:editor@thesislogix.in" className="hover:underline">
                                editor@thesislogix.in
                            </a>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-3">
                            <FaPhoneAlt className="text-gray-500" />
                            <a href="tel:+919691815989" className="hover:underline">
                                +91 9691815989
                            </a>
                        </div>

                        {/* Address */}
                        <div className="flex items-center gap-3">
                            <FaLocationDot className="text-gray-500" />
                            <p>
                                C-409, Sagar Landmark, Ayodhya Bypass Road, Bhopal - 462010
                            </p>
                        </div>
                    </div>

                    {/* Embedded Google Map */}
                    <div className="mt-6">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.9253595647847!2d77.43895426090056!3d23.28216167890504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c69cce0d44e81%3A0x5ea670d5840a116b!2sThesis%20Logix!5e0!3m2!1sen!2sin!4v1736077527327!5m2!1sen!2sin"
                            width="100%"
                            height="350"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="w-full md:w-1/2">
                    <form className="text-xl leading-6 text-gray-600 space-y-5 ">
                        {/* Name Input */}
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-black font-medium">Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                className="border-b border-black outline-none py-1"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-black font-medium">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="border-b border-black outline-none py-1"
                            />
                        </div>

                        {/* Message Input */}
                        <div className="flex flex-col">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                placeholder="Type your Message"
                                className="text-[11px] border-b border-black outline-none"
                            ></textarea>
                        </div>

                        {/* Terms Checkbox */}
                        <div className="flex items-center gap-2">
                            <input id="terms" type="checkbox" className="w-4 h-4" />
                            <label htmlFor="terms" className="text-sm">I accept the Terms</label>
                        </div>

                        {/* Submit Button */}
                        <button className="bg-black text-white px-6 py-2 text-sm font-medium tracking-wider hover:bg-gray-800">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
