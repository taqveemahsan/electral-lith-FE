import React from "react";
import { Line } from "react-chartjs-2"; // Import Line chart from react-chartjs-2
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js"; // Import necessary Chart.js elements
import { marketData } from "../../../../Global/InvestmentData";

// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function MarketOpportunity() {
    // Extract years and values from the yearlyData array
    const years = marketData.yearlyData.map((data) => data.year);
    const demandValues = marketData.yearlyData.map((data) => data.value);

    // Create the chart data structure
    const chartData = {
        labels: years, // x-axis labels (years)
        datasets: [
            {
                label: "2020-2924 + 309", // Name of the dataset
                data: demandValues, // y-axis values
                fill: false,
                borderColor: "rgb(75, 192, 192)", // Line color
                tension: 0.1,
            },
        ],
    };

    // Create chart options (customize as needed)
    const chartOptions = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "3500 GWh",
            },
        },
        scales: {
            x: {
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <section className="container mx-auto px-4 mt-16 p-6">
            <div>
                <h2 className="text-2xl font-bold mb-8">Market Opportunity</h2>

                {/* Card for Expected Growth in Lithium Demand */}
                <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        Expected Growth in Lithium Demand
                    </h3>
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                        {marketData.currentDemand.value}
                    </div>
                    <div className="text-green-500 text-sm">{marketData.currentDemand.growth}</div>
                    <div className="text-sm">{marketData.currentDemand.period}</div>
                </div>

                {/* Chart displaying lithium demand growth */}
                <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">2020-2040 Growth</h3>
                    <div className="w-full h-64 text-left">
                        <Line data={chartData} options={chartOptions} />
                    </div>
                </div>
            </div>
        </section>
    );
}
