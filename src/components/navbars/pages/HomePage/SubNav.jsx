import React from "react";
import { NavLink } from "react-router-dom";
import { FaCog, FaUserTie, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";

export default function SubNav() {
    const navItems = [
        { label: "Technology", link: "/technology", icon: <FaCog /> },
        { label: "Investors", link: "/investor", icon: <FaUserTie /> },
        { label: "About Us", link: "/about-us", icon: <FaInfoCircle /> },
        { label: "Contact", link: "/contact-us", icon: <FaPhoneAlt /> },
    ];

    return (
        <section className="container mx-auto px-4 mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {navItems.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.link}
                        className="flex items-center space-x-2 py-4 px-6 border rounded-lg transition-all justify-center text-center h-16 border-gray-300 hover:border-gray-500 hover:bg-gray-50 text-gray-600"
                    >
                        {/* Icon */}
                        <span className="text-gray-500 text-2xl">{item.icon}</span>
                        {/* Label */}
                        <span className="text-gray-800 text-sm font-medium">{item.label}</span>
                    </NavLink>
                ))}
            </div>
        </section>
    );
}
