import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageCareers = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newJob, setNewJob] = useState({
        title: "",
        description: "",
        location: "",
        type: "",
        category: "",
        postedBy: "Admin",
    });
    const [selectedJob, setSelectedJob] = useState(null); // To store the selected job details
    const [viewJobDetails, setViewJobDetails] = useState(false); // Toggle state for viewing job details

    const fetchJobs = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                "http://localhost:4001/api/auth/jobs/list?page=1&limit=5"
            );
            if (response.data.success) {
                setJobs(response.data.data);
            } else {
                console.error("Failed to fetch jobs.");
            }
        } catch (error) {
            console.error("Error fetching jobs:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewJob((prevState) => ({ ...prevState, [name]: value }));
    };

    const addJob = async () => {
        try {
            const response = await axios.post("http://localhost:4001/api/auth/jobs/add", newJob, {
                headers: { "Content-Type": "application/json" },
            });

            if (response.data.success) {
                alert("Job added successfully!");
                setNewJob({
                    title: "",
                    description: "",
                    location: "",
                    type: "",
                    category: "",
                    postedBy: "Admin",
                });
                fetchJobs();
            } else {
                alert("Failed to add job.");
            }
        } catch (error) {
            console.error("Error adding job:", error);
            alert("Error adding job.");
        }
    };

    const viewJobDetailsHandler = (jobId) => {
        // Find the job by ID and set it as the selected job
        const job = jobs.find((job) => job.id === jobId);
        setSelectedJob(job);
        setViewJobDetails(true); // Show job details view
    };

    const backToJobListHandler = () => {
        setSelectedJob(null);
        setViewJobDetails(false); // Go back to job list view
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4 text-indigo-600">Manage Careers</h2>

            {/* Add New Job Form */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Add New Job</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <input
                        type="text"
                        name="title"
                        placeholder="Job Title"
                        value={newJob.title}
                        onChange={handleInputChange}
                        className="border p-2 rounded w-full"
                    />
                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={newJob.location}
                        onChange={handleInputChange}
                        className="border p-2 rounded w-full"
                    />
                    <input
                        type="text"
                        name="type"
                        placeholder="Type (e.g., Full-time)"
                        value={newJob.type}
                        onChange={handleInputChange}
                        className="border p-2 rounded w-full"
                    />
                    <input
                        type="text"
                        name="category"
                        placeholder="Category (e.g., IT)"
                        value={newJob.category}
                        onChange={handleInputChange}
                        className="border p-2 rounded w-full"
                    />
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={newJob.description}
                        onChange={handleInputChange}
                        className="border p-2 rounded w-full"
                    ></textarea>
                </div>
                <button
                    onClick={addJob}
                    className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
                >
                    Add Job
                </button>
            </div>

            {/* Jobs Table */}
            {loading ? (
                <p>Loading careers...</p>
            ) : jobs.length && !viewJobDetails ? (
                <table className="min-w-full bg-white border rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-indigo-500 text-white">
                            <th className="px-4 py-2">Title</th>
                            <th className="px-4 py-2">Location</th>
                            <th className="px-4 py-2">Type</th>
                            <th className="px-4 py-2">Category</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job) => (
                            <tr key={job.id} className="hover:bg-indigo-100">
                                <td className="border px-4 py-2">
                                    {job.title || "No Title Available"}
                                </td>
                                <td className="border px-4 py-2">
                                    {job.location || "No Location Available"}
                                </td>
                                <td className="border px-4 py-2">
                                    {job.type || "No Type Available"}
                                </td>
                                <td className="border px-4 py-2">
                                    {job.category || "No Category Available"}
                                </td>
                                <td className="border px-4 py-2 flex justify-center items-center">
                                    <button
                                        onClick={() => viewJobDetailsHandler(job.id)}
                                        className="bg-indigo-500 text-white px-8 py-1 rounded hover:bg-indigo-600"
                                    >
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No jobs available.</p>
            )}

            {/* Show Selected Job Details */}
            {viewJobDetails && selectedJob && (
                <div className="mt-6 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
                    <h3 className="text-3xl font-extrabold text-indigo-600 mb-4 border-b-2 border-indigo-300 pb-2">
                        Job Title: {selectedJob.title}
                    </h3>
                    <p className="text-lg text-gray-500 mb-4">
                        Below are the details of the job you have selected. You can view the job
                        description, location, type, and category.
                    </p>

                    {/* Job Details Fields */}
                    <div className="space-y-6">
                        {/* Location */}
                        <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg shadow-sm border-l-4 border-indigo-500">
                            <span className="font-medium text-gray-700 text-xl w-32">
                                Location:
                            </span>
                            <span className="text-gray-600 text-lg">{selectedJob.location}</span>
                        </div>

                        {/* Type */}
                        <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg shadow-sm border-l-4 border-indigo-500">
                            <span className="font-medium text-gray-700 text-xl w-32">Type:</span>
                            <span className="text-gray-600 text-lg">{selectedJob.type}</span>
                        </div>

                        {/* Category */}
                        <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg shadow-sm border-l-4 border-indigo-500">
                            <span className="font-medium text-gray-700 text-xl w-32">
                                Category:
                            </span>
                            <span className="text-gray-600 text-lg">{selectedJob.category}</span>
                        </div>

                        {/* Description */}
                        <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg shadow-sm border-l-4 border-indigo-500">
                            <span className="font-medium text-gray-700 text-xl w-32">
                                Description:
                            </span>
                            <p className="text-gray-600 text-lg leading-relaxed mt-2">
                                {selectedJob.description}
                            </p>
                        </div>
                    </div>

                    {/* Back to Job List Button */}
                    <button
                        onClick={backToJobListHandler}
                        className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
                    >
                        Back to Job List
                    </button>
                </div>
            )}
        </div>
    );
};

export default ManageCareers;
