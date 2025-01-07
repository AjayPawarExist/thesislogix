import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

import Link from 'next/link';

export default function ContactPage() {
    return (
        <>
            {/* Contact Page */}
            <div className="flex flex-col md:flex-row justify-around gap-24 bg-white text-black px-6 md:px-20 py-8 ">
                {/* Left Side: Contact Details */}
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl font-semibold sm:text-2xl lg:text-4xl">Get in Touch</h1>
                    <p className="text-sm text-slate-700 tracking-wider pt-3 pb-8 sm:text-xs lg:text-base">
                        Reach out for personalized academic support.
                    </p>

                    {/* Contact Info */}
                    <div className="text-xs font-light text-slate-700 leading-relaxed space-y-1">
                        {/* Email */}
                        <div className="flex items-center gap-3">
                            <p className="text-gray-500">
                                <MdMailOutline />
                            </p>
                            <a href="mailto:editor@thesislogix.in" className="text-[11px] hover:underline">
                                editor@thesislogix.in
                            </a>
                        </div>
                        {/* Phone */}
                        <div className="flex items-center gap-3">
                            <p className="text-gray-500">
                                <FaPhoneAlt />
                            </p>
                            <a href="tel:+919691815989" className="text-[11px] hover:underline">
                                +91 9691815989
                            </a>
                        </div>
                        {/* Address */}
                        <div className="flex items-center gap-3">
                            <p className="text-gray-500">
                                <FaLocationDot />
                            </p>
                            <p className="text-[11px]">
                                C-409, Sagar Landmark, Ayodhya Bypass Road, Bhopal - 462010
                            </p>
                        </div>
                    </div>

                    {/* Embedded Google Map */}
                    <div className="map pt-6">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.9253595647847!2d77.43895426090056!3d23.28216167890504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c69cce0d44e81%3A0x5ea670d5840a116b!2sThesis%20Logix!5e0!3m2!1sen!2sin!4v1736077527327!5m2!1sen!2sin"
                            width="100%"
                            height="200"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="w-full md:w-1/2">
                    <form className="text-gray-400 text-xs leading-8 space-y-5">
                        {/* Name Input */}
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-black font-medium">Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                className="text-[11px] border-b border-black outline-none w-full"
                            />
                        </div>
                        {/* Email Input */}
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-black font-medium">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="text-[11px] border-b border-black outline-none w-full"
                            />
                        </div>
                        {/* Message Input */}
                        <div className="flex flex-col">
                            <label htmlFor="message" className="text-black font-medium">Message</label>
                            <textarea
                                id="message"
                                placeholder="Type your Message"
                                className="text-[11px] border-b border-black outline-none w-full"
                            ></textarea>
                        </div>
                        {/* Terms Checkbox */}
                        <div className="flex items-center gap-2 text-[11px]">
                            <input id="terms" type="checkbox" className="w-3 h-3" />
                            <label htmlFor="terms">I accept the Terms</label>
                        </div>
                        {/* Submit Button */}
                        <button className="bg-black text-white px-4 py-0 tracking-wider text-[11px] hover:bg-gray-800">
                            Submit
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}
