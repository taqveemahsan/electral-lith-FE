import React, { useState, useEffect } from "react";
import axios from "axios";
import img1 from "../../../../assets/HomeNewImg1.png"; // Fallback image 1
import img2 from "../../../../assets/HomeNewImg2.png"; // Fallback image 2
import img3 from "../../../../assets/HomeNewImg3.png"; // Fallback image 3
import { useNavigate } from "react-router-dom";

export default function NewsSection() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data } = await axios.get("http://localhost:4001/api/news?page=1&limit=3");
        const fetchedData = data.data;

        const formattedNews = fetchedData.map((item, index) => ({
          id: item.id,
          image: item.mediaPath
            ? `http://localhost:4001${item.mediaPath.replace(/\\/g, "/")}`
            : [img1, img2, img3][index] || img3, // Rotate fallback images or use the third as default
          title: item.title || "No Title",
          date: new Date(item.createdAt).toLocaleDateString() || "No Date",
        }));

        setNews(formattedNews);
      } catch (err) {
        console.error("Error fetching news:", err);
        setError("Failed to load news. Please try again later.");
      } finally {
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
              onClick={() => navigate(`/article/${item.id}`)}
              src={item.image}
              alt={item.title}
              className="md:w-72 h-auto object-contain rounded-lg cursor-pointer"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 line-clamp-2">{item.title}</h3>
              <p className="text-gray-500">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
