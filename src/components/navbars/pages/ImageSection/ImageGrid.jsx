// import React from "react";
// import ImageCard from "./ImageCard";
// import SectionDivider from "./SectionDivider";
// import img1 from "../../assets/gridImg1.png";
// import img2 from "../../assets/gridImg2.png";
// import img3 from "../../assets/gridImg2.png";
// import img4 from "../../assets/gridImg3.png";

// const ImageGrid = () => {
//     // Array of images
//     const images = [
//         { url: img1, alt: "White flower" },
//         { url: img2, alt: "Tree branches 1" },
//         { url: img3, alt: "Tree branches 2" },
//         { url: img4, alt: "Green plant stem" },
//     ];

//     return (
//         <div className="container mx-auto px-6 py-10  ">
//             {/* Section Title */}
//             <h2 className="text-2xl sm:text-xl md:text-3xl text-[#141414] font-bold mb-6">
//                 How DLE-R works
//             </h2>

//             {/* Image Grid: 1 column on small screens, 4 columns on larger screens */}
//             <div className="grid w-full grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//                 {images.map((image, index) => (
//                     <div key={index} className="flex flex-row">
//                         <ImageCard imageUrl={image.url} altText={image.alt} />
//                     </div>
//                 ))}
//             </div>

//             {/* Reusable Section Divider */}
//             <SectionDivider title="DLE-R vs. conventional methods" options={[""]} />
//         </div>
//     );
// };

// export default ImageGrid;
import React from "react";

import GlobalComponent from "../GlobalComponent/GlobalComponent";
import images from "../../../../Global/DlerImagesData";
const ImageGrid = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      {/* Section Title */}
      <h2 className="text-2xl sm:text-xl md:text-3xl text-[#141414] font-bold mb-6">
        How DLE-R works
      </h2>

      {/* Call GlobalComponent with 4 images */}
      <GlobalComponent content={images} />

      {/* Reusable Section Divider */}
      {/* <SectionDivider title="DLE-R vs. conventional methods" options={[""]} /> */}
    </div>
  );
};

export default ImageGrid;
