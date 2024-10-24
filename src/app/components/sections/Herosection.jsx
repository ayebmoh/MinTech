"use client";
import { ArrowUpRightIcon } from "../RemoteComponents";
import { motion } from "framer-motion";
import { floating } from "@/app/animations";
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b  from-black via-sky-800/55 to-black ">
      <div className="grid max-w-screen-xl  py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="animate-fade-in  ml-5 place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
            Empowering Your Digital Transformation
          </h1>
          <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">
            At &nbsp;
            <span className="font-bold animate-bounce inline-block">
              MinTech
            </span>
            &nbsp;, we provide comprehensive digital services designed to drive
            innovation and efficiency in your business. Our skilled team is
            dedicated to developing tailored solutions that meet your specific
            needs, helping you navigate the ever-evolving digital landscape with
            confidence.
          </p>

          <p className="max-w-2xl mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl text-gray-400">
            {" "}
            Feel free to adjust any part of it to better align with your vision!
          </p>
          <a
            href="/services"
            className="inline-flex  items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 bg-sky-700 hover:bg-sky-800 focus:ring-4  focus:ring-gray-500"
          >
            Explore our services
            <ArrowUpRightIcon className=" h-4  font-bold w-7" />
          </a>
        </div>
        <motion.div className=" animate-slide-in-right  mt-6 lg:mt-0 lg:col-span-5 lg:flex">
          <motion.img
            className="lg:h-[450px] h-[350px] w-[500px]"
            src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/hero-img.png"
            alt="hero-img"
            initial="hidden"
            animate="show"
            variants={floating}
            viewport={{ once: true, amount: 0.3 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
