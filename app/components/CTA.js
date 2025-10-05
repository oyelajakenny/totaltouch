import React from "react";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="container mx-auto my-10 p-6  rounded-lg text-white text-center">
      <div className="max-w-3xl mx-auto bg-[#0A58A2] p-10 shadow-lg flex flex-col md:flex-row items-center justify-center gap-1 lg:gap-10 rounded-lg">
        <div className="w-full md:w-2/3  md:mb-0 ">
          <h2 className="text-2xl md:text-xl font-bold text-center lg:text-left mb-2">
            Ready to Experience a Cleaner, Fresher Space?
          </h2>
          <p className="mb-6 text-[13px] text-center lg:text-left md:text-sm text-blue-100">
            Book your cleaning or laundry service today and enjoy the
            convenience of a spotless home or office!
          </p>
        </div>
        <Link href="/booking">
          <button className="bg-white text-[#0A58A2] font-semibold cursor-pointer px-7 py-2 rounded">Book Now </button>
        </Link>
      </div>
    </div>
  );
};

export default CTA;
