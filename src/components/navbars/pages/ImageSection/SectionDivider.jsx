import React from "react";

const SectionDivider = ({ title, options }) => {
    return (
        <div className="mt-6">
            <h3 className="text-xl sm:text-lg md:text-xl font-bold mb-3 text-[#141414] text-[16px]">
                {title}
            </h3>
            <div className="flex sm:flex-row items-center mt-2 sm:justify-between gap-4 sm:gap-8">
                {options.map((option, index) => (
                    <span
                        key={index}
                        className={`${
                            index === 0
                                ? "font-bold border-b-2 border-black"
                                : "text-gray-500 border-b-2"
                        } pb-3 text-xl sm:text-lg md:text-xl sm:flex-col`}
                    >
                        {option}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SectionDivider;
