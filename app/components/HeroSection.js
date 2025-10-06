"use client"
import Image from 'next/image'
import React from 'react'
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import Link from 'next/link';

// const container = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3, // delay between children
//     },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };
const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center justify-between py-12 px-6 "
    >
      <div className="w-full lg:w-1/2 flex flex-col items-center md:items-start justify-center space-y-6 md:space-y-10 md:pr-16 text-center md:text-left">
        <h1 className="font-bold  text-2xl sm:text-4xl md:text-5xl md:text-center lg:text-7xl lg:text-left">
          Spotless <span className="text-[#0A58A2]">Homes</span> &{" "}
          <span className="text-[#0A58A2]">Offices</span> Cleaning and Fresh{" "}
          <span className="text-[#0A58A2]">Laundry</span>
        </h1>
        <p className="text-base sm:text-lg md:text-lg md:text-center lg:text-left text-gray-700">
          Cleaning and laundry solutions designed for busy people like you. From
          one-time deep cleaning to recurring laundry pickups, we make life
          easier and cleaner.
        </p>
        <div className="w-full flex justify-center lg:justify-start">
          <div className="flex justify-center items-center gap-3 w-full sm:w-auto ">
            <Link href="/booking">
              <button className="bg-[#0A58A2] text-white flex items-center gap-2  py-2 px-8 rounded-md shadow-md  sm:w-auto hover:bg-blue-900 hover:scale-105 transition-transform cursor-pointer sm:text-[12px]">
                Book A Service <HiMiniArrowSmallRight size={25} />
              </button>
            </Link>
<Link href="/contact-us">
            <button className="bg-white text-[#0A58A2] border border- py-2 px-6 rounded-md shadow-md cursor-pointer hover:scale-105   ">
              Get A Free Quote
            </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center mb-6 md:mb-0 rounded-full">
        <Image
          src={"/images/hero.png"}
          alt="Total Touch Cleaning and Laundry Services"
          loading="lazy"
          width={600}
          height={400}
          className=" w-full max-w-md md:max-w-none h-auto object-contain rounded-full"
        />
      </div>
    </motion.div>
  );
}

export default HeroSection