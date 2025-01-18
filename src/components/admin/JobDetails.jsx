import React, { useEffect, useState } from "react";
import axios from "axios";

const JobDetails = () => {
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const jobId = window.location.pathname.split("/").pop(); // Assuming jobId is at the end of the URL

    useEffect(() => {
        const fetchJobDetails = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`http://localhost:4001/api/auth/jobs/${jobId}`);
                if (response.data.success) {
                    setJob(response.data.data);
                } else {
                    console.error("Failed to fetch job details.");
                }
            } catch (error) {
                console.error("Error fetching job details:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchJobDetails();
    }, [jobId]);

    if (loading) {
        return <p className="text-center text-xl font-semibold">Loading job details...</p>;
    }

    if (!job) {
        return <p className="text-center text-xl font-semibold">Job not found.</p>;
    }

    return (
        <div className="max-w-3xl mx-auto mt-8 p-6 bg-white shadow-xl rounded-lg">
            <h2 className="text-3xl font-bold text-indigo-600 mb-4">Job Title: {job.title}</h2>
            <div className="border-b-2 border-gray-200 mb-6 pb-4">
                <p className="text-xl text-gray-700 font-medium">
                    <strong>Description:</strong>
                </p>
                <p className="text-gray-600 text-lg">{job.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg shadow-sm">
                    <span className="font-medium text-gray-700 text-xl w-36">Location:</span>
                    <span className="text-gray-600 text-lg">{job.location}</span>
                </div>

                <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg shadow-sm">
                    <span className="font-medium text-gray-700 text-xl w-36">Type:</span>
                    <span className="text-gray-600 text-lg">{job.type}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg shadow-sm">
                    <span className="font-medium text-gray-700 text-xl w-36">Category:</span>
                    <span className="text-gray-600 text-lg">{job.category}</span>
                </div>

                <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg shadow-sm">
                    <span className="font-medium text-gray-700 text-xl w-36">Posted By:</span>
                    <span className="text-gray-600 text-lg">{job.postedBy}</span>
                </div>
            </div>

            <div className="mt-8 text-center">
                <a
                    href="/careers"
                    className="bg-indigo-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-600 transition duration-300"
                >
                    Back to Careers Page
                </a>
            </div>
        </div>
    );
};

export default JobDetails;
