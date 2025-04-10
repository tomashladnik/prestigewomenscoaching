"use client"

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import BookingCalendar from "../components/BookingCalendar";

export default function VideoPage() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const router = useRouter();
  return (
    <main className="min-h-screen bg-pink-400
">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <div className="text-center mb-8">
            <img src="/logo.png" alt="Logo" className="w-40 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-4">
              Here's Exactly How We Help Women Transform Their Body & Confidence in Just 6 Months
            </h1>
            <p className="text-gray-600 mb-8 text-black">
              In this short video, we'll show you the proven process behind The Ultimate Women's Transformation Experience – and how it's helped 700+ women feel strong, lean, and fully in control of their body again.
            </p>
          </div>

          <div className="aspect-video bg-gray-100 rounded-xl mb-8">
            {/* Replace this with your actual video embed code */}
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Video VSL
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => router.push('../final')}
              className="inline-block bg-yellow-600 hover:from-pink-500 hover:to-amber-500 text-white font-bold px-10 py-4 rounded-2xl transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              Claim Your Free 15-Minute Transformation Call Now
            </button>
          </div>
        </motion.div>
      </div>

      {/* <BookingCalendar 
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
      /> */}
    </main>
  );
} 