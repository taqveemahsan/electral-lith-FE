import React from "react";

const HeroContent = ({ title }) => {
    return (
        <div className="hero-content mt-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">{title}</h1>
        </div>
    );
};

export default HeroContent;
