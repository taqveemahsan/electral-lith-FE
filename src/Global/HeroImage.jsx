import React from "react";

const HeroImage = ({ imageUrl }) => {
  return (
    <div className="relative w-full">
      <img src={imageUrl} alt="Hero" className="w-full h-auto object-cover rounded-lg shadow-lg" />
    </div>
  );
};

export default HeroImage;
