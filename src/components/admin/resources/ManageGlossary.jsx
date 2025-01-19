import React, { useState, useEffect } from "react";
import axios from "axios";

const ManageGlossary = () => {
    // States
    const [glossary, setGlossary] = useState([]); // List of glossary terms
    const [currentTerm, setCurrentTerm] = useState(null); // For editing a term
    const [form, setForm] = useState({ term: "", definition: "" }); // Form data
    const [isEditing, setIsEditing] = useState(false); // Edit mode

    // Fetch glossary terms from the API on component mount
    useEffect(() => {
        axios
            .get("http://localhost:4001/api/auth/glossary")
            .then((response) => {
                if (response.data && Array.isArray(response.data.data)) {
                    setGlossary(response.data.data); // Ensure the response contains an array in the 'data' field
                } else {
                    console.error(
                        "Error: Expected an array inside 'data', but received",
                        response.data
                    );
                }
            })
            .catch((error) => {
                console.error("There was an error fetching the glossary terms!", error);
            });
    }, []);

    // Handlers
    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleAddTerm = () => {
        if (form.term.trim() && form.definition.trim()) {
            axios
                .post("http://localhost:4001/api/auth/glossary", {
                    term: form.term,
                    definition: form.definition,
                })
                .then((response) => {
                    if (response.data && response.data.data && response.data.data.term) {
                        setGlossary([...glossary, response.data.data]);
                        setForm({ term: "", definition: "" });
                    } else {
                        console.error("Error: Invalid data structure", response.data);
                    }
                })
                .catch((error) => {
                    console.error("There was an error adding the glossary term!", error);
                });
        }
    };

    const handleEditTerm = (term) => {
        setIsEditing(true);
        setCurrentTerm(term);
        setForm({ term: term.term, definition: term.definition });
    };

    const handleUpdateTerm = () => {
        axios
            .put(`http://localhost:4001/api/auth/glossary/${currentTerm.id}`, {
                term: form.term,
                definition: form.definition,
            })
            .then(() => {
                setGlossary((prev) =>
                    prev.map((t) =>
                        t.id === currentTerm.id
                            ? { ...t, term: form.term, definition: form.definition }
                            : t
                    )
                );
                setIsEditing(false);
                setForm({ term: "", definition: "" });
                setCurrentTerm(null);
            })
            .catch((error) => {
                console.error("There was an error updating the glossary term!", error);
            });
    };

    const handleDeleteTerm = (id) => {
        axios
            .delete(`http://localhost:4001/api/auth/glossary/${id}`)
            .then(() => {
                setGlossary((prev) => prev.filter((term) => term.id !== id));
            })
            .catch((error) => {
                console.error("There was an error deleting the glossary term!", error);
            });
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold text-gray-700 mb-4">Manage Glossary</h1>

            {/* Form */}
            <div className="bg-white p-4 shadow-md rounded mb-6">
                <h2 className="text-xl font-semibold mb-3">
                    {isEditing ? "Edit Glossary Term" : "Add New Glossary Term"}
                </h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-600 font-medium">Term</label>
                        <input
                            type="text"
                            name="term"
                            value={form.term}
                            onChange={handleInputChange}
                            className="w-full border rounded p-2"
                            placeholder="Enter term"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 font-medium">Definition</label>
                        <textarea
                            name="definition"
                            value={form.definition}
                            onChange={handleInputChange}
                            className="w-full border rounded p-2"
                            placeholder="Enter definition"
                        />
                    </div>
                    <button
                        onClick={isEditing ? handleUpdateTerm : handleAddTerm}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                    >
                        {isEditing ? "Update Term" : "Add Term"}
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white p-4 shadow-md rounded">
                <h2 className="text-xl font-semibold mb-3">Glossary Terms</h2>
                {glossary.length === 0 ? (
                    <p className="text-gray-500">No glossary terms available. Add some!</p>
                ) : (
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2 text-left">Term</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">
                                    Definition
                                </th>
                                <th className="border border-gray-300 px-4 py-2 text-center">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {glossary.map((term) => (
                                <tr key={term.id}>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {term.term}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {term.definition}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        <button
                                            onClick={() => handleEditTerm(term)}
                                            className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition mr-2"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDeleteTerm(term.id)}
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

export default ManageGlossary;
