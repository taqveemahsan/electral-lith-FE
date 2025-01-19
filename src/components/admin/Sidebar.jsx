import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
    { title: "Dashboard", path: "/admin", icon: "📊" },
    { title: "Manage Banner", path: "/admin/banner", icon: "🖼️" },
    { title: "Manage News", path: "/admin/news", icon: "📰" },
    { title: "Manage Messages", path: "/admin/contact", icon: "📋" },
    { title: "Manage Careers", path: "/admin/careers", icon: "💼" },
    {
        title: "Manage Resources",
        icon: "📚",
        subItems: [
            { title: "Manage FAQ", path: "/admin/resources/faq", icon: "❓" },
            { title: "Manage Reports", path: "/admin/resources/reports", icon: "📄" },
            { title: "Manage Glossary", path: "/admin/resources/glossary", icon: "📘" },
        ],
    },
];

const Sidebar = () => {
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar initially closed
    const [openSubmenu, setOpenSubmenu] = useState(null); // Manage submenu visibility

    const toggleSubmenu = (title) => {
        setOpenSubmenu((prev) => (prev === title ? null : title));
    };

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
                            <li key={item.path || item.title}>
                                {item.subItems ? (
                                    <div>
                                        {/* Parent Menu Item */}
                                        <button
                                            onClick={() => toggleSubmenu(item.title)}
                                            className={`flex items-center justify-between w-full px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors font-sans ${
                                                openSubmenu === item.title ? "bg-gray-800" : ""
                                            }`}
                                        >
                                            <div className="flex items-center">
                                                <span className="mr-3 text-xl">{item.icon}</span>
                                                <span>{item.title}</span>
                                            </div>
                                            <span className="text-xl">
                                                {openSubmenu === item.title ? "▲" : "▼"}
                                            </span>
                                        </button>

                                        {/* Submenu Items */}
                                        {openSubmenu === item.title && (
                                            <ul className="pl-8 mt-2">
                                                {item.subItems.map((subItem) => (
                                                    <li key={subItem.path}>
                                                        <Link
                                                            to={subItem.path}
                                                            className={`flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors ${
                                                                location.pathname === subItem.path
                                                                    ? "bg-gray-800 border-l-4 border-blue-500"
                                                                    : ""
                                                            }`}
                                                        >
                                                            <span className="mr-3 text-xl">
                                                                {subItem.icon}
                                                            </span>
                                                            <span>{subItem.title}</span>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        to={item.path}
                                        className={`flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors font-sans ${
                                            location.pathname === item.path
                                                ? "bg-gray-800 border-l-4 border-blue-500"
                                                : ""
                                        }`}
                                    >
                                        <span className="mr-3 text-xl">{item.icon}</span>
                                        <span>{item.title}</span>
                                    </Link>
                                )}
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
