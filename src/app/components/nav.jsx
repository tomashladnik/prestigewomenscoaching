"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      {/* Navbar Container */}
      <div className="bg-black/50 backdrop-blur-md rounded-full shadow-xl px-6 py-2 w-full max-w-[95%] sm:max-w-[90%] md:max-w-[70%] lg:max-w-[60%] mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo + Desktop Nav */}
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <div onClick={() => router.push("/")} className="cursor-pointer flex items-center">
              <img
                src="/logo3.png"
                alt="Logo"
                className="w-28 h-10 object-contain"
              />
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-4">
              {["About", "Case Studies", "Blog"].map((item, index) => (
                <Link
                  key={index}
                  href={
                    item === "About"
                      ? "#about"
                      : item === "Case Studies"
                      ? "#case-studies"
                      : "/blogs"
                  }
                  className="text-[16px] leading-6 text-[#B1B1B1] hover:text-white transition-all duration-200 font-rohn font-rohn-bold h-6"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            {/* Mobile CTA Button */}
            <Link
              href="./video"
              onClick={() => setIsMenuOpen(false)}
              className="md:hidden px-4 py-1.5 bg-yellow-600 hover:bg-yellow-500 text-white text-xs whitespace-nowrap font-rohn-bold rounded-full border border-yellow-700 transition duration-200"
            >
              Join The Mission
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white p-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop CTA Button */}
            <Link
              href="./video"
              className="hidden md:inline-block px-6 py-2 bg-yellow-600 hover:bg-yellow-500 text-white text-sm font-rohn font-rohn-heavy rounded-full border border-yellow-700 transition duration-200"
            >
              Join The Mission
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[4.5rem] left-0 right-0 bg-black/90 backdrop-blur-md rounded-lg shadow-xl z-40 transition-all duration-300 px-6 py-2 ml-2 mr-2">
          <div className="flex flex-row flex-wrap justify-center items-center space-x-4 py-2">
            {["About", "Case Studies", "Blog", "Careers"].map((item, index) => (
              <Link
                key={index}
                href={
                  item === "About"
                    ? "#about"
                    : item === "Case Studies"
                    ? "#case-studies"
                    : item === "Blog"
                    ? "/blogs"
                    : "#"
                }
                className="text-sm text-gray-300 hover:text-white transition-all duration-200 font-rohn font-rohn-regular h-6"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
