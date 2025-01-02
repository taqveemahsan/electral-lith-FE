import React from "react";
import Card from "../ImageSection/Card";

const ContentGrid = ({ content, columns }) => {
    // Set a minimum column count (e.g., 4) to avoid layout breaking
    const gridClasses = `grid grid-cols-${columns || 4} gap-4`;

    return (
        <div className="container px-4 mx-auto mb-6">
            <div className={gridClasses}>
                {content?.map((item, index) => (
                    <div key={index} className="flex justify-center">
                        <Card content={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContentGrid;
