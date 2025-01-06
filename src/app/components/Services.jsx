import { RiCustomerService2Line } from 'react-icons/ri';
import { AiFillEdit } from 'react-icons/ai';
import { GiArchiveResearch } from 'react-icons/gi';

export default function ResearchServices() {
  return (
    <div className="max-w-[1320px] mx-auto mt-[4rem] text-white px-5">
      {/* Section Title */}
      <h1 className="text-3xl sm:text-4xl text-center py-5 text-black font-semibold mb-7">
        Research Services
      </h1>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Box 1 */}
        <div className="w-full h-[260px] bg-gradient-to-r from-blue-600 to-gray-700 border-2 shadow-lg hover:scale-105 rounded-md transition-all mx-auto px-4 py-6">
          <RiCustomerService2Line className="mx-auto text-4xl" />
          <h1 className="font-semibold text-center mt-4 text-2xl">
            TOPIC MAKING SERVICE
          </h1>
          <p className="mt-2 text-center">
            Relevant Topic, Right Start – Expert-guided ideas rooted in trends for research success.
          </p>
        </div>

        {/* Box 2 */}
        <div className="w-full h-[260px] bg-gradient-to-r from-blue-600 to-gray-700 border-2 shadow-lg hover:scale-105 rounded-md transition-all mx-auto px-4 py-6">
          <AiFillEdit className="mx-auto text-4xl" />
          <h1 className="font-semibold text-center mt-4 text-2xl">
            THESIS WRITING
          </h1>
          <p className="mt-2 text-center">
            Tailored Thesis, Perfect Precision – Crafted to Match Your Vision and University Standards.
          </p>
        </div>

        {/* Box 3 */}
        <div className="w-full h-[260px] bg-gradient-to-r from-blue-600 to-gray-700 border-2 shadow-lg hover:scale-105 rounded-md transition-all mx-auto px-4 py-6">
          <GiArchiveResearch className="mx-auto text-4xl" />
          <h1 className="font-semibold text-center mt-4 text-2xl">
            SYNOPSIS/RESEARCH OUTLINE
          </h1>
          <p className="mt-2 text-center">
            Our expert will ensure that it is easy to understand by the scholars.
          </p>
        </div>
      </div>
    </div>
  );
}