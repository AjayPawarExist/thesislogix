'use client';

import Link from 'next/link';
import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { sendEmail } from '../../actions/contact';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string(),
});

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // onSubmit calls the server action and handles the result.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const result = await sendEmail(data);
      console.log(result);
      // Optionally, show a notification or update state based on result.message
      reset(); // Reset the form on success
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-around gap-20 bg-white text-black px-4 sm:px-20 py-20 mb-8">
        {/* Left Side: Contact Details */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl sm:text-5xl font-semibold">Get in Touch</h1>
          <p className="text-sm sm:text-base text-slate-700 tracking-wider mt-3 mb-6">
            Reach out for personalized academic support.
          </p>
          <div className="text-sm leading-relaxed text-slate-700 space-y-4">
            <div className="flex items-center gap-3 text-gray-500 hover:text-blue-800">
              <MdMailOutline className="text-xl" />
              <Link href="mailto:info@thesislogix.com" className="hover:underline">
              info@thesislogix.com
              </Link>
            </div>
            <div className="flex items-center gap-3 text-gray-500 hover:text-blue-800">
              <FaPhoneAlt className="text-lg" />
              <Link href="tel:+919691815989" className="hover:underline">
                +91 9691815989
              </Link>
            </div>
            <div className="flex items-center gap-3 text-gray-500 hover:text-blue-800">
              <FaLocationDot className="text-xl" />
              <p>
                C-409, Sagar Landmark, Ayodhya Bypass Road, Bhopal - 462010
              </p>
            </div>
          </div>
          <div className="mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.9253595647847!2d77.43895426090056!3d23.28216167890504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c69cce0d44e81%3A0x5ea670d5840a116b!2sThesis%20Logix!5e0!3m2!1sen!2sin!4v1736077527327!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Name Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-black font-medium tracking-wider">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="text-sm border border-gray-300 rounded px-3 py-2"
                required
                {...register("name")}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name.message}</span>
              )}
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-black font-medium tracking-wider">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="text-sm border border-gray-300 rounded px-3 py-2"
                required
                {...register("email")}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email.message}</span>
              )}
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-black font-medium tracking-wider">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Type your message"
                className="text-sm border border-gray-300 rounded px-3 py-2"
                required
                {...register("message")}
              ></textarea>
              {errors.message && (
                <span className="text-red-500 text-sm">{errors.message.message}</span>
              )}
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center gap-2">
              <input id="terms" type="checkbox" className="w-4 h-4" required />
              <label htmlFor="terms" className="text-sm">
                I accept the Terms
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-950 text-white px-8 py-4 text-sm font-semibold tracking-widest hover:bg-gray-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
