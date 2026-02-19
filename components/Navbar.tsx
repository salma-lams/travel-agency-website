"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md z-50">
      <div className="flex justify-between items-center px-6 md:px-12 py-4 text-white">

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          Les Anges Travel
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">

          <li>
            <Link href="#home" className="hover:text-red-400 transition">
              Home
            </Link>
          </li>

          <li>
            <Link href="#explore" className="hover:text-red-400 transition">
              Explore
            </Link>
          </li>

          <li>
            <Link href="#trips" className="hover:text-red-400 transition">
              Trips
            </Link>
          </li>

         

          <li>
            <Link href="#booking" className="hover:text-red-400 transition">
              Booking
            </Link>
          </li>

          <li>
            <Link href="#about" className="hover:text-red-400 transition">
              About
            </Link>
          </li>

        </ul>

        {/* Desktop Button */}
        <a
          href="https://wa.me/212600000000"
          target="_blank"
          className="hidden md:inline-block bg-red-600 hover:bg-red-700 transition px-5 py-2 rounded-full text-sm font-semibold"
        >
          Book Now
        </a>

        {/* Mobile Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black text-white px-6 pb-6 space-y-4">

          <Link href="#home" onClick={closeMenu} className="block hover:text-red-400">
            Home
          </Link>

          <Link href="#explore" onClick={closeMenu} className="block hover:text-red-400">
            Explore
          </Link>

          <Link href="#trips" onClick={closeMenu} className="block hover:text-red-400">
            Trips
          </Link>

        

          <Link href="#booking" onClick={closeMenu} className="block hover:text-red-400">
            Booking
          </Link>

          <Link href="#about" onClick={closeMenu} className="block hover:text-red-400">
            About
          </Link>

          <a
            href="https://wa.me/212600000000"
            target="_blank"
            className="block bg-red-600 text-center py-2 rounded-full mt-4"
          >
            Book Now
          </a>

        </div>
      )}
    </nav>
  );
}
