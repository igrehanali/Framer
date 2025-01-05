import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Button } from "./button";

const Footer = () => {
  return (
    <section>
      <section className="relative overflow-hidden bg-[#020817] my-10">
        {/* Background Image */}
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/G02B9XJwZEGlxitF2OWeEjbrJjU-9RS8fLKi5XN8DI5r2CkmA5YCzfqxg9.png"
          alt="Grid background"
          fill
          className="object-cover opacity-40"
          priority
        />

        <div className="relative mx-auto max-w-6xl px-4 py-10">
          <div className="grid items-center gap-8 justify-between lg:grid-cols-2 lg:gap-32">
            <div className="space-y-8">
              <h1 className="text-4xl text-white lg:text-5xl">
                Start your journey now transform your business with AI
                solutions.
              </h1>

              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#306CF2] to-[#2569F3] text-white font-medium transform hover:scale-105 transition-transform duration-200 hover:shadow-lg hover:shadow-blue-500/25">
                Get The Template
              </button>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TL0rEXzJCaowoBFXybmVmKOt1Xs-Mxc4LVZl3LqZoDDgawgBg2eBTl264B.png"
                alt="AI Camera Device"
                width={400}
                height={400}
                className="absolute right-0 top-1/2 transform -translate-y-1/2"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <footer
        className="bg-gray-900 text-white py-16 md:py-32"
        style={{
          backgroundImage: "url('/images/footer-bg.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl px-4 md:px-0">
          {/* Brand Section */}
          <div>
            <h1 className="text-2xl font-bold flex items-center">
              <span className="mr-2">&#x25A2;</span> DataAI
            </h1>
            <p className="mt-4 text-sm max-w-80 text-[#aaa]">
              Optimize processes, enhance decision-making, and accelerate growth
              with our AI-powered business management solution.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Product</h2>
            <ul className="space-y-2">
              {["Home", "Home 2", "Home 3", "Features", "Pricing"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-blue-500 transition cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Pages and Support Links */}
          <div className="flex flex-col md:flex-row md:justify-between md:space-x-6">
            <div className="mb-6 md:mb-0">
              <h2 className="text-lg font-semibold mb-4">Pages</h2>
              <ul className="space-y-2">
                {[
                  "Integration",
                  "Blog",
                  "Blog Details",
                  "Terms",
                  "Privacy-policy",
                ].map((item) => (
                  <li
                    key={item}
                    className="hover:text-blue-500 transition cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4">Support</h2>
              <ul className="space-y-2">
                {["About Us", "Changelog", "Contact", "404"].map((item) => (
                  <li
                    key={item}
                    className="hover:text-blue-500 transition cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center max-w-6xl px-4 md:px-0">
          <p className="text-sm text-[#aaa] mb-4 md:mb-0">
            &copy; 2023 DataAI. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
