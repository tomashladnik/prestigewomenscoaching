"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      {/* Main Navbar */}
      <div className="bg-black/90 backdrop-blur-md rounded-full shadow-xl px-8 py-2 w-full max-w-[90%] sm:max-w-[60%] mx-4 md:mx-auto">
        <div className="flex items-center justify-between w-full">
          {/* Logo and Desktop Links Container */}
          <div className="flex items-center space-x-2">
            {/* Logo */}
            <div className=" flex items-center justify-center cursor-pointer p" onClick={() => router.push("/")}>
              <img src="/logo3.png" alt="Logo" className="w-24 h-10" />
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-2">
              {[, "About", "Case Studies", "Blog",].map(
                (item, index) => (
                  <Link
                    key={index}
                    href={item === "About" ? "#about" : (item === "Case Studies" ? "#case-studies" : (item === "Blog" ? "/blogs" :"#"))}
                    className="px-3 py-2 text-gray-300 hover:text-white rounded-full transition-all duration-200 text-sm font-medium"
                  >
                    {item}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Mobile: Join The Mission Button and Toggle */}
          <div className="flex items-center space-x-2">
            {/* Mobile: Join The Mission Button */}
            <div className="md:hidden flex items-center">
              <Link
                href="#"
                className="px-4 py-1.5 bg-yellow-600 hover:bg-yellow-500 text-white font-semibold rounded-full transition-all duration-200 text-sm border border-yellow-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Join The Mission
              </Link>
            </div>

            {/* Mobile toggle */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white p-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop: Join The Mission Button */}
            <div className="hidden md:flex items-center">
              <Link
                href="#"
                className="px-6 py-2 bg-yellow-600 hover:bg-yellow-500 text-white font-semibold rounded-full transition-all duration-200 text-sm border border-yellow-700"
              >
                Join The Mission
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden fixed top-[4.5rem] left-0 right-0  backdrop-blur-md shadow-xl mx-4 rounded-b-lg z-40 transition-all duration-300 overflow-x-auto`}
      >
        <div className="flex flex-row items-center justify-between px-4 py-3 space-x-3">
          {["About", "Case Studies", "Blog", "Careers"].map(
            (item, index) => (
              <Link
                key={index}
                href={item === "About" ? "#about" : "#"}
                className="px-3 py-1.5 text-gray-300 hover:text-white  transition-all duration-200 text-sm font-medium whitespace-nowrap"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}