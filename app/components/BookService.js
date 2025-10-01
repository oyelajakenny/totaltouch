"use client"
import React from 'react'
import { services } from '../constants/index.js'
import { BookServiceCard } from './BookServiceCard'
import { motion } from "framer-motion";
import { MdSlowMotionVideo } from 'react-icons/md';

const BookService = () => {
  return (
    <div className="container mx-auto my-20">
      <div className="px-6">
        <p className="font-semibold text-2xl text-[#0A58A2]">BOOK A SERVICE</p>
        <h3 className=" text-3xl md:text-5xl font-bold leading-tight">
          Cleaning & Laundry Services<br></br> That Fit Your Busy Schedule
        </h3>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay:  0.9 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 px-6"
      >
        {services.map((book) => (
          <BookServiceCard key={book.id} book={book} />
        ))}
      </motion.div>
    </div>
  );
}

export default BookService