import React from "react";
import img from "../../../../assets/InvestorHeroImg.png";
import HeroImage from "../../../../Global/HeroImage";

export default function Hero() {
  const herocontent = {
    img: img,
    title: "Unlocking a Green Future with Sustainable Lithium Extraction",
  };
  return (
    <section className="container mx-auto px-4 mt-16 p-6">
      {/* Hero Image Component */}
      <HeroImage imageUrl={herocontent.img} />
    </section>
  );
}
