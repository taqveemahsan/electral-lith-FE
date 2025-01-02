import React from "react";
import EnvironmentalImpactCharts from "./EnvironmentalImpactCharts";
import CostEfficiencyCharts from "./CostEfficiencyCharts";

const ContentSection = ({ activeTab }) => {
    // Function to determine the heading based on the active tab
    const getHeading = (activeTab) => {
        return activeTab === "Environmental Impact"
            ? "Comparison of environmental impact"
            : "Comparison of cost-efficiency";
    };

    // Function to render the correct charts based on the active tab
    const renderCharts = (activeTab) => {
        return activeTab === "Environmental Impact" ? (
            <EnvironmentalImpactCharts />
        ) : (
            <CostEfficiencyCharts />
        );
    };

    const heading = getHeading(activeTab);
    const charts = renderCharts(activeTab);

    return (
        <div className="mt-4">
            {/* Conditional heading based on active tab */}
            <h2 className="text-[18px] font-semibold mb-4">{heading}</h2>

            {/* Render charts based on the active tab */}
            {charts}
        </div>
    );
};

export default ContentSection;
