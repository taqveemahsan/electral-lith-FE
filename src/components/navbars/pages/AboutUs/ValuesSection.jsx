import React from "react";
import { FaLeaf, FaLightbulb, FaHandshake, FaShieldAlt, FaHeart, FaAward } from "react-icons/fa"; // Importing icons

const ValueCard = ({ title, description, Icon }) => (
    <div className="flex flex-col items-center text-center border p-6 rounded-lg shadow-lg bg-white">
        <div className="w-16 h-16 rounded-full bg-gray-100 mb-4 flex items-center justify-center text-primary text-2xl">
            <Icon />
        </div>
        <h3 className="font-semibold mb-2">{title}</h3>
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
            <h2 className="text-2xl font-semibold mb-4 ">Our Values</h2>
            <div className="flex flex-row gap-4">
                {values.map((value) => (
                    <ValueCard key={value.title} {...value} />
                ))}
            </div>
        </section>
    );
};

export default ValuesSection;
