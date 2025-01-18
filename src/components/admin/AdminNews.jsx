import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminNews = () => {
    const [newsList, setNewsList] = useState([]);
    const [newsData, setNewsData] = useState({
        title: "",
        content: "",
        author: "",
        category: "",
    });
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5); // You can change this value to 10 or any other number

    const navigate = useNavigate();
    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        try {
            const response = await axios.get("http://localhost:4001/api/news");
            console.log("Fetched News:", response.data); // Debugging log
            if (response.data.success && Array.isArray(response.data.data)) {
                setNewsList(response.data.data);
            } else {
                setNewsList([]);
            }
        } catch (error) {
            console.error("Error fetching news", error);
            setNewsList([]);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewsData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleAddNews = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append("title", newsData.title);
        formData.append("content", newsData.content);
        formData.append("author", newsData.author);
        formData.append("category", newsData.category);
        if (file) {
            formData.append("media", file);
        }

        try {
            const response = await axios.post("http://localhost:4001/api/news", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            if (response.data.success) {
                console.log("News added successfully", response.data);
                const newNews = response.data.news; // Assuming the response contains the new news item
                setNewsList((prevList) => [...prevList, newNews]);
                setNewsData({ title: "", content: "", author: "", category: "" });
                setFile(null);
            } else {
                console.error("Failed to add news", response.data);
            }
        } catch (error) {
            console.error("Error adding news", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteNews = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:4001/api/news/${id}`);
            if (response.data.success) {
                fetchNews(); // Refresh the news list after deletion
            }
        } catch (error) {
            console.error("Error deleting news", error);
        }
    };

    // Pagination Logic
    const indexOfLastNews = currentPage * itemsPerPage;
    const indexOfFirstNews = indexOfLastNews - itemsPerPage;
    const currentNewsList = newsList.slice(indexOfFirstNews, indexOfLastNews);

    // Handle page change
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Total pages calculation
    const totalPages = Math.ceil(newsList.length / itemsPerPage);

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">Manage News</h2>
            <form onSubmit={handleAddNews} className="bg-white p-6 rounded-lg shadow-md space-y-4">
                <input
                    type="text"
                    name="title"
                    value={newsData.title}
                    onChange={handleChange}
                    placeholder="News Title"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                />
                <textarea
                    name="content"
                    value={newsData.content}
                    onChange={handleChange}
                    placeholder="News Content"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                />
                <input
                    type="text"
                    name="author"
                    value={newsData.author}
                    onChange={handleChange}
                    placeholder="Author Name"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                />
                <input
                    type="text"
                    name="category"
                    value={newsData.category}
                    onChange={handleChange}
                    placeholder="Category"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                />
                <input
                    type="file"
                    onChange={handleFileChange}
                    accept="image/*, video/*"
                    className="w-full p-3 border border-gray-300 rounded-md"
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
                >
                    {loading ? "Adding News..." : "Add News"}
                </button>
            </form>

            <h3 className="text-2xl font-semibold text-center text-indigo-600 mt-10">News List</h3>
            <ul className="mt-4 space-y-6">
                {currentNewsList.length > 0 ? (
                    currentNewsList.map((news) => (
                        <li
                            key={news.id}
                            className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:space-x-4"
                        >
                            {news.mediaPath && (
                                <div className="mt-4 sm:w-1/3">
                                    <img
                                        src={`http://localhost:4001${news.mediaPath}`} // Prepending the base URL to the mediaPath
                                        alt={news.title}
                                        className="w-full h-64 object-contain rounded-lg cursor-pointer" // Set height to 64 (or any preferred value), with object-cover for proper scaling
                                        onClick={() => navigate(`/article/${news.id}`)} // Navigate to the article page on click
                                    />
                                </div>
                            )}
                            <div className="sm:w-2/3 mt-4 sm:mt-0">
                                <h4 className="text-xl font-bold text-gray-900">{news.title}</h4>
                                <p className="text-gray-700 mt-2">{news.content}</p>
                                <div className="flex justify-between mt-4">
                                    <p className="text-sm text-gray-500">
                                        {news.author} | {news.category}
                                    </p>
                                    {/* <button
                    onClick={() => handleDeleteNews(news.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button> */}
                                </div>
                            </div>
                        </li>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No news available</p>
                )}
            </ul>

            {/* Pagination Buttons */}
            <div className="flex justify-center mt-6">
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-l-md hover:bg-indigo-700 disabled:bg-indigo-300"
                >
                    Previous
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => paginate(index + 1)}
                        className={`px-4 py-2 mx-1 rounded-md ${
                            currentPage === index + 1
                                ? "bg-indigo-600 text-white"
                                : "bg-white text-indigo-600"
                        } hover:bg-indigo-700 hover:text-white`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700 disabled:bg-indigo-300"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default AdminNews;
