import React from "react";

const HeroImage = ({ imageUrl }) => {
  return (
    <div className="container mx-auto px-4 mt-16 p-6">
      <img src={imageUrl} alt="Hero" className="w-full h-auto object-cover rounded-lg shadow-lg" />
    </div>
  );
};

export default HeroImage;
