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
