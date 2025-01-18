import React from "react";
import heroImage from "../../../../assets/NewHeroImg.png";

function Hero() {
  const herocontent = {
    img: heroImage,
    title: "Unlocking a Green Future with Sustainable Lithium Extraction",
  };

  return (
    <section className="container mx-auto px-4 mt-8 md:mt-16">
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${herocontent.img})`,
          }}
        />
        {/* Overlay for Readability */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Text Content */}
        <div className="absolute inset-x-4 bottom-4 md:bottom-8 text-white">
          <h1 className="text-xl md:text-3xl font-semibold leading-tight text-shadow-md">
            <span className="block">{herocontent.title.split("with")[0]}</span>
            <span className="block mt-2">{herocontent.title.split("with")[1]}</span>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;
