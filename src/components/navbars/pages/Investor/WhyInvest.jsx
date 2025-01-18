import React from "react";
import { whyInvestReasons } from "../../../../Global/InvestmentData";
import Card from "./CardSection/Card";

const CardsList = () => {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      {/* Section Heading */}
      <h2 className=" text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
        Why Invest with Electrallith
      </h2>
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {whyInvestReasons.map((item, index) => (
          <Card key={index} Icon={item.icon} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default CardsList;
