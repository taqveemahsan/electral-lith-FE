import React from "react";
import HeroImage from "../../../../Global/HeroImage"; // Import HeroImage component
import img from "../../../../assets/InvestorHeroImg.png"; // Static Image Import

export default function Hero() {
  const herocontent = {
    img: img, // Static image path
    title: "", // Static title text
  };

  return (
    <section className="container mx-auto px-4 mt-16 p-6">
      {/* Hero Section with Image and Overlay Text */}
      <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${herocontent.img})` }} // Static Image as Background
        />
        {/* Overlay for Text */}
        <div className="absolute inset-0 bg-black/30" />{" "}
        {/* Optional: Overlay for better text visibility */}
        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold leading-tight">
            <span className="block">{herocontent.title.split("with")[0]}</span>
            <span className="block mt-2">{herocontent.title.split("with")[1]}</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
