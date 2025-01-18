import { Link, useNavigate } from "react-router-dom";
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
  const [isActive, setIsActive] = useState("Technology");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (item, path) => {
    setIsActive(item);
    navigate(path);
    setIsMenuOpen(false); // Close the menu after navigation
  };

  return (
    <nav className="bg-white shadow-md px-4">
      <div className="mx-auto flex justify-between items-center px-5 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 text-xl font-bold">
          <img src={logo} alt="Logo" className="h-8 w-auto md:h-10 lg:h-12" />
          <span className="text-[#141414] text-[18px] md:text-[20px] lg:text-[24px]">
            ElectralLith
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center space-x-8 ml-auto px-4 sm:px-6 lg:px-5 animate-fade-in">
          {navLinks?.map((link) => (
            <li key={link.name} className="cursor-pointer">
              <Link
                to={link.path}
                className={`text-[#141414] text-[14px] md:text-[16px] lg:text-[18px] px-3 py-2 rounded-md transition-all duration-300 transform hover:scale-110 hover:bg-gray-200 bounce-on-hover ${
                  isActive === link.name
                    ? "bg-gray-400 text-white underline"
                    : "hover:text-gray-800"
                }`}
                onClick={() => handleNavigate(link.name, link.path)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden flex flex-col items-center space-y-4 py-4 bg-white shadow-lg absolute top-16 left-0 w-full z-10`}
      >
        {navLinks?.map((link) => (
          <li key={link.name} className="cursor-pointer">
            <Link
              to={link.path}
              className={`text-[#141414] text-[16px] px-3 py-2 rounded-md transition-all duration-300 transform hover:scale-110 hover:bg-gray-200 bounce-on-hover ${
                isActive === link.name ? "bg-gray-400 text-white underline" : "hover:text-gray-800"
              }`}
              onClick={() => handleNavigate(link.name, link.path)}
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
