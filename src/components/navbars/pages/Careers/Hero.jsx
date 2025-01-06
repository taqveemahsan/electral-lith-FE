import React from "react";
import heroImage from "../../../../assets/CareerHeroImg.png";
import HeroImage from "../../../../Global/HeroImage";

export default function Hero() {
  const herocontent = {
    img: heroImage,
    title: "Unlocking a Green Future with Sustainable Lithium Extraction",
    subtitle:
      "Join us in our mission to create a greener planet through innovation and sustainability.",
  };

  return (
    <section className="relative w-full h-96 overflow-hidden">
      {/* Hero Image */}
      <HeroImage imageUrl={herocontent.img} />

      {/* Overlay Text */}
      <div className="absolute bottom-0 right-0 p-6  text-white max-w-lg mr-32">
        <h1 className="text-xl md:text-2xl font-bold text-right mb-2">{herocontent.title}</h1>
        <p className="text-sm md:text-base text-right">{herocontent.subtitle}</p>
      </div>
    </section>
  );
}
