import React from "react";
import BrochureItem from "./BrochureItem";
import brochures from "../../../../Global/brochuresData";

const BrochureList = () => (
  <section className="container mx-auto p-4 bg-white">
    <h2 className="text-2xl font-bold mb-6 text-gray-900">Technical Brochures</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
      {brochures.map((brochure, index) => (
        <div key={index} className="w-full">
          <BrochureItem title={brochure.title} />
        </div>
      ))}
    </div>
  </section>
);

export default BrochureList;
