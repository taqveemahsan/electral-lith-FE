import React from "react";
import img1 from "../../../../assets/HomeDlrSectionImg1.png";
import img2 from "../../../../assets/HomeDlrSectionImg2.png";
import img3 from "../../../../assets/HomeDlrSectionImg3.png";
import img4 from "../../../../assets/HomeDlrSectionImg4.png";
import img5 from "../../../../assets/HomeDlrSectionImg5.png";

export default function Technology() {
  const images = [img1, img2, img3, img4, img5];

  return (
    <section className="container mx-auto px-4 mt-16 p-6">
      <div className="max-w-full mx-auto">
        <h2 className="text-2xl font-bold mb-6">Why DLE-R Technology?</h2>
        <p className="text-gray-600 mb-12">
          Our Direct Lithium Extraction and Refining (DLE-R) technology is designed to be
          environmentally friendly. It uses renewable energy sources and eliminates the need for
          evaporation ponds, greatly reducing water usage and land disturbance compared to
          traditional mining methods.
        </p>
      </div>

      {/* Grid container for responsive images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 bg-green-100 rounded-lg shadow-lg flex items-center justify-center"
          >
            <img
              src={image}
              alt={`Technology image ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
