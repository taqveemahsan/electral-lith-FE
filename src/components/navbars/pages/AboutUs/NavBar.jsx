import React from "react";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-white">
            <div className="flex items-center">
                <a href="/" className="text-xl font-bold">
                    EcoTechLith
                </a>
            </div>
            <div className="hidden md:flex items-center space-x-6">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                    Technology
                </a>

                <a href="#" className="text-gray-600 hover:text-gray-900">
                    About Us
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                    News
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                    Careers
                </a>
            </div>
            <div className="flex items-center space-x-4">
                <button className="px-4 py-2 text-gray-600 hover:text-gray-900">Log in</button>
                <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                    Contact
                </button>
            </div>
        </nav>
    );
}
