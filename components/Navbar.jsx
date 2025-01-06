"use client";
import { useState } from "react";
import Link from "next/link";
import GradientButton from "./ui/GradientButton";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/home", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="text-white sticky top-0 z-50 lg:backdrop-blur-sm bg-none">
      {/* Navbar Container */}
      <div className="max-w-7xl container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/dataai.png"
            width={150}
            height={75}
            alt="logo"
            className="w-auto h-auto md:w-48 md:h-12"
          />
        </Link>
        {/* Menu (Desktop) */}
        <nav className="hidden md:flex space-x-8">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-blue-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {/* CTA Button */}
        <div className="hidden md:block">
          <GradientButton text="Get The Template" />
        </div>
        {/* Hamburger Menu (Mobile) */}
        <div className={`md:hidden z-50 ${isOpen ? "hidden" : ""}`}>
          <button
            className="focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12" // Close icon
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
                }
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`md:hidden fixed inset-0 text-white z-50 transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="absolute top-4 right-4">
          <button
            className="focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-lg hover:text-blue-400"
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              {link.label}
            </Link>
          ))}
          <button
            className="px-4 py-2 border border-blue-400 rounded-full text-blue-400 hover:bg-blue-400 hover:text-white transition"
            onClick={() => setIsOpen(false)}
          >
            Get the Template
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
