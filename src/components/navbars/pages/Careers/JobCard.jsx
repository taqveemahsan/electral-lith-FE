import React from "react";
import { Link } from "react-router-dom"; // For navigation to job detail page

const JobCard = ({ id, title, location, department, icon, description, type }) => {
  return (
    <div className="flex items-center justify-between p-6 border rounded-lg shadow-md">
      <div className="flex items-center space-x-4">
        <img src={icon} alt="Job Icon" className="w-16 h-16 object-cover" />
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">
            {department} - {type}
          </p>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <Link
          to={`/job/${id}`} // Link to job details page
          className="text-indigo-500 hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
