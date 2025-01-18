import React from "react";

const ChartCard = ({ title }) => {
  return (
    <div className="w-[300px] h-[200px] p-4">
      {" "}
      {/* Set fixed width and height */}
      {/* Card with chart placeholder */}
      <div className="  rounded-md  ">
        <div className=" h-36  bg-gray-200 border-t-4 border-black"></div>
        {/* Placeholder with grey background and black top border */}
      </div>
      {/* Title below the card */}
      <h3 className="text-sm font-gray-500 mt-4 ">{title}</h3>
      {/* Title with margin and centered */}
    </div>
  );
};

export default ChartCard;
