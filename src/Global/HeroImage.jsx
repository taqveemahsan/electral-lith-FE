import React from "react";

const HeroImage = ({ imageUrl }) => {
  return (
    <div className="hero-image">
      <img
        src={imageUrl}
        alt="Hero"
        className="w-full h-auto object-cover rounded-lg shadow-lg"
      />
    </div>
  );
};

export default HeroImage;
