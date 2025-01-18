import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ id, title, location, department, icon, description, type }) => {
  return (
    <div className="flex items-center justify-between p-6 border rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-200">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <img src={icon} alt="Job Icon" className="w-16 h-16 object-cover rounded-full" />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">
            {department} - {type}
          </p>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>

      {/* Right Section */}
      <div>
        <Link to={`/job/${id}`} className="text-indigo-500 hover:underline text-sm font-medium">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
