'use client';

import Image from 'next/image';
import { useState } from 'react';
import BookingCalendar from '../components/BookingCalendar';

export default function TransformationCTA() {
  const [email, setEmail] = useState('');
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsCalendarOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-400 to-pink-300 flex flex-col items-center justify-center px-4 py-12 sm:py-16 md:py-20 text-center">
      {/* Logo and Title */}
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center justify-center gap-2 text-yellow-500">
          <Image src="/logo.png" alt="Logo" width={180} height={80} className="h-auto w-auto max-w-[70%]" />
        </div>
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 max-w-3xl px-2">
        BOOK YOUR FREE CALL TO START YOUR 6-MONTH FITNESS TRANSFORMATION
      </h1>

      {/* Subheading */}
      <p className="text-white text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl px-2">
        Most women who join us lose 15-25 lbs, build lean muscle, and finally stay consistent, all in just 6 months.
      </p>

      {/* Booking Form */}
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md border-4 border-yellow-500 mx-auto">
        <div className="flex justify-center mb-6">
          <Image src="/logo1.png" alt="Logo" width={150} height={150} className="h-auto w-auto max-w-[80%]" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">Let's meet</h2>
        <p className="text-sm sm:text-base text-gray-500 mb-6">
          Enter your email address and we'll connect you with the right person.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-200 text-sm sm:text-base"
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
