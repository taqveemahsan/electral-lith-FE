import React, { useState } from "react";
import NavbarLinks from "./NavbarLinks";
import logo from "../../assets/logo.png";
import navLinks from "../../../../components/navbars/pages/HomePage/NavbarLinks";
import { Menu } from "lucide-react";

import NavbarBrand from "./NavbarBrand";
const NavbarComponent = () => {
  // State to handle mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    alert("clicked");
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
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
          <NavbarLinks
            links={navLinks}
            className={`md:flex ${isMenuOpen ? "block" : "hidden"} md:ml-auto`}
          />
          {/* User icon */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full md:hidden">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
