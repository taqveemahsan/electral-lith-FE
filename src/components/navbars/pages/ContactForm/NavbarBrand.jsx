import React from "react";

const NavbarBrand = ({ logoSrc, brandText }) => {
    return (
        <a href="/" className="flex items-center gap-2 text-xl font-bold">
            <img src={logoSrc} alt="Logo" className="h-8 w-auto md:h-10 lg:h-12" />
            <span className="text-[#141414] text-[18px] md:text-[20px] lg:text-[24px]">
                {brandText}
            </span>
        </a>
    );
};

export default NavbarBrand;
