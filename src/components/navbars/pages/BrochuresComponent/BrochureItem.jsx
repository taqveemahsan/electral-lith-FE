import React from "react";

const BrochureItem = ({ title }) => (
  <div className="flex flex-col items-start p-4 border-t border-b border-gray-200 w-full space-y-2">
    <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
    <a href="#" className="text-black underline">
      Download
    </a>
  </div>
);

export default BrochureItem;
