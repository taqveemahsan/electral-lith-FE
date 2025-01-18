import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";
import "..//../styles/animation.css";

const navLinks = [
    { name: "Technology", path: "/technology" },
    { name: "Investors", path: "/investor" },
    { name: "Careers", path: "/careers" },
    { name: "News", path: "/news" },
    { name: "Resources", path: "/resources" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact", path: "/contact-us" },
];

const PublicNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation(); // Get current location (path)
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
        setIsMenuOpen(false); // Close the menu after navigation
    };

    return (
        <nav className="bg-white shadow-md px-4">
            <div className="mx-auto flex justify-between items-center px-5 py-4">
                {/* Logo */}
                <a href="/" className="flex items-center gap-2 text-xl font-bold">
                    <img src={logo} alt="Logo" className="h-8 w-auto md:h-10 lg:h-12" />
                    <span className="text-[#141414] text-base md:text-lg lg:text-xl">
                        ElectralLith
                    </span>
                </a>

                {/* Desktop Navigation Links */}
                <ul className="hidden lg:flex items-center space-x-4 px-2 sm:px-4 lg:px-6 animate-fade-in">
                    {navLinks?.map((link) => (
                        <li key={link.name} className="cursor-pointer">
                            <Link
                                to={link.path}
                                className={`text-[#141414] text-sm md:text-base lg:text-lg px-2 py-1 rounded-md transition-all duration-300 transform hover:scale-105 hover:bg-gray-200 ${
                                    location.pathname === link.path
                                        ? "bg-gray-400 text-white underline"
                                        : "hover:text-gray-800"
                                }`}
                                onClick={() => handleNavigate(link.path)}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Icon */}
                <div className="lg:hidden flex items-center">
                    <button
                        className="text-[#141414] focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
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
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div
                className={`${
                    isMenuOpen ? "block" : "hidden"
                } lg:hidden flex flex-col items-center space-y-4 py-4 bg-white shadow-lg absolute top-16 left-0 w-full z-10`}
            >
                {navLinks?.map((link) => (
                    <li key={link.name} className="cursor-pointer">
                        <Link
                            to={link.path}
                            className={`text-[#141414] text-base px-3 py-2 rounded-md transition-all duration-300 transform hover:scale-105 hover:bg-gray-200 ${
                                location.pathname === link.path
                                    ? "bg-gray-400 text-white underline"
                                    : "hover:text-gray-800"
                            }`}
                            onClick={() => handleNavigate(link.path)}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </div>
        </nav>
    );
};

export default PublicNavbar;
