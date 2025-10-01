"use client"
import Image from 'next/image'
import React from 'react'
import {motion} from "framer-motion"

export const BookServiceCard = ({book, id}) => {
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: id * 0.2 }}
      viewport={{ once: true }}
      className="relative w-full  border-gray-300 rounded-lg flex flex-col justify-between m-2"
    >
      <div className="w-full  overflow-hidden rounded-lg">
        <img
          src={book.img}
          alt={book.title}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="absolute bottom-7 md:bottom-10 flex flex-col gap-2 pl-5 rounded-lg  w-11/12 ">
        <h3 className="text-lg font-semibold text-amber-50">{book.title}</h3>
        <button className="text-white text-sm w-fit px-3 py-2  text-center bg-[#0A58A2] rounded-lg">
          <a href={book.url}>Book Service</a>
        </button>
      </div>
    </motion.div>
  );
}
