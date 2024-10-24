import WebService from "@/app/assets/web-service.png";
import AiService from "@/app/assets/ai-service.png";
import BiService from "@/app/assets/bi-service.png";
import SecurityService from "@/app/assets/security-service.png";
import SocialService from "@/app/assets/social-service.png";
import BreadCrumb from "../components/tools/BreadCrubm";
import Section from "../components/tools/Section";
import { FaRobot, FaCode } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";
import { AiFillPieChart } from "react-icons/ai";

const Services = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-transparent via-sky-900/65 via-50% to-slate-900 pt-16 pb-32 space-y-24">
      <BreadCrumb Title="Our Services" />
      <Section
        title="Web & Mobile Development Services"
        path="Web&Mobile"
        description="We provide tailored web and mobile development solutions to meet your business needs. Our services ensure responsive, high-performing websites and user-friendly mobile apps, optimized for all platforms to enhance user experience and engagement."
        imgSrc={WebService.src}
        isImageRight={false}
        Icon={<FaCode className="h-7 w-7 text-white" />}
      />
      <Section
        title="AI Services"
        path="Ai"
        description="We offer AI-powered solutions designed to automate processes and drive smarter decision-making. Our services include natural language processing, machine learning, and predictive analytics to help your business stay competitive and innovative."
        imgSrc={AiService.src}
        isImageRight={true}
        Icon={<FaRobot className="h-7 w-7 text-white" />}
      />
      <Section
        title="Business Intelligence (BI) Services"
        path="Bi"
        description="Our BI services transform data into actionable insights, enabling better decision-making. We provide data visualization, reporting, and analytics tools to help businesses optimize performance and uncover growth opportunities."
        imgSrc={BiService.src}
        Icon={<GiProgression className="h-7 w-7 text-white" />}
        isImageRight={false}
      />
      <Section
        title="Social Media Management Services"
        path="SMA"
        description="We provide expert social media management to enhance your brand's online presence. Our services include content creation, audience engagement, and analytics to help you grow and maintain a strong digital footprint."
        imgSrc={SocialService.src}
        Icon={<AiFillPieChart className="h-7 w-7 text-white" />}
        isImageRight={true}
      />
      <Section
        title="Cybersecurity Services"
        path="CyberSecurity"
        description="We offer comprehensive cybersecurity solutions to safeguard your digital assets. Our services include threat detection, data protection, and vulnerability management, ensuring your business remains secure in today’s digital landscape."
        imgSrc={SecurityService.src}
        Icon={<MdOutlineSecurity className="h-7 w-7 text-white" />}
        isImageRight={false}
      />
      <div className="w-full flex justify-center items-center">
        <button className="px-8 animate-fade-up shadow-black ring-black ring-opacity-5 shadow-xl z-30 py-3 flex flex-row bg-sky-600 rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-sky-700 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#0C4A6E;] hover:[text-shadow:2px_2px_2px_#06B6D4] text-2xl">
          <a href="/contact-us"> Ask us for more services {">"}</a>
        </button>
      </div>
    </div>
  );
};

export default Services;
