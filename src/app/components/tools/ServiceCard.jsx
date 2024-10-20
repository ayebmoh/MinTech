"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const ServiceCard = ({ path, serviceicon, title, description, delay }) => {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: delay || 0.6, ease: "easeInOut" },
      }}
      viewport={{ once: true, amount: 0.3 }}
      className={`cursor-pointer group flex flex-col px-2 relative w-[340px] hover:bg-sky-800/90 h-[450px] text-center items-center bg-transparent rounded-lg transform transition-transform`}
      onClick={() => router.push(`${path}`)}
    >
      <img
        className="w-[250px]  h-[250px] object-cover rounded-t-lg transition-transform duration-300 ease-in-out group-hover:scale-90"
        alt={title}
        src={serviceicon}
      />
      <div className="pb-20 flex flex-col gap-2">
        <h2 className="text-xl text-gray-300 font-semibold">{title}</h2>
        <p className="text-gray-300">{description}</p>
      </div>

      <div className="mb-4 absolute bottom-0 left-0 right-0 flex justify-center items-center transition-all duration-300 ease-in-out transform opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100">
        <button
          onClick={() => router.push(`/${path}`)}
          className="bg-white text-black shadow-xl border-2 hover:bg-gray-200 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Discover
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
