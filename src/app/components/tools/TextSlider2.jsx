import Marquee from "react-fast-marquee";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function SectionDivider() {
  return (
    <div className="relative">
      <Marquee
        className="text-white text-2xl font-bold  bg-gradient-to-l from-sky-600/55 via-slate-900 via-45% to-sky-900 p-6"
        speed={60}
        gradient={false}
      >
        <span className="mx-8 flex items-center relative group">
          <FaArrowLeft className="mr-2 text-sky-400" />
          <span className="text-slider">Innovative Solutions</span>
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-out"></span>
        </span>
        <span className="mx-8 flex items-center relative group">
          <FaArrowRight className="mr-2 text-sky-400" />
          <span className="text-slider">Tailored to Your Needs</span>
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-out"></span>
        </span>
        <span className="mx-8 flex items-center relative group">
          <FaArrowLeft className="mr-2 text-sky-400" />
          <span className="text-slider">Driving Digital Transformation</span>
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-out"></span>
        </span>
        <span className="mx-8 flex items-center relative group">
          <FaArrowRight className="mr-2 text-sky-400" />
          <span className="text-slider">Crafting the Future</span>
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-out"></span>
        </span>
      </Marquee>
      <div className="absolute w-full h-[5px] bg-gradient-to-r from-sky-500 via-gray-700 to-sky-500"></div>
    </div>
  );
}
