import Link from "next/link"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Contact Information</h2>

      <div className="space-y-6">
        <div className="flex items-start">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <Mail className="h-6 w-6 text-blue-900" />
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-1">Email</h3>
            <Link
              href="mailto:info@thesislogix.in"
              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
            >
              info@thesislogix.in
            </Link>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <Phone className="h-6 w-6 text-blue-900" />
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-1">Phone</h3>
            <Link
              href="tel:+919691815989"
              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
            >
              +91 9691815989
            </Link>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <MapPin className="h-6 w-6 text-blue-900" />
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-1">Address</h3>
            <p className="text-gray-600">C-409, Sagar Landmark, Ayodhya Bypass Road, Bhopal - 462010</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <Clock className="h-6 w-6 text-blue-900" />
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-1">Business Hours</h3>
            <p className="text-gray-600">
              Monday - Friday: 9:00 AM - 6:00 PM
              <br />
              Saturday: 10:00 AM - 4:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="font-medium text-gray-800 mb-4">Connect With Us</h3>
        <div className="flex space-x-4">
          <Link href="#" className="bg-blue-900 hover:bg-blue-800 text-white p-2 rounded-full transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </Link>
          <Link href="#" className="bg-blue-900 hover:bg-blue-800 text-white p-2 rounded-full transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </Link>
          <Link href="#" className="bg-blue-900 hover:bg-blue-800 text-white p-2 rounded-full transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </Link>
          <Link href="#" className="bg-blue-900 hover:bg-blue-800 text-white p-2 rounded-full transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
