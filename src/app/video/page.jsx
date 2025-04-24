"use client"

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import BookingCalendar from "../components/BookingCalendar";

export default function VideoPage() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const router = useRouter();

  return (
    <main className="min-h-screen bg-pink-400">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:py-14 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-8"
        >
          {/* Header Section */}
          <div className="text-center mb-8">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-32 sm:w-40 mx-auto mb-4"
            />
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
              Here's Exactly How We Help Women Transform Their Body & Confidence in Just 6 Months
            </h1>
            <p className="text-sm sm:text-base text-gray-700 mb-6">
              In this short video, we'll show you the proven process behind <strong>The Ultimate Women's Transformation Experience</strong> – and how it's helped 700+ women feel strong, lean, and fully in control of their body again.
            </p>
          </div>

          {/* Video Placeholder */}
          <div className="aspect-video bg-gray-100 rounded-xl mb-8 overflow-hidden">
            <video 
              className="w-full h-full object-cover"
              controls
              autoPlay
              muted
              playsInline
            >
              <source src="/main.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button
              onClick={() => router.push('../final')}
              className="w-full sm:w-auto bg-yellow-600 hover:bg-yellow-700 text-white font-semibold text-sm sm:text-base px-6 py-3 sm:px-10 sm:py-4 rounded-2xl transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              Claim Your Free 15-Minute Transformation Call Now
            </button>
          </div>
        </motion.div>
      </div>

      {/* Optional: Booking Calendar */}
      {/* <BookingCalendar 
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
      /> */}
    </main>
  );
}
