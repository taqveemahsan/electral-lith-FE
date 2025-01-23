import React, { useState, useEffect } from "react";
import { ReportCard } from "./ReportCard";

export function FAQsSection() {
    const [faqs, setFaqs] = useState([]); // State to store fetched FAQ data
    const [loading, setLoading] = useState(true); // State to track loading state
    const [error, setError] = useState(null); // State to handle errors

    useEffect(() => {
        // Fetch FAQ data from API
        const fetchFaqs = async () => {
            try {
                const response = await fetch("http://localhost:4001/api/auth/faq");
                const data = await response.json();

                if (data.success) {
                    setFaqs(data.data); // Update state with fetched data
                } else {
                    setError("Failed to fetch FAQs.");
                }
            } catch (err) {
                setError("Error fetching FAQs.");
            } finally {
                setLoading(false); // Set loading to false once the fetch is complete
            }
        };

        fetchFaqs();
    }, []); // Empty dependency array to fetch data only once on component mount

    if (loading) {
        return <p>Loading FAQs...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <section className="container mx-auto px-4 mt-16 p-6">
            <h2 className="text-2xl font-semibold mb-6">FAQs</h2>
            <div className="space-y-4">
                {faqs.map((faq) => (
                    <ReportCard
                        key={faq.id} // Using `id` for a unique key
                        title={faq.question}
                        description={faq.answer}
                        showDownload={false} // Pass showDownload as false for FAQs
                    />
                ))}
            </div>
        </section>
    );
}

export default FAQsSection;
