import { FaLeaf, FaBolt, FaRocket, FaLink, FaWater } from "react-icons/fa";

export const whyInvestReasons = [
    {
        id: 1,
        title: "Sustainable",
        description: "Our technology leads the way in sustainable performance.",
        icon: FaLeaf, // Leaf icon for sustainability
    },
    {
        id: 2,
        title: "Performance",
        description: "High performance through innovative technology.",
        icon: FaBolt, // Bolt icon for performance
    },
    {
        id: 3,
        title: "Efficiency",
        description: "We continuously improve our impact through efficiency.",
        icon: FaRocket, // Rocket icon for efficiency
    },
    {
        id: 4,
        title: "Supply Chain",
        description: "Building a sustainable community through $500million+.",
        icon: FaLink, // Link icon for supply chain
    },
];

export const marketData = {
    currentDemand: {
        value: "3500 GWh",
        growth: "+209%",
        period: "2020-2040",
    },
    yearlyData: [
        { year: 2020, value: 1000 },
        { year: 2025, value: 1500 },
        { year: 2030, value: 2200 },
        { year: 2035, value: 2800 },
        { year: 2040, value: 3500 },
    ],
};

export const performanceIndicators = [
    {
        id: 1,
        title: "Carbon Footprint",
        value: "-15%",
        icon: FaLeaf, // React icon for Carbon Footprint
    },
    {
        id: 2,
        title: "Energy Intensity",
        value: "-25%",
        icon: FaBolt, // React icon for Energy Intensity
    },
    {
        id: 3,
        title: "Water Usage",
        value: "-40%",
        icon: FaWater, // React icon for Water Usage
    },
];

export const investmentOptions = [
    {
        id: 1,
        type: "Equity",
        price: "5.00",
        description: "Minimum investment",
    },
    {
        id: 2,
        type: "Convertible Note",
        price: "1.00",
        description: "Minimum investment",
    },
];
