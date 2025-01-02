import React, { useState, useEffect } from "react";
import axios from "axios";
import img1 from "../../../../assets/HomeNewImg1.png"; // Fallback image 1
import img2 from "../../../../assets/HomeNewImg2.png"; // Fallback image 2
import img3 from "../../../../assets/HomeNewImg3.png"; // Fallback image 3

export default function NewsSection() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const config = {
                    method: "get",
                    maxBodyLength: Infinity,
                    url: "http://localhost:4001/api/news?page=1&limit=3", // Adjust URL as needed
                    headers: {},
                };

                const response = await axios.request(config);
                const fetchedData = response.data.data;

                const formattedNews = fetchedData.map((item, index) => ({
                    image: item.mediaPath
                        ? `http://localhost:4001${item.mediaPath.replace(/\\/g, "/")}`
                        : index === 0
                        ? img1
                        : index === 1
                        ? img2
                        : img3, // Alternate fallback images for each item
                    title: item.title || "No Title", // Fallback if no title
                    date: new Date(item.createdAt).toLocaleDateString() || "No Date", // Format date or fallback
                }));

                setNews(formattedNews);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError("Failed to load news. Please try again later.");
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <section className="container mx-auto px-4 mt-16 p-6">
            <h2 className="text-2xl font-bold mb-10">In the News</h2>
            <div className="space-y-4 md:space-y-6">
                {news.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row space-y-4 space-x-4 md:space-y-4 md:space-x-6"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="md:w-72 h-48 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-500">{item.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
