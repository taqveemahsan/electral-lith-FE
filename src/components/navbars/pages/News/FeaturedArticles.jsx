import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "./ArticalCard";
import img1 from "../../../../assets/NewsFeaturedImg1.png";
import img2 from "../../../../assets/NewsFeaturedImg2.png";

export function FeaturedArticles() {
  const [articles, setArticles] = useState([]);
  console.log(">>>>>", articles);
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

        setArticles(fetchedData);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load articles. Please try again later.");
        setLoading(false);
      } finally {
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
          <ArticleCard key={article.id} newsData={article} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedArticles;
