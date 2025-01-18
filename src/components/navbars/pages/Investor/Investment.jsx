import React from "react";
import { investmentOptions } from "../../../../Global/InvestmentData";

export default function Investment() {
  return (
    <section className="container mx-auto px-4 mt-16 p-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-left">Investment Opportunity</h2>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {investmentOptions.map((option) => (
          <div key={option.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
            <div className="text-lg font-semibold mb-2">{option.type}</div>
            <div className="text-4xl font-bold mb-4">${option.price} per share</div>
            <div className="text-sm text-gray-500" style={{ color: "#A1824A", maxWidth: "200px" }}>
              {option.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
