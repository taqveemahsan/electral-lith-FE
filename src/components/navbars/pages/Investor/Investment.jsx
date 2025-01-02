import React from "react";
import { investmentOptions } from "../../../../Global/InvestmentData";

export default function Investment() {
    return (
        <section className="container mx-auto px-4 mt-16 p-6">
            <h2 className="text-2xl font-bold mb-8">Investment Opportunity</h2>
            <div className="grid grid-cols-4 md:grid-cols-2 gap-4">
                {investmentOptions.map((option) => (
                    <div key={option.id} className="bg-white p-6 rounded-lg shadow">
                        <div className="text-lg mb-2">{option.type}</div>
                        <div className="text-4xl font-bold mb-1">${option.price} per share</div>
                        <div
                            className="text-sm text-gray-500"
                            style={{ color: "#A1824A", maxWidth: "200px" }}
                        >
                            {option.description}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
