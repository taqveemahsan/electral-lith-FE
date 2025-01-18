import React from "react";
import Card from "../../../../Global/Card";
import cardsData from "../../../../Global/cardsData";

const CardsList = () => {
  return (
    <div className="container mx-auto p-4 sm:p-6 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cardsData.map((item, index) => (
          <Card
            key={index}
            number={item.number}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsList;
