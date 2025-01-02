import React from "react";
import img from "../../../../assets/OurImpactImg.png";
const ImpactSection = () => {
    return (
        <section className="container mx-auto px-4 mt-16 p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
            <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img src={img} alt="Impact illustration" className="w-full h-auto" />
            </div>
        </section>
    );
};

export default ImpactSection;
