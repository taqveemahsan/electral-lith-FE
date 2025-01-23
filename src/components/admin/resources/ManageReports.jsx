import React, { useState, useEffect } from "react";
import axios from "axios";

const ManageReports = () => {
    const [form, setForm] = useState({
        title: "",
        description: "",
        file: null,
    });
    const [reports, setReports] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentReport, setCurrentReport] = useState(null);

    // Fetch all reports when component mounts
    useEffect(() => {
        const fetchReports = async () => {
            try {
                const response = await axios.get("http://localhost:4001/api/reports");
                if (response.data.success) {
                    setReports(response.data.data); // Extract the reports from `data`
                } else {
                    console.error("Failed to fetch reports.");
                }
            } catch (error) {
                console.error("Error fetching reports:", error);
            }
        };
        fetchReports();
    }, []);

    // Handle form changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: name === "file" ? e.target.files[0] : value,
        }));
    };

    // Handle adding a new report
    const handleAddReport = async () => {
        if (!form.title.trim() || !form.description.trim()) {
            alert("Title and Description are required!");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("title", form.title);
            formData.append("description", form.description);
            if (form.file) formData.append("reportsFile", form.file, form.file.name);

            const response = await axios.post("http://localhost:4001/api/report", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            if (response.status === 200) {
                alert("Report added successfully!");
                setReports((prev) => [...prev, response.data]);
                setForm({ title: "", description: "", file: null });
            }
        } catch (error) {
            console.error("Error adding the report:", error);
            alert("Failed to add the report. Please try again.");
        }
    };

    // Handle editing a report
    const handleEditReport = (report) => {
        setIsEditing(true);
        setCurrentReport(report);
        setForm({
            title: report.title,
            description: report.description,
            file: null,
        });
    };

    // Handle updating a report
    const handleUpdateReport = async () => {
        if (!form.title.trim() || !form.description.trim()) {
            alert("Title and Description are required!");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("title", form.title);
            formData.append("description", form.description);
            if (form.file) formData.append("reportsFile", form.file);

            const response = await axios.put(
                `http://localhost:4001/api/report/${currentReport.id}`,
                formData,
                { headers: { "Content-Type": "multipart/form-data" } }
            );

            if (response.status === 200) {
                alert("Report updated successfully!");
                setReports((prev) =>
                    prev.map((r) =>
                        r.id === currentReport.id
                            ? { ...r, title: form.title, description: form.description }
                            : r
                    )
                );
                setIsEditing(false);
                setForm({ title: "", description: "", file: null });
                setCurrentReport(null);
            }
        } catch (error) {
            console.error("Error updating the report:", error);
            alert("Failed to update the report. Please try again.");
        }
    };

    // Handle deleting a report
    const handleDeleteReport = async (id) => {
        try {
            await axios.delete(`http://localhost:4001/api/report/${id}`);
            setReports((prev) => prev.filter((report) => report.id !== id));
        } catch (error) {
            console.error("Error deleting the report:", error);
        }
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold text-gray-700 mb-4">Manage Reports</h1>

            {/* Form */}
            <div className="bg-white p-4 shadow-md rounded mb-6">
                <h2 className="text-xl font-semibold mb-3">
                    {isEditing ? "Edit Report" : "Add New Report"}
                </h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-600 font-medium">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            className="w-full border rounded p-2"
                            placeholder="Enter title"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 font-medium">Description</label>
                        <textarea
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            className="w-full border rounded p-2"
                            placeholder="Enter description"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 font-medium">File</label>
                        <input
                            type="file"
                            name="file"
                            onChange={handleChange}
                            className="w-full border rounded p-2"
                        />
                    </div>
                    <button
                        onClick={isEditing ? handleUpdateReport : handleAddReport}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                    >
                        {isEditing ? "Update Report" : "Add Report"}
                    </button>
                </div>
            </div>

            {/* Reports Table */}
            <div className="bg-white p-4 shadow-md rounded">
                <h2 className="text-xl font-semibold mb-3">Reports</h2>
                {reports.length === 0 ? (
                    <p className="text-gray-500">No reports available. Add some!</p>
                ) : (
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2 text-left">
                                    Title
                                </th>
                                <th className="border border-gray-300 px-4 py-2 text-left">
                                    Description
                                </th>
                                <th className="border border-gray-300 px-4 py-2 text-left">File</th>
                                <th className="border border-gray-300 px-4 py-2 text-center">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {reports.map((report) => (
                                <tr key={report.id}>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {report.title}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {report.description}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {report.downloadLink ? (
                                            <a
                                                href={`http://localhost:4001${report.downloadLink}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 underline"
                                            >
                                                Download
                                            </a>
                                        ) : (
                                            "No file"
                                        )}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        <button
                                            onClick={() => handleEditReport(report)}
                                            className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition mr-2"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDeleteReport(report.id)}
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

export default ManageReports;
