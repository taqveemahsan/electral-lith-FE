import React, { useState, useEffect } from "react";
import axios from "axios";

const ManageFAQ = () => {
    const [faqs, setFaqs] = useState([]); // Initialize as an empty array
    const [currentFaq, setCurrentFaq] = useState(null);
    const [form, setForm] = useState({ question: "", answer: "" });
    const [isEditing, setIsEditing] = useState(false);

    // Fetch FAQs when the component is mounted
    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                const response = await axios.get("http://localhost:4001/api/auth/faq");
                // Check if data exists and is an array
                if (response.data.success && Array.isArray(response.data.data)) {
                    setFaqs(response.data.data);
                } else if (response.data.success && response.data.data === null) {
                    console.log("No FAQs found.");
                    setFaqs([]); // Set empty array if no data is available
                } else {
                    console.error("Failed to load FAQs. Invalid response format.");
                }
            } catch (error) {
                console.error("Error fetching FAQs:", error);
            }
        };

        fetchFaqs();
    }, []);

    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleAddFAQ = async () => {
        if (form.question.trim() && form.answer.trim()) {
            const newFaq = {
                question: form.question,
                answer: form.answer,
            };

            try {
                const response = await axios.post("http://localhost:4001/api/auth/faq", newFaq);
                if (response.data.success) {
                    setFaqs([...faqs, response.data.data]);
                    setForm({ question: "", answer: "" });
                } else {
                    console.error("Failed to add FAQ", response.data);
                }
            } catch (error) {
                console.error("Error adding FAQ:", error);
                // Log the complete error response for better debugging
                if (error.response) {
                    console.error("Response Data:", error.response.data);
                    console.error("Response Status:", error.response.status);
                    console.error("Response Headers:", error.response.headers);
                } else if (error.request) {
                    console.error("Request Data:", error.request);
                } else {
                    console.error("Error Message:", error.message);
                }
            }
        }
    };

    const handleEditFAQ = (faq) => {
        setIsEditing(true);
        setCurrentFaq(faq);
        setForm({ question: faq.question, answer: faq.answer });
    };

    const handleUpdateFAQ = async () => {
        const updatedFaq = {
            question: form.question,
            answer: form.answer,
        };

        try {
            const response = await axios.put(
                `http://localhost:4001/api/auth/faq/${currentFaq.id}`,
                updatedFaq
            );
            if (response.data.success) {
                setFaqs(faqs.map((f) => (f.id === currentFaq.id ? response.data.data : f)));
                setIsEditing(false);
                setForm({ question: "", answer: "" });
                setCurrentFaq(null);
            } else {
                console.error("Failed to update FAQ", response.data);
            }
        } catch (error) {
            console.error("Error updating FAQ:", error);
        }
    };

    const handleDeleteFAQ = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:4001/api/auth/faq/${id}`);
            if (response.data.success) {
                setFaqs(faqs.filter((faq) => faq.id !== id));
            } else {
                console.error("Failed to delete FAQ", response.data);
            }
        } catch (error) {
            console.error("Error deleting FAQ:", error);
        }
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold text-gray-700 mb-4">Manage FAQs</h1>
            <div className="bg-white p-4 shadow-md rounded mb-6">
                <h2 className="text-xl font-semibold mb-3">
                    {isEditing ? "Edit FAQ" : "Add New FAQ"}
                </h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-600 font-medium">Question</label>
                        <input
                            type="text"
                            name="question"
                            value={form.question}
                            onChange={handleInputChange}
                            className="w-full border rounded p-2"
                            placeholder="Enter FAQ question"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 font-medium">Answer</label>
                        <textarea
                            name="answer"
                            value={form.answer}
                            onChange={handleInputChange}
                            className="w-full border rounded p-2"
                            placeholder="Enter FAQ answer"
                        />
                    </div>
                    <button
                        onClick={isEditing ? handleUpdateFAQ : handleAddFAQ}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                    >
                        {isEditing ? "Update FAQ" : "Add FAQ"}
                    </button>
                </div>
            </div>
            <div className="bg-white p-4 shadow-md rounded">
                <h2 className="text-xl font-semibold mb-3">FAQs</h2>
                {faqs.length === 0 ? (
                    <p className="text-gray-500">No FAQs available. Add some!</p>
                ) : (
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2 text-left">
                                    Question
                                </th>
                                <th className="border border-gray-300 px-4 py-2 text-left">
                                    Answer
                                </th>
                                <th className="border border-gray-300 px-4 py-2 text-center">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {faqs.map((faq) => (
                                <tr key={faq.id}>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {faq.question}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {faq.answer}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        <button
                                            onClick={() => handleEditFAQ(faq)}
                                            className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition mr-2"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDeleteFAQ(faq.id)}
                                            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default ManageFAQ;
