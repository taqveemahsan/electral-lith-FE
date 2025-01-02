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
        <div className="flex border-b space-x-4">
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    className={`py-2 -mb-px text-sm border-b-2 ${getTabClasses(tab)}`}
                    onClick={() => handleTabClick(tab)}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

export default Tabs;
