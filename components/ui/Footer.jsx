import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
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
            {["Home", "Home 2", "Home 3", "Features", "Pricing"].map((item) => (
              <li
                key={item}
                className="hover:text-blue-500 transition cursor-pointer"
              >
                {item}
              </li>
            ))}
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
  );
};

export default Footer;