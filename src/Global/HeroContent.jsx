import React from "react";

const HeroContent = ({ title }) => {
  return (
    <div className="hero-content mt-6 ">
      <h1 className=" sm:text-4xl md:text-5xl lg:text-6xl  text-gray-400">{title}</h1>
    </div>
  );
};

export default HeroContent;
