import React from "react";

const BrochureItem = ({ title }) => (
    <div className="flex flex-col items-start p-4 border-t border-b border-gray-200 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 space-y-2">
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <a href="#" className="text-black underline">
            Download
        </a>
    </div>
);

export default BrochureItem;
