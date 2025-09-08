import Image from 'next/image'
import React from 'react'


const HeroSection = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between py-12 px-6 md:py-20 md:px-8">
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center space-y-6 md:space-y-10 md:pr-16 text-center md:text-left">
        <h1 className="font-bold leading-tight text-3xl sm:text-4xl md:text-7xl">
          Spotless <span className="text-[#0A58A2]">Homes</span> &{" "}
          <span className="text-[#0A58A2]">Offices</span> Cleaning and Fresh{" "}
          <span className="text-[#0A58A2]">Laundry</span>
        </h1>
        <p className="text-base sm:text-lg md:text-lg text-gray-700">
          Enjoy the Comfort of a Fresh, Clean Home, Office and Wardrobe with Our
          Expert Services.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md w-full sm:w-auto">
            Get Quote
          </button>
          <button className="bg-white text-blue-600 py-2 px-6 rounded-lg shadow-md w-full sm:w-auto hover:bg-gray-100">
            Book Cleaning
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <Image
          src={"/hero-image.png"}
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