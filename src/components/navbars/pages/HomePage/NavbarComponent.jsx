import React, { useState } from "react";
import NavbarLinks from "./NavbarLinks";
import logo from "../../assets/logo.png";
import navLinks from "../../constants/HomeNavLinksData";

import NavbarBrand from "./NavbarBrand";
const NavbarComponent = () => {
  // State to handle mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    alert("clicked");
    setIsMenuOpen(!isMenuOpen);
  };
  const handleRoute = (path) => {
    // Implement your routing logic here
    console.log(`Navigating to: ${path}`);
  };
  return (
    <nav className="bg-white shadow-md px-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-5 py-4">
        <NavbarBrand logoSrc={logo} brandText="ElectralLith" />

        {/* Hamburger icon for mobile */}
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          <button className="text-gray-800 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navbar links for larger screens and mobile */}
        <ul className="hidden md:flex items-center space-x-8 ml-auto px-4 sm:px-6 lg:px-5">
          <li
            onClick={() => handleRoute("technology")}
            className="cursor-pointer"
          >
            <a
              href="technology"
              className="text-[#141414] text-[14px] md:text-[16px] lg:text-[18px] hover:text-gray-800 transition-colors px-3 py-2"
            >
              Technology
            </a>
          </li>
          <li
            onClick={() => handleRoute("#Investors")}
            className="cursor-pointer"
          >
            <a
              href="#Investors"
              className="text-[#141414] text-[14px] md:text-[16px] lg:text-[18px] hover:text-gray-800 transition-colors px-3 py-2"
            >
              Investors
            </a>
          </li>
          <li
            onClick={() => handleRoute("about-us")}
            className="cursor-pointer"
          >
            <a
              href="about-us"
              className="text-[#141414] text-[14px] md:text-[16px] lg:text-[18px] hover:text-gray-800 transition-colors px-3 py-2"
            >
              About Us
            </a>
          </li>
          <li
            onClick={() => handleRoute("contact-us")}
            className="cursor-pointer"
          >
            <a
              href="contact-us"
              className="text-[#141414] text-[14px] md:text-[16px] lg:text-[18px] hover:text-gray-800 transition-colors px-3 py-2"
            >
              Contact
            </a>
          </li>
        </ul>
        {/* User icon */}
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
            Sign Up
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-gray-900">
            Log in
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
