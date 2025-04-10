'use client';

import Image from 'next/image';
import { useState } from 'react';
import BookingCalendar from '../components/BookingCalendar';

export default function TransformationCTA() {
  const [email, setEmail] = useState('');
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open the calendar when form is submitted
    setIsCalendarOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-400 to-pink-300 flex flex-col items-center justify-center px-4 py-12 text-center">
      {/* Logo and Title */}
      <div className="mb-8">
        <div className="flex items-center justify-center gap-2 text-yellow-500 mb-4">
          <Image src="/logo.png" alt="Logo" width={200} height={100} />
         
        </div>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl">
        BOOK YOUR FREE CALL TO START YOUR 6-MONTH FITNESS TRANSFORMATION
      </h1>

      {/* Subheading */}
      <p className="text-white text-lg md:text-xl mb-12 max-w-2xl">
        Most women who join us lose 15-25 lbs, build lean muscle, and finally stay consistent, all in just 6 months.
      </p>

      {/* Booking Form */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border-4 border-yellow-500">
        <div className="flex justify-center mb-6">
         
            <Image src="/logo1.png" alt="Logo" width={200} height={200} />
          
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Let's meet</h2>
        <p className='text-gray-500 mb-6'>Enter your email address and we'll connect you with a right person</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-200"
          >
            Start booking
          </button>
        </form>
      </div>

      {/* Calendar Component */}
      <BookingCalendar 
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
        formData={{ email }}
      />
    </div>
  );
} 