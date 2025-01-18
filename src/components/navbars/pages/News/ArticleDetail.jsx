import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ArticleDetail = () => {
  const { id } = useParams(); // Extract article id from the URL
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook to navigate programmatically

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`http://localhost:4001/api/news/${id}`);
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

  const handleBackToNews = () => {
    navigate("/news"); // Navigates back to the news page
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Article Image */}
      <img
        src={`http://localhost:4001${article.mediaPath}`}
        alt={article.title || "Article Image"}
        className="mt-2 rounded-lg w-full h-64 object-contain"
      />

      {/* Article Title */}
      <h1 className="text-3xl font-semibold text-gray-900 mt-4">{article.title}</h1>

      {/* Article Content */}
      <p className="text-gray-600 mt-4">{article.content}</p>

      {/* Article Author and Date */}
      <p className="text-sm text-gray-500 mt-2">
        By {article.author} on {new Date(article.createdAt).toLocaleDateString()}
      </p>

      {/* Back to News Button */}
      <div className="mt-6 flex ">
        <button
          onClick={handleBackToNews}
          className="px-6 py-2 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors"
        >
          Back to News
        </button>
      </div>
    </div>
  );
};

export default ArticleDetail;
