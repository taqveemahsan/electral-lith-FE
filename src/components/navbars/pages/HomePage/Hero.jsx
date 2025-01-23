import React, { useState, useEffect } from "react";
import Slider from "react-slick"; // Import react-slick for the carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // Import necessary slick styles
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Custom arrow icons
import axios from "axios"; // Import axios for API call
import "../../../../styles/Custom.css";
import img2 from "../../../../assets/AboutHeroImg.png";

export default function Hero() {
    const [heroImage, setHeroImage] = useState(""); // State to store the dynamic image URL

    useEffect(() => {
        // Fetch the image URL from the API on component mount
        const fetchHeroImage = async () => {
            try {
                const { data } = await axios.get("http://localhost:4001/api/auth/banner/1");
                console.log("🚀 ~ fetchHeroImage ~ data:", data);
                const imageUrl = `http://localhost:4001${data.data.mediaUrl.replace(/\\/g, "/")}`;
                setHeroImage(imageUrl); // Update the state with the image URL
            } catch (error) {
                console.error("Error fetching hero image:", error);
            }
        };

        fetchHeroImage(); // Call the function to fetch the image
    }, []); // Empty dependency array ensures it runs only once when the component mounts

    // Slick Carousel settings
    const settings = {
        dots: true, // Show dots for navigation
        infinite: true, // Loop through the images
        speed: 500, // Speed of the transition
        slidesToShow: 1, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll at a time
        arrows: true, // Enable arrows
        prevArrow: <FaArrowLeft className="slick-prev" />, // Custom previous arrow
        nextArrow: <FaArrowRight className="slick-next" />, // Custom next arrow
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000, // Set autoplay interval to 2 seconds
    };

    return (
        <section className="container mx-auto px-4 mt-16 p-6">
            {/* Hero Image Carousel */}
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
                {/* Only display the carousel when the image is loaded */}
                {heroImage && (
                    <Slider {...settings}>
                        {/* Slide 1 */}
                        <div>
                            <img
                                src={heroImage} // Dynamic image URL from API
                                alt="Hero Image"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* You can add more slides with the same image if you need */}
                        <div>
                            <img
                                src={heroImage} // Same dynamic image URL
                                alt="Hero Image"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <img
                                src={heroImage} // Same dynamic image URL
                                alt="Hero Image"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </Slider>
                )}
            </div>
        </section>
    );
}
