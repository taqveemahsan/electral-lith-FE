import React from "react";
import images from "../../../../Global/DlerImagesData";

const ImageGrid = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      {/* Section Title */}
      <h2 className="text-2xl sm:text-xl md:text-3xl text-[#141414] font-bold mb-6">
        How DLE-R works
      </h2>

      {/* Grid for Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="flex justify-center">
            <div className="rounded-lg overflow-hidden w-full">
              <div className="flex items-center justify-center bg-gray-300 rounded-lg h-64">
                <img
                  src={image.url}
                  alt={image.alt || "Image"}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
