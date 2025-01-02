import React from "react";
import HeroImage from "../../../../Global/HeroImage";
import HeroContent from "../../../../Global/HeroContent";
import heroImage from "../../../../assets/heroSectionImg.png";

const HeroSection = () => {
  const herocontent = {
    img: heroImage,
    title: "The future of lithium production is here.",
  };
  return (
    <section className="container mx-auto px-4 mt-16 p-6">
      {/* Hero Image Component */}
      <HeroImage imageUrl={herocontent.img} />

      {/* Hero Content Component */}
      <HeroContent title={herocontent.title} />
    </section>
  );
};

export default HeroSection;
