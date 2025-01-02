import React from "react";
import HeroImage from "../../../../Global/HeroImage";
import heroImage from "../../../../assets/homepageimg.png";
export default function Hero() {
    const heroContent = {
        img: heroImage, // Placeholder image path
        title: "Unlocking a Green Future with Sustainable Lithium Extraction",
    };

    return (
        <section className="container mx-auto px-4 mt-16 p-6">
            {/* Hero Image Component */}
            {/* <HeroImage imageUrl={heroContent.img} /> */}
            <div className="relative w-full h-[400px] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${heroContent.img})`, // Use the static image path here
                    }}
                />
                <div className="absolute inset-0 bg-black/30" />{" "}
                {/* Overlay for better text readability */}
                <div className="relative h-full flex items-end pb-12 px-6">
                    <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
                        {heroContent.title}
                    </h1>
                </div>
            </div>
        </section>
    );
}
