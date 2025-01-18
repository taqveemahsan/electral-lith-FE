import React from "react";
import img1 from "../../../../assets/LeaderShipImg1.png";
import img2 from "../../../../assets/LeaderShipImg2.png";
import img3 from "../../../../assets/LeaderShipImg3.png";
import img4 from "../../../../assets/LeaderShipImg4.png";
import img5 from "../../../../assets/LeaderShipImg5.png";
import img6 from "../../../../assets/LeaderShipImg6.png";

const LeaderCard = ({ name, role, image }) => (
    <div className="flex flex-col items-center w-full">
        <img
            src={image}
            alt={`${name}'s photo`}
            className="w-full h-48 object-cover mb-4" // Image will take up full width
        />
        <div className="text-left w-full px-4">
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-sm text-gray-600">{role}</p>
        </div>
    </div>
);

const LeadershipSection = () => {
    const leaders = [
        { name: "William Church", role: "Co-Founder & CEO", image: img1 },
        { name: "Thomas McDonald", role: "Co-Founder & CTO", image: img2 },
        { name: "Helen Li", role: "Chief Strategy Officer", image: img3 },
        { name: "Mike Young", role: "VP of Operations", image: img4 },
        { name: "Young Cao", role: "Director of R&D", image: img5 },
        { name: "Benjamin Holland", role: "VP of Engineering", image: img6 },
    ];

    return (
        <section className="container mx-auto px-4 mt-16 p-6">
            <h2 className="text-2xl font-semibold mb-8 ">Our Leadership</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {leaders.map((leader) => (
                    <LeaderCard key={leader.name} {...leader} />
                ))}
            </div>
        </section>
    );
};

export default LeadershipSection;
