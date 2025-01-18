import React from "react";
import { FaLeaf, FaLightbulb, FaHandshake, FaShieldAlt, FaHeart, FaAward } from "react-icons/fa"; // Importing icons

const ValueCard = ({ title, description, Icon }) => (
    <div className="flex flex-col items-start text-left border p-6 rounded-lg shadow-lg bg-white">
        <div className="flex items-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-primary text-2xl mr-4">
                <Icon />
            </div>
            <h3 className="font-semibold text-lg">{title}</h3>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
    </div>
);

const ValuesSection = () => {
    const values = [
        {
            title: "Sustainability",
            description:
                "We are committed to protecting the planet and its people by reducing our environmental impact and promoting social responsibility.",
            Icon: FaLeaf,
        },
        {
            title: "Innovation",
            description:
                "We embrace new ideas and technologies to drive progress and solve complex challenges.",
            Icon: FaLightbulb,
        },
        {
            title: "Collaboration",
            description:
                "We work together with our partners, customers, and communities to achieve shared goals and create mutual value.",
            Icon: FaHandshake,
        },
        {
            title: "Integrity",
            description:
                "We conduct ourselves with honesty, transparency, and ethical behavior in all aspects of our business.",
            Icon: FaShieldAlt,
        },
        {
            title: "Safety",
            description:
                "We prioritize the health and well-being of our employees, contractors, and the public in everything we do.",
            Icon: FaHeart,
        },
        {
            title: "Excellence",
            description:
                "We strive for the highest standards of quality, performance, and continuous improvement in our products and processes.",
            Icon: FaAward,
        },
    ];

    return (
        <section className="container mx-auto px-4 mt-16 p-6">
            <h2 className="text-2xl font-semibold mb-6 ">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {values.map((value) => (
                    <ValueCard key={value.title} {...value} />
                ))}
            </div>
        </section>
    );
};

export default ValuesSection;
