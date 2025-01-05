"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/home", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About Us" },
  ];

  return (
    <header
      className="text-white sticky top-0 z-50 lg:backdrop-blur-sm"
      style={{ position: "sticky", top: 0 }}
    >
      {/* Overlay with blur effect */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-all duration-300 ${
          isOpen
            ? "opacity-100 backdrop-blur-sm"
            : "opacity-0 pointer-events-none"
        }`}
      />
      <div className="max-w-7xl container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          {/* <img src="/logo.png" alt="DataAi Logo" className="h-8 w-8 mr-2" /> */}
          <span className="text-xl lg:text-3xl font-semibold text-white">
            DataAi
          </span>
        </div>

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
          <button className="px-4 py-2 border border-blue-400 rounded-full text-blue-400 hover:bg-blue-400 hover:text-white transition">
            Get the Template
          </button>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
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
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-gray-800 text-white">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link href="/home" className="hover:text-blue-400">
                Home
              </Link>
            </li>
            {links.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-blue-400">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <button className="px-4 py-2 border border-blue-400 rounded-full text-blue-400 hover:bg-blue-400 hover:text-white transition">
                Get the Template
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
