import JobCard from "./JobCard";

import img from "../../../../assets/CareerRolesImg.png";
const FeaturedRoles = () => {
    const jobs = [
        {
            title: "Research Scientist, Electrode Materials",
            location: "San Francisco, California, United States",
            department: "Research & Development",
            icon: img, // Add icon path
        },
        {
            title: "Research Scientist, Electrode Materials",
            location: "San Francisco, California, United States",
            department: "Research & Development",
            icon: img, // Add icon path
        },
        {
            title: "Security Engineer, Detection and Response Technical Lead",
            location: "Remote or San Francisco HQ",
            department: "Security",
            icon: img, // Add icon path
        },
        {
            title: "Security Engineer, Detection and Response Technical Lead",
            location: "Remote or San Francisco HQ",
            department: "Security",
            icon: img, // Add icon path
        },
        {
            title: "Security Engineer, Detection and Response Technical Lead",
            location: "Remote or San Francisco HQ",
            department: "Security",
            icon: img, // Add icon path
        },
        {
            title: "Security Engineer, Detection and Response Technical Lead",
            location: "Remote or San Francisco HQ",
            department: "Security",
            icon: img, // Add icon path
        },
        {
            title: "Security Engineer, Detection and Response Technical Lead",
            location: "Remote or San Francisco HQ",
            department: "Security",
            icon: img, // Add icon path
        },
    ];

    return (
        <section className="container mx-auto px-4 mt-16 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured roles</h2>
            <div className="space-y-4">
                {jobs.map((job, index) => (
                    <JobCard key={index} {...job} />
                ))}
            </div>
        </section>
    );
};

export default FeaturedRoles;
