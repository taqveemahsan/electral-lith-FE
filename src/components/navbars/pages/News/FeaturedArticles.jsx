import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "./ArticalCard";
import img1 from "../../../../assets/NewsFeaturedImg1.png";
import img2 from "../../../../assets/NewsFeaturedImg2.png";

export function FeaturedArticles() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const config = {
                    method: "get",
                    maxBodyLength: Infinity,
                    url: "http://localhost:4001/api/news?page=1&limit=10",
                    headers: {},
                };

                const response = await axios.request(config);
                const fetchedData = response.data.data;

                const formattedArticles = fetchedData.map((item, index) => ({
                    id: item.id,
                    title: item.title || "No Title", // Default title if missing
                    description: item.content || "No description available.", // Default description
                    imageUrl: item.mediaPath
                        ? `http://localhost:4001${item.mediaPath.replace(/\\/g, "/")}`
                        : index % 2 === 0
                        ? img1
                        : img2, // Ensure img1 for even, img2 for odd
                    author: item.author || "Unknown Author", // Default author
                    createdAt: new Date(item.createdAt).toLocaleDateString(), // Format date
                }));

                setArticles(formattedArticles);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError("Failed to load articles. Please try again later.");
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <section className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Featured Articles</h2>
            <div className="space-y-6">
                {articles.map((article) => (
                    <ArticleCard key={article.id} {...article} />
                ))}
            </div>
        </section>
    );
}

export default FeaturedArticles;
