import React, { useEffect, useState } from "react";
import { ReportCard } from "./ReportCard";

function ReportsSection() {
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch data from API
    useEffect(() => {
        const fetchReports = async () => {
            try {
                const response = await fetch("http://localhost:4001/api/reports");
                const result = await response.json();

                if (result.success) {
                    setReports(result.data); // Store the fetched reports in state
                }
            } catch (error) {
                console.error("Error fetching reports:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchReports();
    }, []); // Empty dependency array means this effect runs only once after the component mounts

    if (loading) {
        return (
            <section className="container mx-auto px-4 mt-16 p-6">
                <h2 className="text-2xl font-semibold mb-6">Reports</h2>
                <div>Loading...</div> {/* Simple loading state */}
            </section>
        );
    }

    return (
        <section className="container mx-auto px-4 mt-16 p-6">
            <h2 className="text-2xl font-semibold mb-6">Reports</h2>
            <div className="space-y-6">
                {reports.map((report) => (
                    <ReportCard
                        key={report.id} // Use unique 'id' from API as the key
                        title={report.title}
                        description={report.description}
                        showDownload={report.downloadLink !== null} // Only show download if link exists
                        downloadLink={report.downloadLink} // Pass downloadLink to ReportCard
                    />
                ))}
            </div>
        </section>
    );
}

export default ReportsSection;
