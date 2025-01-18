import React from "react";
import ChartCard from "./ChartCard";
import SectionDivider from "./ImageSection/SectionDivider";
import charts from "../../../Global/chartsEnvironmentalData";

const EnvironmentalImpactCharts = () => {
  const emptySlots = charts.length % 4 === 0 ? 0 : 4 - (charts.length % 4);
  const displayCharts = [...charts, ...Array(emptySlots).fill(null)];

  return (
    <div className="container mx-auto py-2 mt-6 mb-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 min-h-[300px]">
        {displayCharts.map((chart, index) =>
          chart ? (
            <ChartCard key={index} title={chart} />
          ) : (
            <div key={index} className="w-full h-[300px]"></div> // Empty column for spacing
          )
        )}
      </div>
      <SectionDivider title="" options={[""]} />
    </div>
  );
};

export default EnvironmentalImpactCharts;
