import React from "react";
import { FaRocket, FaIndustry } from "react-icons/fa"; // Importing icons

const StoryItem = ({ year, title, description, Icon }) => (
    <div className="flex flex-col items-center text-center border p-6 rounded-lg shadow-lg bg-white">
        <div className="flex flex-row items-center gap-4 mb-4">
            <div className="w-12 h-12 flex  items-center justify-center rounded-full bg-gray-100 text-primary text-2xl">
                <Icon />
            </div>
            <h3 className="font-semibold text-lg">
                {year}: {title}
            </h3>
        </div>
        <p className="text-gray-600">{description}</p>
    </div>
);

const StorySection = () => {
    const stories = [
        {
            year: "2020",
            title: "Founded",
            description:
                "Our journey began with a vision to revolutionize sustainable energy solutions.",
            Icon: FaRocket,
        },
        {
            year: "2022",
            title: "First Major Plant",
            description:
                "Established our first operational facility for sustainable energy production.",
            Icon: FaIndustry,
        },
    ];

    return (
        <section className="container mx-auto px-4 mt-16">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <div className="flex flex-wrap gap-4 ">
                {stories.map((story) => (
                    <StoryItem key={story.year} {...story} />
                ))}
            </div>
        </section>
    );
};

export default StorySection;
