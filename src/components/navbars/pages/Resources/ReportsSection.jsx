import React from "react";
import { ReportCard } from "./ReportCard";

const reports = [
  {
    title: "SustainLith Investor Deck",
    description:
      "The report outlines the technology, environmental benefits, and market opportunity for sustainable lithium extraction.",
  },
  {
    title: "Sustainable Lithium Extraction: A Review",
    description:
      "A summary of the latest research and development in the field of sustainable lithium extraction.",
  },
  {
    title: "Lithium Extraction: Environmental Impacts and Solutions",
    description:
      "A comprehensive guide to the environmental impact of lithium extraction and how SustainLith's technology addresses these challenges.",
  },
];

function ReportsSection() {
  return (
    <section className="container mx-auto px-4 mt-16 p-6">
      <h2 className="text-2xl font-semibold mb-6">Reports</h2>
      <div className="space-y-6">
        {reports.map((report) => (
          <ReportCard key={report.title} title={report.title} description={report.description} />
        ))}
      </div>
    </section>
  );
}

export default ReportsSection;
