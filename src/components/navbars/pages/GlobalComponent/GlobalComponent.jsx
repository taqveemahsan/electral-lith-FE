// import React from "react";
// // import ContentGrid from "./ContentGrid";
// import ContentGrid from "../ImageSection/ContentGrid";
// // import img1 from "../../assets/gridImg1.png";
// import img1 from "../../assets/gridImg1.png";
// import img2 from "../../assets/gridImg2.png";
// import img3 from "../../assets/gridImg2.png";
// import img4 from "../../assets/gridImg3.png";

// const GlobalComponent = () => {
//     // Array of content
//     const contentArray = [
//         { url: img1, alt: "White flower" },
//         { url: img2, alt: "Tree branches 1" },
//         { url: img3, alt: "Tree branches 1" },
//         { url: img4, alt: "Tree branches 1" },
//     ];
//     console.log("🚀 ~ GlobalComponent ~ contentArray:", contentArray.length);

//     return (
//         <div>
//             {/* <h1>My Content Grid</h1> */}
//             {/* Call the ContentGrid component and pass content and columns */}
//             <ContentGrid content={contentArray} columns={contentArray.length} />
//         </div>
//     );
// };

// export default GlobalComponent;

import React from "react";
import ContentGrid from "../ImageSection/ContentGrid";

const GlobalComponent = ({ content = [] }) => {
    // console.log("🚀 ~ GlobalComponent ~ contentArray:", content.length);

    // Always use a fixed column count for layout consistency
    const columns = 4; // Fixed column count

    return (
        <>
            <ContentGrid content={content} columns={columns} />
        </>
    );
};

export default GlobalComponent;
