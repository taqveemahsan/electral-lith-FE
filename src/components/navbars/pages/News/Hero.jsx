import React from "react";
import heroImage from "../../../../assets/NewHeroImg.png";

function Hero() {
  const herocontent = {
    img: heroImage,
    title: "Unlocking a Green Future with Sustainable Lithium Extraction",
  };

  return (
    <section className="container mx-auto px-4 mt-16 p-6">
      <div className="relative w-full h-[400px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${herocontent.img})`,
          }}
        />
        {/* Overlay for Readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Text Content */}
        <div className="absolute bottom-4 right-4 px-6 py-4 rounded-lg">
          {/* <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
            {herocontent.title}
          </h1> */}
          <h1 className="text-white text-2xl md:text-3xl font-semibold leading-tight">
            <span className="block">{herocontent.title.split("with")[0]}</span>
            <span className="block mt-2">{herocontent.title.split("with")[1]}</span>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;
