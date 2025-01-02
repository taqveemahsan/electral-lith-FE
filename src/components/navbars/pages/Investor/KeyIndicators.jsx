import React from "react";
import { FaLeaf, FaBolt, FaRocket, FaLink, FaWater } from "react-icons/fa";
import { performanceIndicators } from "../../../../Global/InvestmentData";

export default function KeyIndicators() {
    return (
        <section className="container mx-auto px-4 mt-16 p-6">
            <div>
                <h2 className="text-2xl font-bold mb-4">Key Performance Indicators</h2>
                <div
                    className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 "
                    style={{ gap: "5rem" }}
                >
                    {performanceIndicators.map((indicator) => (
                        <div
                            key={indicator.id}
                            className="bg-white shadow-md rounded-lg p-6 text-center"
                        >
                            {/* Icon */}
                            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center text-3xl text-green-600">
                                <indicator.icon /> {/* Render icon component */}
                            </div>
                            {/* Title */}
                            <div className="font-semibold text-lg mb-2 text-gray-800">
                                {indicator.title}
                            </div>
                            {/* Value */}
                            <div
                                className="text-2xl font-bold "
                                style={{ color: "#A1824A", maxWidth: "200px" }}
                            >
                                {indicator.value}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
