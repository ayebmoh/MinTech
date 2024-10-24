import React from "react";
import ServiceCard from "../tools/ServiceCard";
import Security from "@/app/assets/Security.png";
import Ai from "@/app/assets/ai.png";
import Web from "@/app/assets/web-dev.png";
import Social from "@/app/assets/social-media.png";
import Buisness from "@/app/assets/bi.png";
import Others from "@/app/assets/others.png";
const ServicesSection = () => {
  return (
    <section className="bg-gradient-to-b py-8 bg-slate-900 to-slate-700 ">
      <div className="relative mx-auto  max-w-5xl text-center mt-12">
        <h2 className="block w-full bg-gradient-to-b pb-3 from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl md:text-4xl">
          What we provide
        </h2>
        <p className="sm:mx-auto  my-4 w-full max-w-2xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-300">
          We offer a comprehensive range of IT services designed to drive
          innovation and enhance your business operations. Our team of experts
          is dedicated to delivering tailored, cutting-edge technology solutions
          that meet your unique needs and help you stay ahead in today's digital
          world.
        </p>
      </div>
      <div className="  flex flex-col items-center -space-x-4 gap-4 p-6  md:grid md:grid-cols-2 lg:grid-cols-3 lg:justify-center lg:pl-20 w-full">
        <ServiceCard
          path="/CyberSecurity"
          delay="1"
          serviceicon={Security.src}
          title="Cybersecurity"
          description="Safeguard your business with comprehensive, state-of-the-art security measures that protect your data and systems from threats."
        />
        <ServiceCard
          path="/Ai"
          delay="1"
          serviceicon={Ai.src}
          title="AI Solutions"
          description="Harness the power of artificial intelligence to automate processes, drive insights, and make smarter, data-driven decisions."
        />
        <ServiceCard
          path="/Web&Mobile"
          delay="1"
          serviceicon={Web.src}
          title="Web Development"
          description="Create modern, responsive websites that are tailored to your business needs, ensuring a seamless user experience on all devices."
        />
        <ServiceCard
          path="/SMA"
          delay="0.8"
          serviceicon={Social.src}
          title="Social Media Management"
          description="Grow your brand’s online presence with our targeted social media strategies, designed to increase engagement and reach your audience."
        />
        <ServiceCard
          delay="0.8"
          path="/Bi"
          serviceicon={Buisness.src}
          title="Business Intelligence"
          description="Unlock valuable insights from your data with advanced analytics, helping you make informed decisions that drive your business forward."
        />
        <ServiceCard
          path="/services"
          delay="0.8"
          serviceicon={Others.src}
          title="Other Services"
          description="From cloud solutions to IT support, explore our additional services that cater to your unique business needs and goals."
        />
      </div>
    </section>
  );
};

export default ServicesSection;
