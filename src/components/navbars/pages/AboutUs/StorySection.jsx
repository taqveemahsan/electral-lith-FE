import React from "react";
import { FaRocket, FaIndustry } from "react-icons/fa"; // Importing icons

const StoryItem = ({ year, title, description, Icon }) => (
    <div className="flex flex-col items-start text-left border p-6 rounded-lg shadow-lg bg-white w-full md:w-1/2">
        {/* Title and Icon aligned to the left */}
        <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-primary text-2xl">
                <Icon />
            </div>
            <h3 className="font-semibold text-lg">
                {year}: {title}
            </h3>
        </div>
        {/* Description aligned properly under the title */}
        <p className="text-gray-600 mt-2">{description}</p>
    </div>
);

const StorySection = () => {
    const stories = [
        {
            year: "2020",
            title: "Founded",
            description:
                "ElectraLith was founded in 2020 by a team of scientists and engineers from Stanford University.  ElectraLith's founders include Dr. William Chueh, Professor of Materials Science and Engineering at Stanford, and Dr. Thomas McDonald, former Director of Technology at Sila Nanotechnologies.",
            Icon: FaRocket,
        },
        {
            year: "2022",
            title: "First Major Plant",
            description:
                "In 2021, ElectraLith began operations at its pilot facility in Hayward, California. The company announced it had successfully produced lithium carbonate using its proprietary Direct Lithium Extraction and Refining (DLE-R) process. This milestone marked a significant advancement in the development of low-cost, low-carbon lithium production technology.",
            Icon: FaIndustry,
        },
    ];

    return (
        <section className="container mx-auto px-4 mt-16">
            <h2 className="text-2xl font-semibold mb-8 ">Our Story</h2>
            <div className="flex flex-col md:flex-row justify-between gap-8">
                {stories.map((story) => (
                    <StoryItem key={story.year} {...story} />
                ))}
            </div>
        </section>
    );
};

export default StorySection;
