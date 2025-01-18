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
    <section className="container mx-auto px-4 mt-16 p-6">
      {/* Hero Image */}
      <HeroImage imageUrl={herocontent.img} />

      {/* Overlay Text */}
      {/* <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white max-w-xl">
        <h1 className="text-lg sm:text-xl md:text-3xl font-bold mb-2">{herocontent.title}</h1>
        <p className="text-sm sm:text-base">{herocontent.subtitle}</p>
      </div> */}
    </section>
  );
}
