import React from "react";

const Card = ({ Icon, title, description }) => {
    return (
        <div className="border rounded-lg p-5 flex flex-col  shadow-lg transition-transform duration-300 hover:scale-105">
            {/* Icon */}
            <div className="text-4xl text-gray-700 mb-4">
                <Icon />
            </div>
            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
            {/* Description */}
            <p className="text-gray-600 text-sm" style={{ color: "#A1824A", maxWidth: "200px" }}>
                {description}
            </p>
        </div>
    );
};

export default Card;
