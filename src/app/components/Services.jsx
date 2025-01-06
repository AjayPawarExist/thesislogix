import{} from "react-icons/fa"
import { RiCustomerService2Line} from "react-icons/ri"
import { AiFillEdit } from "react-icons/ai";
import { GiArchiveResearch } from "react-icons/gi";

export default function Services() {
  return (
    <>
    {/* research services */}
    <div className=" max-w-[1320px] mx-auto mt-[6rem] text-white " >
         <h1 className="text-4xl text-center py-5 text-black font-semibold mb-7">Research Services</h1>    
    </div>
    {/* box of research service */}
    <div className="max-w-[1320px] mx-auto grid lg:grid-cols-3 md:grid-col-2 gap-8 text-white">
      <div className="w-[420px] h-[260px]  bg-gradient-to-r from-blue-600 to-gray-700  border-2 shadow-lg hover:scale-105 rounded-md  transition-all">
        <RiCustomerService2Line className="ml-[12rem] mt-9 text-4xl"/>
          <h1 className=" font-semibold ml-[4rem] mt-4 text-2xl"> TOPIC MAKING SERVICE</h1>
          <p className="mt-2 px-8">Relevant Topic, Right Start – Expert-guided ideas rooted in trends for research success. </p>
          </div>

        {/* box 2 */}

          <div className="w-[420px] h-[260px]  bg-gradient-to-r from-blue-600 to-gray-700  border-2 shadow-lg hover:scale-105 rounded-md  transition-all">
              <AiFillEdit className="ml-[12rem] mt-9 text-4xl"/>
              <h1 className=" font-semibold ml-[7rem] mt-4 text-2xl"> THESIS WRITING</h1>
                   <p className="mt-2  px-8">Tailored Thesis, Perfect Precision – Crafted to Match Your Vision and University Standards. </p>
          </div>

          {/*box 3  */}

          <div className="w-[420px] h-[260px]  bg-gradient-to-r from-blue-600 to-gray-700  border-2 shadow-lg hover:scale-105 rounded-md  transition-all">
             <GiArchiveResearch className="ml-[12rem] mt-9 text-4xl"/>
               <h1 className=" font-semibold ml-[2rem] mt-4 text-2xl "> SYNOPSIS/RESEARCH OUTLINE</h1>
                    <p className="mt-2  px-10 ">Our expert will ensure that it is easy to understand by the scholars.  </p>
         </div>
         
    {/* <div className="w-[420px] h-[260px] bg-slate-200 border-2  border-blue-600 shadow-lg hover:scale-105  rounded-md">
    <h1 className="text-black text-center pt-[30px]">SYNOPSIS/RESEARCH OUTLINE</h1>
        <p className="text-black text-center pt-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
         quasi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, in?</p>
    </div> */}
    {/* <div className="w-[420px] h-[260px] bg-slate-200 border-2  border-blue-600 shadow-lg hover:scale-105 rounded-md">
    <h1 className="text-black text-center pt-[30px]"> QUESTIONNAIRE</h1>
        <p className="text-black text-center pt-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
         quasi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, in?</p>
    </div>
    <div className="w-[420px] h-[260px] bg-slate-200 border-2 border-blue-600 shadow-lg hover:scale-105 rounded-md ">
    <h1 className="text-black text-center pt-[30px]">Personalized Guidance</h1>
        <p className="text-black text-center pt-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
         quasi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, in?</p>
    </div> */}


</div>
</>
  )
}
