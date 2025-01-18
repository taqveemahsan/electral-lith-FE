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
      <div className="relative">
        <HeroImage imageUrl={herocontent.img} />
        {/* Optional Overlay or Additional Styles */}
        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Optional Overlay */}
      </div>

      {/* Hero Content Component */}
      <div className=" mt-6">
        <HeroContent title={herocontent.title} />
      </div>
    </section>
  );
};

export default HeroSection;
