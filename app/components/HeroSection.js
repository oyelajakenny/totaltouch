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
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className="container mx-auto flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center justify-between py-12 px-6 "
    >
      <div className="w-full lg:w-1/2 flex flex-col items-center md:items-start justify-center space-y-6 md:space-y-10 md:pr-16 text-center md:text-left">
        <h1 className="font-bold  text-2xl sm:text-4xl md:text-5xl md:text-center lg:text-7xl lg:text-left">
          Spotless <span className="text-[#0A58A2]">Homes</span> &{" "}
          <span className="text-[#0A58A2]">Offices</span> Cleaning and Fresh{" "}
          <span className="text-[#0A58A2]">Laundry</span>
        </h1>
        <p className="text-base sm:text-lg md:text-lg md:text-center lg:text-left text-gray-700">
          Experience the perfect clean with our eco-friendly solutions. From
          home cleaning to laundry pickup & delivery - we&lsquo;ve got you
          covered!
        </p>
        <div className="w-full flex justify-center lg:justify-start">
          <div className="flex justify-center items-center gap-3 w-full sm:w-auto ">
            <Link href="/booking">
              <button className="bg-[#0A58A2] text-white flex items-center gap-2  py-2 px-8 rounded-md shadow-md  sm:w-auto hover:bg-blue-900 hover:scale-105 transition-transform cursor-pointer ">
                Book A Service <HiMiniArrowSmallRight size={25} />
              </button>
            </Link>

            <button className="bg-white text-[#0A58A2] border border- py-2 px-6 rounded-md shadow-md hover:scale-105   ">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center mb-6 md:mb-0">
        <Image
          src={"/images/hero-image.png"}
          alt="Total Touch Cleaning and Laundry Services"
          loading="lazy"
          width={800}
          height={500}
          className="w-full max-w-md md:max-w-none h-auto object-contain"
        />
      </div>
    </motion.div>
  );
}

export default HeroSection