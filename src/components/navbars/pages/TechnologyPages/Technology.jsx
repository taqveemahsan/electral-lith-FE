import React, { useState } from "react";
// import ImageGrid from "../components/ImageSection/ImageGrid";
// import BrochureList from "../components/BrochuresComponent/BrochureList";
import HeroSection from "../TechnologyPages/HeroSection";
import Search from "../TechnologyPages/Search";
import CardsList from "../TechnologyPages/CardsList";
import ImageGrid from "../ImageSection/ImageGrid";
import Tabs from "../../pages/Tabs";
import ContentSection from "../../pages/ContentSection";
import RealWorldGrid from "../../pages/RealWorldSectionComponent/RealWorldGrid";
import BrochureList from "../../pages/BrochuresComponent/BrochureList";
const Technology = () => {
  const [activeTab, setActiveTab] = useState("Environmental Impact");
  const sections = ["Environmental Impact", "Cost Efficiency"];
  return (
    <div>
      {/* <NavbarComponent /> */}
      <main>
        <HeroSection />
        <Search />
        <CardsList />
        <ImageGrid />

        {/* <RealWorldGrid /> */}
        {/* <BrochureList /> */}
        {/* Top left corner heading */}

        {/* Main container */}
        <div className="container mx-auto p-4 mt-10">
          {/* Tabs */}
          <h1 className=" top-0 left-4 text-2xl font-bold text-gray-800 mb-10">
            DLE-R vs. Conventional Methods
          </h1>
          <Tabs tabs={sections} activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Content Section */}
          <ContentSection activeTab={activeTab} />
        </div>
        <RealWorldGrid />
        <BrochureList />
      </main>
    </div>
  );
};

export default Technology;
