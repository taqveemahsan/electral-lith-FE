import React from "react";

const NavbarLinks = ({ links, className }) => {
    return (
        <ul
            className={`hidden md:flex items-center space-x-8 ml-auto px-4 sm:px-6 lg:px-5 ${className}`}
        >
            {links.map((link, index) => (
                <li key={index} className="cursor-pointer">
                    <a
                        href={link.href}
                        className="text-[#141414] text-[14px] md:text-[16px] lg:text-[18px] hover:text-gray-800 transition-colors px-3 py-2"
                    >
                        {link.text}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default NavbarLinks;
