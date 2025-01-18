import React from "react";

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  // Helper function to determine tab styles
  const getTabClasses = (tab) => {
    return activeTab === tab
      ? "border-[#141414] text-[#141414] text-lg font-semibold"
      : "border-transparent text-gray-500 text-sm font-medium";
  };

  // Event handler for setting the active tab
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-wrap border-b space-x-4 mb-6 ">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`py-2 -mb-px text-sm border-b-2 ${getTabClasses(tab)} 
            md:px-4 px-2 
            sm:text-base md:text-lg
            hover:text-[#141414] transition duration-300`}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
