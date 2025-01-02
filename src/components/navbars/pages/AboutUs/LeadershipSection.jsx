import React from "react";
import img1 from "../../../../assets/LeaderShipImg1.png";
import img2 from "../../../../assets/LeaderShipImg2.png";
import img3 from "../../../../assets/LeaderShipImg3.png";
import img4 from "../../../../assets/LeaderShipImg4.png";
import img5 from "../../../../assets/LeaderShipImg5.png";
import img6 from "../../../../assets/LeaderShipImg6.png";

const LeaderCard = ({ name, role, image }) => (
    <div className="text-center flex-shrink-0 w-48">
        <div className="container mx-auto px-4 mt-16 p-6">
            <img src={image} alt={`${name}'s photo`} className="w-full h-full object-cover" />
        </div>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{role}</p>
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
            <h2 className="text-2xl font-semibold mb-4 ">Our Leadership</h2>
            <div className="grid grid-cols-4 md:grid-cols-5 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {leaders.map((leader) => (
                    <LeaderCard key={leader.name} {...leader} />
                ))}
            </div>
        </section>
    );
};

export default LeadershipSection;
