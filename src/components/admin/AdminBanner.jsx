import React, { useState } from "react";
import axios from "axios";

const AdminBanner = () => {
  const [bannerImage, setBannerImage] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [bannerImageUrl, setBannerImageUrl] = useState(""); // To hold the image URL for display

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBannerImage(file);
    }
  };

  const handleBannerSubmit = async (e) => {
    e.preventDefault();
    if (!bannerImage) {
      setMessage("Please select an image to upload.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("bannerImage", bannerImage); // Corrected the key name here

    try {
      const response = await axios.post("http://localhost:4001/api/auth/banner/1", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Ensure proper content type for file uploads
        },
      });

      // Check the server response
      if (response.status === 200 && response.data.success) {
        const mediaUrl = response.data.data.mediaUrl.replace(/\\/g, "/");
        const imageUrl = `http://localhost:4001${mediaUrl}`;

        setMessage("Banner image uploaded successfully!");
        setBannerImageUrl(imageUrl);
      } else {
        setMessage("Failed to upload banner image. Please try again.");
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">Upload Banner Image</h2>
      <form onSubmit={handleBannerSubmit} className="bg-white shadow-md p-6 rounded-lg">
        <div className="mb-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none ${
            loading ? "cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          {loading ? "Uploading..." : "Upload Banner"}
        </button>
      </form>
      {message && (
        <p
          className={`mt-4 text-center ${
            message.includes("success") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}

      {/* Display the uploaded banner image if the URL is set */}
      {bannerImageUrl && (
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Uploaded Banner:</h3>
          <img
            src={bannerImageUrl}
            alt="Uploaded Banner"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default AdminBanner;
