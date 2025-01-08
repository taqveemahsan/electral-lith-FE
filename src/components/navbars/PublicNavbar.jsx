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
  const navigate = useNavigate();

  const handleNavigate = (item, path) => {
    setIsActive(item);
    navigate(path);
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

        {/* Navigation Links */}
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

        {/* User actions */}
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
            Sign Up
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-gray-900">Log in</button>
        </div>
      </div>
    </nav>
  );
};

export default PublicNavbar;
