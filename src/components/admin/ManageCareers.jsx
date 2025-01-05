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

  useEffect(() => {
    // Fetch careers data from the API
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:4001/api/auth/jobs");
        if (response.data.success) {
          setJobs(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching careers data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob((prevState) => ({ ...prevState, [name]: value }));
  };

  const addJob = async () => {
    try {
      const response = await axios.post("http://localhost:4001/api/auth/jobs/add", newJob, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data.success) {
        alert("Job added successfully!");
        const newJobData = response.data.job;

        // Fetch the job again using its ID and add it to the list
        const updatedJobs = [...jobs, newJobData]; // Add the new job to the existing list
        updatedJobs.sort((a, b) => a.id.localeCompare(b.id)); // Sort the jobs by their ID

        setJobs(updatedJobs); // Update the state to re-render the component with sorted jobs

        // Reset the form fields after successful submission
        setNewJob({
          title: "",
          description: "",
          location: "",
          type: "",
          category: "",
          postedBy: "Admin",
        });
      } else {
        alert("Failed to add job.");
      }
    } catch (error) {
      console.error("Error adding job:", error);
      alert("Error adding job.");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Careers</h2>

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
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Job
        </button>
      </div>

      {/* Jobs Table */}
      {loading ? (
        <p>Loading careers...</p>
      ) : jobs.length ? (
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Location</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id}>
                <td className="border px-4 py-2">{job?.title || "No Title Available"}</td>
                <td className="border px-4 py-2">{job?.location || "No Location Available"}</td>
                <td className="border px-4 py-2">{job?.type || "No Type Available"}</td>
                <td className="border px-4 py-2">{job?.category || "No Category Available"}</td>
                <td className="border px-4 py-2">{/* Add actions like edit, delete here */}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No jobs available.</p>
      )}
    </div>
  );
};

export default ManageCareers;
