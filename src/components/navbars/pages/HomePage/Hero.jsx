import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios for API call

export default function Hero() {
    const [heroImage, setHeroImage] = useState(""); // State to store the dynamic image URL
    const heroContent = {
        title: "Unlocking a Green Future with Sustainable Lithium Extraction",
    };

    useEffect(() => {
        // Fetching the image URL from the API on component mount
        const fetchHeroImage = async () => {
            try {
                const { data } = await axios.get(
                    "http://localhost:4001/api/auth/banner/a0f8eb52-ff3b-4d5b-adab-aa99d2095d7f"
                );
                console.log("🚀 ~ fetchHeroImage ~ data:", data);
                const imageUrl = `http://localhost:4001${data.data.mediaUrl.replace(/\\/g, "/")}`;
                setHeroImage(imageUrl); // Update the state with the image URL
            } catch (error) {
                console.error("Error fetching hero image:", error);
            }
        };

        fetchHeroImage(); // Call the function to fetch the image
    }, []); // Empty dependency array ensures it runs only once when the component mounts

    return (
        <section className="container mx-auto px-4 mt-16 p-6">
            {/* Hero Image */}
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroImage})` }} // Use the dynamically fetched image URL
                />
                <div className="absolute inset-0 bg-black/30" />{" "}
                {/* Overlay for better text readability */}
                {/* Position the text at the bottom-right corner */}
                <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 px-6 py-4 rounded-lg max-w-lg">
                    <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold leading-tight">
                        <span className="block">{heroContent.title.split("with")[0]}</span>
                        <span className="block mt-2">{heroContent.title.split("with")[1]}</span>
                    </h1>
                </div>
            </div>
        </section>
    );
}
