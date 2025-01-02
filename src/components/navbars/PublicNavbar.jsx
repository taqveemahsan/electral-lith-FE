import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
const PublicNavbar = () => {
  const navigate = useNavigate();
  const handleRoute = (path) => {
    navigate(path);
    // console.log(`Navigating to: ${path}`);
    // localStorage.setItem("user", true);
  };

  return (
    <nav className="bg-white shadow-md px-4">
      <div className=" mx-auto flex justify-between items-center px-5 py-4">
        <a href="/" className="flex items-center gap-2 text-xl font-bold">
          <img src={logo} alt="Logo" className="h-8 w-auto md:h-10 lg:h-12" />
          <span className="text-[#141414] text-[18px] md:text-[20px] lg:text-[24px]">
            ElectralLith
          </span>
        </a>

        {/* Hamburger icon for mobile */}
        <div className="md:hidden flex items-center">
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
            onClick={() => handleRoute("investor")}
            className="cursor-pointer"
          >
            <a
              href="investor"
              className="text-[#141414] text-[14px] md:text-[16px] lg:text-[18px] hover:text-gray-800 transition-colors px-3 py-2"
            >
              Investors
            </a>
          </li>
          <li onClick={() => handleRoute("careers")} className="cursor-pointer">
            <a
              href="careers"
              className="text-[#141414] text-[14px] md:text-[16px] lg:text-[18px] hover:text-gray-800 transition-colors px-3 py-2"
            >
              Careers
            </a>
          </li>
          <li onClick={() => handleRoute("news")} className="cursor-pointer">
            <a
              href="news"
              className="text-[#141414] text-[14px] md:text-[16px] lg:text-[18px] hover:text-gray-800 transition-colors px-3 py-2"
            >
              News
            </a>
          </li>
          <li
            onClick={() => handleRoute("resources")}
            className="cursor-pointer"
          >
            <a
              href="resources"
              className="text-[#141414] text-[14px] md:text-[16px] lg:text-[18px] hover:text-gray-800 transition-colors px-3 py-2"
            >
              Resources
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

export default PublicNavbar;
