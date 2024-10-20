import Marquee from "react-fast-marquee";
import {
  FaCode,
  FaBullhorn,
  FaEnvelope,
  FaChartLine,
  FaShieldAlt,
  FaServer,
  FaLaptopCode,
} from "../RemoteComponents";
import { MdSecurity, MdOutlineDesignServices } from "../RemoteComponents";

export default function TextSlider() {
  return (
    <Marquee
      className="text-white text-2xl font-bold  bg-gradient-to-l from-sky-600/55 via-slate-900 via-45% to-sky-900 p-6"
      speed={60}
      gradient={false}
    >
      <span className="text-slider mx-8 flex items-center relative group">
        <FaCode className="mr-2" /> Web Development
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-out"></span>
      </span>
      <span className="text-slider mx-8 flex items-center relative group">
        <FaBullhorn className="mr-2" /> Digital Marketing
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-out"></span>
      </span>
      <span className="text-slider mx-8 flex items-center relative group">
        <FaLaptopCode className="mr-2" /> Software Development
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-out"></span>
      </span>
      <span className="text-slider mx-8 flex items-center relative group">
        <FaEnvelope className="mr-2" /> Email Marketing
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-out"></span>
      </span>
      <span className="text-slider mx-8 flex items-center relative group">
        <MdOutlineDesignServices className="mr-2" /> Branding & Design
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-out"></span>
      </span>
      <span className="text-slider mx-8 flex items-center relative group">
        <FaChartLine className="mr-2" /> SEO
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-out"></span>
      </span>
      <span className="text-slider mx-8 flex items-center relative group">
        <FaServer className="mr-2" /> IT Services
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-out"></span>
      </span>
      <span className="text-slider mx-8 flex items-center relative group">
        <MdSecurity className="mr-2" /> Cyber Security
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-out"></span>
      </span>
      <span className="text-slider mx-8 flex items-center relative group">
        <FaShieldAlt className="mr-2" /> Data Security
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-out"></span>
      </span>
      <span className="text-slider mx-8 flex items-center relative group">
        <FaServer className="mr-2" /> Software Maintenance
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-out"></span>
      </span>
      <span className="text-slider mx-8 flex items-center relative group">
        <FaLaptopCode className="mr-2" /> IT Consulting
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-out"></span>
      </span>
      <span className="text-slider mx-8 flex items-center relative group">
        <FaServer className="mr-2" /> Dev Ops
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-out"></span>
      </span>
    </Marquee>
  );
}
