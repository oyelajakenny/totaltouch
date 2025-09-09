import React from 'react'
import { services } from '../constants/index.js'
import { BookServiceCard } from './BookServiceCard'

const BookService = () => {
  return (
    <div className="container mx-auto my-20">
      <div className="px-6">
        
        <p className="font-semibold text-2xl text-[#0A58A2]">BOOK A SERVICE</p>
        <h3 className=" text-3xl md:text-5xl font-bold leading-tight">
          Cleaning & Laundry Services<br></br> That Fit Your Busy Schedule
        </h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {services.map((book) => (
          <BookServiceCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default BookService