import { useNavigate } from "react-router-dom";

export default function ArticleCard({ newsData }) {
  console.log(">>>>>>>>", newsData);
  const navigate = useNavigate();
  const handleNavigate = () => {
    // console.log(">>>>>", newsData?.id);
    navigate(`/article/${newsData?.id}`);
  };

  return (
    <div className="flex items-center justify-between mt-6 rounded-lg p-4">
      <div className="flex-shrink-0 w-[280px] h-[200px]">
        <img
          src={`http://localhost:4001${newsData?.mediaPath}`}
          alt={newsData?.title || "Article Image"}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="flex-grow px-6">
        <h3 className="text-xl font-medium text-gray-900 line-clamp-2">{newsData?.title}</h3>
        <p className="text-gray-600 line-clamp-2 mt-2">{newsData?.content}</p>
        <p className="text-sm text-gray-500 mt-2">
          By {newsData?.author} {new Date(newsData?.createdAt).toLocaleDateString()}
        </p>
      </div>

      <div className="flex-shrink-0 cursor-pointer" onClick={handleNavigate}>
        <a
          //   href={`/article/${id}`}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Read More
        </a>
      </div>
    </div>
  );
}
