import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ArticleDetail = () => {
  const { id } = useParams(); // Extract article id from the URL
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`http://localhost:4001/api/news/${id}`);

        // Accessing the nested data field
        setArticle(response.data.data); // Setting the article data
        setLoading(false);
      } catch (err) {
        setError("Failed to load article. Please try again later.");
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]); // Re-run the effect when `id` changes

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <img
        src={`http://localhost:4001${article.mediaPath}`} // Correcting the image path
        alt={article.title || "Article Image"}
        className="  mt-2 rounded-lg w-full h-80  object-cover"
      />
      <h1 className="text-3xl font-semibold text-gray-900 mt-4">{article.title}</h1>
      <p className="text-gray-600 mt-4">{article.content}</p>
      <p className="text-sm text-gray-500 mt-2">
        By {article.author} on {new Date(article.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
};

export default ArticleDetail;
