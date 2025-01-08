import { FaHandshake, FaClock, FaGlobe, FaUsers, FaLightbulb, FaAward, FaRocket, FaClipboardList, FaLaptopCode } from "react-icons/fa";

export default function About() {
  return (
    <div className="py-12 px-6 sm:px-12 lg:px-24 xl:px-36 min-h-screen">
      {/* Title Section */}
      <div className="text-center mb-10 sm:mb-14">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight">
          About <span className="text-blue-600">ThesisLogix</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600">
          Empowering doctoral scholars to achieve academic excellence
        </p>
      </div>

      {/* Content Section */}
      <div className="shadow-lg rounded-xl border border-gray-200 overflow-hidden mb-12 sm:mb-16 bg-white">
        <div className="p-8 sm:p-12 lg:p-16">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            At <span className="font-semibold text-blue-600">ThesisLogix</span>, we don’t just offer research assistance—we empower doctoral scholars to turn their academic dreams into reality. Our mission is to simplify the complex process of PhD research by providing expert consultation at every stage, ensuring that your work meets the highest standards of quality and innovation.
          </p>
          <p className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed">
            Since 2005, our professional research consultants and writers have partnered with thousands of doctoral candidates worldwide, helping them navigate the challenges of thesis writing with confidence. Whether it’s selecting the right research topic, drafting a flawless thesis, or perfecting your work through meticulous proofreading and editing, ThesisLogix ensures that every detail is handled with precision.
          </p>
          <p className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed">
            Our services go beyond just delivering a document—we work to enhance your research skills and understanding, ensuring that you stand out among your peers. We believe that every scholar’s research journey is unique, and that’s why we offer personalized solutions tailored to your specific academic needs.
          </p>
        </div>
      </div>

      {/* Why Us Section */}
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Why Work With Us</h2>
        <p className="mt-4 text-base sm:text-lg text-gray-600">
          Reasons to choose our guidance
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 sm:mt-12">
        {/* Reason 1 */}
        <div className="p-6 sm:p-8 rounded-lg shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 hover:shadow-2xl transition duration-300">
          <FaHandshake className="text-blue-600 text-4xl sm:text-5xl mb-4" />
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4">Client-Centric Approach</h3>
          <p className="text-gray-700 text-sm sm:text-base">
            Dedicated to understanding and meeting our clients' requirements, while maintaining strong ethical values.
          </p>
        </div>

        {/* Reason 2 */}
        <div className="p-6 sm:p-8 rounded-lg shadow-lg bg-gradient-to-r from-purple-50 to-purple-100 hover:shadow-2xl transition duration-300">
          <FaClock className="text-purple-600 text-4xl sm:text-5xl mb-4" />
          <h3 className="text-xl sm:text-2xl font-semibold text-purple-600 mb-4">On-Time Delivery</h3>
          <p className="text-gray-700 text-sm sm:text-base">
            Committed to providing timely delivery by adhering to industry guidelines and best practices.
          </p>
        </div>

        {/* Reason 3 */}
        <div className="p-6 sm:p-8 rounded-lg shadow-lg bg-gradient-to-r from-yellow-50 to-yellow-100 hover:shadow-2xl transition duration-300">
          <FaLightbulb className="text-yellow-600 text-4xl sm:text-5xl mb-4" />
          <h3 className="text-xl sm:text-2xl font-semibold text-yellow-600 mb-4">Passionate Researchers</h3>
          <p className="text-gray-700 text-sm sm:text-base">
            Our team is driven by passion for research and an attitude to achieve maximum positive results.
          </p>
        </div>

        {/* Reason 4 */}
        <div className="p-6 sm:p-8 rounded-lg shadow-lg bg-gradient-to-r from-green-50 to-green-100 hover:shadow-2xl transition duration-300">
          <FaGlobe className="text-green-600 text-4xl sm:text-5xl mb-4" />
          <h3 className="text-xl sm:text-2xl font-semibold text-green-600 mb-4">Global Presence</h3>
          <p className="text-gray-700 text-sm sm:text-base">
            Serving clients across the globe with a strong market presence for over 18 years.
          </p>
        </div>

        {/* Reason 5 */}
        <div className="p-6 sm:p-8 rounded-lg shadow-lg bg-gradient-to-r from-pink-50 to-pink-100 hover:shadow-2xl transition duration-300">
          <FaUsers className="text-pink-600 text-4xl sm:text-5xl mb-4" />
          <h3 className="text-xl sm:text-2xl font-semibold text-pink-600 mb-4">Experienced Team</h3>
          <p className="text-gray-700 text-sm sm:text-base">
            Our dynamic team of professionals collaborates closely with clients to ensure outstanding research outcomes.
          </p>
        </div>

        {/* Reason 6 */}
        <div className="p-6 sm:p-8 rounded-lg shadow-lg bg-gradient-to-r from-red-50 to-red-100 hover:shadow-2xl transition duration-300">
          <FaAward className="text-red-600 text-4xl sm:text-5xl mb-4" />
          <h3 className="text-xl sm:text-2xl font-semibold text-red-600 mb-4">Sustained Success</h3>
          <p className="text-gray-700 text-sm sm:text-base">
            Over the years, we've built a reputation for reliability, quality, and dedication to academic excellence.
          </p>
        </div>

        {/* Additional Icon-Based Reasons */}
        <div className="p-6 sm:p-8 rounded-lg shadow-lg bg-gradient-to-r from-indigo-50 to-indigo-100 hover:shadow-2xl transition duration-300">
          <FaRocket className="text-indigo-600 text-4xl sm:text-5xl mb-4" />
          <h3 className="text-xl sm:text-2xl font-semibold text-indigo-600 mb-4">Innovative Solutions</h3>
          <p className="text-gray-700 text-sm sm:text-base">
            We provide creative and innovative research solutions, making your thesis stand out in the academic world.
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-lg shadow-lg bg-gradient-to-r from-teal-50 to-teal-100 hover:shadow-2xl transition duration-300">
          <FaClipboardList className="text-teal-600 text-4xl sm:text-5xl mb-4" />
          <h3 className="text-xl sm:text-2xl font-semibold text-teal-600 mb-4">Detailed Process</h3>
          <p className="text-gray-700 text-sm sm:text-base">
            We focus on a structured and detailed process to guide you through every step of your research journey.
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-lg shadow-lg bg-gradient-to-r from-gray-50 to-gray-100 hover:shadow-2xl transition duration-300">
          <FaLaptopCode className="text-gray-600 text-4xl sm:text-5xl mb-4" />
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-600 mb-4">Tech-Driven Approach</h3>
          <p className="text-gray-700 text-sm sm:text-base">
            Our team utilizes cutting-edge technology to optimize your research and thesis presentation.
          </p>
        </div>
      </div>
    </div>
  );
}
