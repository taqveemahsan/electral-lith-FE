export default function ArticleCard({ title, description, imageUrl, author, createdAt, href }) {
    return (
        <div className="flex items-center justify-between mt-6  rounded-lg p-4">
            {/* Left - Image */}
            <div className="flex-shrink-0 w-[280px] h-[200px]">
                <img
                    src={imageUrl}
                    alt={title || "Article Image"}
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>

            {/* Middle - Text Content */}
            <div className="flex-grow px-6">
                <h3 className="text-xl font-medium text-gray-900 line-clamp-2">{title}</h3>
                <p className="text-gray-600 line-clamp-2 mt-2">{description}</p>
                <p className="text-sm text-gray-500 mt-2">
                    By {author} on {createdAt}
                </p>
            </div>

            {/* Right - Read More Button */}
            <div className="flex-shrink-0">
                <a
                    href={href || "#"}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                    Read More
                </a>
            </div>
        </div>
    );
}
