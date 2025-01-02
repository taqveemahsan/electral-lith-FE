import React from "react";
import { FaCog, FaUserTie, FaInfoCircle, FaPhoneAlt } from "react-icons/fa"; // Corrected icon import

export default function SubNav() {
  // Data for navigation
  const navItems = [
    { label: "Technology", link: "#technology", icon: <FaCog /> },
    { label: "Investors", link: "#investors", icon: <FaUserTie /> },
    { label: "About Us", link: "#about", icon: <FaInfoCircle /> },
    { label: "Contact", link: "#contact", icon: <FaPhoneAlt /> },
  ];

  return (
    <section className="container mx-auto px-4 mt-16 p-6">
      <div className="flex flex-wrap justify-between w-full max-w-screen-xl space-x-6">
        {/* Map through navItems to dynamically create buttons */}
        {navItems.map((item, index) => (
          <a
            href={item.link}
            key={index}
            className="flex items-center space-x-2 py-2 px-4 border border-gray-300 rounded-lg hover:border-gray-500 transition-all w-full sm:w-auto justify-center mb-4 sm:mb-0"
          >
            {/* Icon */}
            <span className="text-gray-500 text-xl sm:text-2xl">
              {item.icon}
            </span>
            {/* Label */}
            <span className="text-gray-800 text-sm sm:text-base">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
