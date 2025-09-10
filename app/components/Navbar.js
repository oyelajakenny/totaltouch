"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="">
      <div className="container mx-auto flex justify-between items-center p-4 ">
        <div className="flex items-center space-x-7">
          <Link href={"/"}>
            <Image src={"/Logo.png"} alt="Logo" width={100} height={50} />{" "}
          </Link>
          <nav className=" hidden md:hidden  lg:flex space-x-7 text-lg font-semibold text-gray-600 ">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link href="/about-us" className="hover:text-blue-600">
              About Us
            </Link>
            <Link href="/service" className="hover:text-blue-600">
              Our Services
            </Link>
            <Link href="/service" className="hover:text-blue-600">
              Partner With Us
            </Link>
            <Link href="/contact-us" className="hover:text-blue-600">
              Contact Us
            </Link>
          </nav>
        </div>

        <div className="hidden lg:flex  space-x-4">
          <button className="bg-white py-2 px-6 font-semibold text-[#0A58A2] rounded-lg shadow-md cursor-pointer hover:bg-gray-100">
            GET QUOTE
          </button>
          <button className="bg-[#0A58A2] py-2 px-4 font-semibold text-white rounded-lg shadow-md cursor-pointer hover:bg-blue-700">
            BOOK CLEANING
          </button>
        </div>
        <div
          className="lg:hidden flex items-center bg-[#0A58A2] text-amber-50 p-1 rounded-md cursor-pointer"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <IoMdClose size={25} /> : <IoMdMenu size={25} />}
        </div>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-20">
          <div className="flex justify-end p-4">
            <button
              onClick={closeMenu}
              className="bg-[#0A58A2] text-amber-50 p-1 rounded-md cursor-pointer"
              aria-label="Close menu"
            >
              <IoMdClose size={25} />
            </button>
          </div>

          <div className="flex flex-col gap-40 justify-between items-center  text-lg w-full px-3.5   ">
            <nav className=" flex flex-col justify-start items-start lg:hidden space-y-3 text-lg font-semibold text-gray-600 w-full ">
              <Link
                href="/"
                onClick={closeMenu}
                className="hover:bg-blue-100 w-full rounded-md px-2 py-1"
              >
                Home
              </Link>
              <Link
                href="/about-us"
                onClick={closeMenu}
                className="hover:bg-blue-100 w-full rounded-md px-2 py-1"
              >
                About Us
              </Link>
              <Link
                href="/service"
                onClick={closeMenu}
                className="hover:bg-blue-100 w-full rounded-md px-2 py-1"
              >
                Our Services
              </Link>
              <Link
                href="/service"
                onClick={closeMenu}
                className="hover:bg-blue-100 w-full rounded-md px-2 py-1"
              >
                Partner With Us
              </Link>
              <Link
                href="/contact-us"
                onClick={closeMenu}
                className="hover:bg-blue-100 w-full rounded-md px-2 py-1"
              >
                Contact Us
              </Link>
            </nav>
            <div className="flex flex-col gap-3 lg:hidden w-full ">
              <div className="flex flex-col lg:hidden gap-4 w-full space-x-4">
                <button
                  className="bg-blue-100 py-2 w-full px-6 font-semibold text-[#0A58A2] rounded-lg shadow-md cursor-pointer hover:bg-gray-100"
                  onClick={closeMenu}
                >
                  GET QUOTE
                </button>
                <button
                  className="bg-[#0A58A2] w-full py-2 px-4 font-semibold text-white rounded-lg shadow-md cursor-pointer hover:bg-blue-700"
                  onClick={closeMenu}
                >
                  BOOK CLEANING
                </button>
              </div>
              <div className="flex justify-center gap-5">
                <a href="#">
                  <FaTwitter className="size-7 text-gray-600" />
                </a>
                <a href="#">
                  <FaFacebook className="size-7 text-gray-600" />
                </a>
                <a href="#">
                  <FaWhatsapp className="size-7 text-gray-600" />
                </a>
                <a href="#">
                  <FaInstagram className="size-7 text-gray-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
