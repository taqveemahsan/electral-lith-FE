import React from "react";
import images from "../../../../Global/RealWorldImagesData";

const RealWorld = () => {
  // Array of 3 images for the RealWorld component

  return (
    <div className="container mx-auto px-6 py-10">
      {/* Section Title */}
      <h2 className="text-2xl sm:text-xl md:text-3xl text-[#141414] font-bold mb-6">
        Real-world applications
      </h2>

      {/* Responsive Grid for Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="flex justify-center">
            {/* Image Card */}
            <div className="rounded-lg overflow-hidden w-full">
              <div className="flex items-center justify-center h-64 bg-gray-300 rounded-lg">
                {image.url ? (
                  <img
                    src={image.url}
                    alt={image.alt || "Image"}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                ) : (
                  <span>{image.alt || "Empty Image"}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RealWorld;
