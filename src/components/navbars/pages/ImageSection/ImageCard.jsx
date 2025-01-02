import React from "react";

const ImageCard = ({ imageUrl, altText }) => {
    return (
        <div className="rounded-lg overflow-hidden shadow-md w-full">
            <img src={imageUrl} alt={altText} className="w-full h-auto object-cover" />
        </div>
    );
};

export default ImageCard;
