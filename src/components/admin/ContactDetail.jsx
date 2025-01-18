import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ContactDetail = () => {
    const { id } = useParams(); // Extract the ID from the URL
    const navigate = useNavigate(); // Navigation handler
    const [contact, setContact] = useState(null); // State to hold contact details
    const [loading, setLoading] = useState(true); // State to show loading spinner
    const [error, setError] = useState(""); // State to handle errors

    useEffect(() => {
        fetchContactDetail();
    }, []);

    const fetchContactDetail = async () => {
        try {
            const response = await axios.get(`http://localhost:4001/api/auth/contactus/${id}`);
            if (response.data.success) {
                setContact(response.data.data);
            } else {
                setError("Failed to fetch contact details.");
            }
        } catch (err) {
            setError("An error occurred while fetching contact details.");
            console.error("Error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-semibold text-center text-indigo-700 mb-8">
                Contact Details
            </h2>
            {loading ? (
                <div className="flex justify-center items-center space-x-2">
                    <div className="w-8 h-8 border-t-2 border-indigo-500 border-solid rounded-full animate-spin"></div>
                    <p className="text-lg text-gray-500">Loading contact details...</p>
                </div>
            ) : error ? (
                <div className="bg-red-100 text-red-700 p-4 rounded-md shadow-md mb-4">
                    <p className="text-lg">{error}</p>
                </div>
            ) : contact ? (
                <div className="bg-white p-8 rounded-lg shadow-xl max-w-4xl mx-auto">
                    <div className="flex flex-col space-y-6">
                        <p className="text-2xl font-bold text-gray-900">
                            Name: <span className="font-normal text-gray-700">{contact.name}</span>
                        </p>
                        <p className="text-xl text-gray-700">
                            Email:{" "}
                            <span className="font-normal text-gray-500">{contact.email}</span>
                        </p>
                        <p className="text-xl text-gray-700">
                            Message:{" "}
                            <span className="font-normal text-gray-500">{contact.message}</span>
                        </p>
                        <p className="text-lg text-gray-500">
                            Created At:
                            <span className="font-normal text-gray-400">
                                {new Date(contact.createdAt).toLocaleDateString()}
                            </span>
                        </p>
                    </div>
                    <div className="mt-8 text-center">
                        <button
                            onClick={() => navigate("/admin/contact")}
                            className="bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
                        >
                            Back to Contact List
                        </button>
                    </div>
                </div>
            ) : (
                <p className="text-center text-lg text-gray-500">No contact details found.</p>
            )}
        </div>
    );
};

export default ContactDetail;
