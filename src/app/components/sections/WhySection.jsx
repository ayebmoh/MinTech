"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/animations"; // Assuming you have this animation defined

const WhySection = () => {
  return (
    <section
      id="features"
      className="relative block px-6 py-10 md:py-28 md:px-10 border-t border-b border-neutral-900 bg-gradient-to-b from-black to-neutral-900/30"
    >
      <div className="relative mx-auto pb-4 max-w-5xl text-center">
        <h2 className="block w-full bg-gradient-to-b pb-2 from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
          Why choose us
        </h2>
        <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-300">
          Discover how our expertise can elevate your business to the next
          level. We’re here to help you succeed with innovative and efficient IT
          solutions.
        </p>
      </div>

      {/* Using motion.div to apply animations only when scrolled into view */}
      <motion.div
        className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="show" // Trigger animation when scrolled into view
        viewport={{ once: true, amount: 0.3 }} // Once the element is 30% visible
        variants={fadeIn("up", "spring", 0.2, 1)} // Your animation
      >
        {/* Regular div for the hover animations to work */}
        <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow transform transition-transform duration-300 hover:translate-y-[-10px]">
          <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border bg-gradient-to-b from-sky-600 to-sky-800 border-sky-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                stroke-line="round"
                d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
              />
            </svg>
          </div>
          <h3 className="mt-6 text-gray-400">Tailored IT Solutions</h3>
          <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
            We understand that every business is unique. Our team offers
            customized IT solutions that perfectly align with your specific
            needs, ensuring seamless integration and smooth operations.
          </p>
        </div>

        {/* Repeat the same for the other two sections */}
        <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow transform transition-transform duration-300 hover:translate-y-[-10px]">
          <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border bg-gradient-to-b from-sky-600 to-sky-800 border-sky-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                stroke-line="round"
                d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
              />
            </svg>
          </div>
          <h3 className="mt-6 text-gray-400">Expert Team</h3>
          <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
            Our professionals are highly skilled and experienced in the latest
            technologies. Whether it's cloud computing, cybersecurity, or
            software development, we deliver top-tier solutions with precision
            and efficiency.
          </p>
        </div>

        <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow transform transition-transform duration-300 hover:translate-y-[-10px]">
          <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border bg-gradient-to-b from-sky-600 to-sky-800 border-sky-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                stroke-line="round"
                d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
              />
            </svg>
          </div>
          <h3 className="mt-6 text-gray-400">Reliable Support</h3>
          <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
            We provide 24/7 support to ensure that your systems are running
            smoothly. Our team is always ready to assist you whenever needed,
            guaranteeing minimal downtime.
          </p>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b bg-gradient-to-tr from-sky-600/20 to-transparent border-sky-600/20"></div>
      <div className="absolute bottom-0 right-0 z-0 h-1/3 w-full bg-gradient-to-tl from-sky-600/20 to-transparent"></div>
    </section>
  );
};

export default WhySection;
