import { useNavigate } from "react-router-dom";

export default function ArticleCard({ newsData }) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/article/${newsData?.id}`);
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center mt-6 rounded-lg p-4 bg-white shadow-md">
      {/* Image Section */}
      <div className="flex-shrink-0 w-full sm:w-[200px] h-[150px] sm:h-[200px] mb-4 sm:mb-0">
        <img
          src={`http://localhost:4001${newsData?.mediaPath}`}
          alt={newsData?.title || "Article Image"}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Content Section */}
      <div className="flex-grow sm:px-6 px-4">
        <h3 className="text-base sm:text-lg font-medium text-gray-900 line-clamp-2">
          {newsData?.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 line-clamp-2 mt-2">{newsData?.content}</p>
        <p className="text-sm text-gray-500 mt-2">
          By {newsData?.author} • {new Date(newsData?.createdAt).toLocaleDateString()}
        </p>
      </div>

      {/* Button Section */}
      <div className="flex-shrink-0 mt-4 sm:mt-0 sm:ml-4">
        <button
          onClick={handleNavigate}
          className="px-4 py-2 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors"
        >
          Read More
        </button>
      </div>
    </div>
  );
}
