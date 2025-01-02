import React from "react";
import GlobalComponent from "../GlobalComponent/GlobalComponent";
import images from "../../../../Global/RealWorldImagesData";
const RealWorld = () => {
  // Array of 3 images for the RealWorld component

  return (
    // <div>
    //     <h1>RealWorld Component</h1>
    //     <GlobalComponent content={contentArray} /> {/* Pass 3 images here */}
    // </div>
    <div className="container mx-auto px-6 py-10">
      {/* Section Title */}
      <h2 className="text-2xl sm:text-xl md:text-3xl text-[#141414] font-bold mb-6">
        Real-world applications
      </h2>

      {/* Call GlobalComponent with 3 images */}
      <GlobalComponent content={images} />

      {/* Reusable Section Divider */}
      {/* <SectionDivider title="DLE-R vs. conventional methods" options={[""]} /> */}
    </div>
  );
};

export default RealWorld;
