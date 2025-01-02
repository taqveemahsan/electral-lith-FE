import React from "react";
import Img from "../../../../assets/AboutHeroImg.png";

const Hero = () => {
    return (
        <section className="container mx-auto px-4 mt-16 p-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                {/* Left Image */}
                <div className="md:w-1/2">
                    <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                        <img src={Img} alt="Team photo" className="w-full h-full object-cover" />
                    </div>
                </div>
                {/* Right Text and Buttons */}
                <div className="md:w-1/2">
                    <h1 className="text-4xl font-bold leading-tight mb-8">
                        Our mission is to decarbonize the lithium supply chain and accelerate the
                        transition to sustainable energy.
                    </h1>
                    <div className="flex gap-4">
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
