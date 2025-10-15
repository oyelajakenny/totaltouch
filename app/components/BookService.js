"use client";
import React from "react";
import { services } from "../constants/index.js";
import { BookServiceCard } from "./BookServiceCard";
import { motion } from "framer-motion";
import { MdSlowMotionVideo } from "react-icons/md";
import  Link  from "next/link";

const BookService = () => {
  return (
    <div className="container mx-auto my-20">
      <div className="px-6 flex justify-between items-end">
        <div className="space-y-3 ">
          <p className="font-semibold text-2xl text-[#0A58A2]">
            BOOK A SERVICE
          </p>
          <h3 className=" text-2xl md:text-5xl font-bold leading-tight">
            Cleaning & Laundry Services<br></br> That Fit Your Busy Schedule
          </h3>
        </div>
        <div className="hidden lg:flex">
          <Link href="/our-services" target="_blank" rel="noopener noreferrer">
            <button className=" bg-[#0A58A2] px-8 py-3 text-lg font-semibold text-white rounded-lg cursor-pointer">
              View All Services
            </button>
          </Link>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 px-6"
      >
        {services.map((book) => (
          <BookServiceCard key={book.id} book={book} />
        ))}
      </motion.div>
      <div className="flex justify-center mt-10 lg:hidden px-6">
        <Link href="/our-services">
          <button className=" bg-[#0A58A2] px-8 py-4 text-lg font-regular text-white rounded-lg cursor-pointer">
            View All Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookService;
