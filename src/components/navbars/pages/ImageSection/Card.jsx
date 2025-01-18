import React from "react";

const Card = ({ content }) => {
  // Function to handle the condition outside the JSX
  const getContent = () => {
    return content && content.url ? (
      <img
        src={content.url}
        alt={content.alt || "Image"}
        className="w-full h-auto object-cover rounded-lg"
      />
    ) : content ? (
      <span>{content}</span>
    ) : (
      <span>Empty Card</span>
    );
  };

  return (
    <div className="rounded-lg overflow-hidden w-full">
      <div className="flex items-center justify-center h-64 bg-gray-300 rounded-lg">
        {getContent()}
      </div>
    </div>
  );
};

export default Card;
