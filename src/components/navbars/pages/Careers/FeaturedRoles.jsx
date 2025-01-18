import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import img from "../../../../assets/CareerRolesImg.png"; // Default icon image

const FeaturedRoles = () => {
  const [jobs, setJobs] = useState([]); // State to hold job data
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch data from the API
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:4001/api/auth/jobs/list?page=1&limit=5");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        if (result.success) {
          setJobs(result.data); // Extract 'data' array from response
        } else {
          throw new Error("Failed to fetch jobs");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-600 py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 py-10">Error: {error}</div>;
  }

  return (
    <section className="container mx-auto px-4 mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Roles</h2>
      <div className="space-y-6">
        {" "}
        {/* Stacked layout for one card per row */}
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            id={job.id}
            title={job.title}
            location={job.location}
            department={job.category}
            description={job.description || "No description available"}
            type={job.type || "Full-Time"}
            icon={img}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedRoles;
