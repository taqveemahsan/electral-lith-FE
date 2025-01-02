import React from "react";
import Button from "./Ui/Button";

const JobCard = ({ title, location, department, icon }) => {
    return (
        <div className="flex items-center flex-start justify-between p-6 border-b border-gray-100">
            {/* Left Section: Icon and Job Details */}
            <div className="flex items-center space-x-4">
                {/* Icon with Background */}
                <div
                    className="bg-[#F5F0E5] rounded-full p-2 flex items-center justify-center w-12 h-12"
                    style={{ backgroundColor: "#F5F0E5" }}
                >
                    <img src={icon} alt={`${title} Icon`} className="w-8 h-8 object-contain" />
                </div>

                {/* Job Details */}
                <div>
                    <h3 className="text-lg font-medium text-gray-900">{title}</h3>
                    <p className="text-[#F5F0E5] text-sm">
                        {location} — {department}
                    </p>
                </div>
            </div>

            {/* Right Section: Apply Button */}
            <Button variant="secondary">Apply now</Button>
        </div>
    );
};

export default JobCard;
