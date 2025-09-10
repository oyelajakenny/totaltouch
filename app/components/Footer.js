
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";



import {
  about,
  company,
  service,
  support,
  recommend,
} from "../constants/index";

const Footer = () => {
  const [formData, setFormData] = useState({ email: "" });
  const [error, setError] = useState("");
  const validate = () => {
    let newErrors = "";
    if (!formData.email) {
      newErrors = "Email is required";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
    } else {
      setError("");
      console.log("Form submitted:", formData);
      // send data to API route
    }
  };

  return (
    <footer className="bg-[#0A58A2] py-15">
      {/* Top Section */}
      <div className="container mx-auto ">
        <div className="flex justify-center items-center flex-wrap gap-10 lg:gap-20 pb-24">
          <div className="w-full lg:w-1/3 ">
            <p className="text-white text-center text-xl mb-4 font-semibold">
              Subscribe to our newsletter
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex justify-center items-center gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
                <button
                  type="submit"
                  className="w-fit bg-blue-50 text-[#0A58A2] px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Subscribe
                </button>
              </div>
              {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

              <p className="text-center text-white text-sm mt-2">
                We respect your privacy, we won&apos;t spam you.
              </p>
            </form>
          </div>
        </div>

        <hr className=" border-1 border-blue-200" />

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 px-5 justify-center gap-8 lg:px-32  pt-20 pb-10">
          <div className="space-y-5 lg:space-y-7">
            <Image src={"/Logo.png"} alt="Logo" width={100} height={50} />
            <p className="text-white text-sm">
              Enjoy the Comfort of a Fresh, Clean Home, Office and Wardrobe with
              Our Expert Services.
            </p>

            <div className="flex gap-5">
              <a href="#">
                <FaTwitter className="size-7 text-white" />
              </a>
              <a href="#">
                <FaFacebook className="size-7 text-white" />
              </a>
              <a href="#">
                <FaWhatsapp className="size-7 text-white" />
              </a>
              <a href="#">
                <FaInstagram className="size-7 text-white" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold text-xl mb-4">About</h3>
            <div className="flex flex-col gap-3">
              {about.map((item, index) => (
                <Link
                  href={item.path}
                  key={index}
                  className="text-white hover:text-darkColor text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="">
            <h3 className="text-white font-semibold text-xl mb-4">Company</h3>
            <div className="flex flex-col gap-3">
              {company.map((items, index) => (
                <Link
                  href={items.path}
                  key={index}
                  className="text-white hover:text-darkColor text-sm"
                >
                  {items.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold text-xl mb-4">Services</h3>
            <div className="flex flex-col gap-3">
              {service.map((items, index) => (
                <Link
                  href={items.path}
                  key={index}
                  className="text-white hover:text-darkColor text-sm"
                >
                  {items.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="">
            <h3 className="text-white font-semibold text-xl mb-4">Support</h3>
            <div className="flex flex-col gap-3">
              {support.map((items, index) => (
                <Link
                  href={items.path}
                  key={index}
                  className="text-white hover:text-darkColor text-sm"
                >
                  {items.name}
                </Link>
              ))}
            </div>
          </div>
          {/* <div className="">
            <h3 className="text-white font-semibold text-xl mb-4">
              WE RECOMMEND
            </h3> */}
          {/* <div className="flex flex-col gap-3">
              {recommend.map((items, index) => (
                <Link
                  href={items.path}
                  key={index}
                  className="text-white hover:text-darkColor text-sm"
                >
                  {items.name}
                </Link>
              ))}
            </div> */}
          {/* <div>
              <h3 className="font-semibold text-xl text-white my-4">
                NEWSLETTER
              </h3>
              <p className="text-white text-sm mb-4">
                Subscribe to our newsletter
              </p>
              <form className="space-y-3 flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
                <button
                  type="submit"
                  className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div> */}
          {/* </div> */}
        </div>
      </div>
      {/* Bottom Section */}
      {/* <div className="bg-white flex justify-between items-center py-5 px-10">
        <div className="flex gap-5">
          <a href="#">
            <FaTwitter className="size-7" />
          </a>
          <a href="#">
            <FaFacebook className="size-7" />
          </a>
          <a href="#">
            <FaRss className="size-7" />
          </a>
          <a href="#">
            <FaInstagram className="size-7" />
          </a>
        </div>
        <p className="text-black font-medium text-lg">
          &copy; COPYRIGHT BYTECODERS 2025 - Terms & Conditions | Privacy Policy
        </p>
        {/* UpSkillPro Logo */}
      {/* <div className="">
          <Image
            src="/upskillpro_logo.png"
            alt="UpSkillPro Logo"
            height={100}
          />
        </div> 
      </div>  */}
      <p className="text-white font-normal text-lg text-center mt-10">
        &copy; Copyright Total Touch Services {new Date().getFullYear()} - Terms
        & Conditions | Privacy Policy
      </p>
    </footer>
  );
};

export default Footer;
