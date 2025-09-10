import Image from 'next/image'
import React from 'react'


const HeroSection = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center justify-between py-12 px-6 ">
      <div className="w-full lg:w-1/2 flex flex-col items-center md:items-start justify-center space-y-6 md:space-y-10 md:pr-16 text-center md:text-left">
        <h1 className="font-bold leading-tight text-2xl sm:text-4xl md:text-5xl md:text-center lg:text-7xl lg:text-left">
          Spotless <span className="text-[#0A58A2]">Homes</span> &{" "}
          <span className="text-[#0A58A2]">Offices</span> Cleaning and Fresh{" "}
          <span className="text-[#0A58A2]">Laundry</span>
        </h1>
        <p className="text-base sm:text-lg md:text-lg md:text-center lg:text-left text-gray-700">
          Enjoy the Comfort of a Fresh, Clean Home, Office and Wardrobe with Our
          Expert Services.
        </p>
        <div className='w-full flex justify-center lg:justify-start'>
          
          <div className="flex justify-center items-center gap-3 w-full sm:w-auto ">
            <button className="bg-[#0A58A2] text-white py-2 px-6 rounded-lg shadow-md  ">
              Get Quote
            </button>
            <button className="bg-white text-[#0A58A2] py-2 px-6 rounded-lg shadow-md  sm:w-auto hover:bg-gray-100">
              Book Cleaning
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
    </div>
  );
}

export default HeroSection