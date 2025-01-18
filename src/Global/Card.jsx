import React from "react";

const Card = ({ number, title, description }) => {
  return (
    <div className="border rounded-lg p-5 flex flex-col items-start transition-transform duration-300 h-auto">
      <span className="text-gray-700 text-lg font-bold border-2 border-black rounded-full w-10 h-10 flex items-center justify-center mb-3">
        {number}
      </span>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default Card;
