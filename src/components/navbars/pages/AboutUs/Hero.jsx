import React from "react";
import img from "../../../../assets/AboutHeroImg.png"; // Ensure the correct path

const Hero = () => {
    return (
        <section className="container mx-auto px-4 mt-16 p-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Left Image */}
                <div className="relative w-full md:w-1/2 mb-6 md:mb-0 h-80">
                    {" "}
                    {/* Set height for consistency */}
                    <div className="relative w-full h-full bg-gray-100 rounded-lg overflow-hidden">
                        <img
                            src={img}
                            alt="Team photo"
                            className="absolute inset-0 w-full h-full object-cover " // Ensure full coverage and visibility
                        />
                    </div>
                </div>

                {/* Right Text and Buttons */}
                <div className="md:w-1/2 w-full h-80 text-center md:text-left flex flex-col items-start justify-start">
                    {" "}
                    {/* Align text to the top */}
                    <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
                        Our mission is to decarbonize the lithium supply chain and accelerate the
                        transition to sustainable energy.
                    </h1>
                    <div className="flex justify-center md:justify-start gap-4">
                        <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
                            Our Mission
                        </button>
                        <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-300 transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
