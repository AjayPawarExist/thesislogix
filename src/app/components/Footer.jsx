import { FaPhoneAlt, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { GoPaperAirplane } from "react-icons/go";

export default function Footer() {
    return (
        <>
            <div className="flex bg-gray-950 h-[25rem] w-full text-white justify-around">
                <div className="flex gap-11 ml-9 mt-10 ">
                    {/* Quick link part */}
                    <div className="">
                        <h1 className="font-semibold text-2xl">Quick Link</h1>
                        <div className="mt-10 ">
                            <p className="mt-2">Home</p>
                            <p className="mt-2">About us</p>
                            <p className="mt-2">Services</p>
                            <p className="mt-2">FAQs</p>
                        </div>
                    </div>
                    {/* contact */}
                    <div className="">

                        <h1 className="font-semibold text-2xl">Contact us</h1>
                        <div className="mt-10">
                            <p className="flex gap-2">
                                <FaPhoneAlt className="mt-1" />
                                CALL Us: +91 96918 15989
                            </p>
                            <p className="mt-3 flex gap-2">
                                <IoMail className="mt-1 " />
                                Email: info@thesislogix.in
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <h1 className="font-semibold text-2xl">Open hours</h1>
                        <div className="mt-10 ">
                            <p >Mon-Sat: 8am - 5pm</p>
                            <p className="mt-3">Sunday: CLOSED</p>
                        </div>
                    </div>
                </div>

                {/* left part */}

                <div className=" gap-11 ml-9 mt-10">
                    <div className="">
                        <h1 className="font-semibold text-2xl">Stay Updated</h1>
                        <p className="w-[19rem] ml-2">Subscibe to our newsletter for the latest update and academic tips.</p>
                    </div>
                    <div className=" mt-8 gap-4 flex">
                        <input type="email" name="" id="" placeholder="Enter Your Email" className="text-black" />
                        <button className="border bg-gray-700 px-4 py-2 hover:bg-red-600">Subscibe</button>
                    </div>

                </div>
            </div>
            {/* footer bottom */}

            <div className="mt-[-2rem] flex justify-around text-white">
                <div className="">
                    <p>2025 © All rights reserved by ThesisLogix</p>

                </div>
                <div className="">
                    <p>
                        Design & Develop By ****
                    </p>
                </div>
                <div className="flex gap-4 text-2xl">
                    <FaFacebook />
                    <FaLinkedin />
                    <FaTwitter />
                </div>
            </div>


        </>
    )
}
