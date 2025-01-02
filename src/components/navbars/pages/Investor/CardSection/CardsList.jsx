import React from "react";
import Card from "./Card";
import cardData from "../../constants/cardsData";

const CardsList = () => {
    return (
        <div className="container mx-auto p-4 grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {cardData.map((item, index) => (
                <Card
                    key={index}
                    number={item.number}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </div>
    );
};

export default CardsList;
