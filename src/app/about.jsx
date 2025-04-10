"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Dumbbell,
  Footprints,
  Heart,
  Scale,
  Timer,
  Watch,
} from "lucide-react";
import { useMemo } from "react";

export default function AboutUsSection() {
  const gridSize = 10;
  const occupiedSpaces = new Set();

  const getUnoccupiedPosition = () => {
    let attempts = 0;
    while (attempts < 50) {
      const gridX = Math.floor(Math.random() * gridSize);
      const gridY = Math.floor(Math.random() * gridSize);
      const position = `${gridX},${gridY}`;

      if (!occupiedSpaces.has(position)) {
        occupiedSpaces.add(position);
        return {
          left: `${(gridX * 100) / gridSize}%`,
          top: `${(gridY * 100) / gridSize}%`,
        };
      }
      attempts++;
    }
    return null;
  };

  const icons = useMemo(() => {
    return Array.from({ length: 45 }).map((_, i) => {
      const Icon =
        [Dumbbell, Heart, Watch, Footprints, Timer, Activity, Scale][i % 7];
      const size = Math.floor(Math.random() * 35) + 60;
      const position = getUnoccupiedPosition();
      const rotate = `${Math.floor(Math.random() * 3)}deg`;

      return position
        ? {
            id: i,
            Icon,
            size,
            position,
            rotate,
          }
        : null;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* Background pattern with animated icons */}
      <div className="absolute inset-0 w-full md:w-3/5 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 p-4">
          {icons.map((item) => {
            if (!item) return null;
            const { id, Icon, size, position, rotate } = item;
            return (
              <motion.div
                key={id}
                className="absolute"
                style={{
                  top: position.top,
                  left: position.left,
                  transform: `rotate(${rotate})`,
                  opacity: 0.8,
                }}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                <Icon
                  size={size}
                  className="text-amber-500"
                  strokeWidth={1}
                  fill="none"
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Content Card */}
      <div className="relative flex justify-center md:justify-end items-center min-h-screen px-4 sm:px-6 lg:px-8 py-10">
        <div className="w-full md:w-3/5 lg:w-1/2 bg-white rounded-3xl border-2 border-amber-500 p-6 sm:p-8 md:p-12 shadow-lg z-10">
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold tracking-wider text-center text-gray-900">
              ABOUT US
            </h2>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-center text-gray-900">
              Prestige Women's Coaching
            </h1>

            <p className="text-center text-base sm:text-lg text-gray-700">
              The Ultimate Women's Transformation Experience is more than a
              fitness program — it's a lifestyle shift built for real women who
              want lasting change without sacrificing their time, energy, or
              confidence.
            </p>

            <p className="text-center text-base sm:text-lg text-gray-700">
              At Prestige Women's Coaching, we specialize in high-touch,
              personalized coaching for women who are ready to feel strong,
              empowered, and in control again. Whether it's in your home or in
              the gym, our team brings the strategy, support, and accountability
              to help you finally get the results you deserve.
            </p>

            <p className="text-center text-base sm:text-lg text-gray-700">
              Since launching, we've helped over 200 women transform their
              bodies and mindsets through our proven 6-month experience.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-amber-500">
                  200+
                </p>
                <p className="text-xs sm:text-sm">Women Transformed</p>
              </div>

              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-amber-500">
                  6-Month
                </p>
                <p className="text-xs sm:text-sm">
                  Personalized Coaching Journey
                </p>
              </div>

              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-amber-500">
                  90%+
                </p>
                <p className="text-xs sm:text-sm">Client Completion Rate</p>
              </div>

              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-amber-500">
                  Thousands
                </p>
                <p className="text-xs sm:text-sm">
                  of Fat Lost & Strength Gained
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
