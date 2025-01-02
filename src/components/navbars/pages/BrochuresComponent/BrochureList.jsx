import React from "react";
import BrochureItem from "./BrochureItem";
import brochures from "../../../../Global/brochuresData";

const BrochureList = () => (
  <section className="container mx-auto p-4 bg-white">
    <h2 className="text-2xl font-bold mb-6 text-gray-900">Technical Brochures</h2>
    <div className="flex flex-wrap gap-8 justify-between">
      {brochures.map((brochure, index) => (
        <div key={index} className=" md:w-1/2 lg:w-1/4">
          <BrochureItem title={brochure.title} />
        </div>
      ))}
    </div>
  </section>
);

export default BrochureList;
