import React from "react";
import img from "../../../../assets/OurImpactImg.png";

const ImpactSection = () => {
    return (
        <section className="container mx-auto px-4 mt-16 p-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 ">Our Impact</h2>
            <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img src={img} alt="Impact illustration" className="w-full h-auto object-cover" />
            </div>
        </section>
    );
};

export default ImpactSection;
