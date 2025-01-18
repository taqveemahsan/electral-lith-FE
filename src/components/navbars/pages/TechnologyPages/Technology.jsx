import React, { useState } from "react";
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
            {/* Main Container */}
            <main>
                {/* Hero Section */}
                <HeroSection />

                {/* Search Component */}
                <Search />

                {/* Cards List */}
                <CardsList />

                {/* Image Grid */}
                <ImageGrid />

                {/* Tabs and Content Section */}
                <div className="container mx-auto mt-10">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">
                        DLE-R vs. Conventional Methods
                    </h1>

                    {/* Tabs */}
                    <Tabs tabs={sections} activeTab={activeTab} setActiveTab={setActiveTab} />

                    {/* Content Section */}
                    <ContentSection activeTab={activeTab} />
                </div>

                {/* Real World Grid */}
                <RealWorldGrid />

                {/* Brochure List */}
                <BrochureList />
            </main>
        </div>
    );
};

export default Technology;
