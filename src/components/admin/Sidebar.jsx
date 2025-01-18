import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
    { title: "Dashboard", path: "/admin", icon: "📊" },
    { title: "Manage Banner", path: "/admin/banner", icon: "🖼️" },
    { title: "Manage News", path: "/admin/news", icon: "📰" },
    { title: "Manage Message List", path: "/admin/contact", icon: "📋" },
    { title: "Manage Careers", path: "/admin/careers", icon: "💼" }, // New Item
];

const Sidebar = () => {
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar initially closed

    return (
        <>
            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 z-50 w-64 bg-gray-900 text-white min-h-screen transition-all duration-300 transform ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } lg:translate-x-0 lg:relative`} // Sidebar is visible on large screens
            >
                <div className="p-4 border-b border-gray-800">
                    <h2 className="text-2xl font-bold">Admin Panel</h2>
                </div>
                <nav className="mt-6 flex-1">
                    <ul>
                        {menuItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className={`flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors font-sans ${
                                        location.pathname === item.path
                                            ? "bg-gray-800 border-l-4 border-blue-500"
                                            : ""
                                    }`}
                                >
                                    <span className="mr-3 text-xl">{item.icon}</span>
                                    <span className="hidden sm:block">{item.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Profile Section */}
                <div className="mt-auto w-full p-4 border-t border-gray-800">
                    <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-xl">
                            👤
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium">Admin User</p>
                            <p className="text-xs text-gray-500">admin@example.com</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Hamburger Menu for Mobile Screens */}
            <button
                className="lg:hidden absolute top-4 left-4 text-white z-50"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)} // Toggle sidebar visibility
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
        </>
    );
};

export default Sidebar;
