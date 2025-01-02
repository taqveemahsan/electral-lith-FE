import React from "react";
import { ReportCard } from "./ReportCard";

const glossaryTerms = [
  {
    term: "Sustainable Lithium Extraction",
    definition:
      "The process of extracting lithium from the earth using sustainable methods that minimize environmental impact.",
  },
  {
    term: "Extraction Yield",
    definition:
      "A measure of the amount of lithium that can be extracted from a given resource using a specific technology.",
  },
  {
    term: "Lithium Refining",
    definition:
      "The process of refining lithium into a high-purity form suitable for use in batteries and other applications.",
  },
  {
    term: "Lithium Extraction Footprint",
    definition:
      "The environmental impact of lithium extraction, including energy usage, water consumption, and land disturbance.",
  },
];

export function GlossarySection() {
  return (
    <section className="container mx-auto px-4 mt-16 p-6">
      <h2 className="text-2xl font-semibold mb-6">Glossary</h2>
      <div className="space-y-4">
        {glossaryTerms.map((report) => (
          <ReportCard
            key={report.term}
            title={report.term}
            description={report.definition}
          />
        ))}
      </div>
    </section>
  );
}
export default GlossarySection;
