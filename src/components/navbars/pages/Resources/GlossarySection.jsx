import React, { useState, useEffect } from "react";
import axios from "axios";
import { ReportCard } from "./ReportCard";

export function GlossarySection() {
    // State to store glossary terms
    const [glossaryTerms, setGlossaryTerms] = useState([]);
    const [loading, setLoading] = useState(true); // For loading state
    const [error, setError] = useState(null); // For error handling

    // Fetch glossary terms from the API
    useEffect(() => {
        const fetchGlossary = async () => {
            try {
                const response = await axios.get("http://localhost:4001/api/auth/glossary");
                setGlossaryTerms(response.data.data); // Assuming the data structure is { data: [...] }
            } catch (err) {
                setError("Failed to load glossary terms."); // Handle error
                console.error("Error fetching glossary:", err);
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchGlossary();
    }, []); // Empty dependency array ensures this runs once when the component mounts

    // Show loading or error messages while fetching
    if (loading) {
        return <div>Loading glossary terms...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    // Render glossary terms
    return (
        <section className="container mx-auto px-4 mt-16 p-6">
            <h2 className="text-2xl font-semibold mb-6">Glossary</h2>
            <div className="space-y-4">
                {glossaryTerms.map((term) => (
                    <ReportCard
                        key={term.term}
                        title={term.term}
                        description={term.definition}
                        showDownload={false} // Pass showDownload as false for Glossary
                    />
                ))}
            </div>
        </section>
    );
}

export default GlossarySection;
